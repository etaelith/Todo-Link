import { LoginContext } from "@/context/UserProvider";
import { useContext, useEffect, useState } from "react";
import Card from "./Card";

const Container = ({ filterLinks }) => {
  const { fetchLinks } = useContext(LoginContext);
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    try {
      fetchLinks().then(setLinks);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const filteredLinks =
    filterLinks === ""
      ? links
      : links.filter((link) => {
          return link[1].name.toLowerCase().includes(filterLinks.toLowerCase());
        });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 p-2 w-screen">
      {filteredLinks.map((link, index) => {

        return <Card link={link[1]} key={index} />;
      })}
    </div>
  );
};

export default Container;
