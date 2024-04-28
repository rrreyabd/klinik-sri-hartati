import { useEffect } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import { FaLock, FaUnlockAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("password.store"));
    };

    return (
        <>
            <Head title="Ubah Kata Sandi" />
            <div className="h-screen bg-customWhite w-full flex flex-col justify-center items-center">
                <div className="w-full sm:w-[500px] px-8 sm:px-0 flex flex-col space-y-6">
                    <div className="w-full flex justify-start">
                        <div className="bg-ForestGreen p-4 rounded-full">
                            <FaUnlockAlt className="w-8 h-8 text-white" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-ForestGreen font-bold text-2xl">
                            Ubah Kata Sandi
                        </h1>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Pastikan memilih kata sandi yang kuat dan mudah diingat.
                        </p>
                    </div>

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full h-12"
                                placeholder="Alamat Email"
                                Icon={IoMail}
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full h-12"
                                placeholder="Kata Sandi Baru"
                                Icon={FaLock}
                                autoComplete="new-password"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Confirm Password"
                            />

                            <TextInput
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full h-12"
                                placeholder="Konfirmasi Kata Sandi Baru"
                                Icon={FaLock}
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                            />

                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex items-center justify-end mt-8">
                            <PrimaryButton
                                className="px-4 sm:px-6 py-2 w-full h-12 sm:h-fit sm:w-fit text-center font-semibold border-2 border-ForestGreen text-sm sm:text-base"
                                disabled={processing}
                            >
                                Ubah Kata Sandi
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}