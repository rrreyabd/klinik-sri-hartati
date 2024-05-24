import { Head, useForm } from "@inertiajs/react";
import HeaderForm from "@/Components/shared/user/DataDiri/HeaderForm";
import BodyForm from "@/Components/shared/user/DataDiri/BodyForm";
import FooterForm from "@/Components/shared/user/DataDiri/FooterForm";
import { useState, useEffect } from "react";

const DataInputForm = ({ auth }) => {
    const { data, setData, post, processing, errors, setError, clearErrors } = useForm({
        user_id: auth.user.id,
        full_name: auth.user.name,
        birthdate: "",
        blood_type: "",
        gender: "",
        address: "",
        phone_number: "",
    });

    const [allFilled, setAllFilled] = useState(false);

    useEffect(() => {
        if (
            data.user_id &&
            data.full_name &&
            data.birthdate &&
            data.blood_type &&
            data.gender &&
            data.address &&
            data.phone_number
        ) {
            setAllFilled(true);
        } else {
            setAllFilled(false);
        }
    }, [data]);

    const validate = () => {
        clearErrors();
        let valid = true;

        if (data.phone_number.length < 10) {
            setError("phone_number", "Nomor telepon harus valid");
            valid = false;
        }

        return valid;
    };

    const submit = (e) => {
        e.preventDefault();

        if (validate()) {
            post(route("data.store"));
        } else {
            console.log("Gagal")
        }
    };

    return (
        <div className="bg-customWhite w-screen min-h-screen flex flex-col justify-center items-center px-0 sm:px-8 lg:px-0 py-0 sm:py-8 gap-y-8">
            <Head title="Form Data Diri" />
            <div className="h-full md:h-fit w-full lg:w-[1000px] bg-white shadow-md rounded-lg overflow-hidden flex transition-all p-8 flex-col">
                <HeaderForm auth={auth} />

                <hr className="border w-full my-4" />

                <form onSubmit={submit} className="flex flex-col gap-10">
                    <BodyForm
                        auth={auth}
                        data={data}
                        setData={setData}
                        errors={errors}
                    />
                    <FooterForm processing={processing} submit={submit} state={allFilled} />
                </form>
            </div>
        </div>
    );
};

export default DataInputForm;
