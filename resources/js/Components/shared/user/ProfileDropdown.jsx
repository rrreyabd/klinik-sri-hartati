import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Link } from "@inertiajs/react";
import { FiLogOut } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { SlDocs } from "react-icons/sl";
import { RiBillLine } from "react-icons/ri";

const ProfileDropdown = ({ children, className, auth }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={`unselectable ${className}`}>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-56 py-4 bg-customWhite font-semibold shadow-xl">
                <DropdownMenuItem className="px-4 hover:bg-[#e2e2e2] rounded-md">
                    <Link
                        href="/profile"
                        className="w-full text-start flex gap-3"
                    >
                        <FaRegUser className="h-5 w-5" />
                        Profil
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="px-4 hover:bg-[#e2e2e2] rounded-md">
                    <Link
                        href="/rekam-medis"
                        className="w-full text-start flex gap-3"
                    >
                        <SlDocs className="h-5 w-5" />
                        Rekam Medis
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="px-4 hover:bg-[#e2e2e2] rounded-md">
                    <Link
                        href="/tagihan"
                        className="w-full text-start flex gap-3"
                    >
                        <RiBillLine className="h-5 w-5" />
                        Tagihan
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="hover:bg-[#e2e2e2] px-4 rounded-md flex gap-3">
                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="w-full text-start flex gap-3 text-red-600"
                    >
                        <FiLogOut className="h-5 w-5" />
                        Keluar
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ProfileDropdown;
