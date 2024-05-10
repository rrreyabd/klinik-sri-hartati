import { Link } from "@inertiajs/react";
import { TbLogout } from "react-icons/tb";

const DokterNav = ({ auth }) => {
    return (
        <header className="bg-white shadow-md h-20 w-full flex justify-center">
            <nav className="w-3/4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img src="/assets/logo.png" alt="Logo" width={36} />
                    <p className="font-semibold text-lg">Klinik Sri Hartati</p>
                </div>

                <div className="flex gap-4 items-center">
                    <p className="font-semibold">{auth.user.name}</p>
                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="text-xl text-customRed bg-red-200 p-2 rounded-full hover:bg-red-300 transition-all duration-200 ease-in-out"
                    >
                        <TbLogout />
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default DokterNav;
