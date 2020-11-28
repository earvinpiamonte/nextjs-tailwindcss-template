import Head from "next/head";
import Layout, { siteMetaData } from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{`${siteMetaData.title} | Home`}</title>
      </Head>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="app-h1">
            <svg
              className="w-8 h-8 inline-block mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              ></path>
            </svg>
            nextjs-tailwindcss-template
          </h1>
          <p className="app-p">
            Welcome to Next.js + Tailwind CSS starter template. This project
            aims to simplify the setup of Tailwind CSS on your Next.js app.
          </p>

          <h2 className="app-h2">Additions:</h2>
          <ul className="list-disc list-inside mb-3">
            <li>
              pre-configured <code className="app-code">postcss.config.js</code>
              .
            </li>
            <li>
              pre-configured{" "}
              <code className="app-code">tailwind.config.js</code>.
            </li>
            <li>
              <code className="app-code">global.css</code> that contains
              Tailwind CSS directives.
            </li>
            <li>
              <code className="app-code">{"<Layout />"}</code> component
            </li>
            <li>Purging styles using PurgeCSS.</li>
          </ul>

          <h2 className="app-h2">Guides</h2>
          <ul className="list-disc list-inside mb-3">
            <li>
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="app-link"
              >
                Next.js
              </a>
            </li>
            <li>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="app-link"
              >
                Tailwind CSS
              </a>
            </li>
          </ul>

          <h2 className="app-h2">Maintainer</h2>
          <p className="app-p">
            This project template is maintained by{" "}
            <a
              href="https://earvinpiamonte.com"
              target="_blank"
              rel="noopener noreferrer"
              className="app-link"
            >
              @earvinpiamonte
            </a>{" "}
            and publicly available on{" "}
            <a
              href="https://github.com/earvinpiamonte/nextjs-tailwindcss-template"
              target="_blank"
              rel="noopener noreferrer"
              className="app-link"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </section>
    </Layout>
  );
}
