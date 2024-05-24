import LayananForm from "@/Components/shared/user/JanjiTemu/LayananForm";
import WaktuForm from "@/Components/shared/user/JanjiTemu/WaktuForm";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
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

const StaffDaftarJanjiTemu = ({ auth, treatments, doctors }) => {
    const { data, setData, post, processing, errors } = useForm({
        user_id: auth.user.id,
        dokter: "",
        perawatan: "",
        tanggal: "",
        jam: "",
    });

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
            if (!data.tanggal) errors.tanggal = " ";
            if (!data.jam) errors.jam = " ";
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
                        <p className="font-semibold">
                            Step {currentStepIndex + 1} dari {steps.length}
                        </p>
                        <div className="flex items-center gap-2">
                            <div
                                className={`w-6 rounded-md h-2 ${
                                    data.dokter && data.perawatan
                                        ? "bg-customGreen"
                                        : "bg-white"
                                } `}
                            ></div>
                            <div
                                className={`w-6 rounded-md h-2 ${
                                    data.tanggal && data.jam
                                        ? "bg-customGreen"
                                        : "bg-white"
                                } `}
                            ></div>
                        </div>
                    </div>

                    <div className="px-8 py-4 flex flex-col gap-2">
                        <h2 className="font-semibold text-xl">
                            {progress === "Layanan"
                                ? "Layanan"
                                : "Tanggal dan Jam"}
                        </h2>
                        <p className="text-sm">
                            {progress === "Layanan"
                                ? "Silahkan memilih Perawatan dan Dokter"
                                : "Silahkan mengisi informasi Tanggal dan Jam"}
                        </p>
                    </div>

                    <div className="px-8 h-[413px]">
                        {progress === "Layanan" && (
                            <LayananForm
                                setData={setData}
                                data={data}
                                contentClassName="bg-white"
                                validationErrors={validationErrors}
                                treatments={treatments}
                                doctors={doctors}
                                optionClass={"bg-white"}
                            />
                        )}
                        {progress === "Waktu" && (
                            <WaktuForm
                                setData={setData}
                                data={data}
                                selectedDate={data.tanggal}
                                onDateChange={handleDateChange}
                                validationErrors={validationErrors}
                            />
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
                        <AlertDialog>
                            {data.jam && data.tanggal ? (
                                <AlertDialogTrigger
                                    type="button"
                                    className="border border-ForestGreen rounded-md px-10 py-2 text-customWhite font-semibold bg-ForestGreen hover:brightness-95"
                                >
                                    Selesai
                                </AlertDialogTrigger>
                            ) : (
                                <button
                                    onClick={handleNext}
                                    type="button"
                                    className="border border-ForestGreen rounded-md px-10 py-2 text-customWhite font-semibold bg-ForestGreen hover:brightness-95"
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
                                            Pastikan data yang Anda masukkan
                                            sudah benar. Kamu tidak dapat
                                            mengubah data setelah menekan tombol
                                            "Selesai".
                                        </p>
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel className="border border-ForestGreen text-ForestGreen hover:text-ForestGreen rounded-md px-10 py-2 font-semibold bg-white hover:bg-customWhite">
                                        Batal
                                    </AlertDialogCancel>
                                    <AlertDialogAction
                                        onClick={submit}
                                        disabled={processing}
                                        className="border border-ForestGreen rounded-md px-10 py-2 text-white font-semibold bg-ForestGreen hover:brightness-95"
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
                            className="border border-ForestGreen rounded-md px-10 py-2 text-customWhite font-semibold bg-ForestGreen hover:brightness-95"
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
