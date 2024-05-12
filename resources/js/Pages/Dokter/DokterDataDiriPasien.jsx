import { Head, Link } from "@inertiajs/react";
import DokterNav from "./DokterNav";
import { ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { id } from "date-fns/locale";

const DokterDataDiriPasien = ({ data, patient, auth }) => {
    return (
        <div className="bg-customWhite min-h-screen flex items-center flex-col">
            <Head title="Data Pasien" />
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
                        Data Pasien
                    </h1>

                    <div className="w-[124px]"></div>
                </div>

                <div className="flex flex-col gap-2">
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

                <div className="flex flex-col gap-2">
                    <p className="font-semibold uppercase text-black/50">
                        Rekam Medis
                    </p>
                    <hr className="border" />
                </div>

                {/* <RekamMedisDataTable /> */}
            </main>
        </div>
    );
};

export default DokterDataDiriPasien;

const RekamMedisDataTable = ({ c1, c2, c3, c4, c5, c6, data }) => {
    return (
        <>
            <table className="w-full divide-y divide-gray-200 mt-4">
                <thead className="bg-customWhite/20 border-b border-gray-200">
                    <tr>
                        <th
                            className={`py-3 px-1 text-left text-sm font-semibold text-ForestGreen uppercase tracking-wider ${c1} `}
                        >
                            Tanggal
                        </th>
                        <th
                            className={`py-3 px-1 text-left text-sm font-semibold text-ForestGreen uppercase tracking-wider ${c2} `}
                        >
                            Dokter
                        </th>
                        <th
                            className={`py-3 px-1 text-left text-sm font-semibold text-ForestGreen uppercase tracking-wider ${c3} `}
                        >
                            Diagnosa
                        </th>
                        <th
                            className={`py-3 px-1 text-left text-sm font-semibold text-ForestGreen uppercase tracking-wider ${c4} `}
                        >
                            Detail
                        </th>
                    </tr>
                </thead>
            </table>
            {data.length > 1 ? (
                <div className="min-h-72 overflow-y-scroll overflow-x-auto w-full display_scroll">
                    <table className="w-full">
                        <tbody className="divide-y divide-gray-200">
                            {data &&
                                data.map((data, i) => {
                                    return (
                                        <tr>
                                            <td className={`py-4 px-1 ${c1} `}>
                                                {i + 1}
                                            </td>
                                            <td className={`py-4 px-1 ${c2} `}>
                                                
                                            </td>
                                            <td className={`py-4 px-1 ${c3} `}>
                                                {data.name}
                                            </td>
                                            <td
                                                className={`py-4 px-1 text-sm font-medium upper underline text-ForestGreen ${c4} `}
                                            >
                                                <Link
                                                    href={route(
                                                        "dokter.pasien",
                                                        {
                                                            id: data.user_id,
                                                        }
                                                    )}
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
                <div className="flex flex-grow justify-center items-center">
                    <h3 className="text-3xl font-medium text-gray-500">
                        Tidak ada janji temu hari ini
                    </h3>
                </div>
            )}
        </>
    );
};
