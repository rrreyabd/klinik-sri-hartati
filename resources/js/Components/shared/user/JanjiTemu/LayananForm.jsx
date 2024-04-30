import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";

const LayananForm = ({ setData }) => {
    return (
        <div className="flex flex-col py-8 space-y-4">
            <div className="flex flex-col space-y-2">
                <p className="font-semibold">Perawatan</p>
                <Select onValueChange={(value) => setData("perawatan", value)}>
                    <SelectTrigger className="w-full bg-customWhite border-2 border-ForestGreen shadow-sm shadow-customBlack/50 h-12">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-customWhite border-2 border-ForestGreen">
                        <SelectItem
                            value="Perawatan 1"
                            className="hover:brightness-95 transition-all"
                        >
                            Perawatan 1
                        </SelectItem>
                        <SelectItem
                            value="Perawatan 2"
                            className="hover:brightness-95 transition-all"
                        >
                            Perawatan 2
                        </SelectItem>
                        <SelectItem
                            value="Perawatan 3"
                            className="hover:brightness-95 transition-all"
                        >
                            Perawatan 3
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-col space-y-2">
                <p className="font-semibold">Dokter</p>
                <Select onValueChange={(value) => setData("dokter", value)}>
                    <SelectTrigger className="w-full bg-customWhite border-2 border-ForestGreen shadow-sm shadow-customBlack/50 h-12">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-customWhite border-2 border-ForestGreen">
                        <SelectItem
                            value="Dokter 1"
                            className="hover:brightness-95 transition-all"
                        >
                            Dokter 1
                        </SelectItem>
                        <SelectItem
                            value="Dokter 2"
                            className="hover:brightness-95 transition-all"
                        >
                            Dokter 2
                        </SelectItem>
                        <SelectItem
                            value="Dokter 3"
                            className="hover:brightness-95 transition-all"
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
