import Navbar from "@/Components/shared/user/Navbar";
import { Head } from "@inertiajs/react";

const Tagihan = ({ auth }) => {
    const user = auth.user;
    return (
        <main className="flex flex-col items-center bg-customWhite lg:bg-customWhite min-h-screen">
            <div className="px-8 md:px-0 w-full md:w-4/5 max-w-[1300px]">
                <Head title="Tagihan" />
                <Navbar auth={auth} />
                <div className="w-full flex flex-col gap-8">
                    <h1 className="text-3xl font-semibold">Tagihan</h1>
                    <div className="">Filter</div>
                    <div className="grid grid-cols-3 gap-8">
                        <div className="bg-white shadow-md rounded-md h-80"></div>
                        <div className="bg-white shadow-md rounded-md h-80"></div>
                        <div className="bg-white shadow-md rounded-md h-80"></div>
                        <div className="bg-white shadow-md rounded-md h-80"></div>
                        <div className="bg-white shadow-md rounded-md h-80"></div>
                        <div className="bg-white shadow-md rounded-md h-80"></div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Tagihan;
