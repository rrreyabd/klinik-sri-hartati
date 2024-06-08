import OwnerLayout from "@/Layouts/OwnerLayout";
import Pagination from "@/Components/Pagination";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { ProofModal } from "../Staff/StaffPembayaran";

const OwnerPembayaran = ({ payments }) => {
    const [open, setOpen] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const itemsPerPage = 10;

    const filteredData = payments.filter((item) =>
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
        const options = { year: "numeric", month: "short", day: "numeric" };
        return date.toLocaleDateString("id-ID", options);
    };

    const formatter = new Intl.NumberFormat("id-ID");

    return (
        <OwnerLayout open={open} setOpen={setOpen} navTitle="Pembayaran">
            <div className="text-lg font-medium">
                <span className="text-gray-500">Dashboard </span> &gt;
                Pembayaran
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
                                Layanan
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                Nominal
                            </td>
                            <td className="font-semibold text-center px-3 py-4">
                                Tanggal
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
                        {slicedData.map((payment, index) => (
                            <tr key={payment.id}>
                                <td className="py-4 px-3 font-medium text-center">
                                    {startIndex + index + 1}
                                </td>
                                <td className="py-4 px-3 font-medium">
                                    {payment.user.name}
                                </td>
                                <td className="py-4 px-3 font-medium">
                                    {payment.appointment.treatment.name}
                                </td>
                                <td className="py-4 px-3 font-medium flex justify-center">
                                    <p className="w-8">Rp</p>
                                    <p className="min-w-20 text-end">
                                        {formatter.format(payment.amount)}
                                    </p>
                                </td>
                                <td className="py-4 px-3 font-medium text-center">
                                    {formatDate(payment.payment_date)}
                                </td>
                                <td className="py-4 px-3 font-medium text-center">
                                    <div
                                        className={`text-white px-2 py-1 text-sm rounded-md ${
                                            payment.status === "Berhasil"
                                                ? "bg-customGreen"
                                                : payment.status ===
                                                  "Menunggu Pembayaran"
                                                ? "bg-customYellow"
                                                : "bg-customRed"
                                        }`}
                                    >
                                        {payment.status}
                                    </div>
                                </td>
                                <td className="py-4 px-3 font-medium text-center">
                                    <ProofModal
                                        image={payment.payment_proof}
                                        payment_code={payment.payment_code}
                                    />
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

export default OwnerPembayaran;
