import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import { BsQuestionCircle } from "react-icons/bs";

const AlertDialogComponent = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <button
                    type="button"
                    className="border border-ForestGreen rounded-full px-10 py-2 text-customWhite font-semibold bg-ForestGreen"
                >
                    Selesai
                </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        <div className="flex flex-col items-center gap-4">
                            <BsQuestionCircle className="h-16 w-16 text-ForestGreen" />
                            <p>Apakah data sudah benar?</p>
                        </div>
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-center">
                        <p className="pb-4 text-base">
                            Pastikan data yang Anda masukkan sudah benar. Kamu
                            tidak dapat mengubah data setelah menekan tombol
                            "Selesai".
                        </p>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="border border-ForestGreen text-ForestGreen hover:text-ForestGreen rounded-full px-10 py-2 font-semibold bg-white hover:bg-customWhite">
                        Batal
                    </AlertDialogCancel>
                    <AlertDialogAction
                        onClick={submit}
                        disabled={processing}
                        className="border border-ForestGreen rounded-full px-10 py-2 text-white font-semibold bg-ForestGreen hover:brightness-95"
                    >
                        {processing ? "Memproses" : "Selesai"}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default AlertDialogComponent;
