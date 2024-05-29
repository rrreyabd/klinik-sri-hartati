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

export default function Main({
    auth,
    patient,
    status,
    error,
    tour,
    information,
    appointments,
    notif,
}) {
    const { toast } = useToast();

    useEffect(() => {
        if (status) {
            toast({
                variant: "success",
                title: status,
                description: "Lihat detail pembayaran janji temu Anda",
                action: (
                    <ToastAction
                        altText="Lihat Detail"
                        className="border-white border px-3 py-1 text-sm"
                        descClassName="text"
                    >
                        <Link href="/tagihan">Tagihan</Link>
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
                                            "Kami peduli dengan kesehatan Anda, kami menyediakan layanan reservasi janji temu dengan dokter yang Anda inginkan, kapanpun dan dimanapun.",
                                        side: "left",
                                        align: "start",
                                        nextBtnText: "Lanjut",
                                        prevBtnText: "Kembali",
                                    },
                                },
                                {
                                    element: "#step-2",
                                    popover: {
                                        title: "Janji Temu",
                                        description:
                                            "Reservasi Janji Temu adalah fitur utama dari website kami, kamu bisa dengan mudah membuat janji temu dengan dokter yang kamu inginkan, di hari dan tanggal yang kamu inginkan.",
                                        side: "top",
                                        align: "start",
                                        nextBtnText: "Lanjut",
                                        prevBtnText: "Kembali",
                                    },
                                },
                                {
                                    element: "#step-3",
                                    popover: {
                                        title: "Riwayat Janji Temu",
                                        description:
                                            "Kamu bisa melihat riwayat janji temu yang telah kamu buat, ikuti, maupun yang sudah kamu batalkan",
                                        side: "top",
                                        align: "start",
                                        nextBtnText: "Lanjut",
                                        prevBtnText: "Kembali",
                                    },
                                },
                                {
                                    popover: {
                                        title: "Selamat!",
                                        description:
                                            "Anda telah menyelesaikan tur singkat website kami.",
                                        nextBtnText: "Selesai",
                                        prevBtnText: "Kembali",
                                    },
                                },
                            ],
                            onDestroyed: () => {
                                localStorage.setItem("isSkipped", "true");
                                setShowButton(false);
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
        }, 300000); // 5 Menit

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
                    <Navbar auth={auth} notif={notif}>
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
                    <Profil appointments={appointments} />

                    <hr className="border border-black/10" />

                    <HubungiKami />
                </div>
                <Footer information={information} />
            </main>
            <Toaster />
            {auth.user && showButton && (
                <div className="fixed top-0 left-0 z-10 w-screen h-screen bg-black/50 flex justify-center items-center">
                    <div className="bg-white shadow-md w-2/5 rounded-md p-8 flex flex-col gap-4">
                        <h1 className="text-3xl font-semibold">
                            Apakah kamu masih disana?
                        </h1>
                        <p>
                            Kamu telah diam di halaman ini selama 5 menit. Jika
                            kamu membutuhkan bantuan untuk menggunakan situs
                            kami, klik Tur Website. Jika tidak ingin melakukan
                            apa-apa, klik Batal untuk menutup dialog ini.
                        </p>

                        <div className="flex justify-end gap-4">
                            <button
                                className="font-medium"
                                onClick={() => setShowButton(false)}
                            >
                                Batal
                            </button>
                            <button
                                className="bg-ForestGreen text-white px-4 py-2 rounded-full font-medium"
                                onClick={() => {
                                    localStorage.setItem("isSkipped", "false");
                                    setShowButton(false);
                                }}
                            >
                                Tur Website
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
