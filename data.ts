export interface DAO {
  dao: string;
  description: string;
  image: string;
  treasuryAddress: string;
}

export const daos: DAO[] = [
  {
    dao: "BitDAO",
    description:
      "Bootstrapped by ByBit DEX and a massive launch auction, BitDAO aims to build, grant and partner towards a cross-ownership network of crypto projects promoting DeFi governance, treasury management and education.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/bitdao.eth.png",
    treasuryAddress: "0x78605df79524164911c144801f41e9811b7db73d",
  },
  {
    dao: "Uniswap",
    description:
      "Uniswap is a Decentralized EXchange that generates automatic markets of liquidity asset pairs. It allows for flash transactions and liquidity allocation by specific price margins.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/uniswap.png",
    treasuryAddress: "0x4750c43867ef5f89869132eccf19b9b6c4286e1a",
  },
  {
    dao: "Lido",
    description:
      "Lido incentivizes staking of ETH for validation of Ethereum 2.0 beacon nodes, without locking the staked tokens while allowing them to farm yield. It runs an ecosystem grants program.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/lido-snapshot.eth.png",
    treasuryAddress: "0x3e40d73eb977dc6a537af587d48316fee66e9c8c",
  },
  {
    dao: "Compound",
    description:
      "Compound is a pioneer lending protocol based on liquidity pools that's governed by its token stakers. Its governance method has been forked by various DeFi protocols.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/compound.png",
    treasuryAddress: "0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b",
  },
  {
    dao: "Radicle",
    description:
      "Radicle is a community-governed coding network that facilitates collaborative coding in a permissionless, creator-owned, interactive environment, with designated development tools.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/radicle.png",
    treasuryAddress: "0x8da8f82d2bbdd896822de723f55d6edf416130ba",
  },
  {
    dao: "Aave",
    description:
      'Aave is a DeFi lending/borrowing protocol controlled by its token holders. It serves various, cross-protocol DeFi products and a community grants program;DAOs "4c4bf6a8", "f25f0531" and "6Ef0c0b0" are related to Aave by token transactions and owners.',
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/aave.png",
    treasuryAddress: "0x25f2226b597e8f9514b3f68f00f494cf4f286491",
  },
  {
    dao: "Ribbon",
    description:
      "Ribbon is a De-Fi protocol built to permissionlessly trade and yield on combinations of derivative tools packaged so as to achieve defined risk-return ratios.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/rbn.eth.png",
    treasuryAddress: "0xdaeada3d210d2f45874724beea03c7d4bbd41674",
  },
  {
    dao: "Synthetix",
    description:
      "The Synthetix protocol serves permissionless transformation of multiple crypto, fiat and commodities derivatives into thus synthetic, single tokens, and the trading of those through its DEX to wider DeFi.\nThe Synthetix organization works t...",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/synthetix.png",
    treasuryAddress: "0x46abfe1c972fca43766d6ad70e1c1df72f4bb4d1",
  },
  {
    dao: "Gnosis",
    description:
      "The Gnosis DAO community leads Gnosis' strategy in building and promoting prediction-market tools and protocols for finance & governance. It is the producer of MUCH used Gnosis Safe.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/gnosis.jpeg",
    treasuryAddress: "0x54396b93c10c685a21c8b5610c15f82a54c9c22e",
  },
  {
    dao: "Maker Dao",
    description:
      "Maker is a pioneer financial DAO based on its $US-pegged Dai stablecoin, which has become a crypto pillar. Backing numerous crypto projects, Maker presents an especially dynamic development graph and vibrant community governance.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/maker-dao.jpeg",
    treasuryAddress: "0xbe8e3e3618f7474f8cb1d074a26affef007e98fb",
  },
  {
    dao: "OlympusDAO",
    description:
      "The Olympus protocol sets up a decentralized reserve token that's collateralled by crypto assets rather than pegged to $US. It relies on diverse, protocol-owned over-collateralization and native compounding incentives.\nCommunity governance ...",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/olympusdao.eth.png",
    treasuryAddress: "0x31f8cc382c9898b273eff4e0b7626a6987c846e8",
  },
  {
    dao: "Fei",
    description:
      "Fei is a stablecoin protocol with inbuilt balancing properties such as minting upon demand, peg incentives, strong protocol control over collaterals, and proactive rebalancing.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/fei.png",
    treasuryAddress: "0xac38ee05c0204a1e119c625d0a560d6731478880",
  },
  {
    dao: "ENS",
    description:
      "The Ethereum Name Service is the provider of unique name.eth blockchain addresses, used as cross-web3 avatar profiles. Its DAO is currently heading full governance by the community of .eth holders.\n- See current",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/ens.eth.png",
    treasuryAddress: "0x283af0b28c62c092c9727f1ee09c02ca627eb7f5",
  },
  {
    dao: "Rarible",
    description:
      "Rarbile is a platform for creators to mint, present and trade their NFT content. Its governance token is distributed as rewards for buying and selling on the platform.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/rarible.png",
    treasuryAddress: "0xfdff6b56cce39482032b27140252ff4f16432785",
  },
  {
    dao: "Aragon Network Budget",
    description:
      "Aragon Network Budget DAO is the main transactions channel for Aragon, based on treasury migration from Aragon Association DAO on 22 July, 2020.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/aragon.png",
    treasuryAddress: "0xfb633f47a84a1450ee0413f2c32dc1772ccaea3e",
  },
  {
    dao: "API3",
    description:
      "API3 produce API information through a decentralized blockchain network of dual API-oracle nodes, with pooled insurance for bad replies. It is governed by data consumers & producers, and interested public. API3 DAOv1 was its 1st governance body, c...",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/api3.jpg",
    treasuryAddress: "0xe7af7c5982e073ac6525a34821fe1b3e8e432099",
  },
  {
    dao: "ShapeShift",
    description:
      "ShapeShitf is a crypto security hardware producer currently en-route becoming a DAO. Its Decentralized EXchange offers peer-to-peer swaps with increased user privacy.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/shapeshiftdao.eth.png",
    treasuryAddress: "0x90a48d5cf7343b08da12e067680b4c6dbfe551be",
  },
  {
    dao: "Decentraland",
    description:
      "A VR metaverse plaftorm DAO-controlled by users, Decentraland offers land plots and tools for users to access, play, create, exhibit, monetize and trade digital content; See also a more thorough",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/snapshot.dcl.eth.png",
    treasuryAddress: "0x9a6ebe7e2a7722f8200d0ffb63a1f6406a0d7dce",
  },
  {
    dao: "Badger DAO",
    description:
      "Badger DAO BUIDLs to connect Bitcoin & DeFi, including a blockchain bridge and yield-earning liquidity pools wokring various DeFi protocols. On 2 Dec. 2021 it was hit with a major hack and is currently laboring to recover, eleavate security and re...",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/badgerdao.jpg",
    treasuryAddress: "0x8de82c4c968663a0284b01069dde6ef231d0ef9b",
  },
  {
    dao: "Kusama",
    description:
      "Kusama is Polkadot's testnet, similarly serving an interconnected network of users' specialized blockchains (parachains). It is set for fast innovation and real-time testing of new Polkadot tools, owned & governed by a community of network partici...",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/kusama/kusama.jpeg",
    treasuryAddress: "kusama_techcom",
  },
  {
    dao: "PleasrDAO",
    description:
      "PleasrDAO's experienced collective collects and funds significant NFT'd art, history and ideation pieces, to highlight and support the value of Culture and free thought. For that, it also experiments with community ownership.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/pleasrdao.eth.png",
    treasuryAddress: "0xf5c27c6fe782cbb5c85989ea3e75754748153459",
  },
  {
    dao: "Perpetual Protocol",
    description:
      "This DAO nurtures the Perpetual(s) market-making Protocol and Decentralized EXchange, offering high leverage and bought into strictly with $USDC.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/vote-perp.eth.png",
    treasuryAddress: "0xd374225abb84dca94e121f0b8a06b93e39ad7a99",
  },
  {
    dao: "KeeperDAO",
    description:
      "KeeperDAO is building a decentralized protocol for Keepers that will help make Ethereum a more secure, egalitarian, and profitable network for all.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/rook.eth.png",
    treasuryAddress: "0x9a67f1940164d0318612b497e8e6038f902a00a4",
  },
  {
    dao: "bZx",
    description:
      "bZx is a decentralized permissionless DeFi protocol for lending & borrowing, shorting and leveraged trading.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/bzx.png",
    treasuryAddress: "0xfedc4dd5247b93feb41e899a09c44cfabec29cbc",
  },
  {
    dao: "DXdao",
    description:
      "A decentralized, Gnosis.io-initialized collective of web builders, DXdao develops DeFi protocols and products focusing on prediction markets and their financial and governance utilizations.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/dxDAO.png",
    treasuryAddress: "0x519b70055af55a007110b4ff99b0ea33071c720a",
  },
  {
    dao: "Gitcoin",
    description:
      "Gitcoin is a significant grants center and community-builder for DAO-era coordination of capital and culture. It serves crypto education, employment market, project acceleration and BUIDLing through nurtured internal leadership and workstreams.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/gitcoin.png",
    treasuryAddress: "0x57a8865cfb1ecef7253c27da6b4bc3daee5be518",
  },
  {
    dao: "NFTX",
    description:
      "NFTX tokenizes NFTs to be used as DeFi collaterals, thus facilitating their discovery, yielding and farming, among other venues through its own NFT marketplace.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/nftx.png",
    treasuryAddress: "0x40d73df4f99bae688ce3c23a01022224fe16c7b2",
  },
  {
    dao: "Sushiswap",
    description:
      "SushiSwap is a Decentralized EXchange that forked Uniswap with decentralized governance and development. It serves investments in varied, cross-blockchain DeFi products.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/sushiswap.jpeg",
    treasuryAddress: "0x19b3eb3af5d93b77a5619b047de0eed7115a19e7",
  },
  {
    dao: "Aavegotchi",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/aavegotchi.jpg",
    treasuryAddress: "0xfb76e9be55758d0042e003c1e46e186360f0627e",
  },
  {
    dao: "Decentral Games",
    description:
      "Governed separately from Decentraland, Decentral.games operates typical gambling highlights on Decentraland platform casinos.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/decentralgames.eth.png",
    treasuryAddress: "0x7a61a0ed364e599ae4748d1ebe74bf236dd27b09",
  },
  {
    dao: "Nouns DAO",
    description:
      "Nouns is fundraising and organizing around NFT avatars which it generates and auctions daily. Avatars serve as voting tokens, while their revenues facilitate outreach and development.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/nouns.eth.png",
    treasuryAddress: "0x0bc3807ec262cb779b38d65b38158acc3bfede10",
  },
  {
    dao: "Fingerprints DAO",
    description:
      "FingerPrints is a diverse web3-centered collective set to strategically curate, collect and promote on-chain artwork so as to become a leading ecosystem nurturer. DAO governance forums are currently Discord-only, barred at 5,000+ $PRINTS ownership.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/fingerprints.eth.png",
    treasuryAddress: "0xbc49de68bcbd164574847a7ced47e7475179c76b",
  },
  {
    dao: "Cryptex",
    description:
      "Cryptex is a crypto token pegged to the total market cap of all crypto tokens and coins as sourced by its oracles. Its user-pooled collaterals farm yield while pegging. Currently in Beta.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/cryptex.jpeg",
    treasuryAddress: "0xa54074b2cc0e96a43048d4a68472f7f046ac0da8",
  },
  {
    dao: "Alchemix",
    description:
      "Alchemix DAO controls the Alchemix protocol, a platform for permissionless creation of synthetic tokens that follow yield-bearing assets. The expected yield is counted as advance for the minted synths.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/alchemixstakers.eth.png",
    treasuryAddress: "0x8392f6669292fa56123f71949b52d883ae57e225",
  },
  {
    dao: "Tracer",
    description:
      "Tracer DAO develops, maintains and upgrades Tracers, which are permissionless, parameter-flexible trading tools for DeFi derivatives.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/tracer.eth.png",
    treasuryAddress: "0xa84918f3280d488eb3369cb713ec53ce386b6cba",
  },
  {
    dao: "PrimeDAO",
    description:
      "Prime DAO BUIDLs for interoperable DeFi ecosystem governed by BUIDLers and DAOs, with designated funding, tools and structures. It aims to provide DAO launching, pools, deals and DAO-to-DAO coordination services.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/primexyz.eth.png",
    treasuryAddress: "0x567d220b0169836cbf351df70a9c517096ec9de7",
  },
  {
    dao: "dHedge",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/dhedge.jpeg",
    treasuryAddress: "0xf8e912d8b4ae7a58ea6fbeb04b16a5f1aa23ae13",
  },
  {
    dao: "yearn.finance",
    description:
      "Yearn aims to maximizes liquidity returns by strategicaly aggregating assets across DeFi. It also incubates development of crypto management tools. Its tokenized governance is mostly delegated to community Teams.;yEarn yDAO is a community driven f...",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/yearn.png",
    treasuryAddress: "0xfeb4acf3df3cdea7399794d0869ef76a6efaff52",
  },
  {
    dao: "Tornado Cash",
    description:
      "Tornado Cash is a decentralized, non-custodial, open-source protocol for permissionless anonymous token transactions. It is managed by its token holders and serves privacy and compliance.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/torn-community.eth.png",
    treasuryAddress: "0x5efda50f22d34f262c29268506c5fa42cb56a1ce",
  },
  {
    dao: "Index",
    description:
      "Index Coop offers fully collateralized indices of wide DeFi exposure to web3 assets and industries. Its governing DAO operates in working groups, rewards contributors, and applies collective meta-governance in held tokens' DAOs.\nSee",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/index-coop.eth.png",
    treasuryAddress: "0xfafd604d1cc8b6b3b6cc859cf80fd902972371c1",
  },
  {
    dao: "pNetwork",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/ptokens.jpg",
    treasuryAddress: "0xdd92eb1478d3189707ab7f4a5ace3a615cdd0476",
  },
  {
    dao: "BarnBridge",
    description:
      "The BarnBridge algorithm sets to modify specific cross-DeFi-associated risks by automatically generating derivative markets around them, as hedges.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/barnbridgelaunch.jpg",
    treasuryAddress: "0x5040a19e59fecc9bdf62cea2f71a4604408c67bf",
  },
  {
    dao: "The LAO",
    description:
      "The LAO is a private venture fund focusing on DeFi & NFTs and enhancement. A registered Delware LLC DAO, it also plays a lead role in mobilizing legally authorized DAOs and their legal engineering.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/TheLAO.jpg",
    treasuryAddress: "0x8f56682a50becb1df2fb8136954f2062871bc7fc",
  },
  {
    dao: "Inverse",
    description:
      "The Inverse protocol makes a lending-borrowing market that leverages its pooled liquidity accross DeFi via a combination of non-synthetic and its own, stabalized, synthetic tokens.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/inverse.jpeg",
    treasuryAddress: "0x926df14a23be491164dcf93f4c468a50ef659d5b",
  },
  {
    dao: "MANTRA DAO",
    description:
      "MantraDAO runs a lending-focused DeFi protocol to leverage the potential of multi-chain infrastructure & tools for chain-versatile assets and collateralled stablecoin to follow. At its current stage, the DAO is under the complete hold of its fo...",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/mantra-dao.png",
    treasuryAddress: "0xca3d2a53de4d4bcf8b28ddd07f8e325839adb9ca",
  },
  {
    dao: "VitaDAO",
    description:
      "Vita DAO is an open cooperative with a scientific council, set to enhance applicative longevity research by acquiring, supporting and financing relevant data and (preferably early-stage) projects. Products are tokenizes as Vita intellectual property.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/vitaDAO.jpeg",
    treasuryAddress: "0xf5307a74d1550739ef81c6488dc5c7a6a53e5ac2",
  },
  {
    dao: "MetaCartel Ventures",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/metacartelventures.jpg",
    treasuryAddress: "0x4570b4faf71e23942b8b9f934b47ccedf7540162",
  },
  {
    dao: "PieDAO",
    description:
      'PieDAO offers specific synthetic liquidity pools ("Pies") which expose liquidity providers to a wide range of DeFi products and protocols, aspiring simplified UX for complex deals as such.',
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/PieDAO.jpg",
    treasuryAddress: "0x4efd8cead66bb0fa64c8d53ebe65f31663199c6d",
  },
  {
    dao: "ForeFront",
    description:
      "Forefront is a token-permissioned DAO serving media, financial data and insights of community social tokens, NFTs and DAOs. It is governed by members, and led by FF guild leaders and staff members.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/ffdao.eth.png",
    treasuryAddress: "0x2fb9f0ef424b24a8d293999298f392a33fe6a8b5",
  },
  {
    dao: "PoolTogether",
    description:
      "Pooltogether is a nonprofit set to encourage saving over gambling. Its users enjoy stablecoin no-loss lotteries with prizes = 100% of their pool yields, liquidity staking rewards, and protocol ownership.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/pool_toogether.jpeg",
    treasuryAddress: "0x21950e281bde1714ffd1062ed17c56d4d8de2359",
  },
  {
    dao: "Unslashed",
    description:
      "Unslashed supplies insurance covers for typical crypto risks such as wallet exploits, exchange hacks, custody risks and more. It services protocols, DAOs and institutions.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/unslashed.jpeg",
    treasuryAddress: "0xf5be8b4c82b8a681bacf357cfb712ab9e9296cb2",
  },
  {
    dao: "Airalab",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/airalab.jpg",
    treasuryAddress: "0x28a3d3467a3198d1bb5311836036d53c3c64b999",
  },
  {
    dao: "Dtravel",
    description:
      "Dtravel is a decentralized platform for property booking and renting, aimed to token-align a community of hosts and travelers to govern their traveling standards and economic parameters. The Growth funds are allocated toward onboarding incentives ...",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/dtraveldao.eth.png",
    treasuryAddress: "0xc41dd7d65444cdcd80d7e2fbd9d20c4b191cf988",
  },
  {
    dao: "Idle Finance",
    description:
      "The Idle protocol lends users' liquidity pools to DeFi markets according to user-selected strategies. Assets are automatically aggregated and rebalanced for best interest yields.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/idle-finance.png",
    treasuryAddress: "0xb0aa1f98523ec15932dd5faac5d86e57115571c7",
  },
  {
    dao: "Bankless DAO",
    description:
      "Bankless is a token-gated community set to enhance awareness to bankless money systems and their adoption, through media, education, grants and onboarding development.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/banklessvault.eth.png",
    treasuryAddress: "0xf26d1bb347a59f6c283c53156519cc1b1abaca51",
  },
  {
    dao: "SquiggleDAO",
    description:
      'Squiggle DAO is founder of the Art Blocks project of generative web3 art and the creator-curator of "Chromie Squiggles" generative design. It aims to fund & launch promising generative artists whose designs it then randomly iterates on-demand t...',
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/squiggledao.eth.png",
    treasuryAddress: "0x56fcb471a9dde74045830439ad6612c9aad53c19",
  },
  {
    dao: "CityDAO",
    description:
      "CityDAO is a legally registered tokenized collective exploring NFT realestate ownership by buying & minting real-world Wyoming land parcels as NFTs, using and managing them to foster public good.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/daocity.eth.png",
    treasuryAddress: "0x60e7343205c9c88788a22c40030d35f9370d302d",
  },
  {
    dao: "Varen",
    description:
      "Varen - formerly YF LINK - is a DeFi swap DEX integrated with Ren bridges so as to bring assets from multiple blockchains onto Ethereum protocol trade.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/varen.eth.png",
    treasuryAddress: "0xe69a81b96fbf5cb6cae95d2ce5323eff2ba0eae4",
  },
  {
    dao: "APE DAO",
    description:
      "APE DAO started with the fractionalization (token partition) of 50 valuable NFTs into APED erc-20 tokens, which serve holders governance over their NFTs. General governance is currently token-barred, moving towards community rule.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/togetherstrong.eth.png",
    treasuryAddress: "0xa7ab7a265f274fa664187698932d3cabb851023d",
  },
  {
    dao: "Aragon Trust",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/aragon.png",
    treasuryAddress: "0x768536f03b64e6903c452514596886305e752589",
  },
  {
    dao: "Yam Finance",
    description:
      "Yam is a stablecoin project turned into DeFi hub following a critical bug migration. It features a DAO treasury management product, an insurance pool for crypto security, synthetic assets creation, and a museum for fine NFT arts.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/yam.eth.png",
    treasuryAddress: "0x97990b693835da58a281636296d2bf02787dea17",
  },
  {
    dao: "BProtocol",
    description:
      "BProtocol offers liquidity backstops for DeFi protocols - incentivized pool-collateralization of specific undercollateralled loans, which allows more leverage for protocols' general pools.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/bprotocol.png",
    treasuryAddress: "0xcc09c04a9e3930343290184544f97669eff18a8d",
  },
  {
    dao: "Aragon Network",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/aragon.png",
    treasuryAddress: "0x5e8c17a6065c35b172b10e80493d2266e2947df4",
  },
  {
    dao: "Jenny Metaverse DAO",
    description:
      "The Jenny (also: Jenny Metaverse) DAO is a community dedicated to curate a top-scale digital art collection, with full members governance from acquisition to selling. It is built on the Unicly platform for tokenizing and trading NFT collections. ...",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/jennydao.eth.png",
    treasuryAddress: "0x0ef024d299cb56805f2437cd00b8a361a7b06d54",
  },
  {
    dao: "necDAO",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/necDAO.jpg",
    treasuryAddress: "0xe56b4d8d42b1c9ea7dda8a6950e3699755943de7",
  },
  {
    dao: "Stacker Ventures",
    description:
      "Stacker Ventures tokenizes permissionless, crypto seed-stage investment pools, so as to allign investors and investees' interests and to strategically farm cross-DeFi yield.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/stackerVentures.jpeg",
    treasuryAddress: "0xb156d2d9cadb12a252a9015078fc5cb7e92e656e",
  },
  {
    dao: "0x117d1F8CB4Bf6e74Bc5D667f15af7b810baCCCD6",
    description: "DeepDAO research coming soon",
    image: "/static/media/default_organization_placeholder.deb3bbce.svg",
    treasuryAddress: "0x3a1f860046249646e508c417a840755571bc4680",
  },
  {
    dao: "Stakewice",
    description:
      "StakeWise runs Ethereum-only liquidity pools that initiate Ethereum 2.0 Proof-of-Stake validator nodes. Stakers are offered yields and opportunities to farm those yields accross DeFi.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/stackwise.png",
    treasuryAddress: "0x144a98cb1cdbb23610501fe6108858d9b7d24934",
  },
  {
    dao: "UberHAUS",
    description:
      "UberHAUS is a meta-DAO governed by active moloch-governance DAOs. It runs the prime moloch DAO factory and BUIDLs towards a vision of a profoundly coordinated DAOs ecosystem;Buyback CC1 served token buy back during the UberHAUS DAO migration.;DAOH...",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/daohaus.png",
    treasuryAddress: "0x4bec8e49aa44bb520bd5e29d6358e22464b5eb68",
  },
  {
    dao: "Balancer",
    description:
      "Balancer is a DEX that allows users to AMM-produce their own liquidity pools, which are constantly-rebalancing portfolios of various DeFi assets.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/balancer.png",
    treasuryAddress: "0xb618f903ad1d00d6f7b92f5b0954dcdc056fc533",
  },
  {
    dao: "Shark DAO",
    description:
      "Shark DAO was established to purchase Nouns NFTs, and use accumulated assets to co-govern in Nouns DAO and take part in the development of the its ecosystem. Its treasury is currently controlled by a multisig and via a Juicebox account.\nSha...",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/sharkdao.eth.png",
    treasuryAddress: "0xae7f458667f1b30746354abc3157907d9f6fd15e",
  },
  {
    dao: "Odyssy",
    description:
      "Odyssey is a DAO within the OlympusDAO ecosystem that is set to ideate, strategize and narrate Olympus memes and NFTs as culture and as DeFi assets.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/odyssey.png",
    treasuryAddress: "0xdcaaf0efd2e70e8103566e705c86b038ed8ff88e",
  },
  {
    dao: "Governor DAO",
    description:
      "Governor DAO offers DAO governance bootstrapping tools and tutoring, and a biometric Proof-of-Humanity membership registration to facilitate 1person-1vote systems.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/governordao.jpg",
    treasuryAddress: "0x5ab8e3a7bc8be9efdd0943ab65221bdf240518c3",
  },
  {
    dao: "dOrg",
    description:
      "dOrg is a full-stack Web3 development collective, rewarding for reputation and product use.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/dorg.jpg",
    treasuryAddress: "0x15344ecdc2c4edfcb092e284d93c20f0529fd8a6",
  },
  {
    dao: "Own.fund DAO",
    description:
      "Own.fund is a collectively-managed investment vehicle aiming to facilitate community-token DAOs. Set to become an incubator & main resource for Web3 BUIDLerss, its KYC membership includes prominent investment, DeFi, gaming and other ecosystem play...",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/ownfund.eth.png",
    treasuryAddress: "0xaf28bcb48c40dbc86f52d459a6562f658fc94b1e",
  },
  {
    dao: "JINN",
    description:
      "JINN DAO invests in early-stage projects and promising inidividuals in the NFT space. It is the community DAO for Enjin, which BUIDLs gaming, arts, infrastructure and other NFT products, including a wallet and a marketplace.",
    image: "/static/media/default_organization_placeholder.deb3bbce.svg",
    treasuryAddress: "0xcfa7700f9c15f03e0ae81ebd524e4c2af915d13b",
  },
  {
    dao: "array.finance CCO",
    description:
      "Array was meant to be a modular DeFi portfolio builder and rebalancer. On July 2021, however, it suffered a major ragpool. It resumed slow activity since, including ragequitting its DAOHaus assets on Nov. 2021.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/arrayFinanceCCO.png",
    treasuryAddress: "0xff3f8c0b98454306fb0bda57e5ae38cbfa66cc0d",
  },
  {
    dao: "murziki",
    description: "DeepDAO research coming soon",
    image: "/static/media/default_organization_placeholder.deb3bbce.svg",
    treasuryAddress: "0xca30b69e2f87ccdfe75aecde8988570625c8c3af",
  },
  {
    dao: "Warcamp",
    description:
      "WarCamp is DAO the community of core contributors to DAOhaus.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/warcamp.png",
    treasuryAddress: "0x55eafe832507e652c48b25a957bd3a15420aa805",
  },
  {
    dao: "blequity",
    description:
      "Blequity DAO was founded to fund black creators and initiatives through a treasury that's collectively owned by members and supporters of the black community. Its onchain activity is currently documented for 8 days during June 2020.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/blequity.jpg",
    treasuryAddress: "0xc279017c6055442def329d293e5e66118cd8a2ef",
  },
  {
    dao: "PartyDAO",
    description:
      "PartyDAO is a community hub for web3 product building. It is currently focused on PartyBid - a tool for permissionless collective purchase, fractionalization and co-ownership of NFTs, already integrated with major NFT marketplaces.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/partydao.eth.png",
    treasuryAddress: "0xf7f52dd34bc21eda08c0b804c7c1dbc48375820f",
  },
  {
    dao: "Meta Gamma Delta",
    description:
      "Meta Gamma Delta is a group of crypto creators and community-builders set to empower women and marginalized communities through social support, networking, education and grants. It is part of the Moloch/DAOHaus/MetaGame ecosystem.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/metagammadelta.jpg",
    treasuryAddress: "0x1725dc66a5ca6f36e1d3d5b635bef45de0b753a1",
  },
  {
    dao: "flamingo",
    description:
      "Flamingo is an investment DAO that supports, purchases, archives, collects, and possibly farms selected NFTs. It is controlled by its DAO within the boundaries of its Delaware LLC registration.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/flamingo.png",
    treasuryAddress: "0x43310bd1c8f261ee7b9025662207ed95329aa193",
  },
  {
    dao: "Trojan DAO",
    description:
      "Trojan is an art collective that strategizes, organizes and acts for Web3 alternatives to heavily centralized legacy art patronage.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/trojandao.jpg",
    treasuryAddress: "0x8bd458e3950f8a9cbe67ea55cbc209ead43b46f4",
  },
  {
    dao: "CrisisDAO",
    description: "Let's make the world better-ish.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/crisisdao.eth.png",
    treasuryAddress: "0x2f61cd8f256ef199ce0cd3094bdce77f1b7e91f5",
  },
  {
    dao: "Raid Guild War Chest",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/RaidGuild.jpg",
    treasuryAddress: "0xbeb3e32355a933501c247e2dbde6e6ca2489bf3d",
  },
  {
    dao: "Hakt DAO",
    description:
      "Hakt DAO enhances safer De-Fi for all through security audit grants, bounty matching and stipends for whitehat hackers. It is funded through auctions of its own unique NFTs themed after major crypto hacking events.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/hakt.eth.png",
    treasuryAddress: "0xc1c34785732aaa15282a42a21b1f18ce04092384",
  },
  {
    dao: "BerezkafLexDAO",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/lexdao.jpg",
    treasuryAddress: "0xf8a8d25049ebfaf36cf1dd7ff51ebd0777fc9b32",
  },
  {
    dao: "cadcad",
    description:
      "The cadcad DAO relates to a community curating the cadCAD Python package for complex system design, led by BlockScience. It currently registers1 voter and 1 transfer of funds.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/cadCAD.png",
    treasuryAddress: "0xbcd768c566143714309afe87feb901da7543f470",
  },
  {
    dao: "Curio",
    description:
      "Curio DAO, of Curio Finance, tokenizes ownership over tangible, legally-contracted assets, which are sold as shares to permissionless investors. It currently developes cross-chain DeFi tools to leverage tokenized assets.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/Curio.jpg",
    treasuryAddress: "0x1fa013f243b3999bc668fc176c300c63e100a488",
  },
  {
    dao: "JuiceboxDAO",
    description:
      "Juicebox is a DAO-governed web3-oriented tool for community fundraising and flexible allocation of raised funds.; See governance delibera...",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/jbdao.eth.png",
    treasuryAddress: "0xaf28bcb48c40dbc86f52d459a6562f658fc94b1e",
  },
  {
    dao: "Aragon One",
    description:
      "Aragon One is the Aragon founders' company set and served the development of Aragon-related tools and services, through grants from Aragon Association. The firm is shown to halt its activities upon major re-organization in early 2021.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/AragonOne.jpg",
    treasuryAddress: "0xfacb1f7e9d2d3481467ffa05168882dc41fe7468",
  },
  {
    dao: "Cyber Congress",
    description:
      'The Cyber Congress DAO is about "Computing the Knowledge of the Great Web", aiming to produce a protocol with a consensual, decentralized "knowledge graph" for hashed information storage, verification and retrieval.;The 0x117...D6 DAO is related t...',
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/cyberdevs.png",
    treasuryAddress: "0x34291feae53ad4e155a20de02585eb115ef5d373",
  },
  {
    dao: "FiatLuxDAO",
    description:
      "FiatLux features a group of UC Berkeley alumni who aim to nurture the value of science in culture through web3 tools, particularly NFTs.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/fiatluxdao.png",
    treasuryAddress: "0x468a763d5b3ab6cc9e224ae9e2895e28583c6a3a",
  },
  {
    dao: "XDAO",
    description:
      "xDAO is a DAO launcher protocol serving full DAO utilities for permissionless registration, and BUIDLing flexible integrations for DAO governance methods and tools.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/xdao.jpeg",
    treasuryAddress: "0x9d63d20d1cfbb85cd46602bd096d81211bf44a5a",
  },
  {
    dao: "Defi Omega",
    description:
      "DeFi Omega is a decentralized, fraternity-styled consultancy and investment DAO firm for DeFi, with an incubator for selected projects and explicitly restricted membership.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/defi-omega.jpeg",
    treasuryAddress: "0xe9d7e590171cb5080ab8dfd45850692a714260f0",
  },
  {
    dao: "1HiveLLC",
    description:
      "1Hive is a bottom-up community DAO that BUIDLs on dapps. It serves DAO launching and management while also dev&run its own DeFi products. 1Hive governance principles are set in a biding community covenant.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/1HiveLLC.png",
    treasuryAddress: "0xc02d33ada84a23def12c65780fc61eec97efd28b",
  },
  {
    dao: "MarsDao",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/MarsDao.jpg",
    treasuryAddress: "0x00952466aa572bb2b1d5330c758944049974a4eb",
  },
  {
    dao: "Rocket LP DAO",
    description:
      "Rocket LP DAO methodically pionneered the collateralization of DeFi loans with different types of NFTs. It was then ragelessly regaquit by members.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/rocketdao.jpg",
    treasuryAddress: "0xc8c97c034c7f93c5f4a82c6db855df04402ac92b",
  },
  {
    dao: "TYAN Intergalactic",
    description:
      'TyanDAO was established on July 2021 by a group of ~20 close friends who DAO-organized to make their hometown, Ōtautahi Christchurch (NZ) "A great place to live, work and thrive." The group focuses on art and innovation, working from its TyanHAUS ...',
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/tyan.jpeg",
    treasuryAddress: "0xecfbf206d32c7ca0272028711799a781bfb6710d",
  },
  {
    dao: "Buyback CC1",
    description: "DeepDAO research coming soon",
    image: "/static/media/default_organization_placeholder.deb3bbce.svg",
    treasuryAddress: "0x2004cb1e8fb6d4476acdc9e1d37f717d3a83384d",
  },
  {
    dao: "DAOhaus Second Story CCO",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/daohaus.png",
    treasuryAddress: "0x44f2f58eb410c3099d59db44e8ab9859e886c176",
  },
  {
    dao: "DimensionLab",
    description:
      "DimensionLab is building modeling and simulation software. This is a one-member DAO, the sole activities of which (initial DAI funding (SAI) + minting) were registered on 23/6/2019. Further affinity was not determined.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/dimension-lab.jpeg",
    treasuryAddress: "0x3a24ad251473590566f70880330a872aaa211777",
  },
  {
    dao: "MetaCartel v2",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/metacartelventureschina.png",
    treasuryAddress: "0xee629a192374caf2a72cf1695c485c5c89611ef2",
  },
  {
    dao: "Keytree",
    description:
      "This DAO served shortly during 2019. Data affiliates its members to a StayLocal token issued during the COVID-19 #StayLocal campaign.",
    image: "/static/media/default_organization_placeholder.deb3bbce.svg",
    treasuryAddress: "0x8c458e618e4a43a36b6b34fcae2de77a6577b92a",
  },
  {
    dao: "lexDAO",
    description:
      "Lex DAO researches, developes and promotes the wide use of competutional law applications - integrating blockchain smart contracts and legacy, State Law.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/lexdao.jpg",
    treasuryAddress: "0x97103fda00a2b47eac669568063c00e65866a633",
  },
  {
    dao: "Burn Signal",
    description:
      "Burn Signal is a general purpose Ethereum tool for signaling preferences of unique verified users. Signals are bruned ETH tokens; amounts burned are weighed quadratically, to mitigate plutrarchy. Last Github & Twitter activity currently dates 2020.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/BurnSignal.jpg",
    treasuryAddress: "0x5a49fb12f512451819caeb7f4be37e89f0eb0afd",
  },
  {
    dao: "Markeing DAO",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/marketingdao.jpg",
    treasuryAddress: "0x7fea50956d5ac9fbed2ef263bdeae0a1467c1524",
  },
  {
    dao: "HausDAO",
    description:
      "HausDAO is the governor of the DAOHaus ecosystem - the coordinator of moloch-launched DAOs.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/daohaus.jpg",
    treasuryAddress: "0xdec090a12f2e280b089daa225892d9efa8ed0ee8",
  },
  {
    dao: "Status",
    description:
      "Status is a community that BUIDLs private and secure information flows and increased self-sovereignty. Its native package includes a messanger dapp, a web3 browser and a crypto wallet.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/status.png",
    treasuryAddress: "0x3ac825db2021f5cdf674b11c00af71e743818cad",
  },
  {
    dao: "Unicly",
    description:
      "Unicly is a platform for tokenizing & presenting NFT collections, with automatic bidding pools for fractions of collection items. Such pools' tokens may then be leveraged across DeFi.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/uniclynft.eth.png",
    treasuryAddress: "0x92b22149fec19094650f3f99dc141c8f77b03c15",
  },
  {
    dao: "Srt",
    description:
      "The srt DAO existed for a few months in 2020, during which it registered one non-membership action, namely the transfer of funds to one of its 3 memebr addresses.",
    image: "/static/media/default_organization_placeholder.deb3bbce.svg",
    treasuryAddress: "0x9e281335d5316417eed0c16051e5de4a3c4a2b1d",
  },
  {
    dao: "Urza",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/Urza.png",
    treasuryAddress: "0x7ae4bc22d038479c8ad21616450cd5e35d3f03cc",
  },
  {
    dao: "STAKEhaus",
    description:
      "STAKEhaus governs STAKE - the validator token for the xDai blockchain, which became the Gnosis Beacon Chain.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/stakeHause.png",
    treasuryAddress: "0x97ace434171c7eb426548afc4af188a3c973a38d",
  },
  {
    dao: "yEarn DAO ($YFI Community Funding)",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/yearn.png",
    treasuryAddress: "0xcb46298767fb5d44c18313976c30d3eeb5071862",
  },
  {
    dao: "Arca",
    description:
      "Arca DAO's community is developing and expanding the Arweave ecosystem, project and network.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/arcadao.jpg",
    treasuryAddress: "0x63931acddae3b15cbdd0160dcf21b9776f8092e5",
  },
  {
    dao: "0x06Bdd90Cc7122D4531ab7CbB3C22D265Cb112ABD",
    description: "DeepDAO research coming soon",
    image: "/static/media/default_organization_placeholder.deb3bbce.svg",
    treasuryAddress: "0x577cbb041c645882d6c9e9b24deb786429d29cb5",
  },
  {
    dao: "Futhorcecosystem",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/Futhorcecosystem.jpg",
    treasuryAddress: "0xb66b51142d8a85804d2cdb1227e982159008ac45",
  },
  {
    dao: "BrightID",
    description:
      "Bright ID is a social identity network that peer-identifies or disqualifies prospective members as trusted unique users of plugged-in dapps, without storing personal data;The BrightID Development DAO served the project's development team until (cu...",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/BrightID.jpg",
    treasuryAddress: "0x60e18f4971077412af2bd0297999093642f28e15",
  },
  {
    dao: "snglsDAO",
    description:
      "This DAO was to govern SNGLS media distribution protocol of the SingularDTV, that BUIDLs for the entrtainment industry. It officially closed within five months from inception.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/snglsDAO.jpg",
    treasuryAddress: "0x515aef991f262d0d098dacfb57fccfe9852ff9c1",
  },
  {
    dao: "Constitution",
    description:
      "ConstitutionDAO is a web3 crowdfunding operation set to bid for a genuine copy of the US Constitution on a 18 Nov. 2021 auction. Upon not winning the piece, bid for a genuine copy of the US Constitution . It raised over $40M but not enough to w...",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/constitution.jpeg",
    treasuryAddress: "0xb1c95ac257029d11f3f64ac67b2307a426699322",
  },
  {
    dao: "Arweavers",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/Arweavers.jpg",
    treasuryAddress: "0xc8f94cc40cf7ac14c056dc081232de71cb9763cd",
  },
  {
    dao: "Betacolony",
    description:
      "Betacolony was set to launch and curate the Colony DAO launcher and Meta-DAO, with its own βLNY token.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/Betacolony.jpg",
    treasuryAddress: "0x869814034d96544f3c62de2ac22448ed79ac8e70",
  },
  {
    dao: "brightiddev",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/BrightID.jpg",
    treasuryAddress: "0x7099b4d99876480fcc0ac46d7809b7287a946050",
  },
  {
    dao: "ShillShop",
    description:
      "ShillShop is a marketing DAO for Web3 porjects, a partnering offspring of MetaGame ecosystem's Raid Guild of BUIDLers, established Aug. 2021.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/daohaus.png",
    treasuryAddress: "0x50d9fbebdd7fd36c0716fc1faaa9248bab6bbcc0",
  },
  {
    dao: "MetaCartel Ventures China",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/metacartelventureschina.png",
    treasuryAddress: "0x934d6b90e3f916a3ad5d080a674a1e953447dda3",
  },
  {
    dao: "Raid Guild",
    description:
      "Raid Guild is a versatile collective of web3 professionals hirable for BUIDL jobs, and part of the Moloch/DAOHaus/MetaGame ecosystem.;The RG Warchest DAO is a treasury for the Raid Guild.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/RaidGuild.jpg",
    treasuryAddress: "0xa47682e37f73275fdd7573da8a4a7c0cfb427e77",
  },
  {
    dao: "ApocalypseDAO",
    description:
      'Apocalypse DAO is a reputation-based collective that operated between Dec. 2019 and May 2020 with the stated mission of providing "Decentralized Mutual Insurance for The Apocalypse".',
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/apocalypsedao.jpg",
    treasuryAddress: "0x44d55a8492a90640dc6af013657eaf1ac5bc9548",
  },
  {
    dao: "HelpDao",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/HelpDAO.jpg",
    treasuryAddress: "0xeda7cc0ee377537996e480aa9a22547ef96bf5d1",
  },
  {
    dao: "CENNZnet Grants DAO",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/CENNZnetDao.png",
    treasuryAddress: "0xee7fa430a7e513d3df962ed0c0e285bc6f87fc24",
  },
  {
    dao: "Orochi DAO V2",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/OrochiDao.jpg",
    treasuryAddress: "0x552d8a7d1e20aa842a43a6f7b9782f08d750545e",
  },
  {
    dao: "Pangolin",
    description:
      "Pangolin is a community-owned Decentralized EXchange for various Ethereum and Avalanche networks DeFi assets. Originally a Lava Lab product handed over to community leadership, allocating 100% of its minted token to the community.\nOn-chain ...",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/pangolindex.eth.png",
    treasuryAddress: "0xa4cb6e1971ed8a1f76d9e8d50a5fc56dfa5cc1e6",
  },
  {
    dao: "Creative Collabo DAO",
    description:
      "This Grants DAO currently presents 6 proposals, all in February-March 2020.",
    image: "/static/media/default_organization_placeholder.deb3bbce.svg",
    treasuryAddress: "0xb389fb80ef7caf3fb367f7d5b4655f4b7cd6958e",
  },
  {
    dao: "Cura Dao",
    description:
      "CuraDAO was built to enhance sustainable development in the Caribbean island of Curaçao. It later transformed into Kolektivo Labs, set to BUIDL DeFi for local economies.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/CuraDAO.jpg",
    treasuryAddress: "0x0b93ba560283350d4216f29dc57e15df38d0eace",
  },
  {
    dao: "Conjure",
    description:
      "Conjure allows permissionless automatic creation of boundless synthetic assets, including, DeFi aggregators, legacy finance and real-world commodities indices.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/conjure.png",
    treasuryAddress: "0x3aac79279108cf1c7db7d8250c87eeffc63676f5",
  },
  {
    dao: "Estonia",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/Estonia.png",
    treasuryAddress: "0x614962025820c57d6af5acff56b5879237daf559",
  },
  {
    dao: "Genesis Alpha",
    description:
      "Genesis Alpha was created on DAOstack early 2019. This veteran DAO served as the incubator of numerous succesfull projects, including DeepDAO. It is currently paused.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/GenesisAlpha.jpg",
    treasuryAddress: "0x294f999356ed03347c7a23bcbcf8d33fa41dc830",
  },
  {
    dao: "MetaClan",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/metaclan.jpeg",
    treasuryAddress: "0xb5cef5887a0b46d895cb1893b3cddc9a31607261",
  },
  {
    dao: "Fest Dao",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/FestDAO.jpg",
    treasuryAddress: "0x8990e11b69403ea53ef2b32434bbd7dbf84b5234",
  },
  {
    dao: "Machi X DAO",
    description:
      "Machi X is a collective of artists and patrons, curating and collecting digital art.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/MachiX.png",
    treasuryAddress: "0x016e79e9101a8eaa3e7f46d6d1c267819c09c939",
  },
  {
    dao: "MansaNetwork",
    description: "DeepDAO research coming soon",
    image: "/static/media/default_organization_placeholder.deb3bbce.svg",
    treasuryAddress: "0xce5dcffb2aa50deeb229881a294f0b79d41baaeb",
  },
  {
    dao: "Elimuai",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/elimuai.jpg",
    treasuryAddress: "0x163b12f2a214ce7b6d535beb51189d12fb47a43b",
  },
  {
    dao: "clr.fund",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/clr.fund.jpg",
    treasuryAddress: "0xa357c5dc01d8ab4f3af519b0537468391e3e0976",
  },
  {
    dao: "Melon Council",
    description: "This DAO governs the Enzyme DeFi protocol.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/meloncouncil.png",
    treasuryAddress: "0xa7d9aa201734c6b9fb2ba8cdd15a83dc96abe804",
  },
  {
    dao: "DeoraTest",
    description: "DeepDAO research coming soon",
    image: "/static/media/default_organization_placeholder.deb3bbce.svg",
    treasuryAddress: "0x01e5b3f888967e205b36d056cd1633706050bd62",
  },
  {
    dao: "6Ef0c0b0",
    description: "DeepDAO research coming soon",
    image: "/static/media/default_organization_placeholder.deb3bbce.svg",
    treasuryAddress: "0xcd8393b5b0ec5ab8dad4e648f709be6bac11874d",
  },
  {
    dao: "Daoversify",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/Daoversify.png",
    treasuryAddress: "0x4299fc8ef72bce11b3d816e4528c24527fb09e8f",
  },
  {
    dao: "mStable",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/mstable.jpg",
    treasuryAddress: "0xb8541e73aa47a847fa39e803d19a3f9b1bbc5a6c",
  },
  {
    dao: "Metafam",
    description:
      "MetaFam is a decentralized collective building the intrastructure for MetaGame - a community of moloch DAOs and BUIDLers set to enhance human coordination and sustainability.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/metagame.jpg",
    treasuryAddress: "0xdab19c416355783011724a9c0e4e1e98c648214f",
  },
  {
    dao: "MetaCartel",
    description:
      "MetaCartel v2 was established by the MetaCartel Ventures DAO to facilitate the development of the moloch v2 platform, and v1 > v2 migration ventures. It hult actions after the migration.;Meta Cartel Ventures is the DAO venture arm of MetaCartel/DA...",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/MetaCartelDAO.jpg",
    treasuryAddress: "0x93d2a6369d57fdf8d1c3db22a5eb4623e26a24ae",
  },
  {
    dao: "Aragon Association DAO",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/aragon.png",
    treasuryAddress: "0x29e7d29deab3117766c10080bb923c7239dfd99f",
  },
  {
    dao: "1UP",
    description:
      "1UP is a community dedicated to the blockchain gaming market, set to enhance PlayToEarn mechanics and to power NFT assets.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/1UP.jpg",
    treasuryAddress: "0xafdd1eb2511cd891acf2bff82dabf47e0c914d24",
  },
  {
    dao: "Moloch",
    description:
      "Moloch DAO awards R&D grants to advance the Ethereum ecosystem. Its minimally viable governance method is constantly developing, forked, and iterated mainly via the DAUhaus Moloch DAOs factory.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/MolochDAO.jpg",
    treasuryAddress: "0x211a94468ba1e379236b45ca42dc63ee93139c7e",
  },
  {
    dao: "4c4bf6a8",
    description: "DeepDAO research coming soon",
    image: "/static/media/default_organization_placeholder.deb3bbce.svg",
    treasuryAddress: "0xed0beda6991ac426de442c84cee19d75ab78d2ce",
  },
  {
    dao: "Indexed",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/indexed.png",
    treasuryAddress: "0x95129751769f99cc39824a0793ef4933dd8bb74b",
  },
  {
    dao: "Proof Of Humanity",
    description:
      "Proof of Humanity is a Kleros network that registers humans by personal identifiers and verified vouching. Proofed humans get a share of PoH and a stream of Basic Human Income tokens.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/poh.eth.png",
    treasuryAddress: "poh.eth",
  },
  {
    dao: "Stacker Ventures DDC",
    description: "Due Diligence Committee of the Stacker Ventures DAO",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/stackerventures.eth.png",
    treasuryAddress: "stackerventures.eth",
  },
  {
    dao: "Carbonswap",
    description:
      "CarbonSwap is a stack of sustainability-focused DeFi & NFT products, including a DEX, AMM and bi-directional ERC bridge between the Ethereum Mainnet and Energy Web Chain set to significantly reduce computing energy consumption.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/carbonswap.eth.png",
    treasuryAddress: "carbonswap.eth",
  },
  {
    dao: "MeebitsDAO",
    description:
      "Meebits DAO is a BUIDL hub for NFTs. It revolves around Lavra Labs.' Meebits NFT avatars and includes a tokenized sandbox metaverse of user-created items & games, a marketplace and creator fund.\nSee",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/manekari.eth.png",
    treasuryAddress: "manekari.eth",
  },
  {
    dao: "Friends With Benefits Pro",
    description:
      "FWB is a restricted creators/thinkers club that contemplates and organizes to enhance diverse crypto culture and the creative class. It acts on ideation, community-building, digital art gallery and more.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/friendswithbenefits.eth.png",
    treasuryAddress: "friendswithbenefits.eth",
  },
  {
    dao: "Neptune DAO",
    description:
      "Neptune DAO is a closed investment club focusing on handpicked DeFi/NFT projects. Members hold total control over the DAO within its boundaries as a registered Limited Liability Company. Governance discussions and most voting is off-chain and priv...",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/neptune.jpeg",
    treasuryAddress: "0xa3cf824160e5ec3dccccb44c2552eee45a44aaeb",
  },
  {
    dao: "EulerBeats OG DAO",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/eulerBeatsOG.png",
    treasuryAddress: "ebog-rinkeby",
  },
  {
    dao: "TeaSwap",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/tea-swap.eth.png",
    treasuryAddress: "tea-swap.eth",
  },
  {
    dao: "Seedify.fund",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/seedifyfund.eth.png",
    treasuryAddress: "seedifyfund.eth",
  },
  {
    dao: "Pragma",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/pragmadev2.eth.png",
    treasuryAddress: "pragmadev2.eth",
  },
  {
    dao: "OceanDAO",
    description:
      "This grants DAO curates the ecosystem of Ocean protocol - a marketplace and Automatic Market Maker for tokenized datasets, including layered access to private data.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/officialoceandao.eth.png",
    treasuryAddress: "officialoceandao.eth",
  },
  {
    dao: "Valtech",
    description: "DeepDAO research coming soon",
    image: "/static/media/default_organization_placeholder.deb3bbce.svg",
    treasuryAddress: "0x569a4c85c1bda28921a58c234a8a39d789175a4c",
  },
  {
    dao: "KlimaDAO",
    description:
      "Klima DAO aims to drive up the commercial price of carbon emissions by buying and bond-tokenizing certified emissions reduction assets, then locking them in the DAO treasury.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/klimadao.eth.png",
    treasuryAddress: "klimadao.eth",
  },
  {
    dao: "DAOSquare",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/daosquare.jpg",
    treasuryAddress: "0x1ba850cb53280d7f9987be283ff462038ec8abe2",
  },
  {
    dao: "Farmgod DAO",
    description:
      "Farmgod DAO is the issuer of NFT avatars and collectible components of its Deliland game set to utilize NFTs as DeFi assets. It is built on the Fantom blockchain and uses PaintSwap for NFTs minting, trading and farming.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/farmgod.eth.png",
    treasuryAddress: "farmgod.eth",
  },
  {
    dao: "Meter Governance MTRG",
    description:
      "Meter is a DeFi-native layer1 blockchain aimed to facilitate Smart Contract scaling and interoperability. Goverend by MTRG token holders, it is also the issuer of MTR stablecoin that's pegged to world electricity prices.\nThe governance toke...",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/meter-mainnet.eth.png",
    treasuryAddress: "meter-mainnet.eth",
  },
  {
    dao: "Collab19",
    description:
      "Collab19 was built in an effort to create a better paradigm for fundraising and distribution to fight COVID-19",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/Collab19.png",
    treasuryAddress: "0x66b6fd8097e078cb8e0f7916efb8be76849b3442",
  },
  {
    dao: "Ampleforth",
    description:
      "Ampleforth runs a stablecoin of elastic supply by demand, which aspires increased resilience to DeFi price volatility and token correlations - thereby useful hedge and reserve. It currently plans for native DeFi legos of similar assets.",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/ampleforth.png",
    treasuryAddress: "0x77fba179c79de5b7653f68b5039af940ada60ce0",
  },
  {
    dao: "ShieldDao",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/ShieldDao.jpg",
    treasuryAddress: "0x95ee70b6ee02a91382690fe39598e626ebb7fad4",
  },
  {
    dao: "Bancor 0x3EcD508F87Ef27417474B0FDF8dd90A3b2B337C9",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/bancor.png",
    treasuryAddress: "0xec0dd1579551964703246becfbf199c27cb84485",
  },
  {
    dao: "ArbitrageDAO",
    description:
      "Arbitrage is a small, one-operation DAO. It was established in Jan. 2020 by the Stake Capital team as a Union Arbitrage Fund product, to perform the first-ever Flash Loan on the Aave platform.",
    image: "/static/media/default_organization_placeholder.deb3bbce.svg",
    treasuryAddress: "0xa8fc468da0417f71393523393bd7d57450143a62",
  },
  {
    dao: "Bprotocol ",
    description: "The Backstop Protocol",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/bpro.eth.png",
    treasuryAddress: "bpro.eth",
  },
  {
    dao: "MyDaoDashboard",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/mydaodashboard.jpg",
    treasuryAddress: "0xf78d15eee67341ad81a6f843d49e7921c41f4715",
  },
  {
    dao: "Dandy",
    description: "DeepDAO research coming soon",
    image: "/static/media/default_organization_placeholder.deb3bbce.svg",
    treasuryAddress: "0xe64b0bd6254aff94a98edd7dac8febfb30089416",
  },
  {
    dao: "PancakeSwap",
    description: "DeepDAO research coming soon",
    image:
      "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/cake.eth.png",
    treasuryAddress: "cake.eth",
  },
  {
    dao: "f25f0531",
    description: "DeepDAO research coming soon",
    image: "/static/media/default_organization_placeholder.deb3bbce.svg",
    treasuryAddress: "0x6b7c33d06c442d1f5a08f00aeb80c0578bb706fd",
  },
  {
    dao: "centrifugelabic01",
    description: "DeepDAO research coming soon",
    image: "/static/media/default_organization_placeholder.deb3bbce.svg",
    treasuryAddress: "0x46f2a6efd0163b90f5f65fdc965ba3cf865ebaa6",
  },
];
