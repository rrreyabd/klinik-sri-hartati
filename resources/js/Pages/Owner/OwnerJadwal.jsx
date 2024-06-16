import OwnerLayout from "@/Layouts/OwnerLayout";
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { FaEdit, FaPlus, FaRegTrashAlt } from "react-icons/fa";

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";

const OwnerJadwal = ({ doctors }) => {
    const [open, setOpen] = useState(true);

    const { data, setData, post, processing, errors } = useForm({
        doctor_id: "",
        date: "",
        time: "",
        reason: "",
    });

    const StoreSchedule = (e) => {
        e.preventDefault()

        post(route('schedule.store'))
    }

    const schedules = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00']

    return (
        <OwnerLayout open={open} setOpen={setOpen} navTitle="Jadwal">
            <div className="text-lg font-medium">
                <span className="text-gray-500">Dashboard </span> &gt; Jadwal
            </div>

            <div className="flex justify-between mt-8">
                <input
                    type="text"
                    placeholder="Cari disini..."
                    className="rounded-md border-gray-400 w-72 placeholder:font-medium placeholder:text-gray-400 focus:border-ForestGreen focus:ring-ForestGreen"
                />

                <AlertDialog>
                    <AlertDialogTrigger className="bg-ForestGreen text-white px-4 py-1 rounded-md shadow-md flex gap-2 items-center font-semibold">
                        <FaPlus /> Jadwal Berhalangan
                    </AlertDialogTrigger>
                    <AlertDialogContent className="max-w-3xl">
                        <form onSubmit={StoreSchedule}>
                            <AlertDialogHeader>
                                <AlertDialogDescription className="text-black flex flex-col gap-4">
                                    <h1 className="text-2xl font-semibold">Tambah Jadwal Berhalangan</h1>
                                    <hr />

                                    <div className="flex flex-col gap-4 pb-4">
                                        {/* Nama Dokter */}
                                        <div className="flex flex-col gap-1">
                                            <p className="font-semibold">Nama Dokter</p>
                                            <Select
                                                onValueChange={(value) => setData("doctor_id", value)}
                                                value={data.doctor_id}
                                            >
                                                <SelectTrigger className="w-full bg-transparent border-2 border-gray-400 shadow-sm h-12 font-semibold focus:border-ForestGreen focus:ring-0">
                                                    <SelectValue placeholder="Pilih Dokter" />
                                                </SelectTrigger>
                                                <SelectContent
                                                    className={`border-2`}
                                                >
                                                    {doctors &&
                                                        doctors.map((doctor) => (
                                                            <SelectItem
                                                                key={doctor.id}
                                                                value={` ${doctor.id} `}
                                                                className={`x transition-all font-semibold cursor-pointer py-3 bg-white w-full flex justify-between border-b border-gray-300`}
                                                            >
                                                                {doctor.name}
                                                            </SelectItem>
                                                        ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        {/*  */}

                                        {/* Tanggal */}
                                        <div className="flex flex-col gap-1">
                                            <p className="font-semibold">Tanggal</p>
                                            <input
                                                type="date"
                                                className="w-full border-2 border-gray-400 shadow-sm h-12 font-semibold text-sm focus:border-ForestGreen focus:ring-0 rounded-md"
                                                onChange={(e) => setData("date", e.target.value)}
                                                value={data.date} />
                                        </div>
                                        {/*  */}

                                        {/* Jam */}
                                        <div className="flex flex-col gap-1">
                                            <p className="font-semibold">Jam Berhalangan</p>
                                            <Select
                                                onValueChange={(value) => setData("time", value)}
                                                value={data.time}
                                            >
                                                <SelectTrigger className="w-full bg-transparent border-2 border-gray-400 shadow-sm h-12 font-semibold focus:border-ForestGreen focus:ring-0">
                                                    <SelectValue placeholder="Pilih Jam" />
                                                </SelectTrigger>
                                                <SelectContent
                                                    className={`border-2`}
                                                >
                                                    {schedules &&
                                                        schedules.map((schedule) => (
                                                            <SelectItem
                                                                key={schedule}
                                                                value={`${schedule}`}
                                                                className={`x transition-all font-semibold cursor-pointer py-3 bg-white w-full flex justify-between border-b border-gray-300`}
                                                            >
                                                                {schedule}
                                                            </SelectItem>
                                                        ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        {/*  */}

                                        {/* Alasan */}
                                        <div className="flex flex-col gap-1">
                                            <p className="font-semibold">Alasan</p>
                                            <textarea
                                                rows="5"
                                                className="w-full border-2 border-gray-400 shadow-sm  font-semibold text-sm focus:border-ForestGreen focus:ring-0 rounded-md"
                                                onChange={(e) => setData("reason", e.target.value)}
                                                value={data.reason}
                                                ></textarea>
                                        </div>
                                        {/*  */}
                                    </div>

                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter className="grid grid-cols-2 gap-8">
                                <AlertDialogCancel className="bg-[#202124]/30 hover:bg-[#202124]/50 hover:text-white text-white">Batal</AlertDialogCancel>
                                <AlertDialogAction
                                    onClick={StoreSchedule}
                                    className={`border border-ForestGreen px-8 py-1 rounded-md bg-ForestGreen text-white transition-all hover:brightness-90 hover:bg-ForestGreen font-semibold ${processing && "opacity-40"
                                        }`}
                                >
                                    {processing ? "Memproses..." : "Tambah"}
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </form>
                    </AlertDialogContent>
                </AlertDialog>
            </div>

            <div className="overflow-hidden rounded-md border border-gray-200 shadow-md mt-8">
                <table className="w-full bg-white h-fit">
                    <thead className="bg-ForestGreen text-white">
                        <tr>
                            <td className="font-semibold text-center px-3 py-4">
                                No
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                Nama Dokter
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                Tanggal
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                Jam
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                Alasan
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                Aksi
                            </td>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <tr>
                                <td className="py-4 px-3 font-medium text-center">
                                    1
                                </td>
                                <td className="py-4 px-3 font-medium">
                                    Dr. John Doe
                                </td>
                                <td className="py-4 px-3 font-medium text-center">
                                    18/11/2024
                                </td>
                                <td className="py-4 px-3 font-medium text-center">
                                    09.00
                                </td>
                                <td className="py-4 px-3 font-medium text-center">
                                    Healing
                                </td>
                                <td className="py-4 px-3 font-medium flex justify-center gap-2">
                                    <button>
                                        <FaEdit className="text-ForestGreen h-6 w-6" />
                                    </button>
                                    <Link>
                                        <FaRegTrashAlt className="text-customRed h-6 w-6" />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between items-center mt-6">
                <div className="flex items-center gap-2 px-2">
                    <div className="bg-ForestGreen text-white font-semibold w-8 h-8 rounded-full flex justify-center items-center">
                        1
                    </div>
                    <div className="bg-transparent text-black font-semibold w-8 h-8 rounded-full flex justify-center items-center">
                        2
                    </div>
                    <div className="bg-transparent text-black font-semibold w-8 h-8 rounded-full flex justify-center items-center">
                        3
                    </div>
                    <div className="bg-transparent text-black font-semibold w-8 h-8 rounded-full flex justify-center items-center">
                        ...
                    </div>
                    <div className="bg-transparent text-black font-semibold w-8 h-8 rounded-full flex justify-center items-center">
                        10
                    </div>
                </div>
                <p className="font-semibold text-black/50">Halaman 1 dari 20</p>
            </div>
        </OwnerLayout>
    );
};

export default OwnerJadwal;
