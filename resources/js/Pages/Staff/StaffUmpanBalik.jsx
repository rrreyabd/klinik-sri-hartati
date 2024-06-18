import Pagination from "@/Components/Pagination";
import StaffSheet from "@/Components/shared/Staff/StaffSheet";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { FaReply } from "react-icons/fa";

const StaffUmpanBalik = ({ feedbacks }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const totalPages = Math.ceil(feedbacks.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, feedbacks.length);
    const slicedData = feedbacks.slice(startIndex, endIndex);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className="min-h-screen w-full bg-customWhite flex justify-center">
            <Head title="Rekam Medis" />
            <div className="w-3/4 py-16 flex flex-col gap-4 max-w-[1300px]">
                <header className="flex justify-between">
                    <StaffSheet />
                    <h1 className="text-4xl font-semibold text-ForestGreen">
                        Umpan Balik
                    </h1>
                    <span className="w-10"></span>
                </header>

                {feedbacks.length > 0 ? (
                    <div className="rounded-md overflow-hidden shadow-md mt-8">
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
                                        Pesan
                                    </td>
                                    <td className="font-semibold text-center px-3 py-4">
                                        Dibuat pada
                                    </td>
                                    <td className="font-semibold text-center px-3 py-4">
                                        Balas
                                    </td>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-300">
                                {slicedData.map((feedback, index) => (
                                    <tr key={feedback.id}>
                                        <td className="py-4 px-3 font-medium text-center">
                                            {startIndex + index + 1}
                                        </td>
                                        <td className="py-4 px-3 font-medium">
                                            {feedback.name}
                                        </td>
                                        <td className="py-4 px-3 font-medium break-all">
                                            {feedback.message}
                                        </td>
                                        <td className="py-4 px-3 font-medium text-center">
                                            {new Date(feedback.created_at).toLocaleString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })} {new Date(feedback.created_at).getHours()}.{new Date(feedback.created_at).getMinutes()}
                                        </td>
                                        <td className="py-4 px-3 font-medium flex justify-center items-center">
                                            <a href={`mailto:${feedback.email}`} className="p-2 rounded-md hover:bg-customWhite transition-all">
                                                <FaReply className="h-5 w-5 text-ForestGreen" />
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="h-64 flex justify-center items-center">
                        <h1 className="text-2xl font-semibold text-gray-400">
                            Tidak ada umpan balik.
                        </h1>
                    </div>
                )}

                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
            </div>
        </div>
    );
};

export default StaffUmpanBalik;
