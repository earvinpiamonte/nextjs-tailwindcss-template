import getConfig from "next/config";

import Layout from "@/components/Layout";

const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Home = () => {
  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1>{name}</h1>
          <p>Welcome to my Next.js + Tailwind CSS starter template.</p>

          <h2>Additions:</h2>
          <ul>
            <li>
              Pre-configured <code>postcss.config.js</code>.
            </li>
            <li>
              Pre-configured <code>tailwind.config.js</code>.
            </li>
            <li>
              <code>global.css</code> that contains Tailwind CSS directives.
            </li>
            <li>
              <code>{"<Layout />"}</code> component.
            </li>
            <li>Purging styles using PurgeCSS.</li>
          </ul>

          <h2>Guides</h2>
          <ul>
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

          <h2>Maintainer</h2>
          <p>
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
};

export default Home;
