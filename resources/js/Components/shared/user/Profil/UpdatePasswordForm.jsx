import { useRef } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { FaUnlockAlt, FaKey } from "react-icons/fa";

export default function UpdatePasswordForm({ className = "" }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset("password", "password_confirmation");
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset("current_password");
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section className={`${className} `}>
            <header>
                <h2 className="text-lg text-black font-semibold">
                    Perbarui Kata Sandi
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Pastikan akun Anda menggunakan kata sandi yang panjang dan
                    acak agar tetap aman.
                </p>
            </header>

            <form onSubmit={updatePassword} className="mt-6 space-y-6">
                <div>
                    <InputLabel
                        htmlFor="current_password"
                        value="Kata Sandi Saat Ini"
                        className="font-semibold"
                    />

                    <TextInput
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) =>
                            setData("current_password", e.target.value)
                        }
                        type="password"
                        Icon={FaKey}
                        className="mt-1 block w-full md:w-2/3 h-12 bg-customWhite border-black/30"
                        autoComplete="current-password"
                    />

                    {errors.current_password ? (
                        <InputError
                            message="Kata sandi saat ini tidak boleh kosong"
                            className="mt-2"
                        />
                    ) : null}
                </div>

                <div>
                    <InputLabel
                        htmlFor="password"
                        value="Kata Sandi Baru"
                        className="font-semibold"
                    />

                    <TextInput
                        id="password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        type="password"
                        Icon={FaUnlockAlt}
                        className="mt-1 block w-full md:w-2/3 h-12 bg-customWhite border-black/30"
                        autoComplete="new-password"
                    />

                    {errors.password ? (
                        <InputError
                            message="Kata sandi baru tidak boleh kosong"
                            className="mt-2"
                        />
                    ) : null}
                </div>

                <div>
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Konfirmasi Kata Sandi Baru"
                        className="font-semibold"
                    />

                    <TextInput
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        type="password"
                        Icon={FaUnlockAlt}
                        className="mt-1 block w-full md:w-2/3 h-12 bg-customWhite border-black/30"
                        autoComplete="new-password"
                    />

                    {errors.password_confirmation ? (
                        <InputError
                            message="Konfirmasi kata sandi baru salah"
                            className="mt-2"
                        />
                    ) : null}
                </div>

                <div className="flex items-center justify-end md:justify-start gap-4">
                    <PrimaryButton
                        className="px-6 py-2 font-semibold"
                        disabled={processing}
                    >
                        Simpan Perubahan
                    </PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Saved.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
