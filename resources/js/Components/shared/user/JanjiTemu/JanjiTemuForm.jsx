import { Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import LayananForm from "./LayananForm";
import WaktuForm from "./WaktuForm";
import PasienForm from "./PasienForm";

const JanjiTemuForm = ({ auth, patient }) => {
    const steps = ["Layanan", "Waktu", "Pasien"];
    const stepsLength = steps.length;

    const [progress, setProgress] = useState(steps[0]);
    const currentStepIndex = steps.indexOf(progress);

    // Checkbox Pasien Form
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
                            : data.nama_lengkap && data.nomor_hp && data.tanggal_lahir
                            ? "bg-ForestGreen"
                            : "bg-customWhite"
                    }`}
                >
                    <FaCheck
                        className={` text-customWhite ${
                            data.nama_lengkap && data.nomor_hp && data.tanggal_lahir
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
                        patient={patient}
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
