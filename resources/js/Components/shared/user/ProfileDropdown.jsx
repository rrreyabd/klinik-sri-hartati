import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Link } from "@inertiajs/react";

const ProfileDropdown = ({ children, className, auth }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={`unselectable ${className}`}>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-56 p-4 bg-customWhite font-semibold shadow-xl">
                <DropdownMenuItem>
                    <Link href="/profile" className="w-full text-start">
                        Profil
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    <Link href="/tagihan" className="w-full text-start">Tagihan</Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="w-full text-start text-red-600"
                    >
                        Keluar
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ProfileDropdown;
