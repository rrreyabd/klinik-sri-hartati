import OwnerLayout from "@/Layouts/OwnerLayout";
import { Link } from "@inertiajs/react";
import { useState } from "react";

const OwnerPembayaran = () => {
    const [open, setOpen] = useState(true);

    return (
        <OwnerLayout open={open} setOpen={setOpen} navTitle="Pembayaran">
            <div className="text-lg font-medium">
                <span className="text-gray-500">Dashboard </span> &gt; Pembayaran
            </div>

            <div className="flex justify-end">
                <input
                    type="text"
                    placeholder="Cari disini..."
                    className="rounded-md border-gray-400 placeholder:font-medium placeholder:text-gray-400 focus:border-ForestGreen focus:ring-ForestGreen"
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
                                Layanan
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                Nominal
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                Tanggal
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                Status
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
                                    Pemeriksaan Rutin
                                </td>
                                <td className="py-4 px-3 font-medium text-center">
                                    Rp 100.000
                                </td>
                                <td className="py-4 px-3 font-medium text-center">
                                    18/11/2024
                                </td>
                                <td className="py-4 px-3 font-medium text-center">
                                    <div className="bg-customRed text-white px-2 py-1 text-sm rounded-md">
                                        Gagal
                                    </div>
                                </td>
                                <td className="py-4 px-3 font-medium text-center">
                                    <Link
                                        href=""
                                        className="underline text-ForestGreen text-sm"
                                    >
                                        Lihat Bukti
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

export default OwnerPembayaran;
