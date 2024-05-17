import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";

const BodyForm = ({ auth, data, setData }) => {
    return (
        <div className="grid grid-cols-2 gap-x-16 gap-y-6">
            <div className="flex flex-col gap-1">
                <p className="font-semibold">Nama Lengkap</p>
                <input
                    type="text"
                    onChange={(e) => setData("full_name", e.target.value)}
                    value={data.full_name}
                    className="border-2 border-gray-400 rounded-md placeholder:font-medium focus:border-ForestGreen focus:ring-ForestGreen"
                    placeholder="John Doe"
                />
            </div>

            <div className="flex flex-col gap-1">
                <p className="font-semibold">Nomor Telepon</p>
                <input
                    type="number"
                    minLength={2}
                    onChange={(e) => setData("phone_number", e.target.value)}
                    value={data.phone_number}
                    className="border-2 border-gray-400 rounded-md placeholder:font-medium focus:border-ForestGreen focus:ring-ForestGreen"
                    placeholder="08xxxxxxxxxx"
                />
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
            </div>
        </div>
    );
};

export default BodyForm;
