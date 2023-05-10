import Admin from "@/components/dashboard/Admin";
import NotUser from "@/components/dashboard/NotUser";
import User from "@/components/dashboard/user";
import { LoginContext } from "@/context/UserProvider";
import { useContext } from "react";
const index = () => {

  const { user } = useContext(LoginContext);

  return (
    <>
      {!user ? (
        <NotUser />
      ) : user.email === "etaelithtest@gmail.com" ? (
        <Admin />
      ) : (
        <User />
      )}
    </>
  );
};

export default index;
