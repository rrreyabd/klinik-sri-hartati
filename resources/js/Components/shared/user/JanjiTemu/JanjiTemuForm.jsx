import { Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import LayananForm from "./LayananForm";
import WaktuForm from "./WaktuForm";
import PasienForm from "./PasienForm";

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

const JanjiTemuForm = ({ auth, patient }) => {
    const steps = ["Layanan", "Waktu", "Pasien"];
    const stepsLength = steps.length;

    const [progress, setProgress] = useState(steps[0]);
    const currentStepIndex = steps.indexOf(progress);

    // Checkbox Pasien Form
    const [isChecked, setIsChecked] = useState(false);

    // Validasi Error State
    const [validationErrors, setValidationErrors] = useState({});

    const handleNext = () => {
        const nextStepIndex = currentStepIndex + 1;

        // Validasi Data
        const errors = {};
        if (progress === "Layanan") {
            if (!data.dokter) errors.dokter = "Dokter harus diisi.";
            if (!data.perawatan) errors.perawatan = "Perawatan harus diisi.";
        } else if (progress === "Waktu") {
            if (!data.tanggal) errors.tanggal = "Tanggal harus diisi.";
            if (!data.jam) errors.jam = "Jam harus diisi.";
        } else if (progress === "Pasien") {
            if (!data.nama_lengkap)
                errors.nama_lengkap = "Nama lengkap harus diisi.";
            if (!data.nomor_hp) errors.nomor_hp = "Nomor HP harus diisi.";
            if (!data.jenis_kelamin)
                errors.jenis_kelamin = "Jenis kelamin harus diisi.";
            if (!data.tanggal_lahir)
                errors.tanggal_lahir = "Tanggal lahir harus diisi.";
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
        nama_lengkap: "",
        nomor_hp: "",
        jenis_kelamin: "",
        tanggal_lahir: "",
    });

    // WaktuForm Start
    const handleDateChange = (date) => {
        setData("tanggal", date);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("janjitemu"));
    };

    useEffect(() => {
        if (isChecked) {
            setData((prevData) => ({
                ...prevData,
                nama_lengkap: auth.user.name,
                nomor_hp: patient.phone_number,
                jenis_kelamin: patient.gender,
                tanggal_lahir: patient.birthdate.substring(0, 10),
            }));
        }
    }, [isChecked]);

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
            "\n" +
            isChecked
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

                <hr className="border-2 border-ForestGreen w-1/4  sm:w-1/3" />

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

                <hr className="border-2 border-ForestGreen w-1/4  sm:w-1/3" />

                {/* Pasien Start */}
                <div
                    className={`border-2 border-ForestGreen h-10 w-10 rounded-full relative flex justify-center transition-all items-center ${
                        steps[currentStepIndex] == "Pasien"
                            ? "bg-ForestGreen"
                            : data.nama_lengkap &&
                              data.nomor_hp &&
                              data.tanggal_lahir
                            ? "bg-ForestGreen"
                            : "bg-customWhite"
                    }`}
                >
                    <FaCheck
                        className={` text-customWhite ${
                            data.nama_lengkap &&
                            data.nomor_hp &&
                            data.tanggal_lahir
                                ? "opacity-100"
                                : "opacity-0"
                        } `}
                    />
                    <p className="text-ForestGreen font-semibold absolute -top-8">
                        Pasien
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

                {progress === "Pasien" && (
                    <PasienForm
                        setData={setData}
                        data={data}
                        auth={auth}
                        isChecked={isChecked}
                        setIsChecked={setIsChecked}
                        patient={patient}
                        validationErrors={validationErrors}
                    />
                )}
            </div>

            {/* Nav Button Start */}
            <div className="w-full flex justify-between">
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
                        className="border border-red-600 rounded-full px-10 py-2 text-red-600 font-semibold bg-customWhite hover:brightness-95"
                    >
                        Batal
                    </Link>
                )}

                {currentStepIndex == steps.length - 1 && (
                    <AlertDialog>
                        {data.nama_lengkap &&
                        data.nomor_hp &&
                        data.jenis_kelamin &&
                        data.tanggal_lahir ? (
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
                            >Selesai</button>
                        )}

                        <AlertDialogContent className="w-[50vw]">
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
