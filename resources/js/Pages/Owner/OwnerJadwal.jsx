import OwnerLayout from "@/Layouts/OwnerLayout";
import Pagination from "@/Components/Pagination";
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";

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

const OwnerJadwal = ({ unavailable_schedules, doctors, userAppointments }) => {
    const [open, setOpen] = useState(true);

    const { data, setData, post, processing, errors } = useForm({
        doctor_id: "",
        date: "",
        time: "",
        reason: "",
    });

    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const itemsPerPage = 10;
    const filteredData = unavailable_schedules.filter((item) => {
        console.log(item.user)
        if (item.user && item.user.name) {
            return item.user.name.toLowerCase().includes(searchQuery.toLowerCase());
        }
        return false;
    });

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);
    const slicedData = filteredData.slice(startIndex, endIndex);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const StoreSchedule = async (e) => {
        e.preventDefault();
        await post(route('schedule.store'));
        window.location.reload();
    };

    const getStatus = (date, time) => {
        const appointment = userAppointments.find(appt => appt.date === date && appt.time === time);
        return appointment ? appointment.status : '';
    };

    const schedules = [
        { time: '08:00' },
        { time: '09:00' },
        { time: '10:00' },
        { time: '11:00' },
        { time: '12:00' },
        { time: '14:00' },
        { time: '15:00' },
        { time: '16:00' },
        { time: '17:00' },
        { time: '20:00' },
    ];

    const handleConfirm = (unavailable_schedule_id) => {
        setData(unavailable_schedule_id);
        post(route("schedule.destroy", { id: unavailable_schedule_id }));
    };

    return (
        <OwnerLayout open={open} setOpen={setOpen} navTitle="Jadwal">
            <div className="text-lg font-medium">
                <span className="text-gray-500">Dashboard </span> &gt; Jadwal
            </div>

            <div className="flex justify-between mt-8">
                <input
                    type="text"
                    placeholder="Cari disini..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
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
                                                <SelectContent className={`border-2`}>
                                                    {schedules &&
                                                        schedules.map((schedule) => (
                                                            <SelectItem
                                                                key={schedule.time}
                                                                value={`${schedule.time}`}
                                                                className={`x transition-all font-semibold cursor-pointer py-3 bg-white w-full flex justify-between border-b border-gray-300`}
                                                                disabled={getStatus(data.date, schedule.time) !== ''}
                                                            >
                                                                {schedule.time} {getStatus(data.date, schedule.time) ? `(${getStatus(data.date, schedule.time)})` : ''}
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

            {unavailable_schedules.length > 0 ? (
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
                            {slicedData.map((unavailable_schedule, index) => (
                                <tr key={unavailable_schedule.id}>
                                    <td className="py-4 px-3 font-medium text-center">
                                        {startIndex + index + 1}
                                    </td>
                                    <td className="py-4 px-3 font-medium">
                                        {unavailable_schedule.user.name}
                                    </td>
                                    <td className="py-4 px-3 font-medium text-center">
                                        {unavailable_schedule.date}
                                    </td>
                                    <td className="py-4 px-3 font-medium text-center">
                                        {unavailable_schedule.time}
                                    </td>
                                    <td className="py-4 px-3 font-medium text-center">
                                        {unavailable_schedule.reason}
                                    </td>
                                    <td className="py-4 px-3 font-medium flex justify-center gap-2">
                                        <AlertDialog onOpenChange={() => setData(unavailable_schedule.id)} defaultOpen={false}>
                                            <AlertDialogTrigger>
                                                <FaRegTrashAlt className="text-customRed h-6 w-6" />
                                            </AlertDialogTrigger>
                                            <AlertDialogContent className="p-4 max-w-xl">
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>
                                                        <div className="flex flex-col items-center gap-2">
                                                            <IoWarningOutline className="h-20 w-20 text-customRed" />
                                                            <p className="text-xl text-customRed text-center px-4">
                                                                Apakah
                                                                Anda yakin ingin membatalkan jadwal yang berhalangan
                                                                ini?
                                                            </p>
                                                        </div>
                                                    </AlertDialogTitle>
                                                    <AlertDialogDescription className="py-2 text-lg text-center px-8 text-black">
                                                        Pastikan konfirmasi dengan dokter terkait,
                                                        karena menyangkut keberlangsungan janji temu dengan pasien.
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel className="border-none">
                                                        Batal
                                                    </AlertDialogCancel>
                                                    <button
                                                        onClick={() => handleConfirm(unavailable_schedule.id)}
                                                        disabled={processing}
                                                        className="font-medium text-sm bg-customRed px-4 py-2 rounded-md hover:bg-customRed hover:brightness-95 text-white"
                                                    >
                                                        {processing
                                                            ? "Memproses"
                                                            : "Hapus"}
                                                    </button>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            ) : (
                <div className="flex items-center justify-center h-64">
                    <h1 className="text-3xl font-semibold text-gray-400">Tidak ada data jadwal berhalangan</h1>
                </div>
            )}

            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </OwnerLayout>
    );
};

export default OwnerJadwal;
