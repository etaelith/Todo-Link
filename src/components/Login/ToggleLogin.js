import { Switch } from "@headlessui/react";

const ToggleLogin = ({ enabled, setEnabled }) => {
  return (
    <div className="flex flex-row justify-around py-4 pr-4 dark:text-white border-b-2 border-pinky mb-4">
        <label
        className="text-pinky"
      >
        {enabled ? "Register" : "Login"}
      </label>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-pink-900" : "bg-pink-700"}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};

export default ToggleLogin;
