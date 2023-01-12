import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

function format({ children }) {
  return (
    <>
      <Head>
        <title>BlogCuy Next.js</title>
      </Head>

      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}

export default format;
