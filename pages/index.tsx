import getConfig from 'next/config';

import Layout from '@/components/Layout';

const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Home = () => {
  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="prose prose-blue mx-auto">
            <h1>{name}</h1>
            <p>Welcome to my Next.js + Tailwind CSS starter template.</p>

            <h2>Features:</h2>
            <ul>
              <li>
                Pre-configured <code>postcss.config.js</code> and{' '}
                <code>tailwind.config.js</code>.
              </li>
              <li>
                Markdown and CMS Content friendly with{' '}
                <code>@tailwindcss/typography</code>.
              </li>
              <li>
                Form styles with <code>@tailwindcss/forms</code>.
              </li>
              <li>
                <code>global.css</code> that contains Tailwind CSS directives.
              </li>
              <li>
                <code>{'<Layout />'}</code> component.
              </li>
            </ul>

            <h2>Guides</h2>
            <ul>
              <li>
                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Next.js
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind CSS
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/tailwindlabs/tailwindcss-typography"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @tailwindcss/typography
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/tailwindlabs/tailwindcss-forms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @tailwindcss/forms
                </a>
              </li>
            </ul>

            <h2>Form control examples</h2>
            <form action="" className="mb-0 space-y-6">
              <div>
                <label
                  htmlFor="sample-email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Sample email input
                </label>
                <input
                  type="email"
                  name="sample-email"
                  id="sample-email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="flex items-center">
                <label htmlFor="sample-checkbox">
                  <input
                    type="checkbox"
                    name="sample-checkbox"
                    id="sample-checkbox"
                  />
                  <span className="ml-2">A sample checkbox</span>
                </label>
              </div>
              <div className="flex items-center space-x-4">
                <label htmlFor="sample-radio-1">
                  <input type="radio" name="sample-radio" id="sample-radio-1" />
                  <span className="ml-2">A sample radio number one</span>
                </label>
                <label htmlFor="sample-radio-2">
                  <input type="radio" name="sample-radio" id="sample-radio-2" />
                  <span className="ml-2">A sample radio number two</span>
                </label>
              </div>
            </form>

            <h2>Maintainer</h2>
            <p>
              This project template is maintained by{' '}
              <a
                href="https://earvinpiamonte.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                @earvinpiamonte
              </a>{' '}
              and publicly available on{' '}
              <a
                href="https://github.com/earvinpiamonte/nextjs-tailwindcss-template"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
