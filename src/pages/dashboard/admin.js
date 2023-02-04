import EditAdmin from "@/components/EditAdmin";
import FormAdmin from "@/components/FormAdmin";
import ToggleAdmin from "@/components/ToggleAdmin";
import { useState } from "react";

const admin = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <ToggleAdmin enabled={enabled} setEnabled={setEnabled} />
      {enabled ? <FormAdmin /> : <EditAdmin />}
    </>
  );
};

export default admin;
