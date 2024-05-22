import { Head, Link } from "@inertiajs/react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";

const OwnerNavbar = ({ open, setOpen }) => {
    return (
        <div className="h-24 flex justify-between px-16 shadow-md sticky top-0 left-0 bg-white">
            <Head title="Owner" />
            <div className="flex gap-16 items-center">
                <div className={`flex gap-4 items-center`}>
                    <img src="/assets/logo.png" alt="Logo" width={30} />
                    <p className="font-semibold text-lg">Klinik Sri Hartati</p>
                </div>
                <div className="flex items-center gap-4">
                    <button type="button" onClick={() => setOpen(!open)}>
                        {
                            open ? (

                                <AiOutlineMenuFold className="w-6 h-6 text-black/60" />
                            ) : (
                                <AiOutlineMenuUnfold className="w-6 h-6 text-black/60" />
                            )
                        }
                    </button>
                    <h3 className="text-2xl font-semibold">Dashboard</h3>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <p className="font-semibold">Owner</p>
                <Link
                    href="/logout"
                    method="post"
                    as="button"
                    className="text-xl text-customRed bg-red-200 p-2 rounded-full hover:bg-red-300 transition-all duration-200 ease-in-out"
                >
                    <TbLogout />
                </Link>
            </div>
        </div>
    );
};

export default OwnerNavbar;
