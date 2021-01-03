import getConfig from "next/config";
import Head from "next/head";
import { useRouter } from "next/router";

const { publicRuntimeConfig } = getConfig();

const Layout = ({ children }) => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" key="favicon" />
        <link
          rel="canonical"
          href={`${publicRuntimeConfig.siteMetaData.url}${asPath}`}
          key="canonical"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
          key="twitter_card"
        />
        <meta
          name="twitter:creator"
          content={publicRuntimeConfig.siteMetaData.twitterHandle}
          key="twitter_creator"
        />
        <meta
          name="twitter:title"
          content={publicRuntimeConfig.siteMetaData.name}
          key="twitter_title"
        />
        <meta
          name="twitter:description"
          content={publicRuntimeConfig.siteMetaData.description}
          key="twitter_description"
        />
        <meta
          name="twitter:image"
          content={`${publicRuntimeConfig.siteMetaData.url}/${publicRuntimeConfig.siteMetaData.socialPreview}`}
          key="twitter_image"
        />

        {/* Open Graph */}
        <meta
          property="og:url"
          content={`${publicRuntimeConfig.siteMetaData.url}${asPath}`}
          key="og_url"
        />
        <meta
          property="og:site_name"
          content={publicRuntimeConfig.siteMetaData.name}
          key="og_site_name"
        />
        <meta
          property="og:title"
          content={publicRuntimeConfig.siteMetaData.title}
          key="og_title"
        />
        <meta
          property="og:description"
          content={publicRuntimeConfig.siteMetaData.description}
          key="og_description"
        />
        <meta
          property="og:image"
          content={`${publicRuntimeConfig.siteMetaData.url}/${publicRuntimeConfig.siteMetaData.socialPreview}`}
          key="og_image"
        />
        <meta property="og:image:width" content={`1200`} key="og_image_width" />
        <meta
          property="og:image:height"
          content={`630`}
          key="og_image_height"
        />

        <meta
          name="description"
          content={publicRuntimeConfig.siteMetaData.description}
          key="description"
        />
        <title key="title">{publicRuntimeConfig.siteMetaData.title}</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
