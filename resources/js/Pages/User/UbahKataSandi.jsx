import ProfileLayout from "@/Layouts/ProfileLayout";
import UpdatePasswordForm from "../../Components/shared/user/Profil/UpdatePasswordForm";
import { Head } from "@inertiajs/react";

const UbahKataSandi = () => {
    return (
        <>
            <Head title="Ubah Kata Sandi" />
            <ProfileLayout>
                <div className="py-16 px-8 flex flex-col gap-16 flex-growhab">
                    <h1 className="text-2xl font-bold">Kata Sandi</h1>
                    <UpdatePasswordForm className="w-full" />
                </div>
            </ProfileLayout>
        </>
    );
};

export default UbahKataSandi;
