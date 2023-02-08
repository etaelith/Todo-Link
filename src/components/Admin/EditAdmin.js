import { LoginContext } from "@/context/UserProvider";
import { useContext, useEffect, useState } from "react";
import CheckingCard from "./CheckingCard";

const EditAdmin = () => {
  const { fetchUserLinks } = useContext(LoginContext);
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    try {
      fetchUserLinks().then(setLinks);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {links.map((link, index) => {
          return <CheckingCard link={link} key={index} />;
        })}
      </div>
    </>
  );
};

export default EditAdmin;
