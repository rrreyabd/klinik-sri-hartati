import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, usePage } from "@inertiajs/react";
import { BiHomeAlt2 } from "react-icons/bi";
import { MdAddToPhotos } from "react-icons/md";
import { LuCalendarClock } from "react-icons/lu";
import { TiDocumentAdd } from "react-icons/ti";
import { PiUserListFill } from "react-icons/pi";
import { FaRegCreditCard } from "react-icons/fa";

const StaffSheet = () => {
    const { url } = usePage();

    return (
        <Sheet>
            <SheetTrigger className="p-2 bg-white rounded-md shadow-md">
                <GiHamburgerMenu className="text-2xl" />
            </SheetTrigger>
            <SheetContent
                side="left"
                classNameX="w-6 h-6"
                className="w-80 pl-8"
            >
                <SheetHeader>
                    <SheetTitle className="flex py-8">
                        <div className="flex gap-4 items-center">
                            <img src="/assets/logo.png" alt="Logo" width={36} />
                            <p className="font-semibold text-2xl">
                                Klinik Sri Hartati
                            </p>
                        </div>
                    </SheetTitle>
                    <div className="flex flex-col gap-4">
                        <Link
                            href="/staff"
                            className={`w-full py-2 rounded-md flex gap-4 transition-all hover:text-customWhite px-4 ${
                                url == "/staff"
                                    ? "bg-ForestGreen text-customWhite"
                                    : "bg-customWhite hover:text-customWhite hover:bg-ForestGreen text-gray-500 "
                            } `}
                        >
                            <BiHomeAlt2 className="text-2xl" />
                            <p className="font-medium">Dashboard</p>
                        </Link>
                        <Link
                            href="/staff/antrian"
                            className={`w-full py-2 rounded-md flex gap-4 transition-all hover:text-customWhite px-4 ${
                                url == "/staff/antrian"
                                    ? "bg-ForestGreen text-customWhite"
                                    : "bg-customWhite hover:text-customWhite hover:bg-ForestGreen text-gray-500 "
                            } `}
                        >
                            <MdAddToPhotos className="text-2xl" />
                            <p className="font-medium">Antrian</p>
                        </Link>
                        <Link
                            href="/staff/janji-temu"
                            className={`w-full py-2 rounded-md flex gap-4 transition-all px-4 ${
                                url == "/staff/janji-temu"
                                    ? "bg-ForestGreen text-customWhite"
                                    : "bg-customWhite hover:text-customWhite hover:bg-ForestGreen text-gray-500 "
                            } `}
                        >
                            <LuCalendarClock className="text-2xl" />
                            <p className="font-medium">Janji Temu</p>
                        </Link>
                        <Link
                            href="/staff/rekam-medis"
                            className={`w-full py-2 rounded-md flex gap-4 transition-all hover:text-customWhite px-4 ${
                                url == "/staff/rekam-medis"
                                    ? "bg-ForestGreen text-customWhite"
                                    : "bg-customWhite hover:text-customWhite hover:bg-ForestGreen text-gray-500 "
                            } `}
                        >
                            <TiDocumentAdd className="text-2xl" />
                            <p className="font-medium">Rekam Medis</p>
                        </Link>
                        <Link
                            href="/staff"
                            className={`w-full py-2 rounded-md flex gap-4 transition-all hover:text-customWhite px-4 ${
                                url == "/staff"
                                    ? "bg-ForestGreen text-customWhite"
                                    : "bg-customWhite hover:text-customWhite hover:bg-ForestGreen text-gray-500 "
                            } `}
                        >
                            <PiUserListFill className="text-2xl" />
                            <p className="font-medium">Pasien</p>
                        </Link>
                        <Link
                            href="/staff/pembayaran"
                            className={`w-full py-2 rounded-md flex gap-4 transition-all hover:text-customWhite px-4 ${
                                url == "/staff/pembayaran"
                                    ? "bg-ForestGreen text-customWhite"
                                    : "bg-customWhite hover:text-customWhite hover:bg-ForestGreen text-gray-500 "
                            } `}
                        >
                            <FaRegCreditCard className="text-2xl" />
                            <p className="font-medium">Pembayaran</p>
                        </Link>
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};

export default StaffSheet;
