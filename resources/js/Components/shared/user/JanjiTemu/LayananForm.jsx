import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";

const LayananForm = ({ setData, data, contentClassName }) => {
    return (
        <div className="flex flex-col py-8 space-y-4">
            <div className="flex flex-col space-y-2">
                <p className="font-semibold">Perawatan</p>
                <Select
                    onValueChange={(value) => setData("perawatan", value)}
                    value={data.perawatan}
                >
                    <SelectTrigger className="w-full bg-transparent border-2 border-ForestGreen shadow-sm h-12 font-semibold">
                        <SelectValue placeholder="Pilih Perawatan" />
                    </SelectTrigger>
                    <SelectContent className={`bg-customWhite border-2  ${contentClassName} `}>
                        <SelectItem
                            value="1"
                            className="x transition-all font-semibold cursor-pointer"
                        >
                            Perawatan 1
                        </SelectItem>
                        <SelectItem
                            value="2"
                            className="x transition-all font-semibold cursor-pointer"
                        >
                            Perawatan 2
                        </SelectItem>
                        <SelectItem
                            value="3"
                            className="x transition-all font-semibold cursor-pointer"
                        >
                            Perawatan 3
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-col space-y-2">
                <p className="font-semibold">Dokter</p>
                <Select
                    onValueChange={(value) => setData("dokter", value)}
                    value={data.dokter}
                >
                    <SelectTrigger className="w-full bg-transparent border-2 border-ForestGreen shadow-sm h-12 font-semibold">
                        <SelectValue placeholder="Pilih Dokter" />
                    </SelectTrigger>
                    <SelectContent className="bg-customWhite border-2 border-ForestGreen">
                        <SelectItem
                            value="1"
                            className="x transition-all font-semibold cursor-pointer"
                        >
                            Dokter 1
                        </SelectItem>
                        <SelectItem
                            value="2"
                            className="x transition-all font-semibold cursor-pointer"
                        >
                            Dokter 2
                        </SelectItem>
                        <SelectItem
                            value="3"
                            className="x transition-all font-semibold cursor-pointer"
                        >
                            Dokter 3
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default LayananForm;
