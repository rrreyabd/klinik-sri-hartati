import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Link } from "@inertiajs/react";

const ProfileDropdown = ({ children, className, label }) => {
    const items = [
        { label: "Profil", href: "/profile" },
        { label: "Tagihan", href: "/" },
        { label: "Pengaturan", href: "/" },
    ];
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={`unselectable ${className}`}>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
                {label && (
                    <>
                        <DropdownMenuLabel>{label}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                    </>
                )}
                {items.map((item, index) => (
                    <DropdownMenuItem className="focus:bg-slate-100">
                        <Link href={item.href} className={`w-full  ${className}`}>
                            {item.label}
                        </Link>
                    </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="bg-red-600 focus:bg-red-700 text-white focus:text-white font-semibold rounded-md">
                        <Link 
                            href={route('logout')} 
                            method="post" 
                            as="button" 
                            className="w-full text-center"
                        >
                            Keluar
                        </Link>
                    </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ProfileDropdown;
