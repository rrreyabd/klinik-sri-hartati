import Navbar from "@/Components/shared/user/Navbar";
import ListContainer from "@/Components/shared/user/RekamMedis/ListContainer";
import { Head } from "@inertiajs/react";

const RekamMedis = ({ MedicalRecords, auth }) => {
    return (
        <main
            className="flex flex-col items-center bg-customWhite lg:bg-customWhite"
            id="home"
        >
            <Head title="Rekam Medis" />
            <div className="px-8 md:px-0 w-full md:w-4/5 max-w-[1300px]">
                <Navbar auth={auth} />

                <div className="mt-4">
                    <h1 className="text-4xl font-semibold">Rekam Medis</h1>
                    
                    <div className="">

                    </div>

                    <div className="py-8 flex flex-col gap-4">
                        <ListContainer />
                        <ListContainer />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default RekamMedis;
