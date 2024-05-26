import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "@inertiajs/react";
import { FiLogOut } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { SlDocs } from "react-icons/sl";
import { RiBillLine, RiCalendarScheduleLine } from "react-icons/ri";

const Menu = ({ auth }) => {
    // Function untuk mengarahkan ke halaman login membawa status true
    const registerRoute = () => {
        localStorage.setItem("status", JSON.stringify(true));
        window.location.href = route("login");
    };

    // Function untuk mengarahkan ke halaman login membawa status false
    const loginRoute = () => {
        localStorage.setItem("status", JSON.stringify(false));
        window.location.href = route("login");
    };

    return (
        <Sheet>
            <SheetTrigger>
                <GiHamburgerMenu className="text-2xl text-ForestGreen" />
            </SheetTrigger>
            <SheetContent className="h-full">
                {auth.user ? (
                    <>
                        <div className="flex flex-col justify-between h-full mb-4 mt-4">
                            <div className="">
                                <div className="flex gap-4 items-center">
                                    <img src="/assets/logo.png" alt="" />
                                    <div className="">
                                        <p className="font-semibold text-lg">
                                            {auth.user.name
                                                .split(" ")
                                                .slice(0, 2)
                                                .join(" ")}
                                        </p>
                                        <p>{auth.user.email}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 py-8">
                                    <div className="py-2 rounded-md flex gap-3 items-center hover:bg-customWhite px-1 font-semibold text-lg">
                                        <FaRegUser className="h-5 w-5" />
                                        <Link href="/profile">Profil</Link>
                                    </div>
                                    <div className="py-2 rounded-md flex gap-3 items-center hover:bg-customWhite px-1 font-semibold text-lg">
                                        <RiCalendarScheduleLine className="h-5 w-5" />
                                        <Link href="/jadwal">Jadwal</Link>
                                    </div>
                                    <div className="py-2 rounded-md flex gap-3 items-center hover:bg-customWhite px-1 font-semibold text-lg">
                                        <SlDocs className="h-5 w-5" />
                                        <Link href="/rekam-medis">
                                            Rekam Medis
                                        </Link>
                                    </div>
                                    <div className="py-2 rounded-md flex gap-3 items-center hover:bg-customWhite px-1 font-semibold text-lg">
                                        <RiBillLine className="h-5 w-5" />
                                        <Link href="/tagihan">Tagihan</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="py-2 rounded-md flex gap-2 items-center text-red-600">
                                <FiLogOut className="h-6 w-6" />
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    className="px-1 font-semibold rounded-md py-1 text-lg"
                                >
                                    Keluar
                                </Link>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="py-6">
                            <div className="flex flex-col gap-2">
                                <Link
                                    onClick={loginRoute}
                                    className="flex justify-center bg-ForestGreen px-6 py-2 text-white font-semibold rounded-md border-2 border-ForestGreen"
                                >
                                    Masuk
                                </Link>
                                <Link
                                    onClick={registerRoute}
                                    className="flex justify-center text-ForestGreen px-6 py-2 bg-customWhite font-semibold rounded-md border-2 border-ForestGreen"
                                >
                                    Daftar
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default Menu;
