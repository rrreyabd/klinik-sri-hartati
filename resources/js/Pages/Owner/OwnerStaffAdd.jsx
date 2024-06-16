import OwnerLayout from "@/Layouts/OwnerLayout";
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";

const OwnerStaffAdd = () => {
    const [open, setOpen] = useState(true);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        nik: '',
        gender: '',
        phone_number: '',
        address: '',
        birthdate: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('owner.staff.store'))
    };

    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <OwnerLayout open={open} setOpen={setOpen} navTitle="Edit Staff">
            <div className="text-lg font-medium">
                <span className="text-gray-500">
                    {" "}
                    <Link href="/owner"> Dashboard </Link> &gt;{" "}
                    <Link href="/owner/staff"> Staff </Link>{" "}
                </span>{" "}
                &gt; Tambah Staff
            </div>



            <div className="bg-white rounded-md shadow-md px-16 py-8 mt-8">
                <h1 className="font-semibold text-2xl">Tambah Staff</h1>
                <hr className="my-4" />

                <form onSubmit={submit}>
                    <div className="grid grid-cols-2 gap-x-16 gap-y-6">
                        {/* Nama Staff */}
                        <div className="">
                            <p className="font-medium">Nama</p>
                            <input
                                type="text"
                                name=""
                                id=""
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="w-full mt-1 border-2 border-black/20 rounded-md h-12"
                            />
                        </div>

                        {/* Email */}
                        <div className="">
                            <p className="font-medium">Email</p>
                            <input
                                type="text"
                                name=""
                                id=""
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className="w-full mt-1 border-2 border-black/20 rounded-md h-12"
                            />
                        </div>

                        {/* Password */}
                        <div className="">
                            <p className="font-medium">Password</p>
                            <input
                                type="password"
                                name=""
                                id=""
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                className="w-full mt-1 border-2 border-black/20 rounded-md h-12"
                            />
                        </div>

                        {/* NIK */}
                        <div className="">
                            <p className="font-medium">NIK</p>
                            <input
                                type="text"
                                name=""
                                id=""
                                value={data.nik}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (
                                        value.length <= 16 &&
                                        /^[0-9]*$/.test(value)
                                    ) {
                                        setData("nik", value);
                                    }
                                }}
                                className="w-full mt-1 border-2 border-black/20 rounded-md h-12"
                            />
                        </div>

                        {/* No Telp */}
                        <div className="">
                            <p className="font-medium">Nomor Telepon</p>
                            <input
                                type="text"
                                name=""
                                id=""
                                value={data.phone_number}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (
                                        value.length <= 13 &&
                                        /^[0-9]*$/.test(value)
                                    ) {
                                        setData("phone_number", value);
                                    }
                                }}
                                className="w-full mt-1 border-2 border-black/20 rounded-md h-12"
                            />
                        </div>

                        {/* Alamat */}
                        <div className="">
                            <p className="font-medium">Alamat</p>
                            <input
                                type="text"
                                name=""
                                id=""
                                value={data.address}
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                                className="w-full mt-1 border-2 border-black/20 rounded-md h-12"
                            />
                        </div>

                        {/* Jenis Kelamin */}
                        <div className="">
                            <p className="font-medium">Jenis Kelamin</p>
                            <Select
                                defaultValue={data.gender}
                                onValueChange={(value) =>
                                    setData("gender", value)
                                }
                                value={data.gender}
                            >
                                <SelectTrigger className="w-full mt-1 border-2 border-black/20 rounded-md h-12 font-medium">
                                    <SelectValue placeholder="Jenis Kelamin" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem
                                        className="font-medium text-sm py-2"
                                        value="Laki-laki"
                                    >
                                        Laki-laki
                                    </SelectItem>
                                    <SelectItem
                                        className="font-medium text-sm py-2"
                                        value="Perempuan"
                                    >
                                        Perempuan
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Tanggal Lahir */}
                        <div>
                            <p className="font-medium">Tanggal Lahir</p>
                            <input
                                type="date"
                                name=""
                                id=""
                                value={data.birthdate}
                                onChange={(e) =>
                                    setData("birthdate", e.target.value)
                                }
                                className="w-full mt-1 border-2 border-black/20 rounded-md h-12"
                            />
                        </div>


                    </div>
                    <div className="mt-8 flex justify-end">
                        <button
                            type="submit"
                            disabled={processing}
                            className={`font-semibold text-white w-52 py-2 rounded-md shadow-md ${processing
                                ? "bg-ForestGreen/50"
                                : "bg-ForestGreen"
                                } `}
                        >
                            {processing ? "Menyimpan..." : "Tambah"}
                        </button>
                    </div>
                </form>
            </div>
        </OwnerLayout>
    );
};

export default OwnerStaffAdd;
