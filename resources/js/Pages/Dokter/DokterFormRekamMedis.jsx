import { Head, Link } from "@inertiajs/react";
import DokterNav from "./DokterNav";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";

const DokterFormRekamMedis = ({ auth }) => {
    const [row, setRow] = useState(5);

    return (
        <div className="bg-customWhite min-h-screen flex items-center flex-col">
            <Head title="Form Rekam Medis" />
            <DokterNav auth={auth} />
            <main className="flex flex-col gap-8 my-8 w-3/4 bg-white p-8 shadow-md rounded-md">
                <div className="flex justify-between">
                    <Link
                        href={route("dokter.index")}
                        className="flex gap-4 items-center"
                    >
                        <div className="bg-gray-300 h-8 w-8 rounded-full flex items-center justify-center">
                            <ArrowLeft />
                        </div>
                        <p className="text-lg font-semibold">Kembali</p>
                    </Link>

                    <h1 className="text-3xl text-ForestGreen font-semibold">
                        Form Rekam Medis
                    </h1>

                    <div className="w-[124px]"></div>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="font-bold uppercase text-black/50">
                        Data Diri Pasien
                    </p>
                    <hr className="border" />
                </div>

                <form>
                    <div className="grid grid-cols-2 gap-x-20 gap-y-8">
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold">Nama Pasien</p>
                            <input
                                type="text"
                                name=""
                                id=""
                                className="border-2 border-gray-400 rounded-md placeholder:font-semibold focus:border-ForestGreen focus:ring-ForestGreen"
                                placeholder="Nama Lengkap Pasien"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold">Umur</p>
                            <input
                                type="text"
                                name=""
                                id=""
                                className="border-2 border-gray-400 rounded-md placeholder:font-semibold focus:border-ForestGreen focus:ring-ForestGreen"
                                placeholder="Umur Pasien"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold">Jenis Kelamin</p>
                            <Select
                                // onValueChange={(value) =>
                                //     setData("jenis_kelamin", value)
                                // }
                                // value={data.jenis_kelamin}
                            >
                                <SelectTrigger
                                    className={`w-full border-2 border-gray-400 shadow-sm h-12 font-semibold text-base `}
                                >
                                    <SelectValue
                                        placeholder="Jenis Kelamin"
                                        className=""
                                    />
                                </SelectTrigger>
                                <SelectContent className="bg-white border-2 border-gray-400">
                                    <SelectItem
                                        value="Laki-laki"
                                        className="hover:brightness-95 transition-all font-semibold"
                                    >
                                        Laki-laki
                                    </SelectItem>
                                    <SelectItem
                                        value="Perempuan"
                                        className="hover:brightness-95 transition-all font-semibold"
                                    >
                                        Perempuan
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold">Tanggal Pemeriksaan</p>
                            <input
                                type="date"
                                name=""
                                id=""
                                className="border-2 border-gray-400 rounded-md placeholder:font-semibold focus:border-ForestGreen focus:ring-ForestGreen"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold">Berat Badan</p>
                            <input
                                type="text"
                                name=""
                                id=""
                                className="border-2 border-gray-400 rounded-md placeholder:font-semibold focus:border-ForestGreen focus:ring-ForestGreen"
                                placeholder="Berat Badan Pasien"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold">Tekanan Darah</p>
                            <input
                                type="text"
                                name=""
                                id=""
                                className="border-2 border-gray-400 rounded-md placeholder:font-semibold focus:border-ForestGreen focus:ring-ForestGreen"
                                placeholder="Tekanan Darah Pasien"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold">Keluhan</p>
                            <textarea
                                name=""
                                id=""
                                rows="5"
                                className="border-2 border-gray-400 rounded-md placeholder:font-semibold focus:border-ForestGreen focus:ring-ForestGreen"
                                placeholder="Keluhan Pasien"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold">Alergi</p>
                            <textarea
                                name=""
                                id=""
                                rows="5"
                                className="border-2 border-gray-400 rounded-md placeholder:font-semibold focus:border-ForestGreen focus:ring-ForestGreen"
                                placeholder="Alergi Pasien"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold">Diagnosa</p>
                            <textarea
                                name=""
                                id=""
                                rows="5"
                                className="border-2 border-gray-400 rounded-md placeholder:font-semibold focus:border-ForestGreen focus:ring-ForestGreen"
                                placeholder="Diagnosa Penyakit Pasien"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-16">
                        <p className="font-bold uppercase text-black/50">
                            Resep Obat
                        </p>
                        <hr className="border" />
                    </div>

                    <table className="w-full mt-8">
                        <thead className="">
                            <tr className="bg-ForestGreen text-white">
                                <th className="px-3 py-2 font-semibold rounded-l-md">
                                    No
                                </th>
                                <th className="px-3 py-2 font-semibold">
                                    Nama Obat
                                </th>
                                <th className="px-3 py-2 font-semibold">
                                    Dosis
                                </th>
                                <th className="px-3 py-2 font-semibold">
                                    Banyak
                                </th>
                                <th className="px-3 py-2 pr-4 font-semibold rounded-r-md">
                                    Catatan
                                </th>
                            </tr>
                        </thead>
                        {/* 1088 */}
                        <tbody className="">
                            {Array.from({ length: row }).map((_, index) => (
                                <tr key={index}>
                                    <td className="px-3 text-center font-semibold w-[50px]">
                                        <p>{index + 1}</p>
                                    </td>
                                    <td className="px-3">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            className="border-transparent border-b-2 border-b-gray-400 focus:ring-0 focus:border-transparent focus:border-b-ForestGreen w-[300px]"
                                        />
                                    </td>
                                    <td className="px-3">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            className="border-transparent border-b-2 border-b-gray-400 focus:ring-0 focus:border-transparent focus:border-b-ForestGreen w-[100px]"
                                        />
                                    </td>
                                    <td className="px-3">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            className="border-transparent border-b-2 border-b-gray-400 focus:ring-0 focus:border-transparent focus:border-b-ForestGreen w-[100px]"
                                        />
                                    </td>
                                    <td className="px-3 pr-6 relative flex items-end">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            className="border-transparent border-b-2 border-b-gray-400 focus:ring-0 focus:border-transparent focus:border-b-ForestGreen w-[400px]"
                                        />
                                        {index + 1 == row ? (
                                            <button
                                                className="absolute right-0"
                                                type="button"
                                                onClick={() => setRow(row - 1)}
                                            >
                                                <MdDelete className="text-2xl text-customRed" />
                                            </button>
                                        ) : null}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <button
                        className="bg-ForestGreen text-white p-2 rounded-full hover:brightness-90 transition-all mt-6 ml-2"
                        type="button"
                        onClick={() => setRow(row + 1)}
                    >
                        <FaPlus className="text-xl" />
                    </button>

                    <div className="flex justify-end mt-4">
                        <button
                            type="submit"
                            className="bg-ForestGreen px-8 py-2 rounded-md text-white font-semibold"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default DokterFormRekamMedis;
