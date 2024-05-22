import OwnerLayout from "@/Layouts/OwnerLayout";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const OwnerDokter = () => {
    const [open, setOpen] = useState(true);

    return (
        <OwnerLayout open={open} setOpen={setOpen} navTitle="Dokter">
            <div className="text-lg font-medium">
                <span className="text-gray-500">Dashboard </span> &gt; Dokter
            </div>

            <div className="flex justify-end mt-8">
                <input
                    type="text"
                    placeholder="Cari disini..."
                    className="rounded-md border-gray-400 placeholder:font-medium placeholder:text-gray-400 focus:border-ForestGreen focus:ring-ForestGreen w-72"
                />
            </div>

            <div className="overflow-hidden rounded-md border border-gray-200 shadow-md mt-8">
                <table className="w-full bg-white h-fit">
                    <thead className="bg-ForestGreen text-white">
                        <tr>
                            <td className="font-semibold text-center px-3 py-4">
                                No
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                Nama
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                Alamat
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                No. Telepon
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                Jenis Kelamin
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                Tanggal Lahir
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
                                    Muhammad Raihan Abdillah Lubis
                                </td>
                                <td className="py-4 px-3 font-medium">
                                    Jl. Universitas, Medan, Sumatera Utara
                                </td>
                                <td className="py-4 px-3 font-medium text-center">
                                    081234567890
                                </td>
                                <td className="py-4 px-3 font-medium text-center">
                                    Laki-laki
                                </td>
                                <td className="py-4 px-3 font-medium text-center">
                                    18/11/2004
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

export default OwnerDokter;
