import Input from "../Input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";

const PasienForm = ({ setData, data, auth, patient, isChecked, setIsChecked }) => {

    return (
        <div className="flex flex-col space-y-4 py-8">
            {/* {!isChecked && (
                <p className="text-red-600 font-medium">
                    ⚠️ Fitur riwayat konsultasi tidak akan tersedia bagi pasien
                    yang mendaftar bukan di akunnya sendiri
                </p>
            )} */}

            <Input
                label="Nama Lengkap"
                placeholder="Masukkan Nama Lengkap"
                name="nama_lengkap"
                type="text"
                value={isChecked ? auth.user.name : data.nama_lengkap}
                id=""
                disabled={isChecked ? true : false}
                className={`w-full ${
                    isChecked ? " cursor-not-allowed brightness-75" : ""
                } `}
                onChange={(e) => setData("nama_lengkap", e.target.value)}
            />

            <div className="flex items-center mb-4">
                <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                    className="w-4 h-4 text-ForestGreen bg-gray-100 border-gray-500 rounded focus:ring-0"
                />
                <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Daftar sebagai{" "}
                    <span className="font-bold"> {auth.user.name} </span>
                </label>
            </div>

            <Input
                label="Nomor HP"
                placeholder="Masukkan Nomor HP"
                name="nomor_hp"
                type="number"
                value={isChecked ? patient.phone_number : data.nomor_hp}
                id=""
                disabled={isChecked ? true : false}
                className={`w-full ${
                    isChecked ? " cursor-not-allowed brightness-75" : ""
                } `}
                onChange={(e) => setData("nomor_hp", e.target.value)}
            />
            <div className="">
                <p className="font-semibold">Jenis Kelamin</p>
                <Select
                    onValueChange={(value) => setData("jenis_kelamin", value)}
                    value={isChecked ? patient.gender : data.jenis_kelamin}
                    disabled={isChecked ? true : false}
                >
                    <SelectTrigger className={`w-full border-2 border-gray-400 shadow-sm h-12 text-base ${
                        isChecked ? " cursor-not-allowed bg-[#b5b5b5]" : "bg-customWhite"
                    }  `}>
                        <SelectValue
                            placeholder="Jenis Kelamin"
                            className="font-light"
                        />
                    </SelectTrigger>
                    <SelectContent className="bg-customWhite border-2 border-ForestGreen">
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
                    value={
                        isChecked
                            ? patient.birthdate.substring(0, 10)
                            : data.tanggal_lahir
                    }
                    id=""
                    disabled={isChecked ? true : false}
                    className={`w-full ${
                        isChecked ? " cursor-not-allowed brightness-75" : ""
                    } `}
                    onChange={(e) => setData("tanggal_lahir", e.target.value)}
                />
            </div>
        </div>
    );
};

export default PasienForm;
