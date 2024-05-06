import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const DataTable = ({ data, tbody, thead, table, tdbody, tdhead }) => {
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState("asc");

    const handleSort = (field) => {
        if (sortBy === field) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortBy(field);
            setSortOrder("asc");
        }
    };

    const sortedData = sortBy
        ? data.sort((a, b) => {
              if (a[sortBy] < b[sortBy]) return sortOrder === "asc" ? -1 : 1;
              if (a[sortBy] > b[sortBy]) return sortOrder === "asc" ? 1 : -1;
              return 0;
          })
        : data;

    const Icon = sortOrder === "asc" ? <ChevronUp /> : <ChevronDown />;

    return (
        <div className={`w-full ${table}`}>
            <div className={`w-full ${thead} `}>
                <div className="flex w-full">
                    <div onClick={() => handleSort("Nama")} className="w-1/6">
                        <div
                            className={`flex gap-2 py-2 font-semibold ${tdhead}`}
                        >
                            Nama {sortBy === "Nama" && Icon}
                        </div>
                    </div>
                    <div
                        onClick={() => handleSort("Waktu Antri")}
                        className="w-1/6"
                    >
                        <div
                            className={`flex gap-2 py-2 font-semibold ${tdhead}`}
                        >
                            Waktu Antri {sortBy === "Waktu Antri" && Icon}
                        </div>
                    </div>
                    <div
                        onClick={() => handleSort("Jenis Kelamin")}
                        className="w-1/6"
                    >
                        <div
                            className={`flex gap-2 py-2 font-semibold ${tdhead}`}
                        >
                            Jenis Kelamin {sortBy === "Jenis Kelamin" && Icon}
                        </div>
                    </div>
                    <div onClick={() => handleSort("Umur")} className="w-1/6">
                        <div
                            className={`flex gap-2 py-2 font-semibold ${tdhead}`}
                        >
                            Umur {sortBy === "Umur" && Icon}
                        </div>
                    </div>
                    <div
                        onClick={() => handleSort("Layanan")}
                        className="w-1/6"
                    >
                        <div
                            className={`flex gap-2 py-2 font-semibold ${tdhead}`}
                        >
                            Layanan {sortBy === "Layanan" && Icon}
                        </div>
                    </div>
                    <div onClick={() => handleSort("Gejala")} className="w-1/6">
                        <div
                            className={`flex gap-2 py-2 font-semibold ${tdhead}`}
                        >
                            Gejala {sortBy === "Gejala" && Icon}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${tbody} w-full`}>
                {sortedData.map((row, index) => (
                    <div key={index} className="flex w-full">
                        <div
                            className={`${tdbody} w-1/6 ${
                                index === sortedData.length - 1 ? "pb-4" : ""
                            }`}
                        >
                            {row["Nama"]}
                        </div>
                        <div
                            className={`${tdbody} w-1/6 ${
                                index === sortedData.length - 1 ? "pb-4" : ""
                            }`}
                        >
                            {row["Waktu Antri"]}
                        </div>
                        <div
                            className={`${tdbody} w-1/6 ${
                                index === sortedData.length - 1 ? "pb-4" : ""
                            }`}
                        >
                            {row["Jenis Kelamin"]}
                        </div>
                        <div
                            className={`${tdbody} w-1/6 ${
                                index === sortedData.length - 1 ? "pb-4" : ""
                            }`}
                        >
                            {row["Umur"]}
                        </div>
                        <div
                            className={`${tdbody} w-1/6 ${
                                index === sortedData.length - 1 ? "pb-4" : ""
                            }`}
                        >
                            {row["Layanan"]}
                        </div>
                        <div
                            className={`${tdbody} w-1/6 ${
                                index === sortedData.length - 1 ? "pb-4" : ""
                            }`}
                        >
                            {row["Gejala"]}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DataTable;
