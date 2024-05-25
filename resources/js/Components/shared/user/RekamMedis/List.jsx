import { Link } from "@inertiajs/react";
import { MdOutlineFileDownload } from "react-icons/md";

const List = () => {
    return (
        <div className="flex justify-between">
            <div className=""></div>

            <div className="flex gap-4">
                <Link
                    href=""
                    className="bg-ForestGreen px-6 py-2 rounded-full text-white font-semibold border-2 border-ForestGreen h-fit hover:brightness-95 transition-all"
                >
                    Lihat Detail
                </Link>
                <Link
                    href=""
                    className="flex gap-2 items-center font-semibold bg-white text-ForestGreen px-6 py-2 rounded-full border-2 border-ForestGreen h-fit hover:brightness-95 transition-all"
                >
                    <MdOutlineFileDownload className="h-6 w-6" />
                    PDF
                </Link>
            </div>
        </div>
    );
};

export default List;
