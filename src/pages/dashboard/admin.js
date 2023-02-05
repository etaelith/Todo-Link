import EditAdmin from "@/components/Admin/EditAdmin";
import FormAdmin from "@/components/Admin/FormAdmin";
import ToggleAdmin from "@/components/Admin/ToggleAdmin";
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
