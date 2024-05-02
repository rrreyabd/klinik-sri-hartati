import Footer from "@/Components/shared/user/Footer";
import Header from "@/Components/shared/user/Header";
import HubungiKami from "@/Components/shared/user/HubungiKami";
import Layanan from "@/Components/shared/user/Layanan";
import Profil from "@/Components/shared/user/Profil";
import ProfileDropdown from "@/Components/shared/user/ProfileDropdown";
import Menu from "@/Components/shared/user/Menu";
import { Link, Head } from "@inertiajs/react";
import { FaChevronDown } from "react-icons/fa";

export default function Main({ auth }) {
    
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
        <>
            <Head title="Home" />
            <main
                className="flex flex-col items-center bg-customWhite lg:bg-customWhite"
                id="home"
            >
                <div className="px-8 md:px-0 w-full md:w-4/5 max-w-[1300px]">
                    {/* Nav */}
                    <nav className="flex justify-between py-6 sm:py-8">
                        <Link className="flex gap-4 items-center" href="/">
                            <img
                                className="h-10 unselectable"
                                src="/assets/logo.png"
                            />
                            <p className="text-lg font-semibold unselectable">
                                Klinik Sri Hartati
                            </p>
                        </Link>

                        <div className="hidden lg:flex items-center space-x-4 xl:space-x-8 unselectable">
                            <Link href="#home">Home</Link>
                            <Link href="#layanan">Layanan</Link>
                            <Link href="#tentang">Tentang Kami</Link>
                            <Link href="#kontak">Kontak</Link>
                        </div>

                        <div className="hidden sm:flex gap-4">
                            {auth.user ? (
                                <ProfileDropdown className="flex items-center gap-4 border-0" auth={auth}>
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

                    {/* Header */}
                    <Header />

                    <hr className="border border-black/10 mt-20" />

                    {/* Layanan */}
                    <Layanan />

                    <hr className="border border-black/10" />

                    {/* Profil */}
                    <Profil />

                    <hr className="border border-black/10" />

                    <HubungiKami />
                </div>
                <Footer />
            </main>
        </>
    );
}
