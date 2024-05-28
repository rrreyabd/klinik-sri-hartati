import WhiteNavbarLayout from "@/Layouts/WhiteNavbarLayout";
import { useState } from "react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { Link } from "@inertiajs/react";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const Jadwal = ({
    auth,
    appointments,
    doneAppointments,
    pendingAppointments,
    cancelledAppointments,
}) => {
    const [showData, setShowData] = useState("Semua");
    const [data, setData] = useState(appointments);

    console.log(showData);

    useEffect(() => {
        if (showData == "Semua") setData(appointments);
        if (showData == "Menunggu") setData(pendingAppointments);
        if (showData == "Selesai") setData(doneAppointments);
        if (showData == "Batal") setData(cancelledAppointments);
    }, [showData]);

    return (
        <WhiteNavbarLayout auth={auth} title="Jadwal">
            <div className="mt-6 flex flex-col gap-6">
                <div className="flex justify-between">
                    <Link href="/" className="flex gap-2 items-center font-semibold w-32 group">
                        <div className="p-1 group-hover:bg-gray-200 transition-all duration-500 rounded-full">
                            <ArrowLeft className="h-6 w-6" />
                        </div>
                        Kembali
                    </Link>
                    <h1 className="text-4xl font-semibold">
                        Jadwal Janji Temu
                    </h1>

                    <div className="w-32"></div>
                </div>

                {/* Dropdown */}
                <div className="flex gap-4 items-center">
                    <p className="font-semibold">Status: </p>

                    <Select
                        defaultValue="Semua"
                        onValueChange={(value) => setShowData(value)}
                    >
                        <SelectTrigger className="w-40 bg-transparent bg-white border-none shadow-md h-12 font-semibold focus:ring-0 focus:outline-ForestGreen">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className={`bg-white border-2 `}>
                            <SelectItem
                                value="Semua"
                                className={`x transition-all font-semibold cursor-pointer py-3 bg-white w-full flex justify-between border-b border-gray-300`}
                            >
                                Semua
                            </SelectItem>
                            <SelectItem
                                value="Menunggu"
                                className={`x transition-all font-semibold cursor-pointer py-3 bg-white w-full flex justify-between border-b border-gray-300`}
                            >
                                Menunggu
                            </SelectItem>
                            <SelectItem
                                value="Selesai"
                                className={`x transition-all font-semibold cursor-pointer py-3 bg-white w-full flex justify-between border-b border-gray-300`}
                            >
                                Selesai
                            </SelectItem>
                            <SelectItem
                                value="Batal"
                                className={`x transition-all font-semibold cursor-pointer py-3 bg-white w-full flex justify-between`}
                            >
                                Batal
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="p-6 bg-white shadow-md rounded-lg">
                    <div className="relative h-96 overflow-scroll rounded-lg border">
                        <table className="w-full">
                            <thead className="sticky top-0 left-0 font-semibold bg-ForestGreen text-white shadow-md">
                                <tr>
                                    <td className="py-4 text-center">#</td>
                                    <td className="py-4">Tanggal</td>
                                    <td className="py-4">Jam</td>
                                    <td className="py-4 px-1 text-center">
                                        Layanan
                                    </td>
                                    <td className="py-4 px-4">Dokter</td>
                                    <td className="py-4 text-center w-72 px-4">
                                        Status
                                    </td>
                                    {["Semua", "Menunggu"].includes(
                                        showData
                                    ) && (
                                        <td className="py-4 px-1 text-center">
                                            Aksi
                                        </td>
                                    )}
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-300">
                                {data &&
                                    data.map((appointment, i) => {
                                        return (
                                            <tr className="font-medium">
                                                <td className="text-center py-4 px-4">
                                                    {i + 1}
                                                </td>
                                                <td className="py-4">
                                                    {appointment.date
                                                        .split("-")
                                                        .reverse()
                                                        .join("-")}
                                                </td>
                                                <td className="py-4">
                                                    {appointment.time.substring(
                                                        0,
                                                        5
                                                    )}
                                                </td>
                                                <td className="text-center py-4">
                                                    {appointment.treatment.name}
                                                </td>
                                                <td className="py-4 px-4">
                                                    {appointment.doctor.name}
                                                </td>
                                                <td className={`py-4 px-4`}>
                                                    <div
                                                        className={`text-white font-medium text-center px-2 py-1 rounded-md w-full ${
                                                            appointment.status ==
                                                            "Selesai"
                                                                ? "bg-green-600"
                                                                : appointment.status ==
                                                                  "Batal"
                                                                ? "bg-red-600"
                                                                : appointment.status ==
                                                                  "Menunggu Pembayaran"
                                                                ? "bg-yellow-600"
                                                                : appointment.status ==
                                                                  "Menunggu Jadwal"
                                                                ? "bg-ForestGreen"
                                                                : ""
                                                        } `}
                                                    >
                                                        {appointment.status}
                                                    </div>
                                                </td>
                                                {["Semua", "Menunggu"].includes(
                                                    showData
                                                ) && (
                                                    <td className="text-center py-4 px-2 ">
                                                        {appointment.status ==
                                                            "Menunggu Pembayaran" && (
                                                            <Link
                                                                href={route(
                                                                    "tagihan.index"
                                                                )}
                                                                className="text-ForestGreen underline font-semibold"
                                                            >
                                                                Bayar
                                                            </Link>
                                                        )}
                                                    </td>
                                                )}
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </WhiteNavbarLayout>
    );
};

export default Jadwal;
