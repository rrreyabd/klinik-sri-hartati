import Footer from "@/Components/shared/user/Footer";
import Header from "@/Components/shared/user/Header";
import HubungiKami from "@/Components/shared/user/HubungiKami";
import Layanan from "@/Components/shared/user/Layanan";
import Profil from "@/Components/shared/user/Profil";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/shared/user/Navbar";
import { Toaster } from "@/Components/ui/toaster";
import { useToast } from "@/Components/ui/use-toast";
import { useEffect } from "react";
import { ToastAction } from "@radix-ui/react-toast";

export default function Main({ auth, patient, status, error }) {
    const { toast } = useToast();
    
    useEffect(() => {
        if (status) {
            toast({
                variant: "success",
                title: status,
                description: "Lihat informasi janji temu Anda",
                action: (
                    <ToastAction
                        altText="Lihat Detail"
                        className="border-white border px-4 py-1 rounded-md"    
                        descClassName="text"
                    >
                        <Link href="/profile">Detail</Link>
                    </ToastAction>
                ),
            });
        }
        if (error) {
            toast({
                variant: "error",
                title: error,
                description: "Ada masalah saat membuat janji temu. Silahkan coba lagi.",
            });
        }
    }, [status, error]);

    return (
        <>
            <Head title="Home" />
            <main
                className="flex flex-col items-center bg-customWhite lg:bg-customWhite"
                id="home"
            >
                <div className="px-8 md:px-0 w-full md:w-4/5 max-w-[1300px]">
                    {/* Nav */}
                    <Navbar auth={auth}>
                        <div className="hidden lg:flex items-center space-x-4 xl:space-x-8 unselectable">
                            <Link
                                href="#home"
                                className="text-customBlack hover:text-ForestGreen transition-all underline-custom"
                            >
                                Home
                            </Link>
                            <Link
                                href="#layanan"
                                className="text-customBlack hover:text-ForestGreen transition-all underline-custom"
                            >
                                Layanan
                            </Link>
                            <Link
                                href="#tentang"
                                className="text-customBlack hover:text-ForestGreen transition-all underline-custom"
                            >
                                Tentang Kami
                            </Link>
                            <Link
                                href="#kontak"
                                className="text-customBlack hover:text-ForestGreen transition-all underline-custom"
                            >
                                Kontak
                            </Link>
                        </div>
                    </Navbar>

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
            <Toaster />
        </>
    );
}
