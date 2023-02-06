import { useContext } from "react";
import { LoginContext } from "../context/UserProvider";
import Home from "./Links/Home";
import Modal from "./Login/Modal";

const Header = () => {
  const { user } = useContext(LoginContext);
  return (
    <div className="flex justify-between items-center h-16 px-4 border-b-4 border-pinky text-pinky">
      <p>Link's safu</p>

      <Home/>
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
