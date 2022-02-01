import puppeteer from "puppeteer";

import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __basedir = dirname(dirname(fileURLToPath(import.meta.url)));
const chrome_path = resolve(__basedir, "chrome-linux", "chrome");

async function loadDAOs() {
  const data = [];

  const daosSelector =
    "#root > div > div.styles_pageContentWrapper__2pwwa.styles_backgroundGhostWhite__MsqSU > div > div.styles_mainContentWrapper__1YosL > div.styles_tableContent__2ZXDt > div > div > div";

  const contractSelector =
    "#root > div > div.styles_pageContentWrapper__2pwwa.styles_backgroundGhostWhite__MsqSU > div > div.styles_wrapper__1n6bI > div > div.styles_daoInfo__86RjX > div.styles_daosCardsContainer__2h5nU > div:nth-child(2) > div > div > div:nth-child(2) > div.styles_address__2bAIC > a";

  const companyDescriptionSelector =
    "#root > div > div.styles_pageContentWrapper__2pwwa.styles_backgroundGhostWhite__MsqSU > div > div.styles_headerWrapper__1kRjj > div.styles_container__1UBzX > div.styles_content__3BtHe > div > div.styles_textDescription__3Ud7C";

  const browser = await puppeteer.launch({
    executablePath: chrome_path,
    timeout: 0,
  });
  const page = await browser.newPage();
  await page.goto("https://deepdao.io/organizations", {
    waitUntil: "networkidle2",
    timeout: 0,
  });
  console.log("main page loaded");

  await page.waitForSelector(daosSelector);

  console.log("DAOS list found");

  const daos = await page.$$(daosSelector);

  for (let i = 1; i < daos.length; i++) {
    const daos = await page.$$(daosSelector);
    const dao = daos[i];

    const company = await dao.$eval("img + span", (el) => el.innerText);
    const image = await dao.$eval("img", (el) => el.getAttribute("src"));

    if (!(image && company)) {
      console.log("noooooooooooooooooooooooooooo");
      continue;
    }

    dao.click();
    console.log(`navigation to ${company} page`);
    await page.waitForNavigation({ waitUntil: "networkidle2", timeout: 0 });
    console.log("wait for contract selector");
    await page.waitForSelector(contractSelector);

    const contractAddress = await page.$eval(
      contractSelector,
      (el) => el.innerText
    );

    const description = await page.$eval(
      companyDescriptionSelector,
      (el) => el.innerText
    );

    data.push({
      dao: company,
      description,
      image,
      treasuryAddress: contractAddress,
    });

    console.log(company, image, contractAddress, description);
    await page.goBack({ waitUntil: "networkidle2", timeout: 0 });
    await page.waitForSelector(daosSelector);
  }

  browser.close();
  return data;
}

async function writeData() {
  let data = await loadDAOs();
  data = JSON.stringify(data);
  fs.writeFileSync("data.json", data, "utf-8");
}

await writeData();
