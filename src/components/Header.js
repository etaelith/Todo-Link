import { useContext, useEffect, useState } from "react";
import { LoginContext } from "@/context/UserProvider";
import Home from "@components/Links/Home";
import Modal from "@components/Login/Modal";
import { useRouter } from "next/router";
import Dashboard from "./Links/Dashboard";

const Header = () => {
  const { user } = useContext(LoginContext);
  const [button, setButton] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (router.asPath !== "/") {
      setButton(false);
    } else {
      setButton(true);
    }
  }, [router.asPath]);
  return (
    <div className="flex justify-between items-center h-16 px-4 border-b-4 border-pinky text-pinky">
      <p>Link&apos;s safu</p>
      {button ? <Dashboard /> : <Home />}

      <div className="flex items-center rounded-xl border border-pinky bg-pink-500 hover:bg-pink-600 hover:opacity-70 text-white p-2">
        <div
          className={`${
            !user ? "bg-black" : "bg-green-500"
          } rounded-full h-3 w-3 mr-2`}
        ></div>

        <Modal>Connect</Modal>
      </div>
    </div>
  );
};

export default Header;
