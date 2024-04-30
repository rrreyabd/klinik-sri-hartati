import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "@inertiajs/react";

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
            <SheetContent>
                {auth.user ? (
                    <>
                        <div className="py-8">
                            <div className="flex gap-4 items-center">
                                <FaUserCircle className="w-8 h-8" />
                                <p className="font-semibold text-lg">
                                    {auth.user.name
                                        .split(" ")
                                        .slice(0, 2)
                                        .join(" ")}
                                </p>
                            </div>
                            <div className="flex flex-col mt-4">
                                <Link href="/profile/mobile">Edit Profil</Link>
                                <Link href="" className="text-red-600">Keluar</Link>
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
