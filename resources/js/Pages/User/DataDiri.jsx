import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import ProfileLayout from "@/Layouts/ProfileLayout";
import { Head, useForm } from "@inertiajs/react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdBloodtype } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import PrimaryButton from "@/Components/PrimaryButton";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";

const DataDiri = ({ patient, success, error }) => {
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            tanggal_lahir: patient.birthdate,
            alamat: patient.address,
            golongan_darah: patient.blood_type,
            nomor_telepon: patient.phone_number,
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
                                    className="mt-1 block w-2/3 h-12 bg-customWhite border-black/30"
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

                                <Select
                                    onValueChange={(value) =>
                                        setData("golongan_darah", value)
                                    }
                                    value={data.golongan_darah}
                                >
                                    <SelectTrigger className="w-2/3 bg-transparent border-2 border-black/70 shadow-sm h-12 font-semibold rounded-xl mt-1 relative">
                                        <div className="flex items-center pl-16">
                                            <div className="absolute left-0 w-16 h-3/5 flex justify-center items-center border-r-2 border-customBlack">
                                                <MdBloodtype className="w-4 h-4" />
                                            </div>
                                            <SelectValue placeholder="Golongan Darah" />
                                        </div>
                                    </SelectTrigger>
                                    <SelectContent
                                        className={`bg-customWhite border-2 border-gray-300`}
                                    >
                                        <SelectItem
                                            value="A"
                                            className="x transition-all font-semibold cursor-pointer"
                                        >
                                            A
                                        </SelectItem>
                                        <SelectItem
                                            value="B"
                                            className="x transition-all font-semibold cursor-pointer"
                                        >
                                            B
                                        </SelectItem>
                                        <SelectItem
                                            value="AB"
                                            className="x transition-all font-semibold cursor-pointer"
                                        >
                                            AB
                                        </SelectItem>
                                        <SelectItem
                                            value="O"
                                            className="x transition-all font-semibold cursor-pointer"
                                        >
                                            O
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="">
                                <InputLabel
                                    htmlFor="alamat"
                                    value="Alamat"
                                    className="font-semibold"
                                />

                                <TextInput
                                    id="alamat"
                                    className="mt-1 block w-2/3 h-12 bg-customWhite border-black/30"
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
                                    className="mt-1 block w-2/3 h-12 bg-customWhite border-black/30"
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
