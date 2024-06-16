import OwnerLayout from "@/Layouts/OwnerLayout";
import Pagination from "@/Components/Pagination";
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
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
} from "@/Components/ui/alert-dialog"

const OwnerStaff = ({ staffs }) => {
    const [open, setOpen] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const itemsPerPage = 10;

    const filteredData = staffs.filter(item =>
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
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        return date.toLocaleDateString('id-ID', options);
    };
    
    const { data, setData, post } = useForm({
        name: '',
        email: '',
        password: '',
        role: "staff",
        gender: '',
        phone_number: '',
        address: '',
        birthdate: '',
    });

    return (
        <OwnerLayout open={open} setOpen={setOpen} navTitle="Staff">
            <div className="text-lg font-medium">
                <span className="text-gray-500">Dashboard </span> &gt; Staff
            </div>

            <div className="flex justify-between mt-8">
                <input
                    type="text"
                    placeholder="Cari disini..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="rounded-md border-gray-400 placeholder:font-medium placeholder:text-gray-400 focus:border-ForestGreen focus:ring-ForestGreen w-72"
                />

                <AlertDialog>
                    <AlertDialogTrigger>Open</AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>

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
                                Alamat
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                No. Telepon
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                Jenis Kelamin
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                Tanggal Lahir
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                Aksi
                            </td>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300">
                        {slicedData.map((staff, index) => (
                            <tr>
                                <td className="py-4 px-3 font-medium text-center">
                                    {startIndex + index + 1}
                                </td>
                                <td className="py-4 px-3 font-medium">
                                    {staff.user.name}
                                </td>
                                <td className="py-4 px-3 font-medium">
                                    {staff.address}
                                </td>
                                <td className="py-4 px-3 font-medium text-center">
                                    {staff.phone_number}
                                </td>
                                <td className="py-4 px-3 font-medium text-center">
                                    {staff.gender}
                                </td>
                                <td className="py-4 px-3 font-medium text-center">
                                    {formatDate(staff.birthdate)}
                                </td>
                                <td className="py-4 px-3 font-medium flex justify-center gap-2">
                                    <button>
                                        <FaEdit className="text-ForestGreen h-6 w-6" />
                                    </button>
                                    <Link>
                                        <FaRegTrashAlt className="text-customRed h-6 w-6" />
                                    </Link>
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

export default OwnerStaff;
