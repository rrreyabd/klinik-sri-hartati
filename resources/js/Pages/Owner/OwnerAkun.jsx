import OwnerLayout from "@/Layouts/OwnerLayout";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const OwnerAkun = () => {
    const [open, setOpen] = useState(true);
    const [showData, setShowData] = useState("Pengguna");

    console.log(showData);

    return (
        <OwnerLayout open={open} setOpen={setOpen} navTitle="Akun">
            <div className="text-lg font-medium">
                <span className="text-gray-500">Dashboard </span> &gt; Akun
            </div>

            <div className="flex justify-between mt-8">
                <div className="flex ml-5 relative transition-all border-b-2 border-black/20">
                    <button
                        onClick={() => setShowData("Pengguna")}
                        className={`text-lg font-medium py-2 w-32 hover:bg-customWhite transition-all ${
                            showData == "Pengguna"
                                ? "text-ForestGreen"
                                : "text-gray-400"
                        }`}
                    >
                        Pengguna
                    </button>
                    <button
                        onClick={() => setShowData("Staff")}
                        className={`text-lg font-medium py-2 w-32 hover:bg-customWhite transition-all ${
                            showData == "Staff"
                                ? "text-ForestGreen"
                                : "text-gray-400"
                        }`}
                    >
                        Staff
                    </button>
                    <button
                        onClick={() => setShowData("Dokter")}
                        className={`text-lg font-medium py-2 w-32 hover:bg-customWhite transition-all ${
                            showData == "Dokter"
                                ? "text-ForestGreen"
                                : "text-gray-400"
                        }`}
                    >
                        Dokter
                    </button>

                    <div
                        className={`w-32 h-1 bg-ForestGreen -bottom-1 left-0 absolute transition-transform duration-500 ease-in-out ${
                            showData === "Pengguna"
                                ? "transform translate-x-0"
                                : ""
                        }
                          ${
                              showData === "Staff"
                                  ? "transform translate-x-32"
                                  : ""
                          }
                          ${
                              showData === "Dokter"
                                  ? "transform translate-x-64"
                                  : ""
                          } `}
                    ></div>
                </div>

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
                                Email
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                Tanggal Verifikasi
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                Tanggal Dibuat
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                Role
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
                                    raihan@gmail.com
                                </td>
                                <td className="py-4 px-3 font-medium text-center">
                                    02/01/2004
                                </td>
                                <td className="py-4 px-3 font-medium text-center">
                                    01/01/2004
                                </td>
                                <td className="py-4 px-3 font-medium text-center">
                                    Pengguna
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

export default OwnerAkun;
