import { Head, Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import DokterNav from "./DokterNav";

const DokterDashboard = ({ auth, appointments }) => {
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
            <DokterNav auth={auth} />
            <main className="flex flex-col gap-8 mt-8 w-3/4">
                <div className="grid grid-cols-3 gap-8">
                    {/* STATUS */}
                    <div className="h-44 bg-white shadow-md rounded-xl p-4 flex flex-col">
                        <div className="flex gap-6 h-1/6 items-center">
                            <p className="text-xl font-semibold pl-2">
                                Janji Temu
                            </p>

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
                    <div className="h-44 bg-white shadow-md rounded-xl p-4 text-center">
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
                                        Laki-laki
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* WAKTU */}
                    <div className="h-44 bg-white shadow-md rounded-xl p-4 flex flex-col items-center gap-4 justify-center">
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

                <div className="w-full h-[55vh] bg-white rounded-xl shadow-md p-6 flex flex-col">
                    <div className="flex justify-between items-center">
                        <p className="text-xl font-semibold">
                            Janji Temu Hari Ini
                        </p>

                        <div className="mt-4 flex items-center gap-2 justify-end">
                            <div className="h-3 w-3 bg-ForestGreen rounded-full"></div>
                            <p className="text-sm font-medium">
                                Sedang Berlangsung
                            </p>
                        </div>
                    </div>

                    {/* DATATABLE */}

                    <DataTableDokter
                        c1="w-[60px] text-center"
                        c2="w-[120px]"
                        c3="w-[310px]"
                        c4="w-[180px]"
                        c5="w-[200px] text-center"
                        c6="w-[150px]"
                        data={appointments}
                        hours={hours}
                        minutes={minutes}
                        seconds={seconds}
                    />
                </div>
            </main>
        </div>
    );
};

export default DokterDashboard;

export const DataTableDokter = ({
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    data,
    trClassName,
    hours,
    minutes,
    seconds,
}) => {
    return (
        <>
            <table className="w-full divide-y divide-gray-200 mt-4">
                <thead className="bg-customWhite/20 border-b border-gray-200">
                    <tr>
                        <th
                            className={`py-3 px-1 text-left text-sm font-semibold text-ForestGreen uppercase tracking-wider ${c1} `}
                        >
                            No
                        </th>
                        <th
                            className={`py-3 px-1 text-left text-sm font-semibold text-ForestGreen uppercase tracking-wider ${c2} `}
                        >
                            Jadwal
                        </th>
                        <th
                            className={`py-3 px-1 text-left text-sm font-semibold text-ForestGreen uppercase tracking-wider ${c3} `}
                        >
                            Nama Pasien
                        </th>
                        <th
                            className={`py-3 px-1 text-left text-sm font-semibold text-ForestGreen uppercase tracking-wider ${c4} `}
                        >
                            Layanan
                        </th>
                        <th
                            className={`py-3 px-1 text-left text-sm font-semibold text-ForestGreen uppercase tracking-wider ${c5} `}
                        >
                            Jenis Kelamin
                        </th>
                        <th
                            className={`py-3 px-1 text-left text-sm font-semibold text-ForestGreen uppercase tracking-wider ${c6} `}
                        >
                            Rekam Medis
                        </th>
                    </tr>
                </thead>
            </table>
            {data.length > 1 ? (
                <div className="min-h-72 overflow-y-auto overflow-x-auto w-full display_scroll">
                    <table className="w-full">
                        <tbody className="divide-y divide-gray-200">
                            {data &&
                                data.map((appointment, i) => {
                                    const time = new Date(
                                        `1970-01-01T${appointment.time}Z`
                                    );
                                    time.setMinutes(time.getMinutes() + 30);
                                    const timeLimit = time
                                        .toISOString()
                                        .substr(11, 5);

                                    const realTime =
                                        hours + ":" + minutes + ":" + seconds;

                                    return (
                                        <tr
                                            key={i}
                                            className={
                                                realTime.substring(0, 5) >=
                                                    appointment.time.substring(
                                                        0,
                                                        5
                                                    ) &&
                                                realTime.substring(0, 5) <
                                                    timeLimit.substring(0, 5)
                                                    ? "bg-ForestGreen text-white"
                                                    : ""
                                            }
                                        >
                                            <td className={`py-4 px-1 ${c1} `}>
                                                {i + 1}
                                            </td>
                                            <td className={`py-4 px-1 ${c2} `}>
                                                {appointment.time.substring(
                                                    0,
                                                    5
                                                )}{" "}
                                                - {timeLimit.substring(0, 5)}
                                            </td>
                                            <td className={`py-4 px-1 ${c3} `}>
                                                {appointment.name}
                                            </td>
                                            <td className={`py-4 px-1 ${c4} `}>
                                                {appointment.treatment.name}
                                            </td>
                                            <td className={`py-4 px-1 ${c5} `}>
                                                {appointment.gender}
                                            </td>
                                            <td
                                                className={`py-4 px-1 text-sm font-medium upper underline ${
                                                    realTime.substring(0, 5) >=
                                                        appointment.time.substring(
                                                            0,
                                                            5
                                                        ) &&
                                                    realTime.substring(0, 5) <
                                                        timeLimit.substring(
                                                            0,
                                                            5
                                                        )
                                                        ? "text-white"
                                                        : "text-ForestGreen"
                                                } ${c6} `}
                                            >
                                                <Link
                                                    href={route(
                                                        "dokter.pasien",
                                                        {
                                                            id: appointment.user_id,
                                                        }
                                                    )}
                                                >
                                                    Lihat Rekam Medis
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="flex flex-grow justify-center items-center">
                    <h3 className="text-3xl font-medium text-gray-500">
                        Tidak ada janji temu hari ini
                    </h3>
                </div>
            )}
        </>
    );
};
