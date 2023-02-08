import CardCheck from "@/components/Admin/CardCheck";
import React from "react";

const index = ({ data }) => {
  return (
    <>
      <CardCheck data={data} />
    </>
  );
};
export async function getServerSideProps(context) {
  const { params, res } = context;
  const { id } = params;

  const apiResponse = await fetch(`http://localhost:3000/api/safe-links/${id}`);
  if (apiResponse.ok) {
    const data = await apiResponse.json();
    return { props: { data } };
  }
}
export default index;
