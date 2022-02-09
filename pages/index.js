import Head from "next/head";
import QuestionAnimated from "../src/components/QuestionAnimated";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Climate Science | Pedro Programmer</title>
        <meta name="description" content="Pedro Programmer code challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <QuestionAnimated />
      </main>
    </div>
  );
}
