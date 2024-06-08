import OwnerLayout from "@/Layouts/OwnerLayout";
import Pagination from "@/Components/Pagination";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";

const OwnerPasien = ({patients}) => {
    const [open, setOpen] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const itemsPerPage = 10;

    const filteredData = patients.filter(item =>
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

    return (
        <OwnerLayout open={open} setOpen={setOpen} navTitle="Pasien">
            <div className="text-lg font-medium">
                <span className="text-gray-500">Dashboard </span> &gt; Pasien
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
                                Gol Darah
                            </td>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300">
                        {slicedData.map((patient, index) => (
                            <tr key={patient.id}>
                                <td className="py-4 px-3 font-medium text-center">
                                    {startIndex + index + 1}
                                </td>
                                <td className="py-4 px-3 font-medium">
                                    {patient.user.name}
                                </td>
                                <td className="py-4 px-3 font-medium max-w-72">
                                    {patient.address}
                                </td>
                                <td className="py-4 px-3 font-medium text-center">
                                    {patient.phone_number}
                                </td>
                                <td className="py-4 px-3 font-medium text-center">
                                    {patient.gender}
                                </td>
                                <td className="py-4 px-3 font-medium text-center">
                                    {formatDate(patient.birthdate)}
                                </td>
                                <td className="py-4 px-3 font-medium text-center">
                                    {patient.blood_type}
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

export default OwnerPasien;
