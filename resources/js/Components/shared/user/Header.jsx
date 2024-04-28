import { Link } from "@inertiajs/react";

const Header = () => {
    return (
        <header className="w-full flex flex-col lg:flex-row justify-between space-x-4 py-4 lg:py-20">
            <div className="flex flex-col w-full lg:w-1/2 gap-5">
                <h1 className="text-4xl sm:text-5xl font-semibold tracking-wide leading-tight">
                    Kami Peduli dengan <br />
                    <span className="bg-gradient-to-r from-Mint via-blue-500 to-Mint text-transparent bg-clip-text animate-gradient bg-300% ">
                        Kesehatan
                    </span>{" "}
                    dan <br />
                    <span className="bg-gradient-to-r from-Mint via-blue-500 to-Mint text-transparent bg-clip-text animate-gradient bg-300% ">
                        Kebahagiaan
                    </span>{" "}
                    Anda
                </h1>

                <p className="text-xl text-black/50">
                    Kami adalah klinik yang berkomitmen untuk memberikan
                    pelayanan kesehatan terbaik kepada Anda dan keluarga.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0">
                    <Link
                        href="/"
                        className="bg-ForestGreen flex items-center justify-center px-8 py-3  text-white font-semibold rounded-full"
                    >
                        Ambil Antrian
                    </Link>

                    <Link
                        href="/"
                        className="border-2 border-ForestGreen bg-customWhite text-ForestGreen flex items-center justify-center px-8 py-3 font-semibold rounded-full"
                    >
                        Atur Janji Temu
                    </Link>
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
