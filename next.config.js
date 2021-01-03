module.exports = {
  publicRuntimeConfig: {
    siteMetaData: {
      name: "Next.js + Tailwind CSS template",
      url:
        process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/",
      title: "Next.js + Tailwind CSS template",
      description: "Next.js + Tailwind CSS template",
      twitterHandle: "earvinpiamonte",
      socialPreview: "/images/preview.png",
    },
  },
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
};
