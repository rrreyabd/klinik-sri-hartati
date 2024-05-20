import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";
import { Link, usePage } from "@inertiajs/react";
import { BiHomeAlt2 } from "react-icons/bi";
import { MdAddToPhotos } from "react-icons/md";
import { LuCalendarClock } from "react-icons/lu";
import { TiDocumentAdd } from "react-icons/ti";
import { FaRegCreditCard } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const StaffSheet = () => {
    const { url } = usePage();

    return (
        <Sheet>
            <SheetTrigger className="p-2 bg-white rounded-md shadow-md">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                </svg>
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
                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            className="w-full py-2 rounded-md flex gap-4 transition-all px-4 text-red-600 hover:bg-red-600 hover:text-customWhite"
                        >
                            <FiLogOut className="text-2xl" />
                            <p className="font-medium">Keluar</p>
                        </Link>
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};

export default StaffSheet;
