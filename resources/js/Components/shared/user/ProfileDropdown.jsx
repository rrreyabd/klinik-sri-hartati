import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

import { Dialog, DialogTrigger, DialogContent } from "@/Components/ui/dialog";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import UpdatePasswordForm from "@/Components/shared/user/Profil/UpdatePasswordForm";
import { Link } from "@inertiajs/react";

const ProfileDropdown = ({ children, className, auth }) => {
    return (
        <Dialog>
            <DropdownMenu>
                <DropdownMenuTrigger className={`unselectable ${className}`}>
                    {children}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-56 p-4 bg-customWhite font-semibold shadow-xl">
                    <DropdownMenuItem>
                        <Link href="/profile" className="w-full text-start">Profil</Link>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem>
                        <Link className="w-full text-start">Tagihan</Link>
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

            {/* Edit Profil */}
            <DialogContent className="transition-all h-full sm:h-3/4">
                <Tabs defaultValue="account" className="w-full">
                    <TabsList className="w-full my-6">
                        <TabsTrigger className="w-1/3" value="account">
                            Akun
                        </TabsTrigger>
                        <TabsTrigger className="w-1/3" value="password">
                            Kata Sandi
                        </TabsTrigger>
                        <TabsTrigger className="w-1/3" value="data">
                            Data diri
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="account">
                        <form action="">Akun</form>
                    </TabsContent>
                    <TabsContent value="password">
                        <UpdatePasswordForm />
                    </TabsContent>
                    <TabsContent value="data">
                        <form action="">Data</form>
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    );
};

export default ProfileDropdown;
