import Container from "@/components/Container";
import Search from "@/components/Search";
import { useState } from "react";
export default function Home() {
  const [filterLinks, setFilterLinks] = useState('');
  
  return (
    <>
      <Search setFilterLinks={setFilterLinks} />
      <Container filterLinks={filterLinks} />
    </>
  );
}
