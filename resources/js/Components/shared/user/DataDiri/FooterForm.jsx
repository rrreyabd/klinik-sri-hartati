import AlertDialogComponent from "@/Components/shared/AlertDialogComponent";
import { Link } from "@inertiajs/react";

const FooterForm = ({ processing }) => {
    return (
        <div className="flex justify-between">
            <AlertDialogComponent
                title={"Apakah Anda yakin?"}
                desc={"Anda akan keluar dari website dan harus masuk kembali."}
                cancel={"Batal"}
                action={"Keluar"}
                trigger={"Keluar"}
                triggerClassName={"border border-red-600 px-8 py-1 rounded-md bg-red-600 text-white transition-all font-semibold hover:bg-red-700"}
            >
                <Link
                    href={route("logout")}
                    method="post"
                    as="button"
                    className="border border-red-600 px-8 py-1 rounded-md bg-red-600 text-white transition-all font-medium hover:bg-red-700 text-sm"
                >
                    Keluar
                </Link>
            </AlertDialogComponent>

            <button
                type="submit"
                className={`border border-ForestGreen px-8 py-1 rounded-md bg-ForestGreen text-white transition-all hover:brightness-90 font-medium ${
                    processing && "opacity-40"
                }`}
                disabled={processing}
            >
                {processing ? "Memproses" : "Simpan"}
            </button>
        </div>
    );
};

export default FooterForm;
