import { Head, Link } from "@inertiajs/react";
import StaffSheet from "../../Components/shared/Staff/StaffSheet";
import { Plus } from "lucide-react";
import { useState, useEffect } from "react";

const getWeekDates = () => {
    const now = new Date();
    const startOfWeek = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - 3
    );
    const dates = Array.from({ length: 7 }, (_, i) => {
        const date = new Date(startOfWeek);
        date.setDate(date.getDate() + i);
        return {
            hari: new Intl.DateTimeFormat("id-ID", { weekday: "long" }).format(
                date
            ),
            tanggal: date.getDate(),
            fullDate: date,
        };
    });
    return dates;
};

const StaffAntrian = ({ appointments }) => {
    const today = new Date().toDateString();

    console.log(appointments)

    const [date, setDate] = useState(new Date());
    const [sampleDate, setSampleDate] = useState([]);

    useEffect(() => {
        setSampleDate(getWeekDates());
    }, []);

    console.log(date);

    return (
        <div className="min-h-screen w-full bg-customWhite flex justify-center">
            <Head title="Janji Temu" />
            <div className="w-3/4 py-16 flex flex-col gap-8 max-w-[1300px]">
                <header className="flex justify-between">
                    <StaffSheet />
                    <h1 className="text-4xl font-semibold text-ForestGreen">
                        Manajemen Janji Temu
                    </h1>
                    <span className="w-10"></span>
                </header>

                <div className="flex mt-4 w-full gap-8">
                    <div className="flex flex-col gap-8 w-3/5">
                        {/* TAMBAH JANJI TEMU */}
                        <div className="bg-white rounded-xl shadow-md h-44 w-full flex">
                            <div className="p-6 w-2/3 flex flex-col gap-4">
                                <h2 className="text-2xl font-semibold">
                                    Atur jadwal janji temu pasien dengan dokter
                                    sekarang
                                </h2>
                                <Link
                                    href="/staff/janji-temu/tambah"
                                    className="bg-ForestGreen text-white font-semibold text-sm py-2 px-4 rounded-md w-fit flex items-center gap-2"
                                >
                                    <Plus className="w-4" /> Tambah Antrian
                                </Link>
                            </div>
                            <div className="w-1/3 flex justify-center items-end">
                                <img
                                    src="/assets/staff/6.png"
                                    alt="Janji Temu Image"
                                    className="w-5/6"
                                />
                            </div>
                        </div>

                        {/* KALENDER */}
                        <div className="bg-white rounded-xl shadow-md h-full w-full py-4 px-6 flex flex-col gap-2">
                            <h4 className="text-xl font-semibold">Kalender</h4>
                            <hr className="border w-full" />

                            <div className="flex justify-between">
                                {sampleDate &&
                                    sampleDate.map((sample, index) => {
                                        return (
                                            <div
                                                className={`flex flex-col gap-3 text-gray-500 justify-center`}
                                                key={index}
                                            >
                                                <p className="font-medium">
                                                    {sample.hari}
                                                </p>
                                                <button
                                                    onClick={() =>
                                                        setDate(sample.fullDate)
                                                    }
                                                    className={`w-12 text-2xl font-medium h-12 ${
                                                        sample.fullDate.toDateString() ==
                                                        today
                                                            ? "text-2xl font-medium bg-ForestGreen text-white rounded-full p-2"
                                                            : sample.fullDate ==
                                                              date
                                                            ? "bg-gray-400 text-white rounded-full p-2"
                                                            : ""
                                                    } `}
                                                >
                                                    {sample.tanggal}
                                                </button>
                                            </div>
                                        );
                                    })}

                                {/* <div className="flex flex-col gap-3 text-gray-500 justify-center w-fit">
                                    <p className="font-medium">Rabu</p>
                                    <button
                                        onClick={() => setDate("Clicked")}
                                        className="text-2xl font-medium h-12 w-12 bg-ForestGreen text-white rounded-full p-2"
                                    >
                                        20
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    {/* DATA */}
                    <div className="w-2/5 h-full">
                        <div className="bg-white rounded-xl shadow-md h-full w-full flex flex-col p-8 justify-between">
                            <div className="flex flex-col gap-2">
                                <p className="font-medium text-gray-500">
                                    Total Janji Temu Bulan Ini
                                </p>
                                <h2 className="font-semibold text-4xl">23</h2>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-medium text-gray-500">
                                    Menunggu Janji Temu Bulan Ini
                                </p>
                                <h2 className="font-semibold text-4xl">43</h2>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-medium text-gray-500">
                                    Janji Temu Selesai Bulan Ini
                                </p>
                                <h2 className="font-semibold text-4xl">66</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="flex w-full">
                    <div className="bg-white rounded-xl shadow-md h-64 w-full p-6 flex flex-col">
                        <div className="w-full flex">
                            <div className="text-center font-semibold w-1/4">
                                Timeline
                            </div>
                            <div className="text-center font-semibold w-1/4">
                                Layanan
                            </div>
                            <div className="text-center font-semibold w-1/4">
                                Nama Pasien
                            </div>
                            <div className="text-center font-semibold w-1/4">
                                Status
                            </div>
                        </div>

                        <hr className="border mt-4" />

                        <div className="w-full overflow-y-scroll flex flex-col gap-4 flex-grow display_scroll shadow-inner pt-4">
                            {/*  */}
                            <div className="w-full flex">
                                <div className="w-1/4 flex justify-center items-center">
                                    10.00 - 10.30
                                </div>
                                <div className="w-1/4 flex justify-center items-center">
                                    Konsultasi
                                </div>
                                <div className="w-1/4 flex justify-center items-center">
                                    Raihan Abdillah
                                </div>
                                <div className="w-1/4 flex justify-center items-center">
                                    <div className="bg-[#D72729] text-center py-2 rounded-md w-32 text-white font-semibold text-sm">
                                        Dibatalkan
                                    </div>
                                </div>
                            </div>
                            {/*  */}

                            <div className="w-full flex">
                                <div className="w-1/4 flex justify-center items-center">
                                    10.00 - 10.30
                                </div>
                                <div className="w-1/4 flex justify-center items-center">
                                    Konsultasi
                                </div>
                                <div className="w-1/4 flex justify-center items-center">
                                    Raihan Abdillah
                                </div>
                                <div className="w-1/4 flex justify-center items-center">
                                    <div className="bg-[#1BB357] text-center py-2 rounded-md w-32 text-white font-semibold text-sm">
                                        Selesai
                                    </div>
                                </div>
                            </div>
                            {Array.from({ length: 5 }, (_, i) => (
                                <div className="w-full flex">
                                    <div className="w-1/4 flex justify-center items-center">
                                        10.00 - 10.30
                                    </div>
                                    <div className="w-1/4 flex justify-center items-center">
                                        Konsultasi
                                    </div>
                                    <div className="w-1/4 flex justify-center items-center">
                                        Raihan Abdillah
                                    </div>
                                    <div className="w-1/4 flex justify-center items-center">
                                        <div className="bg-[#E8BA5F] text-center py-2 rounded-md w-32 text-white font-semibold text-sm">
                                            Berlangsung
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaffAntrian;
