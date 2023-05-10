import Container from "@/components/Container";
import Search from "@/components/Search";
import Head from "next/head";
import { useState } from "react";
export default function Home() {
  const [filterLinks, setFilterLinks] = useState('');

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Search setFilterLinks={setFilterLinks} />
      <Container filterLinks={filterLinks} />
    </>
  );
}
