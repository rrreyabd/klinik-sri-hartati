import StaffSheet from "@/Components/shared/Staff/StaffSheet";
import LayananForm from "@/Components/shared/user/JanjiTemu/LayananForm";
import WaktuForm from "@/Components/shared/user/JanjiTemu/WaktuForm";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import StaffPasienForm from "./StaffPasienForm";

const StaffDaftarJanjiTemu = ({ auth }) => {
    const { data, setData, post, processing, errors } = useForm({
        user_id: auth.user.id,
        dokter: "",
        perawatan: "",
        tanggal: "",
        jam: "",
        nama_lengkap: "",
        nomor_hp: "",
        jenis_kelamin: "",
        tanggal_lahir: "",
    });

    const steps = ["Layanan", "Waktu", "Pasien"];
    const stepsLength = steps.length;

    const [progress, setProgress] = useState(steps[0]);
    const currentStepIndex = steps.indexOf(progress);

    console.log(progress);

    const handleNext = () => {
        const nextStepIndex = currentStepIndex + 1;

        if (nextStepIndex < stepsLength) {
            setProgress(steps[nextStepIndex]);
        }
    };

    const handleBack = () => {
        const backStepIndex = currentStepIndex - 1;

        if (backStepIndex >= 0) {
            setProgress(steps[backStepIndex]);
        }
    };

    const handleDateChange = (date) => {
        setData("tanggal", date);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("staff.janji-temu.store"));
    };

    return (
        <div className="bg-customWhite min-h-screen flex justify-center items-center">
            <Head title="Daftar Janji Temu" />

            <form
                onSubmit={submit}
                className="w-3/4 py-8 flex flex-col gap-8 max-w-[1300px]"
            >
                <div className="bg-white rounded-md shadow-md mt-4 border overflow-hidden">
                    <div className="px-8 py-6 flex justify-between border-b bg-ForestGreen text-white">
                        <p className="font-semibold">Step {currentStepIndex + 1} dari 3</p>
                        <div className="flex items-center gap-2">
                            <div
                                className={`w-6 rounded-md ${
                                    steps[currentStepIndex] == "Layanan"
                                        ? "h-2"
                                        : "h-1"
                                } ${
                                    data.dokter && data.perawatan
                                        ? "bg-KellyGreen"
                                        : "bg-white"
                                } `}
                            ></div>
                            <div
                                className={`w-6 rounded-md ${
                                    steps[currentStepIndex] == "Waktu"
                                        ? "h-2"
                                        : "h-1"
                                } ${
                                    data.tanggal && data.jam
                                        ? "bg-KellyGreen"
                                        : "bg-white"
                                } `}
                            ></div>
                            <div
                                className={`w-6 rounded-md ${
                                    steps[currentStepIndex] == "Pasien"
                                        ? "h-2"
                                        : "h-1"
                                } ${
                                    data.nama_lengkap && data.nomor_hp && data.tanggal_lahir
                                        ? "bg-KellyGreen"
                                        : "bg-white"
                                } `}
                            ></div>
                        </div>
                    </div>

                    <div className="px-8 py-4 flex flex-col gap-2">
                        <h2 className="font-semibold text-xl">
                            {progress === "Layanan"
                                ? "Layanan"
                                : progress === "Waktu"
                                ? "Tanggal dan Jam"
                                : "Data Pasien"}
                        </h2>
                        <p className="text-sm">
                            {progress === "Layanan"
                                ? "Silahkan memilih Perawatan dan Dokter"
                                : progress === "Waktu"
                                ? "Silahkan mengisi informasi Tanggal dan Jam"
                                : "Silahkan mengisi data diri Pasien"}
                        </p>
                    </div>

                    <div className="px-8 h-[413px]">
                        {progress === "Layanan" && (
                            <LayananForm
                                setData={setData}
                                data={data}
                                contentClassName="bg-white"
                            />
                        )}
                        {progress === "Waktu" && (
                            <WaktuForm
                                setData={setData}
                                data={data}
                                selectedDate={data.tanggal}
                                onDateChange={handleDateChange}
                            />
                        )}

                        {progress === "Pasien" && (
                            <StaffPasienForm setData={setData} data={data} />
                        )}
                    </div>
                </div>

                <div className="flex justify-between">
                    {currentStepIndex > 0 ? (
                        <button
                            type="button"
                            onClick={handleBack}
                            className="shadow-md bg-white py-2 w-32 text-ForestGreen font-semibold rounded-md"
                        >
                            Kembali
                        </button>
                    ) : (
                        <Link
                            href="/staff/janji-temu"
                            className="shadow-md bg-white py-2 w-32 text-ForestGreen font-semibold rounded-md flex justify-center items-center"
                        >
                            Batal
                        </Link>
                    )}

                    {currentStepIndex == steps.length - 1 && (
                        <button
                            type="submit"
                            disabled={processing}
                            className={`shadow-md bg-ForestGreen py-2 w-32 text-customWhite font-semibold rounded-md ${
                                processing
                                    ? "brightness-75 cursor-not-allowed"
                                    : ""
                            } `}
                        >
                            {processing ? "Memproses" : "Selesai"}
                        </button>
                    )}
                    {currentStepIndex !== steps.length - 1 && (
                        <button
                            type="button"
                            className="shadow-md bg-ForestGreen py-2 w-32 text-customWhite font-semibold rounded-md"
                            onClick={handleNext}
                        >
                            Lanjut
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default StaffDaftarJanjiTemu;
