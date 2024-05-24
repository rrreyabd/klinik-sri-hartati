
import { useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import Input from "@/Components/shared/user/Input";

const StaffPasienForm = ({ setData, data }) => {

    return (
        <div className="flex flex-col space-y-4 py-8">
            <Input
                label="Nama Lengkap"
                placeholder="Masukkan Nama Lengkap"
                name="nama_lengkap"
                type="text"
                value={data.nama_lengkap}
                id=""
                className={`w-full bg-white`}
                onChange={(e) => setData("nama_lengkap", e.target.value)}
            />


            <Input
                label="Nomor HP"
                placeholder="Masukkan Nomor HP"
                name="nomor_hp"
                type="text"
                value={data.nomor_hp}
                id=""
                className={`w-full bg-white`}
                onChange={(e) => {
                    const value = e.target.value;
                    if (value.length >= 10 && /^[0-9]*$/.test(value)) {
                        setData("nomor_hp", value);
                    }
                }}
            />
            <div className="">
                <p className="font-semibold">Jenis Kelamin</p>
                <Select
                    onValueChange={(value) => setData("jenis_kelamin", value)}
                    value={data.jenis_kelamin}
                >
                    <SelectTrigger className={`w-full border border-black/50 shadow-sm h-12 font-medium text-base`}>
                        <SelectValue
                            placeholder="Jenis Kelamin"
                        />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-black">
                        <SelectItem
                            value="Laki-laki"
                            className="hover:brightness-95 transition-all font-semibold"
                        >
                            Laki-laki
                        </SelectItem>
                        <SelectItem
                            value="Perempuan"
                            className="hover:brightness-95 transition-all font-semibold"
                        >
                            Perempuan
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="">
                <p className="font-semibold">Tanggal Lahir</p>
                <Input
                    label="Tahun"
                    name="tanggal_lahir"
                    type="date"
                    labelClassName="hidden"
                    value={data.tanggal_lahir}
                    id=""
                    className={`w-full bg-white`}
                    onChange={(e) => setData("tanggal_lahir", e.target.value)}
                />
            </div>
        </div>
    );
};

export default StaffPasienForm;
