import { Link } from "@inertiajs/react";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";

const FooterForm = ({ processing, submit, state }) => {
    return (
        <div className="flex flex-col gap-4">
            {!state ? (
                <p className="text-customRed font-semibold text-sm md:text-base text-end">
                    Anda harus mengisi semua kolom untuk melanjutkan.
                </p>
            ) : null}
            <div className="flex justify-between items-center">
                <AlertDialog>
                    <AlertDialogTrigger className="border border-red-600 h-8 px-8 py-1 rounded-md bg-red-600 text-white transition-all font-semibold hover:bg-red-700">
                        Keluar
                    </AlertDialogTrigger>
                    <AlertDialogContent className="flex flex-col gap-16">
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                Apakah Anda yakin?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                Data Anda tidak akan tersimpan dan Anda harus
                                masuk kembali.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Batal</AlertDialogCancel>

                            <Link
                                href={route("logout")}
                                method="post"
                                as="button"
                                className="border border-red-600 px-8 py-1 rounded-md bg-red-600 text-white transition-all font-medium hover:bg-red-700 text-sm"
                            >
                                Keluar
                            </Link>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>

                <AlertDialog>
                    <AlertDialogTrigger
                        disabled={!state}
                        className={`border border-ForestGreen px-8 py-1 rounded-md bg-ForestGreen text-white transition-all hover:brightness-90 font-semibold ${
                            !state && "opacity-40 cursor-not-allowed"
                        
                        }`}
                    >
                        Simpan
                    </AlertDialogTrigger>
                    <AlertDialogContent className="flex flex-col gap-16">
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                Apakah data sudah sesuai?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                Anda dapat mengubahnya di pengaturan profil.
                                Namun, tidak ada salahnya untuk mengubahnya
                                sekarang.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Batal</AlertDialogCancel>
                            <AlertDialogAction
                                onClick={submit}
                                className={`border border-ForestGreen px-8 py-1 rounded-md bg-ForestGreen text-white transition-all hover:brightness-90 font-semibold ${
                                    processing && "opacity-40"
                                }`}
                            >
                                {processing ? "Memproses" : "Simpan"}
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </div>
    );
};

export default FooterForm;
