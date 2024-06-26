import UpdateProfileInformation from "@/Components/shared/user/Profil/UpdateProfileInformationForm";
import ProfileLayout from "@/Layouts/ProfileLayout";
import { Head } from "@inertiajs/react";

const Profile = ({ auth }) => {
    return (
        <>
            <Head title="Profil" />
            <ProfileLayout>
                <div className="md:py-16 px-8 flex flex-col md:gap-16 flex-grow">
                    <h1 className="hidden md:block text-2xl font-bold">Akun</h1>
                    <UpdateProfileInformation className="w-full" />
                </div>
            </ProfileLayout>
        </>
    );
};

export default Profile;