import { Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import LayananForm from "./LayananForm";
import WaktuForm from "./WaktuForm";
import PasienForm from "./PasienForm";

const JanjiTemuForm = ({ auth }) => {
    const steps = ["Layanan", "Waktu", "Pasien"];
    const stepsLength = steps.length;

    const [progress, setProgress] = useState(steps[0]);
    const currentStepIndex = steps.indexOf(progress);

    const [isChecked, setIsChecked] = useState(false);

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
        tanggal: "",
        jam: "",
        nama_lengkap: "",
        nomor_hp: "",
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
            setData(prevData => ({
                ...prevData,
                nama_lengkap: auth.user.name,
                nomor_hp: auth.user.id,
                tanggal_lahir: auth.user.created_at.substring(0, 10)
            }));
        }
    }, [isChecked]);


    console.log(
        "Dokter: " + data.dokter + "\n" +
        "Perawatan: " + data.perawatan + "\n" +
        "Tanggal: " + data.tanggal + "\n" +
        "Jam: " + data.jam + "\n" +
        "Nama Lengkap: " + data.nama_lengkap + "\n" +
        "Nomor HP: " + data.nomor_hp + "\n" +
        "Tanggal Lahir: " + data.tanggal_lahir + "\n" +
        isChecked
    );
    

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
                                    className={`border-2 border-ForestGreen h-10 w-10 rounded-full relative flex justify-center transition-all items-center ${
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
                {progress === "Layanan" && (
                    <LayananForm setData={setData} data={data} />
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
                    <PasienForm
                        setData={setData}
                        data={data}
                        auth={auth}
                        isChecked={isChecked}
                        setIsChecked={setIsChecked}
                    />
                )}
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
