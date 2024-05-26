import { Link, usePage } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";
import { FaKey, FaWpforms, FaUser } from "react-icons/fa";

import { InertiaLink } from "@inertiajs/inertia-react";

const ProfileLayout = ({ children }) => {
    const { url } = usePage();

    return (
        <div className="w-full flex justify-center bg-customWhite">
            <main className="w-full md:w-3/4 min-h-screen flex flex-col md:flex-row">
                <div className="w-full md:w-64 py-8  md:py-16 px-8 flex flex-col gap-6 md:border-r border-slate-300">
                    <div className="flex flex-col gap-6">
                        <Link
                            href="/"
                            className="flex items-center gap-2"
                        >
                            <ArrowLeft />
                            <p className="font-semibold">Kembali</p>
                        </Link>

                        <hr className="w-full border-slate-300" />
                    </div>

                    <div className="flex flex-row justify-between md:flex-col gap-2 md:gap-4">
                        <InertiaLink
                            href="/profile"
                            className={`font-semibold py-1 md:hover:gap-6 transition-all flex items-center gap-2 md:gap-4 ${
                                url === "/profile"
                                    ? "text-black hover:gap-4"
                                    : "text-black/50 hover:text-black"
                            }`}
                        >
                            <FaUser />
                            Akun
                        </InertiaLink>

                        <InertiaLink
                            href="/data-diri"
                            className={`font-semibold py-1 md:hover:gap-6 transition-all flex items-center gap-2 md:gap-4 ${
                                url === "/data-diri"
                                    ? "text-black hover:gap-4"
                                    : "text-black/50 hover:text-black"
                            }`}
                        >
                            <FaWpforms />
                            Data Diri
                        </InertiaLink>

                        <InertiaLink
                            href="/kata-sandi"
                            className={`font-semibold py-1 md:hover:gap-6 transition-all flex items-center gap-2 md:gap-4 ${
                                url === "/kata-sandi"
                                    ? "text-black hover:gap-4"
                                    : "text-black/50 hover:text-black"
                            }`}
                        >
                            <FaKey />
                            Kata Sandi
                        </InertiaLink>
                    </div>
                </div>

                {children}
            </main>
        </div>
    );
};

export default ProfileLayout;
