import { DatePicker } from "@/Components/shared/Staff/DateRangePicker";
import StaffSheet from "@/Components/shared/Staff/StaffSheet";
import { payment, paymentField } from "@/lib/payment";
import { Head } from "@inertiajs/react";
import { useState } from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { FaMagnifyingGlass } from "react-icons/fa6";

const StaffPembayaran = () => {
    const [dateFrom, setDateFrom] = useState();
    const [dateTo, setDateTo] = useState();

    const [globalFilter, setGlobalFilter] = useState(null);
    const [rows, setRows] = useState(5);
    const rowsPerPageOptions = [5, 10, 25, 50];

    const isDateInRange = (date) => {
        if (!dateFrom || !dateTo) return true;
        const currentDate = new Date(date);
        return currentDate >= dateFrom && currentDate <= dateTo;
    };

    return (
        <div className="min-h-screen w-full bg-customWhite flex justify-center">
            <Head title="Pembayaran" />
            <div className="w-3/4 py-16 flex flex-col gap-4 max-w-[1300px]">
                <header className="flex justify-between">
                    <StaffSheet />
                    <h1 className="text-4xl font-semibold text-ForestGreen">
                        Status Pembayaran
                    </h1>
                    <span className="w-10"></span>
                </header>

                <div className="py-2 mt-4 flex gap-4 items-center">
                    <p className="font-semibold text-gray-600">
                        Tanggal Periode :{" "}
                    </p>
                    <DatePicker
                        label={"Tanggal Awal"}
                        date={dateFrom}
                        setDate={setDateFrom}
                        className="shadow-md w-48"
                    />

                    <DatePicker
                        label={"Tanggal Akhir"}
                        date={dateTo}
                        setDate={setDateTo}
                        className="shadow-md w-48"
                    />
                </div>

                <div className="flex justify-between relative items-center">
                    <Dropdown
                        value={rows}
                        options={rowsPerPageOptions.map((option) => ({
                            label: option,
                            value: option,
                        }))}
                        onChange={(e) => setRows(e.value)}
                        className="bg-white h-12 py-2 px-6 flex w-28 items-center rounded-md shadow-md"
                        panelClassName="bg-white px-6 border-2 rounded-md"
                    />

                    <InputText
                        type="search"
                        className="border-none rounded-md shadow-md h-12 w-64"
                        onInput={(e) => setGlobalFilter(e.target.value)}
                        placeholder="Search"
                    />
                    <FaMagnifyingGlass className="absolute right-4" />
                </div>

                <DataTable
                    value={payment.filter((row) =>
                        isDateInRange(row["Tanggal"])
                    )} // Filter rows based on date range
                    globalFilter={globalFilter}
                    tableStyle={{ minWidth: "50rem" }}
                    removableSort
                    paginator
                    rows={rows}
                    paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}"

                    className="bg-white p-4 rounded-md shadow-inner shadow-black/40"
                    paginatorClassName="py-4 flex gap-4"
                >
                    <Column
                        sortable
                        body={(rowData, rowMeta) => rowMeta.rowIndex + 1}
                        header="No"
                        className="text-lg py-2 font-semibold text-center"
                    ></Column>
                    <Column
                        className="py-3 border-b"
                        sortable
                        field="Nama Pasien"
                        header="Nama Pasien"
                    ></Column>
                    <Column
                        className="py-3 border-b"
                        sortable
                        field="Tanggal"
                        header="Tanggal"
                    ></Column>
                    <Column
                        className="py-3 border-b"
                        sortable
                        field="Nomor Pembayaran"
                        header="Nomor Pembayaran"
                    ></Column>
                    <Column
                        className="py-3 border-b"
                        sortable
                        field="Total"
                        header="Total"
                    ></Column>
                    <Column
                        className="py-3 border-b"
                        sortable
                        field="Metode Pembayaran"
                        header="Metode Pembayaran"
                    ></Column>
                    <Column
                        className="py-3 border-b"
                        sortable
                        field="Status Pembayaran"
                        header="Status Pembayaran"
                        body={(rowData) => (
                            <span
                                className={`text-customWhite w-40 py-1 rounded-md flex items-center justify-center font-semibold
                                ${
                                    rowData["Status Pembayaran"] === "Lunas"
                                        ? "bg-customGreen"
                                        : "bg-customRed"
                                }`}
                            >
                                {rowData["Status Pembayaran"]}
                            </span>
                        )}
                    ></Column>
                </DataTable>
            </div>
        </div>
    );
};

export default StaffPembayaran;
