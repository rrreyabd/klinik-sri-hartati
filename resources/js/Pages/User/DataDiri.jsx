import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import ProfileLayout from "@/Layouts/ProfileLayout";
import { Head, useForm } from "@inertiajs/react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdBloodtype } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import PrimaryButton from "@/Components/PrimaryButton";

const DataDiri = ({ auth }) => {
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            tanggal_lahir: "",
            alamat: "",
            golongan_darah: "",
            nomor_telepon: "",
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route("datadiri.update"));
    };

    return (
        <>
            <Head title="Ubah Data Diri" />
            <ProfileLayout>
                <div className="py-16 px-8 flex flex-col gap-16 flex-grow">
                    <h1 className="text-2xl font-bold">Data Diri</h1>

                    <div className="">
                        <header>
                            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                                Data Diri
                            </h2>

                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                Perbarui informasi data diri Anda.
                            </p>
                        </header>

                        <form onSubmit={submit} className="mt-6 space-y-6">
                            <div className="">
                                <InputLabel
                                    htmlFor="nomor_telepon"
                                    value="Nomor Telepon"
                                    className="font-semibold"
                                />

                                <TextInput
                                    id="nomor_telepon"
                                    className="mt-1 block w-2/3 h-12 bg-customWhite"
                                    value={data.nomor_telepon}
                                    type="number"
                                    onChange={(e) =>
                                        setData("nomor_telepon", e.target.value)
                                    }
                                    required
                                    isFocused
                                    Icon={FaPhoneAlt}
                                    autoComplete="nomor_telepon"
                                />
                            </div>

                            <div className="">
                                <InputLabel
                                    htmlFor="golongan_darah"
                                    value="Golongan Darah"
                                    className="font-semibold"
                                />

                                <TextInput
                                    id="golongan_darah"
                                    className="mt-1 block w-2/3 h-12 bg-customWhite"
                                    value={data.golongan_darah}
                                    onChange={(e) =>
                                        setData(
                                            "golongan_darah",
                                            e.target.value
                                        )
                                    }
                                    required
                                    isFocused
                                    Icon={MdBloodtype}
                                    autoComplete="golongan_darah"
                                />
                            </div>

                            <div className="">
                                <InputLabel
                                    htmlFor="alamat"
                                    value="Alamat"
                                    className="font-semibold"
                                />

                                <TextInput
                                    id="alamat"
                                    className="mt-1 block w-2/3 h-12 bg-customWhite"
                                    value={data.alamat}
                                    onChange={(e) =>
                                        setData("alamat", e.target.value)
                                    }
                                    required
                                    isFocused
                                    Icon={FaLocationDot}
                                    autoComplete="alamat"
                                />
                            </div>

                            <div className="">
                                <InputLabel
                                    htmlFor="tanggal_lahir"
                                    value="Tanggal Lahir"
                                    className="font-semibold"
                                />

                                <TextInput
                                    id="tanggal_lahir"
                                    className="mt-1 block w-2/3 h-12 bg-customWhite"
                                    value={data.tanggal_lahir}
                                    type="date"
                                    onChange={(e) =>
                                        setData("tanggal_lahir", e.target.value)
                                    }
                                    required
                                    isFocused
                                    Icon={FaCalendarAlt}
                                    autoComplete="tanggal_lahir"
                                />
                            </div>

                            <PrimaryButton
                                className="px-6 py-2 font-semibold"
                                disabled={processing}
                            >
                                Simpan Perubahan
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            </ProfileLayout>
        </>
    );
};

export default DataDiri;
