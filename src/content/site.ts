const email = "support@bailaxstudios.com";

export interface Studio {
  name: string;
  storeName: string;
  email: string;
  policyUpdated: string;
  tagline: string;
  summary: string;
}

export type AppCategory = "Arcade" | "Tools" | "Finance";

export interface App {
  slug: string;
  name: string;
  category: AppCategory;
  packageId: string;
  playUrl: string;
  unofficial: boolean;
  summary: string;
  description: string[];
  disclaimer?: string[];
  dataNotes: string[];
}

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalDoc {
  kicker: string;
  title: string;
  updated?: string;
  intro: string[];
  sections: LegalSection[];
}

export const studio: Studio = {
  name: "BailaX Studios",
  storeName: "BailaX Studio",
  email,
  policyUpdated: "23 November 2026",
  tagline: "Android apps, with the policies in public.",
  summary:
    "BailaX Studios publishes small games and companion apps for Android. This site is the catalog, the privacy policy, and the support address.",
};

function playStoreUrl(packageId: string): string {
  return `https://play.google.com/store/apps/details?id=${packageId}`;
}

export const apps: App[] = [
  {
    slug: "color-jumper",
    name: "Color Jumper",
    category: "Arcade",
    packageId: "com.BailaXStudio.ColorJumper",
    playUrl: playStoreUrl("com.BailaXStudio.ColorJumper"),
    unofficial: false,
    summary: "Match the platform color, bounce higher, and chase a bigger score.",
    description: [
      "Color Jumper is an arcade platformer. Your character only bounces higher from a platform that matches their color.",
      "Coins collected on the way up can be spent on clothes and bonuses inside the game. Leaderboards and achievements track how far a run goes.",
    ],
    dataNotes: [
      "The published version notes describe leaderboards, achievements, and Google services tied to your score.",
      "Coins, clothes, and bonuses are in-game items. The listing does not describe a BailaX account.",
    ],
  },
  {
    slug: "little-rainbow-bird",
    name: "Little Rainbow Bird",
    category: "Arcade",
    packageId: "com.BailaXStudio.LittleRainbowBird",
    playUrl: playStoreUrl("com.BailaXStudio.LittleRainbowBird"),
    unofficial: false,
    summary: "A one-touch run through colored gates, with a leaderboard to beat.",
    description: [
      "Little Rainbow Bird is a one-finger arcade game. Gates are colored, and you have to pass through the color that matches you.",
      "A leaderboard records the top runs. The first public release asked players to send feedback.",
    ],
    dataNotes: [
      "The listing describes a leaderboard. It does not describe ads, location, or a BailaX account.",
    ],
  },
  {
    slug: "fortnitrack",
    name: "FortniTrack",
    category: "Tools",
    packageId: "com.studio.bailax.fortnitepocket",
    playUrl: playStoreUrl("com.studio.bailax.fortnitepocket"),
    unofficial: true,
    summary: "A fan-made look at Fortnite statistics and the item shop.",
    description: [
      "FortniTrack is an unofficial companion for Fortnite. It shows player statistics you search for, and items from the item shop.",
      "The listing said ads help pay for the data services the app uses. It also said the app was still being built, so features can be missing or out of date.",
    ],
    disclaimer: [
      "FortniTrack is a fan-made app. It is not an official Epic Games product and it is not endorsed by Epic Games.",
      "Fortnite and related names are trademarks of Epic Games, Inc. Portions of the materials shown in the app are trademarks or copyrighted works of Epic Games, Inc. All rights reserved by Epic Games.",
    ],
    dataNotes: [
      "The listing says BailaX does not sell your personal data, and that coarse location from the phone is used to choose ads.",
      "Advertising partners can receive an advertising identifier and coarse location when an ad is shown.",
      "Player names you type are sent so the app can look up public game statistics. Those names are Fortnite identities, not a BailaX account.",
    ],
  },
  {
    slug: "payeer-wallet",
    name: "Payeer Wallet",
    category: "Finance",
    packageId: "com.bailaxstudio.payeerapp",
    playUrl: playStoreUrl("com.bailaxstudio.payeerapp"),
    unofficial: true,
    summary: "An unofficial way to check a Payeer balance and exchange between currencies.",
    description: [
      "Payeer Wallet is an unofficial client for a Payeer account. The listing describes checking a balance and exchanging between EUR, USD, and RUB.",
      "You connect it with a Payeer ID, an API ID, and an API secret that you create in your own Payeer account. An optional PIN locks the app on the phone. Three wrong PIN attempts clear those saved settings.",
      "BailaX Studios does not operate Payeer, does not hold customer funds, and is not a Payeer developer.",
    ],
    disclaimer: [
      "This is an unofficial application. BailaX Studios is not affiliated with Payeer and does not provide the payment service.",
      "Payeer names and marks belong to their owner. Connecting API keys gives this app access to act on the Payeer account those keys control. Only enter keys you created yourself, and remove them by clearing the app data if you stop using it.",
    ],
    dataNotes: [
      "The Payeer ID, API ID, and API secret you type are stored on the device so the app can request your account.",
      "The listing names coarse location, described as a way to choose language and ads, and external storage for data the app saves.",
      "The listing mentions ads and a planned ad-free version. Where ads run, advertising partners can receive device and advertising identifiers.",
    ],
  },
  {
    slug: "7-days-to-die-guide",
    name: "7 Days to Die Guide",
    category: "Tools",
    packageId: "com.bailaxstudio.a7daystodiecraftingguide",
    playUrl: playStoreUrl("com.bailaxstudio.a7daystodiecraftingguide"),
    unofficial: true,
    summary: "A fan-made crafting and survival reference for 7 Days to Die.",
    description: [
      "7 Days to Die Guide is a reference for crafting in 7 Days to Die. It lists recipes and materials for items, vehicles, blocks, and other things found in the game.",
      "It was written for new and experienced players, and the listing said it was updated after game patches. Recipes can lag behind the current game version.",
    ],
    disclaimer: [
      "7 Days to Die Guide is a fan-made reference. It is not official and it is not endorsed by The Fun Pimps.",
      "7 Days to Die is a trademark of its owner. Game names, items, and other materials remain the property of their rights holders.",
    ],
    dataNotes: [
      "The public listing describes an on-device reference. It does not describe a BailaX account, ads, or the sale of personal data.",
    ],
  },
];

export function getApp(slug: string | undefined): App | undefined {
  return apps.find((app) => app.slug === slug);
}

export const privacy: LegalDoc = {
  kicker: "Privacy policy",
  title: "How BailaX Studios handles data",
  updated: studio.policyUpdated,
  intro: [
    "This policy covers the BailaX Studios website and the Android apps listed on this site. The apps were published under the store name BailaX Studio.",
    "Practices differ by app and by the version installed on a device. The notes below follow the public store listings for those apps. If a listing and the installed version disagree, the in-app behavior of that version is what applies.",
  ],
  sections: [
    {
      heading: "Who we are",
      paragraphs: [
        `${studio.name} publishes the apps in this catalog. For privacy requests, write to ${email}.`,
      ],
    },
    {
      heading: "This website",
      paragraphs: [
        "The site is static. It does not ask you to create an account, and it does not run a contact form. Choosing the support address opens your own email app.",
        "The host that serves the site may keep standard server logs, such as an IP address and the page requested, for security and operations. BailaX Studios does not use those logs to build a profile of visitors.",
      ],
    },
    {
      heading: "Color Jumper and Little Rainbow Bird",
      paragraphs: [
        "These are original arcade games. Their listings describe scores and leaderboards. Color Jumper’s version notes also describe achievements and Google services tied to a score.",
        "That means a score, and the Play identity Google already has for the device, can be processed by Google Play games services when you use those features. The listings do not describe a separate BailaX account.",
      ],
    },
    {
      heading: "FortniTrack",
      paragraphs: [
        "FortniTrack is an unofficial Fortnite companion. The listing says the developer does not sell personal data and does not pass personal data to other apps or sites.",
        "The same listing says coarse location from the phone is used to choose ads, and that ads pay for the data services behind the app. Advertising partners can receive an advertising identifier and coarse location when an ad is requested.",
        "A player name you search is sent so the app can fetch public game statistics from the services it uses. That is not a BailaX account.",
      ],
    },
    {
      heading: "Payeer Wallet",
      paragraphs: [
        "Payeer Wallet is an unofficial client. To show a balance or start an exchange, you enter a Payeer ID, an API ID, and an API secret from your own Payeer account. Those values are stored on the device. An optional PIN is also stored on the device. The listing says three wrong PIN attempts clear the saved settings.",
        "The listing names coarse location, described for language and ads, and storage permission for data the app writes. Where ads are shown, advertising partners can receive device and advertising identifiers.",
        "Requests about your Payeer balance go to Payeer, not to a BailaX bank. BailaX Studios does not hold the funds in that account. Clearing the app’s storage, or uninstalling it, removes the keys saved on the phone. It does not close the Payeer account.",
      ],
    },
    {
      heading: "7 Days to Die Guide",
      paragraphs: [
        "The public listing describes a crafting reference kept on the device. It does not describe an account, advertising, location, or the sale of personal data.",
      ],
    },
    {
      heading: "What we do not do",
      paragraphs: [
        "BailaX Studios does not sell personal data. The apps do not ask you to create a BailaX account.",
        "We do not control data held by Google, by an advertising network, by Payeer, or by a game’s own services after it has been shared with them under the descriptions above.",
      ],
    },
    {
      heading: "Children",
      paragraphs: [
        "These apps are general-audience titles. They are not directed at children under 13. If you believe a child has sent us personal information, email " +
          email +
          " and we will delete what we still hold.",
      ],
    },
    {
      heading: "Retention and your choices",
      paragraphs: [
        "Data saved by an app stays on the device until you clear that app’s storage or uninstall it. Leaderboard entries live with the Play services described in the game listings.",
        "You can refuse location and other permissions in Android settings. Features that need a permission, such as ads tuned by coarse location, may stop working.",
        `To ask what we hold, or to ask us to delete it, email ${email}. We can only delete data we still have. On-device data is removed by you, from the phone.`,
      ],
    },
    {
      heading: "Changes",
      paragraphs: [
        `This policy was updated on ${studio.policyUpdated}. A newer copy will replace this page, and the date at the top will change.`,
      ],
    },
  ],
};

export const terms: LegalDoc = {
  kicker: "Terms of use",
  title: "Using the site and the apps",
  updated: studio.policyUpdated,
  intro: [
    `These terms cover the ${studio.name} website and the Android apps listed here. Installing an app from Google Play also means accepting Google Play’s own terms.`,
  ],
  sections: [
    {
      heading: "The website",
      paragraphs: [
        "The site is information: a catalog, policies, and a support address. You may read it and link to it. You may not copy the pages and present them as your own policy or product.",
      ],
    },
    {
      heading: "The apps",
      paragraphs: [
        "The apps are provided as they are, for personal use. Features described on this site come from public store listings and can be missing, changed, or removed in the version on your device.",
        "Some titles are fan-made. They are identified on their pages. A fan-made app is not the official product of the game or payment service it talks about.",
      ],
    },
    {
      heading: "Accounts you connect",
      paragraphs: [
        "If an app asks for an API key, a player name, or a Play games profile, you are responsible for the account those details belong to. Do not enter keys that you are not allowed to use.",
        "Payeer Wallet can act on a Payeer account only through the keys you store in it. BailaX Studios is not a party to your Payeer agreement and does not insure or reverse a transfer.",
      ],
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        "The BailaX name, original game art, and original code belong to their owners. Names and materials from Fortnite, Payeer, and 7 Days to Die stay with their rights holders. See the disclaimer for those titles.",
      ],
    },
    {
      heading: "No warranty",
      paragraphs: [
        "The site and the apps are provided without a warranty of fitness for a particular purpose, uninterrupted service, or error-free game data. Crafting recipes, item shops, and statistics can be wrong or outdated.",
        "To the extent the law allows, BailaX Studios is not liable for lost profits, lost game items, or losses on a third-party payment account arising from use of these apps. Nothing in these terms limits liability that the law does not allow to be limited.",
      ],
    },
    {
      heading: "Changes",
      paragraphs: [
        `These terms were updated on ${studio.policyUpdated}. Continuing to use the site or an app after this page changes means you accept the new terms.`,
        `Questions about these terms go to ${email}.`,
      ],
    },
  ],
};

export const disclaimer: LegalDoc = {
  kicker: "Disclaimer",
  title: "Unofficial apps and other people’s marks",
  updated: studio.policyUpdated,
  intro: [
    `${studio.name} makes its own arcade games and also publishes companion apps about other people’s products. Those companions are fan-made. They are not endorsed by the companies named below.`,
  ],
  sections: [
    {
      heading: "FortniTrack",
      paragraphs: [
        "FortniTrack is not an official Epic Games app and it is not endorsed by Epic Games. Fortnite and related marks are trademarks of Epic Games, Inc. All rights reserved by Epic Games.",
        "Statistics and item-shop information can be incomplete. The app does not sell V-Bucks and it cannot change an Epic Games account.",
      ],
    },
    {
      heading: "Payeer Wallet",
      paragraphs: [
        "Payeer Wallet is not the official Payeer app. BailaX Studios is not affiliated with Payeer, does not operate that service, and does not hold customer funds.",
        "You connect your own API credentials. Treat those keys like a password. Removing the app does not close the Payeer account.",
      ],
    },
    {
      heading: "7 Days to Die Guide",
      paragraphs: [
        "7 Days to Die Guide is a fan-made crafting reference. It is not endorsed by The Fun Pimps. 7 Days to Die is a trademark of its owner. Recipes may not match the latest game update.",
      ],
    },
    {
      heading: "Original games",
      paragraphs: [
        "Color Jumper and Little Rainbow Bird are BailaX games. They are not based on another studio’s title.",
      ],
    },
    {
      heading: "Store name",
      paragraphs: [
        `On Google Play the developer name used for these listings is ${studio.storeName}. ${studio.name} is the name used on this website.`,
        `Support and policy questions: ${email}.`,
      ],
    },
  ],
};
