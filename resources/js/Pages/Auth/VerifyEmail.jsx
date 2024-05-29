import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import { IoMail } from "react-icons/io5";

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <div className="w-full bg-customWhite h-screen flex justify-center items-center">
            <Head title="Verifikasi Email" />

            <div className="w-full sm:w-[520px] h-full sm:h-fit flex flex-col gap-2 items-center bg-white p-8 rounded-md shadow-md space-y-6 py-16">
                <div className="bg-FotGreen rounded-full w-fit">
                    <IoMail className="h-20 w-20 text-ForestGreen" />
                </div>
                <div className="mb-4 text-base text-gray-600 dark:text-gray-400 flex flex-col space-y-4">
                    <p className="font-semibold text-ForestGreen text-lg text-center">Terima kasih telah menggunakan website <br /> Klinik Sri Hartati</p>
                    <p>
                        Sebelum memulai, bisakah Anda memverifikasi alamat email
                        Anda dengan mengklik tautan yang baru saja kami kirimi
                        email Anda?
                    </p>

                    <p>
                        Jika Anda tidak menerima email kami dengan senang hati
                        akan mengirimkannya kepada Anda lain.
                    </p>
                </div>

                {status === "verification-link-sent" && (
                    <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
                        Email verifikasi baru telah dikirim ke alamat email yang Anda berikan saat pendaftaran.
                    </div>
                )}

                <form
                    onSubmit={submit}
                    className="mt-4 flex items-center justify-between w-full"
                >
                    <PrimaryButton
                        className="px-4 py-2 w-fit text-center font-semibold border-2 border-ForestGreen text-sm"
                        disabled={processing}
                    >
                        Kirim Ulang Email
                    </PrimaryButton>

                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="underline"
                    >
                        Log Out
                    </Link>
                </form>
            </div>
        </div>
    );
}
