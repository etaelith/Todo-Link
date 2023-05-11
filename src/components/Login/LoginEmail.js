import { useContext, useState } from "react";
import { LoginContext } from "@context/UserProvider";
import HandleError from "./HandleError";

const LoginEmail = () => {

  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login } = useContext(LoginContext);

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
    } catch (error) {
      setErrorMessage(error.code);
      setShowError(true);
    }
  };
  const closeError = () => {
    setShowError(false);
  };

  return (
    <>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center mx-8 border-b-4 border-pink-800 pb-4"
      >
        <div className="mb-6 w-full">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="text"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="mb-6 w-full">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
            required
          ></input>
          {showError && <HandleError errorMessage={errorMessage} closeError={closeError} />}
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            ></input>
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-2/3 sm:w-1/3 py-2.5 text-center dark:bg-pinky dark:hover:bg-pink-800 dark:focus:ring-pink-800"
        >
          Log In
        </button>
      </form>
    </>
  );
};

export default LoginEmail;
