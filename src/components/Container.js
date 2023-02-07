import Card from "./Card";
import { links } from "@/utils/links";
import { useEffect } from "react";
const Container = ({ filterLinks }) => {
  const linksFilter = links;
  const filteredLinks =
    filterLinks === ""
      ? linksFilter
      : linksFilter.filter((link) => {
          return link.name.toLowerCase().includes(filterLinks.toLowerCase());
        });

  useEffect(() => {
    console.log(filterLinks);
  }, [filterLinks]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 p-2 w-screen">
      {filteredLinks.map((link, index) => {
        return <Card link={link} key={index} />;
      })}
    </div>
  );
};

export default Container;
