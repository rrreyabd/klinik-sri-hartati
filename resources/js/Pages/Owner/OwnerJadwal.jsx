import OwnerLayout from "@/Layouts/OwnerLayout";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { FaEdit, FaPlus, FaRegTrashAlt } from "react-icons/fa";

const OwnerJadwal = () => {
    const [open, setOpen] = useState(true);

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

                <button className="bg-ForestGreen text-white px-4 py-1 rounded-md shadow-md flex gap-2 items-center font-semibold">
                    <FaPlus /> Jadwal Berhalangan
                </button>
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
                                    Dr. Deddy Mahendra Desta S.Kom., M.Kom.
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
