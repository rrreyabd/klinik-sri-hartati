import { Head, useForm } from "@inertiajs/react";
import HeaderForm from "@/Components/shared/user/DataDiri/HeaderForm";
import BodyForm from "@/Components/shared/user/DataDiri/BodyForm";
import FooterForm from "@/Components/shared/user/DataDiri/FooterForm";

const DataInputForm = ({ auth }) => {
    const { data, setData, post, processing, errors } = useForm({
        user_id: auth.user.id,
        full_name: auth.user.name,
        birthdate: "",
        blood_type: "",
        gender: "",
        address: "",
        phone_number: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("data.store"));
    };

    return (
        <div className="bg-customWhite w-screen h-screen flex flex-col justify-center items-center px-0 sm:px-8 lg:px-0 py-0 sm:py-8 gap-y-8">
            <Head title="Form Data Diri" />
            <div className="max-w-[1000px] w-4/6  bg-white shadow-md rounded-lg overflow-hidden flex transition-all p-8 flex-col">
                <HeaderForm auth={auth} />

                <hr className="border w-full my-4" />

                <form onSubmit={submit} className="flex flex-col gap-10">
                    <BodyForm
                        auth={auth}
                        data={data}
                        setData={setData}
                        errors={errors}
                    />
                    <FooterForm processing={processing} submit={submit} />
                </form>
            </div>
        </div>
    );
};

export default DataInputForm;
