import { Head, Link, useForm } from "@inertiajs/react";
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

const DokterFormRekamMedis = ({ auth, patientData }) => {
    const [row, setRow] = useState(5);

    const handleGoBack = () => {
        window.history.back();
    };

    const getAge = (birthDate) => {
        const dob = new Date(birthDate);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        return age;
    };

    const { data, setData, post, processing, errors } = useForm({
        user_id: patientData.user_id,
        doctor_id: auth.user.id,
        date: new Date().toISOString().split("T")[0],
        name: patientData.user.name,
        weight: "",
        blood_pressure: "",
        allergy: "",
        complaint: "",
        diagnosis: "",
    });

    console.log(
        "user_id: " +
            data.user_id +
            "\n" +
            "doctor_id: " +
            data.doctor_id +
            "\n" +
            "date: " +
            data.date +
            "\n" +
            "name: " +
            data.name +
            "\n" +
            "weight: " +
            data.weight +
            "\n" +
            "blood_pressure: " +
            data.blood_pressure +
            "\n" +
            "allergy: " +
            data.allergy +
            "\n" +
            "complaint: " +
            data.complaint +
            "\n" +
            "diagnosis: " +
            data.diagnosis +
            "\n"
    );

    const submit = (e) => {
        e.preventDefault()

        post(route('dokter.store'))
    }

    return (
        <div className="bg-customWhite min-h-screen flex items-center flex-col">
            <Head title="Form Rekam Medis" />
            <DokterNav auth={auth} />
            <main className="flex flex-col gap-8 my-8 w-3/4 bg-white p-8 shadow-md rounded-md">
                <div className="flex justify-between">
                    <button
                        onClick={handleGoBack}
                        className="flex gap-4 items-center"
                    >
                        <div className="bg-gray-300 h-8 w-8 rounded-full flex items-center justify-center">
                            <ArrowLeft />
                        </div>
                        <p className="text-lg font-semibold">Kembali</p>
                    </button>

                    <h1 className="text-3xl text-ForestGreen font-semibold">
                        Form Rekam Medis
                    </h1>

                    <div className="w-[124px]"></div>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="font-semibold uppercase text-black/50">
                        Data Diri Pasien
                    </p>
                    <hr className="border" />
                </div>

                <form onSubmit={submit}>
                    <div className="grid grid-cols-2 gap-x-20 gap-y-8">
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold">Nama Pasien</p>
                            <input
                                type="text"
                                name=""
                                value={patientData.user.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                disabled={true}
                                className="border-2 border-gray-400 rounded-md placeholder:font-medium focus:border-ForestGreen focus:ring-ForestGreen cursor-not-allowed"
                                placeholder="Nama Lengkap Pasien"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold">Jenis Kelamin</p>
                            <Select disabled value={patientData.gender}>
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
                                value={new Date().toISOString().split("T")[0]}
                                onChange={(e) =>
                                    setData("date", e.target.value)
                                }
                                className="border-2 border-gray-400 rounded-md placeholder:font-medium focus:border-ForestGreen focus:ring-ForestGreen"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold">Berat Badan (KG)</p>
                            <input
                                type="number"
                                name=""
                                id=""
                                value={data.weight}
                                onChange={(e) =>
                                    setData("weight", e.target.value)
                                }
                                className="border-2 border-gray-400 rounded-md placeholder:font-medium focus:border-ForestGreen focus:ring-ForestGreen"
                                placeholder="Berat Badan Pasien"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold">
                                Tekanan Darah (Sistolik/Diastolik)
                            </p>
                            <input
                                type="text"
                                name=""
                                id=""
                                value={data.blood_pressure}
                                onChange={(e) =>
                                    setData("blood_pressure", e.target.value)
                                }
                                className="border-2 border-gray-400 rounded-md placeholder:font-medium focus:border-ForestGreen focus:ring-ForestGreen"
                                placeholder="Tekanan Darah Pasien"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold">Alergi</p>
                            <input
                                type="text"
                                name=""
                                id=""
                                value={data.allergy}
                                onChange={(e) =>
                                    setData("allergy", e.target.value)
                                }
                                className="border-2 border-gray-400 rounded-md placeholder:font-medium focus:border-ForestGreen focus:ring-ForestGreen"
                                placeholder="Alergi Pasien"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold">Keluhan</p>
                            <textarea
                                name=""
                                id=""
                                rows="5"
                                value={data.complaint}
                                onChange={(e) =>
                                    setData("complaint", e.target.value)
                                }
                                className="border-2 border-gray-400 rounded-md placeholder:font-medium focus:border-ForestGreen focus:ring-ForestGreen"
                                placeholder="Keluhan Pasien"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold">Diagnosa</p>
                            <textarea
                                name=""
                                id=""
                                rows="5"
                                value={data.diagnosis}
                                onChange={(e) =>
                                    setData("diagnosis", e.target.value)
                                }
                                className="border-2 border-gray-400 rounded-md placeholder:font-medium focus:border-ForestGreen focus:ring-ForestGreen"
                                placeholder="Diagnosa Penyakit Pasien"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-16">
                        <p className="font-semibold uppercase text-black/50">
                            Resep Obat
                        </p>
                        <hr className="border" />
                    </div>

                    <table className="w-full mt-8">
                        <thead className="">
                            <tr className="bg-ForestGreen text-white">
                                <th className="py-2 font-semibold rounded-l-md">
                                    No
                                </th>
                                <th className="py-2 font-semibold">
                                    Nama Obat
                                </th>
                                <th className="py-2 font-semibold">Dosis</th>
                                <th className="py-2 font-semibold">Banyak</th>
                                <th className="py-2 pr-4 font-semibold rounded-r-md">
                                    Catatan
                                </th>
                            </tr>
                        </thead>
                        {/* 1088 */}
                        <tbody className="">
                            {Array.from({ length: row }).map((_, index) => (
                                <tr key={index}>
                                    <td className=" text-center font-semibold w-[50px]">
                                        <p>{index + 1}</p>
                                    </td>
                                    <td className="px-1 lg:px-2 xl:px-3">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            className="border-transparent border-b-2 border-b-gray-400 focus:ring-0 focus:border-transparent focus:border-b-ForestGreen w-[300px]"
                                        />
                                    </td>
                                    <td className="px-1 lg:px-2 xl:px-3">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            className="border-transparent border-b-2 border-b-gray-400 focus:ring-0 focus:border-transparent focus:border-b-ForestGreen w-[100px]"
                                        />
                                    </td>
                                    <td className="px-1 lg:px-2 xl:px-3">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            className="border-transparent border-b-2 border-b-gray-400 focus:ring-0 focus:border-transparent focus:border-b-ForestGreen w-[100px]"
                                        />
                                    </td>
                                    <td className=" pr-6 relative flex items-end">
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
