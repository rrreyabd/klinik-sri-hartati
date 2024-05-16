import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { FaUser } from "react-icons/fa";
import { Mail } from "lucide-react";
import { IoMdMail } from "react-icons/io";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Data Akun
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Perbarui informasi nama dan email Anda.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6 w-full">
                <div className="w-full">
                    <InputLabel
                        htmlFor="name"
                        value="Nama Lengkap"
                        className="font-semibold"
                    />

                    <TextInput
                        id="name"
                        className="mt-1 block w-2/3 h-12 bg-customWhite border-black/30"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        isFocused
                        Icon={FaUser}
                        autoComplete="name"
                    />

                    {errors.name ? (
                        <InputError
                            className="mt-2"
                            message="Nama Lengkap tidak boleh kosong"
                        />
                    ) : null}
                </div>

                <div>
                    <InputLabel
                        htmlFor="email"
                        value="Email"
                        className="font-semibold"
                    />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-2/3 h-12 bg-customWhite border-black/30"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        Icon={IoMdMail}
                        autoComplete="username"
                    />

                    {errors.email ? (
                        <InputError className="mt-2" message="Email tidak boleh kosong" />
                    ) : null}
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800 dark:text-gray-200">
                            Your email address is unverified.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 font-medium text-sm text-green-600 dark:text-green-400">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <Transition
                    show={recentlySuccessful}
                    enter="transition ease-in-out"
                    enterFrom="opacity-0"
                    leave="transition ease-in-out"
                    leaveTo="opacity-0"
                >
                    <p className="text-sm text-green-600 font-semibold">
                        Perubahan Tersimpan.
                    </p>
                </Transition>

                <div className="flex items-center gap-4">
                    <PrimaryButton
                        className="px-6 py-2 font-semibold"
                        disabled={processing}
                    >
                        Simpan Perubahan
                    </PrimaryButton>
                </div>
            </form>
        </section>
    );
}
