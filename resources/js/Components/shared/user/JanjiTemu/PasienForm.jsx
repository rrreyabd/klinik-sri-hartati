import Input from "../Input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";

const PasienForm = ({
    setData,
    data,
    auth,
    patient,
    isChecked,
    setIsChecked,
    validationErrors,
}) => {
    return (
        <div className="flex flex-col space-y-4 py-8">
            <div>
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
                {!data.nama_lengkap && (
                    <p className="text-red-600 text-sm font-medium">
                        {validationErrors.nama_lengkap}
                    </p>
                )}
            </div>

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

            <div>
                <Input
                    label="NIK"
                    placeholder="Masukkan NIK Pasien"
                    name="nik"
                    type="number"
                    value={isChecked ? patient.nik : data.nik}
                    id=""
                    disabled={isChecked ? true : false}
                    className={`w-full ${
                        isChecked ? " cursor-not-allowed brightness-75" : ""
                    } `}
                    onChange={(e) => {
                        if (
                            e.target.value.length <= 16 &&
                            /^[0-9]*$/.test(e.target.value)
                        ) {
                            setData("nik", e.target.value);
                        }
                    }}
                />
                {!data.nik && (
                    <p className="text-red-600 text-sm font-medium">
                        {validationErrors.nik}
                    </p>
                )}
            </div>

            <div>
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
                {!data.nomor_hp && (
                    <p className="text-red-600 text-sm font-medium">
                        {validationErrors.nomor_hp}
                    </p>
                )}
            </div>

            <div>
                <p className="font-semibold">Jenis Kelamin</p>
                <Select
                    onValueChange={(value) => setData("jenis_kelamin", value)}
                    value={isChecked ? patient.gender : data.jenis_kelamin}
                    disabled={isChecked ? true : false}
                >
                    <SelectTrigger
                        className={`w-full text-black border-2 shadow-sm h-12 text-base ${
                            isChecked
                                ? " cursor-not-allowed bg-black/50 border-black"
                                : "bg-customWhite border-black/30"
                        }  `}
                    >
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
                {!data.jenis_kelamin && (
                    <p className="text-red-600 text-sm font-medium">
                        {validationErrors.jenis_kelamin}
                    </p>
                )}
            </div>

            <div>
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
                    onChange={(e) => [
                        setData("tanggal_lahir", e.target.value),
                        (validationErrors.tanggal_lahir = ""),
                    ]}
                />
                {validationErrors.tanggal_lahir && (
                    <p className="text-red-600 text-sm font-medium">
                        {validationErrors.tanggal_lahir}
                    </p>
                )}
            </div>
        </div>
    );
};

export default PasienForm;
