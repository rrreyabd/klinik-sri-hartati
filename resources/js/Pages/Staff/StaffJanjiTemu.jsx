import { Head, Link } from "@inertiajs/react";
import StaffSheet from "../../Components/shared/Staff/StaffSheet";
import { Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { Toaster } from "@/Components/ui/toaster";
import { useToast } from "@/Components/ui/use-toast";
import { FaCheck } from "react-icons/fa";

const StaffJanjiTemu = ({ appointments, status, error }) => {
    // Variable Hari Ini
    const today = new Date().toDateString();

    // State
    const [date, setDate] = useState(new Date());
    const [sampleDate, setSampleDate] = useState([]);

    // UseEffect Tanggal Mingguan
    useEffect(() => {
        setSampleDate(getWeekDates());
    }, []);

    // Format 08:00:00 menjadi 08:00
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;

    console.log("Date: " + formattedDate);

    // Toaster
    const { toast } = useToast();

    useEffect(() => {
        if (status) {
            toast({
                variant: "success",
                title: status,
                description: "Janji temu berhasil dibuat.",
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

    return (
        <>
            <div className="min-h-screen w-full bg-customWhite flex justify-center">
                <Head title="Janji Temu" />
                <div className="w-3/4 py-16 flex flex-col gap-8 max-w-[1300px]">
                    <header className="flex justify-between">
                        <StaffSheet />
                        <h1 className="text-4xl font-semibold ">
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
                                        Lihat jadwal janji temu pasien dengan
                                        dokter sekarang
                                    </h2>
                                    {/* <Link
                                        href="/staff/janji-temu/daftar"
                                        className="bg-ForestGreen text-white font-semibold text-sm py-2 px-4 rounded-md w-fit flex items-center gap-2"
                                    >
                                        <Plus className="w-4" /> Tambah Antrian
                                    </Link> */}
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
                                <h4 className="text-xl font-semibold">
                                    Kalender
                                </h4>
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
                                                            setDate(
                                                                sample.fullDate
                                                            )
                                                        }
                                                        className={`w-12 text-2xl font-medium h-12 transition-all ${
                                                            sample.fullDate.toDateString() ==
                                                            today
                                                                ? "text-2xl font-medium bg-ForestGreen text-white rounded-full p-2"
                                                                : sample.fullDate ==
                                                                  date
                                                                ? "bg-KellyGreen text-white rounded-full p-2"
                                                                : ""
                                                        } `}
                                                    >
                                                        {sample.tanggal}
                                                    </button>
                                                </div>
                                            );
                                        })}
                                </div>

                                <div className="flex gap-8 mt-4">
                                    <div className="flex gap-2 items-center">
                                        <div className="h-3 w-3 bg-ForestGreen rounded-full"></div>
                                        <p className="text-sm">Hari ini</p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <div className="h-3 w-3 bg-KellyGreen rounded-full"></div>
                                        <p className="text-sm">
                                            Tanggal dipilih
                                        </p>
                                    </div>
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
                                    <h2 className="font-semibold text-4xl">
                                        23
                                    </h2>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="font-medium text-gray-500">
                                        Menunggu Janji Temu Bulan Ini
                                    </p>
                                    <h2 className="font-semibold text-4xl">
                                        43
                                    </h2>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="font-medium text-gray-500">
                                        Janji Temu Selesai Bulan Ini
                                    </p>
                                    <h2 className="font-semibold text-4xl">
                                        66
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM */}
                    <div className="flex w-full">
                        <div className="bg-white rounded-xl shadow-md h-96 w-full p-6 flex flex-col">
                            <div className="w-full flex">
                                <div className="text-center font-semibold w-1/4">
                                    Nama Pasien
                                </div>
                                <div className="text-center font-semibold w-1/4">
                                    Dokter
                                </div>
                                <div className="text-center font-semibold w-1/4">
                                    Layanan
                                </div>
                                <div className="text-center font-semibold w-1/4">
                                    Jadwal
                                </div>
                            </div>

                            <hr className="border mt-4" />

                            <div className="w-full overflow-y-auto flex flex-col flex-grow display_scroll shadow-inner pt-4">
                                {appointments &&
                                    appointments.map((appointment, index) => {
                                        let time = new Date(
                                            `1970-01-01T${appointment.time}Z`
                                        );

                                        time.setMinutes(time.getMinutes() + 30);

                                        let hours = time.getUTCHours();
                                        let minutes = time.getUTCMinutes();

                                        let timeLimit = `${hours
                                            .toString()
                                            .padStart(2, "0")}:${minutes
                                            .toString()
                                            .padStart(2, "0")}:00`;

                                        // Get Real Time
                                        const [currentDate, setCurrentDate] =
                                            useState(new Date());

                                        useEffect(() => {
                                            const timer = setInterval(() => {
                                                setCurrentDate(new Date());
                                            }, 1000);

                                            return () => {
                                                clearInterval(timer);
                                            };
                                        }, []);

                                        const hoursNow = currentDate.getHours();
                                        const minutesNow = currentDate
                                            .getMinutes()
                                            .toString()
                                            .padStart(2, "0");

                                        const realTime =
                                            hoursNow + ":" + minutesNow;

                                        let onGoing =
                                            realTime >=
                                                appointment.time.substring(
                                                    0,
                                                    5
                                                ) && realTime < timeLimit;

                                        return appointment.date ==
                                            formattedDate ? (
                                            <div
                                                className={`w-full flex border-b py-2 `}
                                            >
                                                <div className="w-1/4 px-4 font-medium">
                                                    {appointment.user.name}
                                                </div>
                                                <div className="w-1/4 px-4">
                                                    {appointment.doctor.name}
                                                </div>
                                                <div className="w-1/4 text-center px-4">
                                                    {appointment.treatment.name}
                                                </div>
                                                <div className="w-1/4 text-center px-4 flex justify-center">
                                                    <p className="w-11">
                                                        {appointment.time.substring(
                                                            0,
                                                            5
                                                        )}
                                                    </p>
                                                    <p className="mx-2">-</p>
                                                    <p className="w-11">
                                                        {timeLimit.substring(
                                                            0,
                                                            5
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                        ) : null;
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </>
    );
};

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

export default StaffJanjiTemu;
