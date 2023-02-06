import { useState } from "react";
import LoginEmail from "./LoginEmail";
import RegisterEmail from "./RegisterEmail";
import ToggleLogin from "./ToggleLogin";

const SwitchLogin = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <ToggleLogin enabled={enabled} setEnabled={setEnabled} />
      {enabled ? <RegisterEmail /> : <LoginEmail />}
    </>
  );
};

export default SwitchLogin;
