import Navbar from "@/Components/shared/user/Navbar";
import { Head, Link } from "@inertiajs/react";

const Fallback = ({ auth }) => {
    return (
        <main className="flex flex-col items-center bg-customWhite lg:bg-customWhite min-h-screen">
            <Head title="404" />
            <div className="px-8 md:px-0 w-full md:w-4/5 max-w-[1300px]">
                <Navbar auth={auth} />

                <div className="h-[70vh] flex flex-col justify-center items-center gap-4">
                    <h1 className="text-9xl font-extrabold bg-gradient-to-r from-Mint via-ForestGreen to-Mint text-transparent bg-clip-text animate-gradient bg-300%">404</h1>
                    <h2 className="text-3xl">Halaman tidak ditemukan.</h2>
                    <Link href="/" className="text-ForestGreen font-semibold text-lg">
                        Kembali ke Beranda
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Fallback;
