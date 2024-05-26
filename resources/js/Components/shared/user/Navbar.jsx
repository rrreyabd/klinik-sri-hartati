import { FaChevronDown } from "react-icons/fa";
import ProfileDropdown from "@/Components/shared/user/ProfileDropdown";
import Menu from "@/Components/shared/user/Menu";
import { Link } from "@inertiajs/react";
import { MdOutlineLightMode } from "react-icons/md";

const Navbar = ({ auth, children }) => {
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
        <nav className="flex justify-between py-6 sm:py-8">
            <Link className="flex gap-4 items-center" href="/">
                <img className="h-10 unselectable" src="/assets/logo.png" />
                <p className="text-lg font-semibold unselectable">
                    Klinik Sri Hartati
                </p>
            </Link>

            {children}

            <div className="hidden sm:flex gap-4">
                {auth.user ? (
                    <ProfileDropdown
                        className="flex items-center gap-4 border-0 hover:text-ForestGreen transition-all"
                        auth={auth}
                    >
                        {auth.user.name}
                        <FaChevronDown />
                    </ProfileDropdown>
                ) : (
                    <>
                        <Link
                            onClick={loginRoute}
                            className="flex items-center bg-ForestGreen px-2 md:px-6 py-0 md:py-1 text-white font-semibold rounded-md border-2 border-ForestGreen"
                        >
                            Masuk
                        </Link>
                        <Link
                            onClick={registerRoute}
                            className="flex items-center text-ForestGreen px-2 md:px-6 py-0 md:py-1 bg-customWhite font-semibold rounded-md border-2 border-ForestGreen"
                        >
                            Daftar
                        </Link>
                    </>
                )}
            </div>

            {/* Mobile Hamburger */}
            <div className="flex sm:hidden">
                <Menu auth={auth} />
            </div>
        </nav>
    );
};

export default Navbar;
