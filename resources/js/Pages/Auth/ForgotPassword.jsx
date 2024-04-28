import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { FaUnlockAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    console.log(errors);

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <>
            <Head title="Lupa Kata Sandi" />
            <div className="h-screen bg-customWhite w-full flex flex-col justify-center items-center">
                <div className="w-full sm:w-[500px] px-8 sm:px-0 flex flex-col space-y-6">
                    <div className="w-full flex justify-start">
                        <div className="bg-ForestGreen p-4 rounded-full">
                            <FaUnlockAlt className="w-8 h-8 text-white" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-ForestGreen font-bold text-2xl">
                            Lupa Kata Sandi?
                        </h1>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Tidak masalah. Cukup beri tahu kami alamat email
                            Anda dan kami akan mengirimkan email berisi tautan
                            pengaturan ulang kata sandi.
                        </p>
                    </div>

                    {status && (
                        <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
                            Kami sudah mengirimkan tautan pengaturan ulang kata
                            sandi ke email Anda.
                        </div>
                    )}

                    <form onSubmit={submit} className="flex flex-col space-y-4">
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="w-full h-12 bg-customWhite"
                            isFocused={true}
                            placeholder="Alamat Email"
                            Icon={IoMail}
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        {errors.email ? (
                            <InputError
                                message="Alamat email tidak ditemukan"
                                className="mt-2"
                            />
                        ) : null}

                        <div className="flex items-center space-x-4 justify-end mt-4">
                            <Link
                                href="/login"
                                className={`w-1/2 sm:w-fit text-center font-semibold px-4 sm:px-6 py-2  text-ForestGreen border-2 border-ForestGreen rounded-xl shadow-sm text-sm sm:text-base`}
                                disabled={processing}
                            >
                                Kembali
                            </Link>

                            <PrimaryButton
                                className="px-4 sm:px-6 py-2 w-1/2 sm:w-fit text-center font-semibold border-2 border-ForestGreen text-sm sm:text-base"
                                disabled={processing}
                            >
                                Kirim tautan
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
