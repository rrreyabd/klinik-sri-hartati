import Navbar from "@/Components/shared/user/Navbar";
import { Head } from "@inertiajs/react";

const Tagihan = ({ auth }) => {
    const user = auth.user;
    return (
        <main
            className="flex flex-col items-center bg-customWhite lg:bg-customWhite min-h-screen"
        >
            <div className="px-8 md:px-0 w-full md:w-4/5 max-w-[1300px]">
                <Head title="Tagihan" />
                <Navbar auth={auth} />
                <div className="w-full">
                    <h1 className="text-3xl font-semibold">Pembayaran</h1>
                </div>
        </div>
        </main>
    );
};

export default Tagihan;
