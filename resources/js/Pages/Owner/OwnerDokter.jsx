import OwnerLayout from "@/Layouts/OwnerLayout";
import Pagination from "@/Components/Pagination";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import OwnerDeleteAlert from "@/Components/shared/Owner/OwnerDeleteAlert";

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
import { ArrowLeft } from "lucide-react";

const OwnerDokter = ({ doctors }) => {
    const [open, setOpen] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const itemsPerPage = 10;

    const filteredData = doctors.filter((item) =>
        item.user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);
    const slicedData = filteredData.slice(startIndex, endIndex);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const options = { year: "numeric", month: "short", day: "2-digit" };
        return date.toLocaleDateString("id-ID", options);
    };
    
    return (
        <OwnerLayout open={open} setOpen={setOpen} navTitle="Dokter">
            <div className="text-lg font-medium">
                <span className="text-gray-500">Dashboard </span> &gt; Dokter
            </div>

            <div className="flex justify-end mt-8">
                <input
                    type="text"
                    placeholder="Cari disini..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="rounded-md border-gray-400 placeholder:font-medium placeholder:text-gray-400 focus:border-ForestGreen focus:ring-ForestGreen w-72"
                />
            </div>

            <div className="overflow-hidden rounded-md border border-gray-200 shadow-md mt-8">
                <table className="w-full bg-white h-fit">
                    <thead className="bg-ForestGreen text-white">
                        <tr>
                            <td className="font-semibold text-center px-3 py-4">
                                No
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                Nama
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                Spesialis
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                No. Telepon
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                Detail
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                Status
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                Aksi
                            </td>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300">
                        {slicedData.map((doctor, index) => (
                            <tr>
                                <td className="py-4 px-3 font-medium text-center">
                                    {startIndex + index + 1}
                                </td>
                                <td className="py-4 px-3 font-medium">
                                    {doctor.user.name}
                                </td>
                                <td className="py-4 px-3 font-medium">
                                    {doctor.specialization}
                                </td>
                                <td className="py-4 px-3 font-medium text-center">
                                    {doctor.phone_number}
                                </td>
                                <td className="py-4 px-3 font-medium text-center">
                                    <DetailModal role={"Dokter"}>
                                        <div className="text-base font-medium text-black flex flex-col gap-2">
                                            <div className="flex">
                                                <p className="w-40">
                                                    Nama Dokter
                                                </p>
                                                <p className="w-8 text-center">
                                                    :
                                                </p>
                                                <p>{doctor.user.name}</p>
                                            </div>
                                            <div className="flex">
                                                <p className="w-40">Email</p>
                                                <p className="w-8 text-center">
                                                    :
                                                </p>
                                                <p>{doctor.user.email}</p>
                                            </div>
                                            <div className="flex">
                                                <p className="w-40">
                                                    No. Telepon
                                                </p>
                                                <p className="w-8 text-center">
                                                    :
                                                </p>
                                                <p>{doctor.phone_number}</p>
                                            </div>
                                            <div className="flex">
                                                <p className="w-40">Alamat</p>
                                                <p className="w-8 text-center">
                                                    :
                                                </p>
                                                <p>{doctor.address}</p>
                                            </div>
                                            <div className="flex">
                                                <p className="w-40">
                                                    Tanggal Lahir
                                                </p>
                                                <p className="w-8 text-center">
                                                    :
                                                </p>
                                                <p>
                                                    {formatDate(
                                                        doctor.birthdate
                                                    )}
                                                </p>
                                            </div>
                                            <div className="flex">
                                                <p className="w-40">
                                                    Jenis Kelamin
                                                </p>
                                                <p className="w-8 text-center">
                                                    :
                                                </p>
                                                <p>{doctor.gender}</p>
                                            </div>
                                            <div className="flex">
                                                <p className="w-40">
                                                    Spesialis
                                                </p>
                                                <p className="w-8 text-center">
                                                    :
                                                </p>
                                                <p>{doctor.specialization}</p>
                                            </div>
                                            <div className="flex">
                                                <p className="w-40">Status</p>
                                                <p className="w-8 text-center">
                                                    :
                                                </p>
                                                <p>{doctor.status}</p>
                                            </div>
                                        </div>
                                    </DetailModal>
                                </td>
                                <td className="py-4 px-3 font-medium">
                                    <div className="w-full flex justify-center">
                                        <div
                                            className={`text-white w-32 py-2 rounded-md text-sm text-center ${
                                                doctor.status == "Aktif"
                                                    ? "bg-ForestGreen"
                                                    : "bg-red-600"
                                            } `}
                                        >
                                            {doctor.status}
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-3 font-medium flex justify-center gap-2">
                                    <Link
                                        href={route("owner.dokter.edit", {
                                            id: doctor.id,
                                        })}
                                    >
                                        <FaEdit className="text-ForestGreen h-6 w-6" />
                                    </Link>
                                    {/* <OwnerDeleteAlert
                                        dataId={doctor.id}
                                        routeName="owner.dokter.delete"
                                    /> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </OwnerLayout>
    );
};

export default OwnerDokter;

export const DetailModal = ({ children, role }) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger className="underline text-ForestGreen">
                Selengkapnya
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Data {role}</AlertDialogTitle>
                    <AlertDialogDescription>{children}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Tutup</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};
