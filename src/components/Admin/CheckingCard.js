import { PencilSquareIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const CheckingCard = ({ link }) => {
  return (
    <div className="flex justify-between h-16 m-1 border-2 rounded-lg border-pinky">
      <div className="flex flex-col my-auto ml-2 text-white text-sm">
        <div>{link[0].name}</div>
        <div>{link[0].link}</div>
      </div>
      <Link href={`/dashboard/admin/${link[1]}`}>
        <div className="flex">
          <PencilSquareIcon
            width="28"
            height="28"
            className="my-auto fill-pinky mr-2"
          />
        </div>
      </Link>
    </div>
  );
};

export default CheckingCard;
