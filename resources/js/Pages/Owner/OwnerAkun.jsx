import OwnerLayout from "@/Layouts/OwnerLayout";
import Pagination from "@/Components/Pagination";
import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const OwnerAkun = ({ user = [], staff = [], dokter = [] }) => {
    const [open, setOpen] = useState(true);
    const [showData, setShowData] = useState("Pengguna");
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const itemsPerPage = 10;

    const data = showData === 'Pengguna' ? user : showData === 'Staff' ? staff : dokter;

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);
    const slicedData = filteredData.slice(startIndex, endIndex);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleDataChange = (newData) => {
        setShowData(newData);
        setCurrentPage(1); 
    };

    const renderTableRows = () => {
        const formatDate = (timestamp) => {
            const date = new Date(timestamp);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return date.toLocaleDateString('id-ID', options);
        };

        return slicedData.map((item, index) => (
            <tr key={item.id}>
                <td className="py-4 px-3 font-medium text-center">{startIndex + index + 1}</td>
                <td className="py-4 px-3 font-medium">{item.name}</td>
                <td className="py-4 px-3 font-medium">{item.email}</td>
                {showData === 'Pengguna' && (
                    <td className="py-4 px-3 font-medium text-center">{formatDate(item.email_verified_at)}</td>
                )}
                <td className="py-4 px-3 font-medium text-center">{formatDate(item.created_at)}</td>
                <td className="py-4 px-3 font-medium flex justify-center gap-2">
                    <button>
                        <FaEdit className="text-ForestGreen h-6 w-6" />
                    </button>
                    <Link href="#">
                        <FaRegTrashAlt className="text-customRed h-6 w-6" />
                    </Link>
                </td>
            </tr>
        ));
    };

    return (
        <OwnerLayout open={open} setOpen={setOpen} navTitle="Akun">
            <div className="text-lg font-medium">
                <span className="text-gray-500">Dashboard </span> &gt; Akun &gt;{" "}
                {showData}
            </div>

            <div className="flex justify-between mt-8">
                <div className="flex ml-5 relative transition-all border-b-2 border-black/20">
                    <button
                        onClick={() => handleDataChange("Pengguna")}
                        className={`text-lg font-medium py-2 w-32 hover:bg-customWhite transition-all ${
                            showData == "Pengguna"
                                ? "text-ForestGreen"
                                : "text-gray-400"
                        }`}
                    >
                        Pengguna
                    </button>
                    <button
                        onClick={() => handleDataChange("Staff")}
                        className={`text-lg font-medium py-2 w-32 hover:bg-customWhite transition-all ${
                            showData == "Staff"
                                ? "text-ForestGreen"
                                : "text-gray-400"
                        }`}
                    >
                        Staff
                    </button>
                    <button
                        onClick={() => handleDataChange("Dokter")}
                        className={`text-lg font-medium py-2 w-32 hover:bg-customWhite transition-all ${
                            showData == "Dokter"
                                ? "text-ForestGreen"
                                : "text-gray-400"
                        }`}
                    >
                        Dokter
                    </button>

                    <div
                        className={`w-32 h-1 bg-ForestGreen -bottom-1 left-0 absolute transition-transform duration-500 ease-in-out ${
                            showData === "Pengguna"
                                ? "transform translate-x-0"
                                : showData === "Staff"
                                ? "transform translate-x-32"
                                : "transform translate-x-64"
                        }`}
                    ></div>
                </div>

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
                                Nama {showData}
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                Email
                            </td>
                            {showData == "Pengguna" && (
                                <td className="font-semibold text-center px-3 py-4">
                                    Tanggal Verifikasi
                                </td>
                            )}
                            <td className="font-semibold text-center px-3 py-4">
                                Tanggal Dibuat
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                Aksi
                            </td>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300">
                        {renderTableRows()}
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

export default OwnerAkun;
