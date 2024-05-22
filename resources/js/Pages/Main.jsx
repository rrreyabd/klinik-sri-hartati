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
import React from "react";

// Driver.js
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { useState } from "react";

// Framer Motion
import { motion } from "framer-motion";
import { FaQuestion } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function Main({ auth, patient, status, error, tour }) {
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
                description:
                    "Ada masalah saat membuat janji temu. Silahkan coba lagi.",
            });
        }
    }, [status, error]);

    // Driver.js
    const [isSkipped, setIsSkipped] = useState(
        tour || localStorage.getItem("isSkipped")
    );
    
    {
        auth &&
            auth.user &&
            useEffect(() => {
                const interval = setInterval(() => {
                    if (
                        localStorage.getItem("isSkipped") == "false" ||
                        localStorage.getItem("isSkipped") == null
                    ) {
                        localStorage.setItem("isSkipped", "process");
                        const driverObj = driver({
                            popoverClass: "driverjs-theme",
                            animate: true,
                            smoothScroll: true,
                            steps: [
                                {
                                    element: "#step-1",
                                    popover: {
                                        title: "Peduli",
                                        description:
                                            "adalah satu kata yang dapat menggambarkan kami.",
                                        side: "left",
                                        align: "start",
                                        nextBtnText: "Lanjutkan",
                                        prevBtnText: "Kembali",
                                    },
                                },
                                {
                                    element: "#step-2",
                                    popover: {
                                        title: "Janji Temu",
                                        description:
                                            "Anda bisa klik tombol ini jika ingin membuat Janji Temu.",
                                        side: "top",
                                        align: "start",
                                        nextBtnText: "Lanjutkan",
                                        prevBtnText: "Kembali",
                                    },
                                },
                                {
                                    element: "#step-3",
                                    popover: {
                                        title: "Rekam Medis",
                                        description:
                                            "Anda bisa klik tombol ini jika ingin melihat Rekam Medis milik Anda.",
                                        side: "top",
                                        align: "start",
                                        nextBtnText: "Lanjutkan",
                                        prevBtnText: "Kembali",
                                    },
                                },
                                {
                                    popover: {
                                        title: "Selamat!",
                                        description:
                                            "Anda telah menyelesaikan tur singkat website kami.",
                                    showButtons: false
                                    },
                                },
                            ],
                            onDestroyed: () => {
                                localStorage.setItem("isSkipped", "true");
                                setShowButton(false)
                            },
                        });

                        driverObj.drive();
                    }
                }, 1000);

                return () => clearInterval(interval);
            }, []);
    }

    // Idle State
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 6);

        return () => clearTimeout(timer);
    }, []);

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
                        <div className="hidden lg:flex items-center space-x-2 unselectable">
                            <Link
                                href="#home"
                                className="text-customBlack hover:bg-[#e2e2e2] px-1 xl:px-4 py-2 rounded-full transition-all underline-custom"
                            >
                                Home
                            </Link>
                            <Link
                                href="#layanan"
                                className="text-customBlack hover:bg-[#e2e2e2] px-1 xl:px-4 py-2 rounded-full transition-all underline-custom"
                            >
                                Layanan
                            </Link>
                            <Link
                                href="#tentang"
                                className="text-customBlack hover:bg-[#e2e2e2] px-1 xl:px-4 py-2 rounded-full transition-all underline-custom"
                            >
                                Tentang Kami
                            </Link>
                            <Link
                                href="#kontak"
                                className="text-customBlack hover:bg-[#e2e2e2] px-1 xl:px-4 py-2 rounded-full transition-all underline-custom"
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
            {auth.user && showButton && (
                <>
                    <motion.button
                        className="fixed bottom-10 right-10 p-3 rounded-full bg-ForestGreen shadow-md flex justify-center items-center animate-bounce transition-all hover:brightness-90"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        onClick={() =>
                            localStorage.setItem("isSkipped", "false")
                        }
                        type="button"
                    >
                        <FaQuestion className="h-6 w-6 text-customWhite" />
                        {/* <button
                            type="button"
                            onClick={() => setShowButton(false)}
                            className="absolute -top-0 right-0 h-4 w-4 rounded-full bg-red-600 text-white flex justify-center items-center text-xs"
                        >
                            <FaX className="w-3 h-3" />
                        </button> */}
                    </motion.button>
                </>
            )}
        </>
    );
}
