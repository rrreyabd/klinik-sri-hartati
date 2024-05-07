import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const DataTable = ({ data, tbody, thead, table, tdbody, tdhead, field }) => {
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
            <div className={`w-full py-2 ${thead} `}>
                <div className="flex w-full">
                    {field &&
                        field.map((field, index) => (
                            <div
                                key={index}
                                onClick={() => handleSort(field)}
                                className="w-1/6"
                            >
                                <div
                                    className={`flex gap-2 py-2 font-semibold pl-4 unselectable cursor-pointer ${tdhead}`}
                                >
                                    {field} {sortBy === field && Icon}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div
                className={`${tbody} rounded-xl shadow-inner shadow-black/50 bg-white overflow-y-scroll overflow-x-auto w-full`}
            >
                {sortedData.map((row, index) => (
                    <div key={index} className="flex w-full">
                        {Object.keys(row).map((key) => (
                            <div
                                className={`${tdbody} w-1/6 pl-4 py-4 border-b ${
                                    index === sortedData.length - 1
                                        ? "pb-4"
                                        : ""
                                }`}
                            >
                                {row[key]}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DataTable;
