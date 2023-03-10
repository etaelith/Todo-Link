import { Fragment, useState, useRef, useContext } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { LoginContext } from "@/context/UserProvider";

const category = [
  { id: 1, name: "Crypto" },
  { id: 2, name: "Tech" },
  { id: 3, name: "IoT" },
  { id: 4, name: "Food" },
  { id: 5, name: "Adventure" },
  { id: 6, name: "Cars" },
  { id: 7, name: "Games" },
  { id: 8, name: "Sports" },
  { id: 9, name: "Bet" },
];
const FormAdmin = () => {
  const { user, approveLink } = useContext(LoginContext);

  const [selected, setSelected] = useState(category[0]);
  const [query, setQuery] = useState("");
  const formRef = useRef(null);
  const filteredPeople =
    query === ""
      ? category
      : category.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    approveLink({
      name: formData.get("name"),
      link: formData.get("link"),
      youtube: formData.get("youtube"),
      twitter: formData.get("twitter"),
      imageURL: formData.get("imageURL"),
      category: formData.get("category"),
      userID: user.uid,
    });
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
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
            placeholder="John"
            required
          ></input>
        </div>
        <div>
          <label
            htmlFor="youtube"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Youtube URL
          </label>
          <input
            type="text"
            name="youtube"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Doe"
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
            placeholder="Doe"
            required
          ></input>
        </div>
        <div>
          <label
            htmlFor="imageURL"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Logo URL
          </label>
          <input
            type="text"
            name="imageURL"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Doe"
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
            placeholder="flowbite.com"
            required
          ></input>
        </div>
        <div>
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category
          </label>
          <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            <Combobox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <Combobox.Input
                    name="category"
                    className="w-full border-none pr-10 text-sm leading-5 text-gray-900 dark:bg-gray-700 dark:text-white focus:ring-0"
                    displayValue={(person) => person.name}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon className="h-5 w-5" aria-hidden="true" />
                  </Combobox.Button>
                </div>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  afterLeave={() => setQuery("")}
                >
                  <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-700 dark:text-white  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {filteredPeople.length === 0 && query !== "" ? (
                      <div className="relative cursor-default select-none py-2 px-4 text-gray-700 dark:text-white">
                        Nothing found.
                      </div>
                    ) : (
                      filteredPeople.map((person) => (
                        <Combobox.Option
                          key={person.id}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-teal-600 text-white"
                                : "text-gray-900"
                            }`
                          }
                          value={person}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {person.name}
                              </span>
                              {selected ? (
                                <span
                                  className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                    active ? "text-white" : "text-teal-600"
                                  }`}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Combobox.Option>
                      ))
                    )}
                  </Combobox.Options>
                </Transition>
              </div>
            </Combobox>
          </div>
        </div>
      </div>

      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-2/3 sm:w-1/3 py-2.5 text-center dark:bg-pinky dark:hover:bg-pink-800 dark:focus:ring-pink-800">
        Submit
      </button>
    </form>
  );
};

export default FormAdmin;
