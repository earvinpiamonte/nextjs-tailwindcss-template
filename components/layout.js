import Head from "next/head";

export const defaults = {
  title: "Next.js + Tailwind CSS template",
  description: "Next.js + Tailwind CSS template",
};

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={defaults.description} />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            defaults.title
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={defaults.title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
    </>
  );
}
