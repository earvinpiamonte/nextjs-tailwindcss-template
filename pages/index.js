import Head from "next/head";
import Layout, { defaults } from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <meta name="og:title" content={`${defaults.title} | Home`} />
        <title>{`${defaults.title} | Home`}</title>
      </Head>
      <section className="py-10">
        <div className="container mx-auto">
          <h1 className="app-h1">nextjs-tailwindcss-template</h1>
          <p>Welcome to Next.js + Tailwind CSS starter template.</p>
        </div>
      </section>
    </Layout>
  );
}
