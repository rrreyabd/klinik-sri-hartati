import DataTable from "@/Components/shared/DataTable";
import RealTime from "@/Components/shared/RealTime";
import StaffSheet from "@/Components/shared/Staff/StaffSheet";
import { pasien } from "@/lib/data";
import { Head } from "@inertiajs/react";
import { LuClock3 } from "react-icons/lu";

const StaffAntrian = () => {
    
    const field = [
        "Nama",
        "Waktu Antri",
        "Jenis Kelamin",
        "Umur",
        "Layanan",
        "Gejala",
    ];

    return (
        <div className="h-screen w-full bg-customWhite flex justify-center items-center">
            <Head title="Antrian" />
            <div className="w-3/4 flex flex-col gap-8 max-w-[1300px]">
                <header className="flex justify-between">
                    <StaffSheet />
                    <h1 className="text-4xl font-semibold text-ForestGreen">
                        Manajemen Antrian
                    </h1>
                    <span className="w-10"></span>
                </header>

                <div className="flex flex-col gap-4">
                    <div className="py-2 flex justify-between">
                        <p className="font-bold">Antrian Sekarang : #11</p>
                        <div className="bg-KellyGreen py-1 rounded-full font-semibold flex items-center justify-center gap-2 text-customWhite w-36">
                            <LuClock3 />
                            <RealTime />
                        </div>
                    </div>

                    <div className="flex justify-between flex-wrap">
                        <div className="bg-white shadow-md w-64 h-24 rounded-xl p-4 flex items-center gap-6">
                            <img
                                src="/assets/staff/sandclock.png"
                                alt="on-going icon"
                                className="w-18"
                            />
                            <div className="flex flex-col">
                                <p className="text-lg font-medium text-gray-500">
                                    Menunggu
                                </p>
                                <h6 className="font-bold text-xl">5</h6>
                            </div>
                        </div>

                        <div className="bg-white shadow-md w-64 h-24 rounded-xl p-4 flex items-center gap-6">
                            <img
                                src="/assets/staff/xcircle.png"
                                alt="cancel icon"
                                className="w-18"
                            />
                            <div className="flex flex-col">
                                <p className="text-lg font-medium text-gray-500">
                                    Dibatalkan
                                </p>
                                <h6 className="font-bold text-xl">5</h6>
                            </div>
                        </div>

                        <div className="bg-white shadow-md w-64 h-24 rounded-xl p-4 flex items-center gap-6">
                            <img
                                src="/assets/staff/checkcircle.png"
                                alt="success icon"
                                className="w-18"
                            />
                            <div className="flex flex-col">
                                <p className="text-lg font-medium text-gray-500">
                                    Selesai
                                </p>
                                <h6 className="font-bold text-xl">5</h6>
                            </div>
                        </div>

                        <DataTable
                            data={pasien}
                            field={field}
                            table="mt-4"
                            tbody=" h-96"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaffAntrian;
