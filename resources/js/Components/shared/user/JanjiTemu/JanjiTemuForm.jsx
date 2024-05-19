import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import LayananForm from "./LayananForm";
import WaktuForm from "./WaktuForm";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import { BsQuestionCircle } from "react-icons/bs";

const JanjiTemuForm = ({ auth }) => {
    const steps = ["Layanan", "Waktu"];
    const stepsLength = steps.length;

    const [progress, setProgress] = useState(steps[0]);
    const currentStepIndex = steps.indexOf(progress);

    // Validasi Error State
    const [validationErrors, setValidationErrors] = useState({});

    const handleNext = () => {
        const nextStepIndex = currentStepIndex + 1;

        // Validasi Data
        const errors = {};
        if (progress === "Layanan") {
            if (!data.dokter) errors.dokter = "Dokter harus dipilih.";
            if (!data.perawatan) errors.perawatan = "Layanan harus dipilih.";
        } else if (progress === "Waktu") {
            if (!data.tanggal) errors.tanggal = "Tanggal harus diisi.";
            if (!data.jam) errors.jam = "Jam harus diisi.";
        }

        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
        } else {
            setValidationErrors({});
            if (nextStepIndex < stepsLength) {
                setProgress(steps[nextStepIndex]);
            }
        }
    };

    const handleBack = () => {
        const backStepIndex = currentStepIndex - 1;

        if (backStepIndex >= 0) {
            setProgress(steps[backStepIndex]);
        }
    };

    // Field
    const { data, setData, post, processing, errors } = useForm({
        user_id: auth.user.id,
        dokter: "",
        perawatan: "",
        tanggal: "",
        jam: "",
    });

    // WaktuForm Start
    const handleDateChange = (date) => {
        setData("tanggal", date);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("janjitemu"));
    };

    console.log(
        "Dokter: " +
            data.dokter +
            "\n" +
            "Perawatan: " +
            data.perawatan +
            "\n" +
            "Tanggal: " +
            data.tanggal +
            "\n" +
            "Jam: " +
            data.jam +
            "\n" +
            "Nama Lengkap: " +
            data.nama_lengkap +
            "\n" +
            "Nomor HP: " +
            data.nomor_hp +
            "\n" +
            "Tanggal Lahir: " +
            data.tanggal_lahir +
            "\n"
    );

    return (
        <form onSubmit={submit}>
            <div className="flex justify-center items-center w-full pt-12">
                {/* Layanan Start */}
                <div
                    className={`border-2 border-ForestGreen h-10 w-10 rounded-full relative flex justify-center transition-all items-center ${
                        steps[currentStepIndex] == "Layanan"
                            ? "bg-ForestGreen"
                            : data.dokter && data.perawatan
                            ? "bg-ForestGreen"
                            : "bg-customWhite"
                    }`}
                >
                    <FaCheck
                        className={` text-customWhite ${
                            data.dokter && data.perawatan
                                ? "opacity-100"
                                : "opacity-0"
                        } `}
                    />
                    <p className="text-ForestGreen font-semibold absolute -top-8">
                        Layanan
                    </p>
                </div>
                {/* Layanan End */}

                <hr className="border-2 border-ForestGreen w-2/3  sm:w-11/12" />

                {/* Waktu Start */}
                <div
                    className={`border-2 border-ForestGreen h-10 w-10 rounded-full relative flex justify-center transition-all items-center ${
                        steps[currentStepIndex] == "Waktu"
                            ? "bg-ForestGreen"
                            : data.tanggal && data.jam
                            ? "bg-ForestGreen"
                            : "bg-customWhite"
                    }`}
                >
                    <FaCheck
                        className={` text-customWhite ${
                            data.tanggal && data.jam
                                ? "opacity-100"
                                : "opacity-0"
                        } `}
                    />
                    <p className="text-ForestGreen font-semibold absolute -top-8">
                        Waktu
                    </p>
                </div>
                {/* Waktu End */}
            </div>

            <div className="min-h-72 sm:min-h-[450px]">
                {/* Layanan */}
                {progress === "Layanan" && (
                    <LayananForm
                        setData={setData}
                        data={data}
                        validationErrors={validationErrors}
                    />
                )}
                {progress === "Waktu" && (
                    <WaktuForm
                        setData={setData}
                        data={data}
                        selectedDate={data.tanggal}
                        selectedTime={data.jam}
                        onDateChange={handleDateChange}
                        validationErrors={validationErrors}
                    />
                )}
            </div>

            {/* Nav Button Start */}
            <div className="w-full gap-4 sm:gap-0 flex flex-col-reverse sm:flex-row sm:justify-between">
                {currentStepIndex > 0 ? (
                    <button
                        type="button"
                        onClick={handleBack}
                        className="border border-ForestGreen rounded-full px-10 py-2 text-ForestGreen font-semibold bg-customWhite hover:brightness-95 transition-all"
                    >
                        Kembali
                    </button>
                ) : (
                    <Link
                        href="/"
                        className="border border-red-600 rounded-full px-10 py-2 text-red-600 font-semibold bg-customWhite hover:brightness-95 flex justify-center items-center"
                    >
                        Batal
                    </Link>
                )}

                {currentStepIndex == steps.length - 1 && (
                    <AlertDialog>
                        {data.jam && data.tanggal ? (
                            <AlertDialogTrigger
                                type="button"
                                className="border border-ForestGreen rounded-full px-10 py-2 text-customWhite font-semibold bg-ForestGreen hover:brightness-95"
                            >
                                Selesai
                            </AlertDialogTrigger>
                        ) : (
                            <button
                                onClick={handleNext}
                                type="button"
                                className="border border-ForestGreen rounded-full px-10 py-2 text-customWhite font-semibold bg-ForestGreen hover:brightness-95"
                            >
                                Selesai
                            </button>
                        )}

                        <AlertDialogContent className="w-full lg:w-[50vw]">
                            <AlertDialogHeader>
                                <AlertDialogTitle>
                                    <div className="flex flex-col items-center gap-4">
                                        <BsQuestionCircle className="h-16 w-16 text-ForestGreen" />
                                        <p>Apakah data sudah sesuai?</p>
                                    </div>
                                </AlertDialogTitle>
                                <AlertDialogDescription className="">
                                    <p className="pb-4 text-base">
                                        Pastikan data yang Anda masukkan sudah
                                        benar. Kamu tidak dapat mengubah data
                                        setelah menekan tombol "Selesai".
                                    </p>
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel className="border border-ForestGreen text-ForestGreen hover:text-ForestGreen rounded-full px-10 py-2 font-semibold bg-white hover:bg-customWhite">
                                    Batal
                                </AlertDialogCancel>
                                <AlertDialogAction
                                    onClick={submit}
                                    disabled={processing}
                                    className="border border-ForestGreen rounded-full px-10 py-2 text-white font-semibold bg-ForestGreen hover:brightness-95"
                                >
                                    {processing ? "Memproses" : "Selesai"}
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                )}
                {currentStepIndex !== steps.length - 1 && (
                    <button
                        type="button"
                        className="border border-ForestGreen rounded-full px-10 py-2 text-customWhite font-semibold bg-ForestGreen hover:brightness-95"
                        onClick={handleNext}
                    >
                        Lanjut
                    </button>
                )}
            </div>
            {/* Nav Button End */}
        </form>
    );
};

export default JanjiTemuForm;
