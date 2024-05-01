import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import LayananForm from "./LayananForm";
import WaktuForm from "./WaktuForm";

const JanjiTemuForm = () => {
    const steps = ["Layanan", "Waktu", "Pasien", "Detail"];
    const stepsLength = steps.length;

    const [progress, setProgress] = useState(steps[0]);
    const currentStepIndex = steps.indexOf(progress);

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

    // Field
    const { data, setData, post, processing, errors } = useForm({
        dokter: "",
        perawatan: "",
        waktu: "",
        jam: "",
    });

    // WaktuForm
    const handleDateChange = (date) => {
        setData("waktu", date);
    };

    console.log("waktu : " + data.waktu);
    // WaktuForm

    const submit = (e) => {
        e.preventDefault();

        post(route("janjitemu"));
    };

    return (
        <form onSubmit={submit}>
            <div className="flex justify-center items-center w-full pt-12">
                {steps &&
                    steps.map((step, index) => (
                        <>
                            <div
                                key={index}
                                className="flex flex-col space-y-4 items-center"
                            >
                                <div
                                    className={`border-2 border-ForestGreen h-8 w-8 rounded-full relative flex justify-center transition-all items-center ${
                                        steps[currentStepIndex] == step
                                            ? "bg-ForestGreen"
                                            : "bg-customWhite"
                                    }`}
                                >
                                    <FaCheck
                                        className={`text-${
                                            steps[currentStepIndex] == step
                                                ? "customWhite"
                                                : "ForestGreen"
                                        }`}
                                    />
                                    <p className="text-ForestGreen font-semibold absolute -top-8">
                                        {step}
                                    </p>
                                </div>
                            </div>
                            {index < stepsLength - 1 && (
                                <hr
                                    key={step}
                                    className="border-2 border-ForestGreen w-1/3"
                                />
                            )}
                        </>
                    ))}
            </div>

            <div className="min-h-[450px]">
                {/* Layanan */}
                {progress === "Layanan" && <LayananForm setData={setData} />}
                {progress === "Waktu" && (
                    <WaktuForm
                        setData={setData}
                        selectedDate={data.waktu}
                        onDateChange={handleDateChange}
                    />
                )}

                {progress === "Pasien" && <></>}
                {progress === "Detail" && <p>Detail</p>}
            </div>

            {/* Nav Button Start */}
            <div className="w-full flex justify-between">
                {currentStepIndex > 0 ? (
                    <button
                        type="button"
                        onClick={handleBack}
                        className="border border-ForestGreen rounded-full px-10 py-2 text-ForestGreen font-semibold bg-customWhite"
                    >
                        Kembali
                    </button>
                ) : (
                    <Link
                        href="/"
                        className="border border-ForestGreen rounded-full px-10 py-2 text-ForestGreen font-semibold bg-customWhite"
                    >
                        Batal
                    </Link>
                )}

                {currentStepIndex == steps.length - 1 && (
                    <button
                        type="submit"
                        disabled={processing}
                        className="border border-ForestGreen rounded-full px-10 py-2 text-customWhite font-semibold bg-ForestGreen"
                    >
                        {processing ? "Memproses" : "Selesai"}
                    </button>
                )}
                {currentStepIndex !== steps.length - 1 && (
                    <button
                        type="button"
                        className="border border-ForestGreen rounded-full px-10 py-2 text-customWhite font-semibold bg-ForestGreen"
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
