import { PencilSquareIcon } from "@heroicons/react/20/solid";
const CheckingCard = () => {
  return (
    <div className="flex justify-between h-16 m-1 border-2 rounded-lg border-pinky">

      <div className="grid grid-cols-2 gap-x-4 my-auto ml-2 text-white text-sm">
        <div>Name: TailwindCSS</div>
        <div>URL: https://tailwindcss.com/</div>
      </div>
      <div className="flex">
        <PencilSquareIcon
          width="28"
          height="28"
          className="my-auto fill-pinky mr-2"
        />
      </div>
    </div>
  );
};

export default CheckingCard;
