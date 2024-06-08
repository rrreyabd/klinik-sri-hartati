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
import { Link } from "@inertiajs/react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";

const OwnerDeleteAlert = ({ dataId, routeName }) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <FaRegTrashAlt className="text-customRed h-6 w-6" />
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="flex flex-col items-center gap-2">
                        <div className="bg-red-100 p-4 rounded-full flex justify-center items-center">
                            <IoWarningOutline className="text-red-600 h-12 w-12" />
                        </div>
                        <p>Apakah kamu yakin?</p>
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        <p className="text-base font-medium text-center">
                            Data yang sudah dihapus tidak dapat dikembalikan.
                        </p>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Batal</AlertDialogCancel>
                    <Link
                        href={route(routeName, dataId)}
                        className="text-white font-medium text-sm flex items-center justify-center bg-red-600 px-4 py-2 rounded-md"
                    >
                        Hapus
                    </Link>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default OwnerDeleteAlert;
