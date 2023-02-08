import EditAdmin from "@/components/Admin/EditAdmin";
import FormAdmin from "@/components/Admin/FormAdmin";
import ToggleAdmin from "@/components/Admin/ToggleAdmin";
import Head from "next/head";
import { useState } from "react";

const Admin = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <Head>
        <title>FormAdmin</title>
      </Head>
      <ToggleAdmin enabled={enabled} setEnabled={setEnabled} />
      {enabled ? <FormAdmin /> : <EditAdmin />}
    </>
  );
};

export default Admin;
