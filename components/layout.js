import Head from "next/head";

export const siteMetaData = {
  siteName: "Next.js + Tailwind CSS template",
  siteURL: "",
  title: "Next.js + Tailwind CSS template",
  description: "Next.js + Tailwind CSS template",
  twitterHandle: "earvinpiamonte",
  socialPreview: "/images/preview.png",
};

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteMetaData.description} />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteMetaData.title
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta
          name="twitter:creator"
          content={siteMetaData.twitterHandle}
          key="twhandle"
        />

        {/* Open Graph */}
        <meta property="og:url" content={siteMetaData.siteURL} key="ogurl" />
        <meta
          property="og:image"
          content={`${siteMetaData.siteURL}${siteMetaData.socialPreview}`}
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content={siteMetaData.siteName}
          key="ogsitename"
        />
        <meta property="og:title" content={siteMetaData.title} key="ogtitle" />
        <meta
          property="og:description"
          content={siteMetaData.description}
          key="ogdesc"
        />

        <title>{siteMetaData.title}</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
