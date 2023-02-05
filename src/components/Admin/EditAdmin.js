import React from "react";
import CheckingCard from "./CheckingCard";

const EditAdmin = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <CheckingCard />
        <CheckingCard />
        <CheckingCard />
        <CheckingCard />
        <CheckingCard />
      </div>
    </>
  );
};

export default EditAdmin;
