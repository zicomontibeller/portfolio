import { type GetServerSideProps } from "next";
import Head from "next/head";

/**
 * The portfolio is temporarily disabled: this page redirects straight to
 * LinkedIn without rendering anything from the app.
 *
 * To bring the portfolio back, restore the previous version of this file:
 * `git checkout <commit-before-this-one> -- src/pages/index.tsx`
 */

const LINKEDIN_URL = "https://www.linkedin.com/in/zicomontibeller/";

// Redirects on the server, so no page, component or app bundle is rendered.
// Temporary (307) on purpose, so browsers do not cache it once the portfolio
// is enabled again.
export const getServerSideProps: GetServerSideProps = () =>
  Promise.resolve({
    redirect: {
      destination: LINKEDIN_URL,
      permanent: false,
    },
  });

// Only rendered if the redirect above does not run (e.g. a static build).
export default function Home() {
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content={`0; url=${LINKEDIN_URL}`} />
        <meta name="robots" content="noindex" />
      </Head>

      <p>
        Redirecionando para o LinkedIn...{" "}
        <a href={LINKEDIN_URL} rel="noopener noreferrer">
          Clique aqui
        </a>{" "}
        se não for redirecionado automaticamente.
      </p>
    </>
  );
}
