import { LoginContext } from "@/context/UserProvider";
import { useContext, useRef } from "react";

const FormUser = () => {
  const { introduceLink, user } = useContext(LoginContext);
  const formRef = useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    introduceLink({
      name: formData.get("name"),
      link: formData.get("link"),
      youtube: formData.get("youtube"),
      twitter: formData.get("twitter"),
      userID: user.uid,
    });
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleClick}
      className="flex flex-col items-center pb-4 border-b-2 border-pinky"
    >
      <div className="grid gap-6 m-4 md:grid-cols-2 w-5/6">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="ReactJS"
            required
          ></input>
        </div>
        <div>
          <label
            htmlFor="youtube"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Youtube
          </label>
          <input
            type="text"
            name="youtube"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="https://youtube.com/reactjs"
            required
          ></input>
        </div>
        <div>
          <label
            htmlFor="twitter"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Twitter URL
          </label>
          <input
            type="text"
            name="twitter"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="https://twitter.com/reactjs"
            required
          ></input>
        </div>
        <div>
          <label
            htmlFor="link"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Website URL
          </label>
          <input
            type="url"
            name="link"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="https://reactjs.org/"
            required
          ></input>
        </div>
      </div>

      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-2/3 sm:w-1/3 py-2.5 text-center dark:bg-pinky dark:hover:bg-pink-800 dark:focus:ring-pink-800">
        Submit
      </button>
    </form>
  );
};

export default FormUser;
