import Head from 'next/head';
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>KUBO</title>
      </Head>
      <main>
        <h1 className={utilStyles.headingXl}>KUBO</h1>
        <p>Hello, I'm a Web Developer based in Japan.</p>
      </main>
      <footer>
        <p>©︎2022 KUBO</p>
      </footer>
    </Layout>
  )
}