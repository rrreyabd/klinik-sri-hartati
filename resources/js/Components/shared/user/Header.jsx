import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";

const Header = () => {
    return (
        <header className="w-full flex flex-col lg:flex-row justify-between space-x-4 py-4 lg:py-20">
            <div className="flex flex-col w-full lg:w-1/2 gap-5">
                <h1 className="text-4xl sm:text-5xl font-semibold tracking-wide leading-tight" id="step-1">
                    Kami Peduli dengan <br />
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-gradient-to-r from-Mint via-blue-500 to-Mint text-transparent bg-clip-text animate-gradient bg-300% "
                    >
                        Kesehatan
                    </motion.span>{" "}
                    dan <br />
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="bg-gradient-to-r from-Mint via-blue-500 to-Mint text-transparent bg-clip-text animate-gradient bg-300% "
                    >
                        Kebahagiaan
                    </motion.span>{" "}
                    Anda
                </h1>

                <p className="text-xl text-black/50">
                    Kami adalah klinik yang berkomitmen untuk memberikan
                    pelayanan kesehatan terbaik kepada Anda dan keluarga.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0">
                    <Link
                        href={route("janjiTemu.index")}
                        className="bg-ForestGreen flex items-center justify-center px-8 py-3 font-semibold rounded-full text-customWhite border-2 border-ForestGreen " id="step-2"
                    >
                        Atur Janji Temu
                    </Link>

                    <Link
                        href={route("jadwal.index")}
                        className="border-2 border-ForestGreen bg-customWhite text-ForestGreen flex items-center justify-center px-8 py-3 font-semibold rounded-full" id="step-3"
                    >
                        Riwayat Janji Temu
                    </Link>
                    
                    {/* <Link
                        href={route("rekam-medis.index")}
                        className="border-2 border-ForestGreen bg-customWhite text-ForestGreen flex items-center justify-center px-8 py-3 font-semibold rounded-full" id="step-3"
                    >
                        Rekam Medis
                    </Link> */}
                </div>
            </div>

            <div className="hidden lg:block w-1/2 h-[355px]">
                <img
                    src="/assets/image1.png"
                    alt="Header Image"
                    className="h-full w-full rounded-md shadow-md"
                />
            </div>
        </header>
    );
};

export default Header;
