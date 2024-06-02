import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const generatePageNumbers = () => {
        const pageNumbers = [];
        const delta = 2;
        const range = [];

        for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
            range.push(i);
        }

        if (currentPage - delta > 2) {
            range.unshift("...");
        }
        if (currentPage + delta < totalPages - 1) {
            range.push("...");
        }

        range.unshift(1);
        if (totalPages > 1) {
            range.push(totalPages);
        }

        range.forEach((i, idx) => {
            if (i === "...") {
                pageNumbers.push(
                    <div key={`ellipsis-${idx}`} className="text-black font-semibold w-8 h-8 flex justify-center items-center">
                        {i}
                    </div>
                );
            } else {
                pageNumbers.push(
                    <div
                        key={i}
                        className={`text-black font-semibold w-8 h-8 rounded-full flex justify-center items-center cursor-pointer ${
                            i === currentPage ? 'bg-ForestGreen text-white' : ''
                        }`}
                        onClick={() => onPageChange(i)}
                    >
                        {i}
                    </div>
                );
            }
        });
        return pageNumbers;
    };

    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className="flex justify-between items-center mt-6">
            <div className="flex items-center gap-2 px-2">{generatePageNumbers()}</div>
            <p className="font-semibold text-black/50">
                Halaman {currentPage} dari {totalPages}
            </p>
        </div>
    );
};

export default Pagination;