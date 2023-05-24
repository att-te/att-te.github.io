// ./pages/index.js
import Head from "next/head";
import SiteLayout from "../layouts/SiteLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>att-te</title>
        <meta name="description" content="hello world" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center max-w-screen-lg w-full mx-2 my-12">
          <p className="md:px-28 mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta nisi sed vestibulum gravida. Etiam bibendum porttitor felis id congue. Phasellus viverra elit sagittis ligula lobortis blandit. Nullam ut dolor in ante maximus euismod vitae lobortis sem. Etiam ut faucibus augue. Integer nec lobortis urna. Cras in erat at est pretium blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean in ipsum magna. Vivamus sit amet viverra elit.
          </p>
        </div>
      </section>
    </>
  );
}
// define layout for home page
Home.getLayout = (page) => {
  return <SiteLayout> {page} </SiteLayout>;
};
