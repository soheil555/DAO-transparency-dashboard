import { PrismaClient } from "@prisma/client";
import puppeteer, { ElementHandle } from "puppeteer";
import { resolve, dirname } from "path";
import { existsSync, writeFileSync, readFileSync } from "fs";

const prisma = new PrismaClient();

interface Address {
  address: string;
  link_url: string;
  type: string;
  description: string;
}

interface DAO {
  name: string;
  description: string;
  logo_url: string;
  addresses: Address[];
}

async function updateData(data: DAO[], dataPath: string) {
  const chromePath = resolve(dirname(__dirname), process.env.CHROME_PATH!);

  const daosSelector =
    "#root > div > div.styles_pageContentWrapper__2pwwa.styles_backgroundGhostWhite__MsqSU > div > div.styles_mainContentWrapper__1YosL > div.styles_tableContent__2ZXDt > div > div > div";

  const companyDescriptionSelector =
    "#root > div > div.styles_pageContentWrapper__2pwwa.styles_backgroundGhostWhite__MsqSU > div > div.styles_headerWrapper__1kRjj > div.styles_container__1UBzX > div.styles_content__3BtHe > div > div.styles_textDescription__3Ud7C";

  const addressesSelector =
    "#root > div > div.styles_pageContentWrapper__2pwwa.styles_backgroundGhostWhite__MsqSU > div > div.styles_wrapper__1n6bI > div > div.styles_daoInfo__86RjX > div.styles_daosCardsContainer__2h5nU > div:nth-child(2) > div > div > div";

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    timeout: 0,
    headless: false,
  });

  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(0);

  async function loadMainPage() {
    try {
      console.log("[+]loading main page");
      await page.goto("https://deepdao.io/organizations", {
        waitUntil: "networkidle2",
        timeout: 20000,
      });
      await page.waitForSelector(daosSelector, { timeout: 10000 });
    } catch (err) {
      await loadMainPage();
    }
    console.log("[+]DAOS list found");
  }

  async function clickDAO(dao: ElementHandle<Element>) {
    dao.click();

    let i = 0;
    async function loadDAOPage() {
      console.log("[+]Loading DAO page...");

      i += 1;
      try {
        await page.waitForNavigation({
          waitUntil: "networkidle2",
          timeout: 2000,
        });
        await page.waitForSelector(addressesSelector, { timeout: 10000 });
        return true;
      } catch (err) {
        if (i < 5) {
          await loadDAOPage();
        } else {
          return false;
        }
      }
    }

    const loaded = await loadDAOPage();

    return loaded;
  }

  await loadMainPage();

  const daosLength = (await page.$$(daosSelector)).length;

  for (let i = 1; i < daosLength; i++) {
    const daos = await page.$$(daosSelector);
    const dao = daos[i];

    if (!dao) {
      console.log("[+]DAO not found. Moving to next one...");
      continue;
    }

    const daoName = await dao.$eval("img + span", (el) => el.innerHTML);
    const daoLogoUrl = await dao.$eval("img", (el) => el.getAttribute("src"));

    const daoExists = data.find((d) => d.name === daoName);
    if (daoExists) {
      console.log(`[+]DAO ${daoName} Already exists. Moving to next one...`);
      continue;
    }

    console.log("[+]DAO found. lets dig it deeper");

    const daoLoaded = await clickDAO(dao);

    if (!daoLoaded) {
      console.log("[-]Failed to fetch DAO info. Moving to next one...");
      continue;
    }

    const daoAddresses = await page.$$(addressesSelector);

    const addresses = [];

    for (let i = 1; i < daoAddresses.length; i++) {
      const divs = await daoAddresses[i].$$("div");

      const [addressText, addressSrc] = await divs[0].$eval("a", (el) => [
        el.innerHTML,
        el.getAttribute("href"),
      ]);
      const type = await divs[1].$eval("span", (el) => el.innerHTML);
      const desc = await divs[2].$eval("span", (el) => el.innerHTML);

      console.log("[+]Adding address to DAO");

      const address = {
        address: addressText,
        link_url: addressSrc!,
        type,
        description: desc,
      };

      addresses.push(address);
    }

    const description = await page.$eval(
      companyDescriptionSelector,
      (el) => el.innerHTML
    );

    data.push({
      name: daoName,
      description,
      logo_url: daoLogoUrl!,
      addresses: addresses,
    });

    console.log(`[+]DAO ${daoName} saved. Moving to next one...`);
    if (i % 10 === 0) {
      writeFileSync(dataPath, JSON.stringify(data), { encoding: "utf-8" });
      console.log("[+] data.json file is updated");
    }

    await loadMainPage();
  }

  writeFileSync(dataPath, JSON.stringify(data), { encoding: "utf-8" });
  console.log("[+]All DAOS saved");

  await browser.close();

  return data;
}

async function main() {
  // read data file
  const dataPath = resolve(__dirname, "data.json");

  let data: DAO[] = [];

  if (existsSync(dataPath)) {
    data = JSON.parse(readFileSync(dataPath, "utf-8"));
  }

  data = await updateData(data, dataPath);

  console.log("[+]Writing data to database");

  for (const dao of data) {
    const daoExists = await prisma.dAO.findFirst({ where: { name: dao.name } });

    if (daoExists) {
      console.log(`[+]DAO ${dao.name} already in database`);
      continue;
    }

    const daoCreated = await prisma.dAO.create({
      data: {
        name: dao.name,
        description: dao.description,
        logoUrl: dao.logo_url,
      },
    });

    for (const address of dao.addresses) {
      await prisma.address.create({
        data: {
          address: address.address,
          type: address.type,
          description: address.description,
          linkUrl: address.link_url,
          daoId: daoCreated.id,
        },
      });
    }

    console.log(`[+]DAO ${dao.name} saved to database`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
