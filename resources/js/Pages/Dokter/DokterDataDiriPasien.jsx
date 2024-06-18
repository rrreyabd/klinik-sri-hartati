import { Head, Link } from "@inertiajs/react";
import DokterNav from "./DokterNav";
import { ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { FaPlus } from "react-icons/fa";

const DokterDataDiriPasien = ({ data, patient, auth, rekam_medis, appointment_id }) => {

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

    return (
        <div className="bg-customWhite min-h-screen flex items-center flex-col">
            <Head title="Data Pasien" />
            <DokterNav auth={auth} />

            <main className="flex flex-col gap-8 my-8 w-3/4 bg-white p-8 shadow-md rounded-md">
                <div className="flex justify-between">
                    <Link
                        href="/dokter"
                        className="flex gap-4 items-center"
                    >
                        <div className="bg-gray-300 h-8 w-8 rounded-full flex items-center justify-center">
                            <ArrowLeft />
                        </div>
                        <p className="text-lg font-semibold">Kembali</p>
                    </Link>

                    <h1 className="text-3xl text-ForestGreen font-semibold">
                        Data Pasien
                    </h1>

                    <div className="w-[124px]"></div>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                    <p className="font-semibold uppercase text-black/50">
                        Data Diri Pasien
                    </p>
                    <hr className="border" />
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex font-semibold">
                        <p className="w-36">Nama Pasien</p>
                        <p className="px-4">:</p>
                        <p>{data.name}</p>
                    </div>
                    <div className="flex font-semibold">
                        <p className="w-36">Umur</p>
                        <p className="px-4">:</p>
                        <p>{getAge(patient.birthdate)}</p>
                    </div>
                    <div className="flex font-semibold">
                        <p className="w-36">Jenis Kelamin</p>
                        <p className="px-4">:</p>
                        <p>{patient.gender}</p>
                    </div>
                    <div className="flex font-semibold">
                        <p className="w-36">Tanggal Lahir</p>
                        <p className="px-4">:</p>
                        <p>
                            {format(
                                new Date(patient.birthdate),
                                "dd MMMM yyyy",
                                {
                                    locale: id,
                                }
                            )}
                        </p>
                    </div>
                    <div className="flex font-semibold">
                        <p className="w-36">Golongan Darah</p>
                        <p className="px-4">:</p>
                        <p>{patient.blood_type}</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                    <p className="font-semibold uppercase text-black/50">
                        Rekam Medis
                    </p>
                    <hr className="border" />
                </div>

                <div className="flex justify-end">
                    <Link href={route("dokter.edit", { id: patient.id, appointment_id: appointment_id })} className="px-6 py-2 bg-ForestGreen text-white font-semibold flex items-center gap-2 rounded-md hover:brightness-90 transition-all">
                        <FaPlus />
                        Tambah Rekam Medis
                    </Link>
                </div>

                <RekamMedisDataTable
                    data={rekam_medis}
                    c1="w-2/12"
                    c2="w-3/12"
                    c3="w-5/12"
                    c4="w-2/12"
                />
            </main>
        </div>
    );
};

export default DokterDataDiriPasien;

const RekamMedisDataTable = ({ c1, c2, c3, c4, data }) => {
    return (
        <div className="flex flex-col">
            <table className="w-full divide-y divide-gray-200">
                <thead className="bg-ForestGreen text-white">
                    <tr>
                        <th
                            className={`py-3 px-1 text-sm font-semibold uppercase tracking-wider text-center rounded-l-md ${c1} `}
                        >
                            Tanggal
                        </th>
                        <th
                            className={`py-3 px-1 text-sm font-semibold uppercase tracking-wider text-center ${c2} `}
                        >
                            Dokter
                        </th>
                        <th
                            className={`py-3 px-1 text-sm font-semibold uppercase tracking-wider text-center ${c3} `}
                        >
                            Diagnosa
                        </th>
                        <th
                            className={`py-3 px-1 text-sm font-semibold uppercase tracking-wider text-center rounded-r-md ${c4} `}
                        >
                            Detail
                        </th>
                    </tr>
                </thead>
            </table>
            {data.length > 0 ? (
                <div className="max-h-72 overflow-y-auto overflow-x-auto w-full display_scroll">
                    <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                            {data &&
                                data.map((data, i) => {
                                    return (
                                        <tr key={i}>
                                            <td
                                                className={`py-4 px-4 text-center ${c1} `}
                                            >
                                                {format(
                                                    new Date(data.date),
                                                    "dd MMMM yyyy",
                                                    {
                                                        locale: id,
                                                    }
                                                )}
                                            </td>
                                            <td className={`py-4 px-4 ${c2} `}>
                                                {data.doctor.name}
                                            </td>
                                            <td className={`py-4 px-4 ${c3} `}>
                                                {data.diagnosis}
                                            </td>
                                            <td
                                                className={`py-4 px-4 text-center font-medium upper underline ${c4} `}
                                            >
                                                <Link
                                                    href={route(
                                                        "dokter.rekam-medis.detail",
                                                        {
                                                            id: data.id,
                                                        }
                                                    )}
                                                    className="text-ForestGreen hover:brightness-125 transition-all"
                                                >
                                                    Detail
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="flex flex-grow justify-center items-center py-16">
                    <h3 className="text-2xl font-medium text-gray-500">
                        Belum ada Rekam Medis
                    </h3>
                </div>
            )}
        </div>
    );
};
