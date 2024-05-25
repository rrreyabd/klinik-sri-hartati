import Logo from "@/Components/shared/Logo";
import FormStepper from "@/Components/shared/user/FormStepper";
import JanjiTemuForm from "@/Components/shared/user/JanjiTemu/JanjiTemuForm";
import { Head, Link } from "@inertiajs/react";

const JanjiTemu = ({ auth, patient, treatments, doctors }) => {
    return (
        <div className="flex justify-center bg-customWhite min-h-screen py-8">
            <Head title="Janji Temu" />
            <div className="w-3/4">
                <Logo />

                <div className="flex flex-col space-y-4 w-full mt-8 sm:mt-4">
                    <h1 className="text-ForestGreen text-3xl sm:text-4xl font-semibold text-center">
                        Janji Temu Klinik
                    </h1>

                    <JanjiTemuForm
                        auth={auth}
                        patient={patient}
                        treatments={treatments}
                        doctors={doctors}
                    />
                </div>
            </div>
        </div>
    );
};

export default JanjiTemu;
