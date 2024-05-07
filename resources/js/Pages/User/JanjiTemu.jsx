import Logo from "@/Components/shared/Logo";
import FormStepper from "@/Components/shared/user/FormStepper";
import JanjiTemuForm from "@/Components/shared/user/JanjiTemu/JanjiTemuForm";
import { Head, Link } from "@inertiajs/react";

const JanjiTemu = ({ auth, patient }) => {
    return (
        <div className="flex justify-center bg-customWhite min-h-screen py-8">
            <Head title="Janji Temu" />
            <div className="w-3/4">
                <Logo />

                <div className="flex flex-col space-y-4 mt-4 w-full">
                    <h1 className="text-ForestGreen text-4xl font-semibold text-center">
                        Janji Temu Klinik
                    </h1>

                    <JanjiTemuForm auth={auth} patient={patient} />
                </div>
            </div>
        </div>
    );
};

export default JanjiTemu;
