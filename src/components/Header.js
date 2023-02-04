import React from "react";
import Modal from "./Modal";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-16 px-4 border-b-4 border-pinky text-pinky">
      <p>Link's safu</p>
      <div className="flex items-center rounded-xl border border-pinky bg-pink-500 hover:bg-pink-600 hover:opacity-70 text-white p-2">
        <div className="bg-black rounded-full h-3 w-3 mr-2"></div>

        <Modal>Connect</Modal>
      </div>
    </div>
  );
};

export default Header;
