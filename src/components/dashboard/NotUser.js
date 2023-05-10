import Modal from "@components/Login/Modal"
import Link from "next/link";
const NotUser = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="h-56 p-8 m-8 flex items-center justify-center text-white border-2 rounded-md border-pinky">
                You are not logged in. Please use the button in the top right corner to access the dashboard. <Modal />
            </div>
            <Link href='/' className="border-2 rounded-md cursor-pointer p-4 text-white bg-pinky hover:bg-pink-600">Or back to the homepage</Link>
        </div>
    );
};

export default NotUser;