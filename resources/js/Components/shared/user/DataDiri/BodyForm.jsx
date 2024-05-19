import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";

const BodyForm = ({ auth, data, setData, errors }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-6">
            <div className="flex flex-col gap-1">
                <p className="font-semibold">Nama Lengkap</p>
                <input
                    type="text"
                    onChange={(e) => setData("full_name", e.target.value)}
                    value={data.full_name}
                    className="border-2 border-gray-400 rounded-md placeholder:font-medium focus:border-ForestGreen focus:ring-ForestGreen"
                    placeholder="John Doe"
                />
                {errors.full_name && (
                    <p className="text-red-600 font-semibold text-sm">
                        {errors.full_name}
                    </p>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <p className="font-semibold">Nomor Induk Kependudukan (NIK)</p>
                <input
                    type="number"
                    onChange={(e) => {
                        if (
                            e.target.value.length <= 16 &&
                            /^[0-9]*$/.test(e.target.value)
                        ) {
                            setData("nik", e.target.value);
                        }
                    }}
                    value={data.nik}
                    className="border-2 border-gray-400 rounded-md placeholder:font-medium focus:border-ForestGreen focus:ring-ForestGreen"
                    placeholder="Contoh: 3201021504990001"
                    required
                />
                {errors.nik && data.nik.length !== 16 && (
                    <p className="text-red-600 font-semibold text-sm">
                        {errors.nik}
                    </p>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <p className="font-semibold">Nomor Telepon</p>
                <input
                    type="number"
                    onChange={(e) => {
                        if (
                            e.target.value.length <= 13 &&
                            /^[0-9]*$/.test(e.target.value)
                        ) {
                            setData("phone_number", e.target.value);
                        }
                    }}
                    value={data.phone_number}
                    className="border-2 border-gray-400 rounded-md placeholder:font-medium focus:border-ForestGreen focus:ring-ForestGreen"
                    placeholder="08xxxxxxxxxx"
                    required
                />
                {errors.phone_number && data.phone_number.length < 10 && (
                    <p className="text-red-600 font-semibold text-sm">
                        {errors.phone_number}
                    </p>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <p className="font-semibold">Alamat</p>
                <input
                    type="text"
                    onChange={(e) => setData("address", e.target.value)}
                    value={data.address}
                    className="border-2 border-gray-400 rounded-md placeholder:font-medium focus:border-ForestGreen focus:ring-ForestGreen"
                    placeholder="Jalan ABC No.123, Medan, Sumatera Utara"
                />
                {errors.address && (
                    <p className="text-red-600 font-semibold text-sm">
                        {errors.address}
                    </p>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <p className="font-semibold">Tanggal Lahir</p>
                <input
                    type="date"
                    onChange={(e) => setData("birthdate", e.target.value)}
                    value={data.birthdate}
                    className="border-2 border-gray-400 rounded-md placeholder:font-medium focus:border-ForestGreen focus:ring-ForestGreen"
                    placeholder=""
                />
                {errors.birthdate && (
                    <p className="text-red-600 font-semibold text-sm">
                        {errors.birthdate}
                    </p>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <p className="font-semibold">Jenis Kelamin</p>
                <Select
                    onValueChange={(value) => setData("gender", value)}
                    value={data.gender}
                >
                    <SelectTrigger
                        className={`w-full border-2 border-gray-400 shadow-sm h-12 font-semibold text-base `}
                    >
                        <SelectValue placeholder="Jenis Kelamin" className="" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-2 border-gray-400">
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
                {errors.gender && (
                    <p className="text-red-600 font-semibold text-sm">
                        {errors.gender}
                    </p>
                )}
            </div>
            <div className="flex flex-col gap-1">
                <p className="font-semibold">Golongan Darah</p>
                <Select
                    onValueChange={(value) => setData("blood_type", value)}
                    value={data.blood_type}
                >
                    <SelectTrigger
                        className={`w-full border-2 border-gray-400 shadow-sm h-12 font-medium text-base `}
                    >
                        <SelectValue placeholder="Golongan Darah" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-2 border-gray-400">
                        <SelectItem
                            value="A"
                            className="hover:brightness-95 transition-all font-semibold"
                        >
                            A
                        </SelectItem>
                        <SelectItem
                            value="B"
                            className="hover:brightness-95 transition-all font-semibold"
                        >
                            B
                        </SelectItem>
                        <SelectItem
                            value="AB"
                            className="hover:brightness-95 transition-all font-semibold"
                        >
                            AB
                        </SelectItem>
                        <SelectItem
                            value="O"
                            className="hover:brightness-95 transition-all font-semibold"
                        >
                            O
                        </SelectItem>
                    </SelectContent>
                </Select>
                {errors.blood_type && (
                    <p className="text-red-600 font-semibold text-sm">
                        {errors.blood_type}
                    </p>
                )}
            </div>
        </div>
    );
};

export default BodyForm;
