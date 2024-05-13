import { ArrowLeft } from "lucide-react";
import DokterNav from "./DokterNav";
import { Head } from "@inertiajs/react";
import { format } from "date-fns";
import { id } from "date-fns/locale";

const DokterDetailRekamMedis = ({ auth, rekam_medis, reseps }) => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div className="bg-customWhite min-h-screen flex items-center flex-col">
            <Head title="Data Pasien" />
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
                        Rekam Medis
                    </h1>

                    <div className="w-[124px]"></div>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                    <p className="font-semibold uppercase text-black/50">
                        Rekam Medis
                    </p>
                    <hr className="border" />
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex font-semibold">
                        <p className="w-52">Tanggal Pemeriksaan</p>
                        <p className="px-4">:</p>
                        <p>
                            {format(
                                new Date(rekam_medis.date),
                                "dd MMMM yyyy",
                                {
                                    locale: id,
                                }
                            )}
                        </p>
                    </div>
                    <div className="flex font-semibold">
                        <p className="w-52">Diperiksa Oleh</p>
                        <p className="px-4">:</p>
                        <p>{rekam_medis.doctor.name}</p>
                    </div>
                    <div className="flex font-semibold">
                        <p className="w-52">Berat Badan</p>
                        <p className="px-4">:</p>
                        <p>{rekam_medis.weight} KG</p>
                    </div>
                    <div className="flex font-semibold">
                        <p className="w-52">Tekanan Darah</p>
                        <p className="px-4">:</p>
                        <p>{rekam_medis.blood_pressure} </p>
                    </div>
                    <div className="flex font-semibold">
                        <p className="w-52">Alergi</p>
                        <p className="px-4">:</p>
                        <p>{rekam_medis.allergy} </p>
                    </div>
                    <div className="flex font-semibold">
                        <p className="w-52">Gejala</p>
                        <p className="px-4">:</p>
                        <p>{rekam_medis.complaint} </p>
                    </div>
                    <div className="flex font-semibold">
                        <p className="w-52">Diagnosis</p>
                        <p className="px-4">:</p>
                        <p>{rekam_medis.diagnosis}</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 mt-4 pb-16">
                    <div className="flex flex-col gap-2 mt-4">
                        <p className="font-semibold uppercase text-black/50">
                            Resep Obat
                        </p>
                        <hr className="border" />
                    </div>

                    <ResepDataTable
                        data={reseps}
                        c1="w-1/12"
                        c2="w-2/12"
                        c3="w-2/12"
                        c4="w-2/12"
                        c5="w-5/12"
                    />
                </div>
            </main>
        </div>
    );
};

export default DokterDetailRekamMedis;

const ResepDataTable = ({ c1, c2, c3, c4, c5, data }) => {
    return (
        <div className="flex flex-col">
            <table className="w-full divide-y divide-gray-200 mt-4">
                <thead className="bg-ForestGreen text-white">
                    <tr>
                        <th
                            className={`py-3 px-1 text-sm font-semibold uppercase tracking-wider text-center rounded-l-md ${c1} `}
                        >
                            No
                        </th>
                        <th
                            className={`py-3 px-1 text-sm font-semibold uppercase tracking-wider text-center ${c2} `}
                        >
                            Nama Obat
                        </th>
                        <th
                            className={`py-3 px-1 text-sm font-semibold uppercase tracking-wider text-center ${c3} `}
                        >
                            Dosis
                        </th>
                        <th
                            className={`py-3 px-1 text-sm font-semibold uppercase tracking-wider text-center ${c4} `}
                        >
                            Banyak
                        </th>
                        <th
                            className={`py-3 px-1 text-sm font-semibold uppercase tracking-wider text-center rounded-r-md ${c5} `}
                        >
                            Catatan
                        </th>
                    </tr>
                </thead>
            </table>
            {data.length > 1 ? (
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
                                                {i + 1}
                                            </td>
                                            <td className={`py-4 px-4 ${c2} `}>
                                                {data.medicine}
                                            </td>
                                            <td className={`py-4 px-4 ${c3} `}>
                                                {data.dose}
                                            </td>
                                            <td className={`py-4 px-4 ${c4} `}>
                                                {data.amount}
                                            </td>
                                            <td className={`py-4 px-4 ${c5} `}>
                                                {data.notes}
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="flex flex-grow justify-center items-center py-16">
                    <h3 className="text-3xl font-medium text-gray-500">
                        Resep obat tidak terdata
                    </h3>
                </div>
            )}
        </div>
    );
};
