import { Head, Link } from "@inertiajs/react";
import StaffSheet from "../../Components/shared/Staff/StaffSheet";
import { Plus } from "lucide-react";

const StaffAntrian = () => {
    return (
        <div className="min-h-screen w-full bg-customWhite flex justify-center">
            <Head title="Antrian" />
            <div className="w-3/4 py-16 flex flex-col gap-8 max-w-[1300px]">
                <header className="flex justify-between">
                    <StaffSheet />
                    <h1 className="text-4xl font-semibold text-ForestGreen">
                        Manajemen Janji Temu
                    </h1>
                    <span className="w-10"></span>
                </header>

                <div className="flex mt-4 w-full gap-8">
                    <div className="flex flex-col gap-8 w-3/5">
                        {/* TAMBAH JANJI TEMU */}
                        <div className="bg-white rounded-xl shadow-md h-44 w-full flex">
                            <div className="p-6 w-2/3 flex flex-col gap-4">
                                <h2 className="text-2xl font-semibold">
                                    Atur jadwal janji temu pasien dengan dokter
                                    sekarang
                                </h2>
                                <Link
                                    href="/staff/janji-temu/tambah"
                                    className="bg-ForestGreen text-white font-semibold text-sm py-2 px-4 rounded-md w-fit flex items-center gap-2"
                                >
                                    <Plus className="w-4" /> Tambah Antrian
                                </Link>
                            </div>
                            <div className="w-1/3 flex justify-end items-end">
                                <img
                                    src="/assets/staff/6.png"
                                    alt="Janji Temu Image"
                                    className="w-5/6"
                                />
                            </div>
                        </div>

                        {/* KALENDER */}
                        <div className="bg-white rounded-xl shadow-md h-full w-full py-4 px-6 flex flex-col gap-2">
                            <h4 className="text-xl font-semibold">Kalender</h4>
                            <hr className="border w-full" />
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-3 text-gray-500 justify-center">
                                    <p className="font-medium">Minggu</p>
                                    <button className="text-2xl font-medium h-12">
                                        17
                                    </button>
                                </div>
                                <div className="flex flex-col gap-3 text-gray-500 justify-center">
                                    <p className="font-medium">Senin</p>
                                    <button className="text-2xl font-medium h-12">
                                        18
                                    </button>
                                </div>
                                <div className="flex flex-col gap-3 text-gray-500 justify-center">
                                    <p className="font-medium">Selasa</p>
                                    <button className="text-2xl font-medium h-12">
                                        19
                                    </button>
                                </div>
                                <div className="flex flex-col gap-3 text-gray-500 justify-center w-fit">
                                    <p className="font-medium">Rabu</p>
                                    <button className="text-2xl font-medium h-12 w-12 bg-ForestGreen text-white rounded-full p-2">
                                        20
                                    </button>
                                </div>
                                <div className="flex flex-col gap-3 text-gray-500 justify-center">
                                    <p className="font-medium">Kamis</p>
                                    <button className="text-2xl font-medium h-12">
                                        21
                                    </button>
                                </div>
                                <div className="flex flex-col gap-3 text-gray-500 justify-center">
                                    <p className="font-medium">Jumat</p>
                                    <button className="text-2xl font-medium h-12">
                                        22
                                    </button>
                                </div>
                                <div className="flex flex-col gap-3 text-gray-500 justify-center">
                                    <p className="font-medium">Sabtu</p>
                                    <button className="text-2xl font-medium h-12">
                                        23
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DATA */}
                    <div className="w-2/5 h-full">
                        <div className="bg-white rounded-xl shadow-md h-full w-full flex flex-col p-8 justify-between">
                            <div className="flex flex-col gap-2">
                                <p className="font-medium text-gray-500">
                                    Total Janji Temu Bulan Ini
                                </p>
                                <h2 className="font-semibold text-4xl">23</h2>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-medium text-gray-500">
                                    Menunggu Janji Temu Bulan Ini
                                </p>
                                <h2 className="font-semibold text-4xl">43</h2>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-medium text-gray-500">
                                    Janji Temu Selesai Bulan Ini
                                </p>
                                <h2 className="font-semibold text-4xl">66</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="flex w-full">
                    <div className="bg-white rounded-xl shadow-md h-64 w-full p-6 flex flex-col">
                        <h4 className="text-xl font-semibold">Timeline</h4>
                        <hr className="border w-full mt-4" />

                        <div className="overflow-y-scroll flex flex-grow display_scroll">
                            <table className="w-full">
                                {/* TR 1 */}
                                <tr className="w-full">
                                    <td className="w-1/6 border-r-2 text-center font-semibold text-gray-500">
                                        10.00
                                    </td>
                                    <td className="w-3/6 pl-4 pt-2">
                                        <div className="flex flex-col">
                                            <p className="flex gap-4 items-center font-medium">
                                                <span className="w-2 h-2 bg-customGreen rounded-full"></span>
                                                Konsultasi
                                            </p>
                                            <p className="pl-6 text-sm">
                                                Nama Pasien : Raihan Abdillah
                                            </p>
                                        </div>
                                    </td>
                                    <td className="w-2/6 pr-4">
                                        <div className="flex flex-col items-end">
                                            10.00 - 11.00
                                            <Link
                                                href=""
                                                className="text-ForestGreen text-sm"
                                            >
                                                Lihat detail
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                {/* TR 1 */}
                                {/* TR 2 */}
                                <tr className="w-full">
                                    <td className="w-1/6 border-r-2 text-center font-semibold text-gray-500">
                                        10.00
                                    </td>
                                    <td className="w-3/6 pl-4 pt-2">
                                        <div className="flex flex-col">
                                            <p className="flex gap-4 items-center font-medium">
                                                <span className="w-2 h-2 bg-customGreen rounded-full"></span>
                                                Konsultasi
                                            </p>
                                            <p className="pl-6 text-sm">
                                                Nama Pasien : Raihan Abdillah
                                            </p>
                                        </div>
                                    </td>
                                    <td className="w-2/6 pr-4">
                                        <div className="flex flex-col items-end">
                                            10.00 - 11.00
                                            <Link
                                                href=""
                                                className="text-ForestGreen text-sm"
                                            >
                                                Lihat detail
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                {/* TR 2 */}
                                {/* TR 3 */}
                                <tr className="w-full">
                                    <td className="w-1/6 border-r-2 text-center font-semibold text-gray-500">
                                        10.00
                                    </td>
                                    <td className="w-3/6 pl-4 pt-2">
                                        <div className="flex flex-col">
                                            <p className="flex gap-4 items-center font-medium">
                                                <span className="w-2 h-2 bg-customGreen rounded-full"></span>
                                                Konsultasi
                                            </p>
                                            <p className="pl-6 text-sm">
                                                Nama Pasien : Raihan Abdillah
                                            </p>
                                        </div>
                                    </td>
                                    <td className="w-2/6 pr-4">
                                        <div className="flex flex-col items-end">
                                            10.00 - 11.00
                                            <Link
                                                href=""
                                                className="text-ForestGreen text-sm"
                                            >
                                                Lihat detail
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                {/* TR 3 */}
                                {/* TR 4 */}
                                <tr className="w-full">
                                    <td className="w-1/6 border-r-2 text-center font-semibold text-gray-500">
                                        10.00
                                    </td>
                                    <td className="w-3/6 pl-4 pt-2">
                                        <div className="flex flex-col">
                                            <p className="flex gap-4 items-center font-medium">
                                                <span className="w-2 h-2 bg-customGreen rounded-full"></span>
                                                Konsultasi
                                            </p>
                                            <p className="pl-6 text-sm">
                                                Nama Pasien : Raihan Abdillah
                                            </p>
                                        </div>
                                    </td>
                                    <td className="w-2/6 pr-4">
                                        <div className="flex flex-col items-end">
                                            10.00 - 11.00
                                            <Link
                                                href=""
                                                className="text-ForestGreen text-sm"
                                            >
                                                Lihat detail
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                {/* TR 4 */}
                                {/* TR 5 */}
                                <tr className="w-full">
                                    <td className="w-1/6 border-r-2 text-center font-semibold text-gray-500">
                                        10.00
                                    </td>
                                    <td className="w-3/6 pl-4 pt-2">
                                        <div className="flex flex-col">
                                            <p className="flex gap-4 items-center font-medium">
                                                <span className="w-2 h-2 bg-customGreen rounded-full"></span>
                                                Konsultasi
                                            </p>
                                            <p className="pl-6 text-sm">
                                                Nama Pasien : Raihan Abdillah
                                            </p>
                                        </div>
                                    </td>
                                    <td className="w-2/6 pr-4">
                                        <div className="flex flex-col items-end">
                                            10.00 - 11.00
                                            <Link
                                                href=""
                                                className="text-ForestGreen text-sm"
                                            >
                                                Lihat detail
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                {/* TR 5 */}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaffAntrian;
