import { Head, Link } from "@inertiajs/react";
import { TbLogout } from "react-icons/tb";
import React, { useEffect, useState } from "react";

const DokterDashboard = ({ auth, patient }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const days = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
    ];

    const months = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];

    const day = days[currentDate.getDay()];
    const date = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    return (
        <div className="bg-customWhite min-h-screen flex items-center flex-col">
            <Head title="Dokter" />
            <header className="bg-white shadow-md h-20 w-full flex justify-center">
                <nav className="w-3/4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img src="/assets/logo.png" alt="Logo" width={36} />
                        <p className="font-semibold text-lg">
                            Klinik Sri Hartati
                        </p>
                    </div>

                    <div className="flex gap-4 items-center">
                        <p className="font-semibold">{auth.user.name}</p>
                        <Link
                            href="/logout"
                            method="post"
                            as="button"
                            className="text-xl text-customRed bg-red-200 p-2 rounded-full hover:bg-red-300 transition-all duration-200 ease-in-out"
                        >
                            <TbLogout />
                        </Link>
                    </div>
                </nav>
            </header>

            <main className="flex flex-col gap-8 mt-8 w-3/4">
                <div className="grid grid-cols-3 gap-8">
                    {/* STATUS */}
                    <div className="h-44 bg-white shadow-md rounded-md p-4 flex flex-col">
                        <div className="flex gap-6 h-1/6 items-center">
                            <p className="text-xl font-semibold">Janji Temu</p>

                            <div className="flex gap-2 items-center">
                                <div className="h-3 w-3 rounded-full bg-customGreen"></div>
                                <p className="font-semibold text-sm text-customGreen">
                                    Selesai
                                </p>
                            </div>

                            <div className="flex gap-2 items-center">
                                <div className="h-3 w-3 rounded-full bg-customRed"></div>
                                <p className="font-semibold text-sm text-customRed">
                                    Batal
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center items-center h-5/6">
                          CHARTJS HERE
                        </div>
                    </div>

                    {/* JENIS KELAMIN */}
                    <div className="h-44 bg-white shadow-md rounded-md p-4 text-center">
                        <p className="text-xl font-semibold h-1/6">
                            Jenis Kelamin
                        </p>
                        <div className="flex h-5/6">
                            <div className="w-1/2 flex justify-center items-center">
                                CHARTJS HERE
                            </div>
                            <div className="w-1/2 flex flex-col justify-center pl-4 gap-2">
                                <div className="flex gap-2 items-center">
                                    <div className="h-3 w-3 rounded-full bg-[#4dc5c8]"></div>
                                    <p className="font-semibold text-sm text-[#4dc5c8]">
                                        Laki-laki
                                    </p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="h-3 w-3 rounded-full bg-[#d72729]"></div>
                                    <p className="font-semibold text-sm text-[#d72729]">
                                        Perempuan
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* WAKTU */}
                    <div className="h-44 bg-white shadow-md rounded-md p-4 flex flex-col items-center gap-4 justify-center">
                        <div className="flex gap-4 items-center">
                            <div className="bg-ForestGreen text-white flex flex-col items-center p-2 rounded-lg w-[72px]">
                                <p className="font-medium">Jam</p>
                                <p className="font-medium text-2xl">{hours}</p>
                            </div>

                            <p className="text-3xl">:</p>

                            <div className="bg-ForestGreen text-white flex flex-col items-center p-2 rounded-lg w-[72px]">
                                <p className="font-medium">Menit</p>
                                <p className="font-medium text-2xl">
                                    {minutes}
                                </p>
                            </div>

                            <p className="text-3xl">:</p>

                            <div className="bg-ForestGreen text-white flex flex-col items-center p-2 rounded-lg w-[72px]">
                                <p className="font-medium">Detik</p>
                                <p className="font-medium text-2xl">
                                    {seconds}
                                </p>
                            </div>
                        </div>
                        <p className="text-xl font-semibold text-ForestGreen">
                            {day}, {date} {months[month]} {year}
                        </p>
                    </div>
                </div>

                <div className="w-full h-[55vh] bg-white rounded-md shadow-md p-4">
                <p className="text-xl font-semibold">Janji Temu Hari Ini</p>
                </div>
            </main>
        </div>
    );
};

export default DokterDashboard;
