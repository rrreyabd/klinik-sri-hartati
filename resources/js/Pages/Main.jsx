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
import Joyride from "react-joyride";
import { useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaX } from "react-icons/fa6";

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
                description:
                    "Ada masalah saat membuat janji temu. Silahkan coba lagi.",
            });
        }
    }, [status, error]);

    // Joyride
    const isSkipped = auth.user.isSkipped;
    const [{ run, steps }, setTourState] = useState({
        run: !isSkipped,
        steps: [
            {
                content: <h2>Lets Begin</h2>,
                locale: {
                    skip: (
                        <Link
                            href="/skip/tour"
                            className="bg-red-600 text-white px-4 py-2 rounded-md"
                        >
                            Skip
                        </Link>
                    ),
                },
                placement: "center",
                target: "body",
            },
            {
                content: <h2>Here's first step</h2>,
                placement: "bottom",
                target: "#step-1",
                title: "First Step",
            },
        ],
    });
    console.log(run);

    // Idle State
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 50000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Head title="Home" />
            <main
                className="flex flex-col items-center bg-customWhite lg:bg-customWhite"
                id="home"
            >
                {showButton && (
                    <motion.button
                        className="fixed bottom-10 right-10 p-3 rounded-full bg-ForestGreen shadow-md flex justify-center items-center animate-bounceSlow"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        onClick={() => setTourState({ run: true })}
                        type="button"
                    >
                        <FaQuestion className="h-6 w-6 text-customWhite" />
                        <button
                            type="button"
                            onClick={() => setShowButton(false)}
                            className="absolute -top-0 right-0 h-4 w-4 rounded-full bg-red-600 text-white flex justify-center items-center text-xs"
                        >
                            <FaX className="w-3 h-3" />
                        </button>
                    </motion.button>
                )}
                <Joyride
                    continuous
                    callback={() => {}}
                    run={run}
                    steps={steps}
                    hideCloseButton
                    scrollToFirstStep
                    showSkipButton
                    showProgress
                />
                <div className="px-8 md:px-0 w-full md:w-4/5 max-w-[1300px]">
                    {/* Nav */}
                    <Navbar auth={auth}>
                        <div className="hidden lg:flex items-center space-x-2 unselectable">
                            <Link
                                id="step-1"
                                href="#home"
                                className="text-customBlack hover:bg-[#e2e2e2] px-4 py-2 rounded-full transition-all underline-custom"
                            >
                                Home
                            </Link>
                            <Link
                                href="#layanan"
                                className="text-customBlack hover:bg-[#e2e2e2] px-4 py-2 rounded-full transition-all underline-custom"
                            >
                                Layanan
                            </Link>
                            <Link
                                href="#tentang"
                                className="text-customBlack hover:bg-[#e2e2e2] px-4 py-2 rounded-full transition-all underline-custom"
                            >
                                Tentang Kami
                            </Link>
                            <Link
                                href="#kontak"
                                className="text-customBlack hover:bg-[#e2e2e2] px-4 py-2 rounded-full transition-all underline-custom"
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
