import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";

const LayananForm = ({
    setData,
    data,
    contentClassName,
    validationErrors,
    treatments,
    doctors,
}) => {
    const formatter = new Intl.NumberFormat("id-ID");

    return (
        <div className="flex flex-col py-8 space-y-4">
            <div className="flex flex-col space-y-2">
                <p className="font-semibold">Layanan</p>
                <Select
                    onValueChange={(value) => setData("perawatan", value)}
                    value={data.perawatan}
                >
                    <SelectTrigger className="w-full bg-transparent border-2 border-ForestGreen shadow-sm h-12 font-semibold">
                        <SelectValue placeholder="Pilih Layanan" />
                    </SelectTrigger>
                    <SelectContent
                        className={`bg-customWhite border-2  ${contentClassName} `}
                    >
                        {treatments &&
                            treatments.map((treatment) => (
                                <SelectItem
                                    key={treatment.id}
                                    value={` ${treatment.id} `}
                                    className="x transition-all font-semibold cursor-pointer py-3 bg-customWhite w-full flex justify-between border-b border-gray-300"
                                >
                                    Rp {formatter.format(treatment.fee)} -{" "}
                                    {treatment.name}
                                </SelectItem>
                            ))}
                    </SelectContent>
                </Select>
                {!data.perawatan && (
                    <p className="text-customRed text-sm font-semibold">
                        {validationErrors.perawatan}
                    </p>
                )}
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
                    <SelectContent
                        className={`bg-customWhite border-2  ${contentClassName} `}
                    >
                        {doctors &&
                            doctors.map((doctor) => (
                                <SelectItem
                                    key={doctor.id}
                                    value={` ${doctor.id} `}
                                    className="x transition-all font-semibold cursor-pointer py-3 bg-customWhite w-full flex justify-between border-b border-gray-300"
                                >
                                    {doctor.user.name}
                                </SelectItem>
                            ))}
                    </SelectContent>
                </Select>
                {!data.dokter && (
                    <p className="text-customRed text-sm font-semibold">
                        {validationErrors.dokter}
                    </p>
                )}
            </div>
        </div>
    );
};

export default LayananForm;
