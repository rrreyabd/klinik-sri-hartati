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

const StaffRekamMedis = () => {
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
            <Head title="Rekam Medis" />
            <div className="w-3/4 py-16 flex flex-col gap-4 max-w-[1300px]">
                <header className="flex justify-between">
                    <StaffSheet />
                    <h1 className="text-4xl font-semibold text-ForestGreen">
                        Rekam Medis
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
                        panelClassName="rounded-md shadow-md overflow-hidden mt-1"
                        itemTemplate={(option) => (
                            <div className="bg-white hover:bg-customWhite py-1 px-6">{option.label}</div>
                        )}
                    />

                    <InputText
                        type="search"
                        className="border-none rounded-md shadow-md h-12 w-64 focus:ring-ForestGreen"
                        onInput={(e) => setGlobalFilter(e.target.value)}
                        placeholder="Cari apapun"
                    />
                    <FaMagnifyingGlass className="absolute right-4" />
                </div>
                <DataTable
                    value={payment.filter((row) =>
                        isDateInRange(row["Tanggal"])
                    )}
                    globalFilter={globalFilter}
                    tableStyle={{ minWidth: "50rem" }}
                    removableSort
                    paginator
                    rows={rows}
                    paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} - {last} dari {totalRecords}"
                    className="bg-white overflow-hidden rounded-md shadow-inner shadow-black/40 mt-4"
                    paginatorClassName="py-4 flex gap-4"
                >
                    <Column
                        body={(rowData, rowMeta) => rowMeta.rowIndex + 1}
                        header="No"
                        className="text-lg py-4 font-semibold text-center"
                        headerClassName="hover:bg-ForestGreen/95 transition-all py-4 pl-4 bg-ForestGreen text-white"
                        bodyClassName="hover:bg-customWhite"
                    ></Column>
                    <Column
                        className="py-4 border-b pl-4"
                        bodyClassName="hover:bg-customWhite"
                        sortable
                        field="Nama Pasien"
                        header="Nama Pasien &nbsp;"
                        headerClassName="hover:bg-ForestGreen/95 transition-all py-4 pl-8 bg-ForestGreen text-white"
                    ></Column>
                    <Column
                        className="py-4 border-b text-center"
                        bodyClassName="hover:bg-customWhite"
                        sortable
                        field="Tanggal"
                        header="Tanggal &nbsp;"
                        headerClassName="hover:bg-ForestGreen/95 transition-all py-4 pl-8 bg-ForestGreen text-white"
                    ></Column>
                    <Column
                        className="py-4 border-b text-center"
                        bodyClassName="hover:bg-customWhite"
                        sortable
                        field="Nomor Pembayaran"
                        header="No. Pembayaran &nbsp;"
                        headerClassName="hover:bg-ForestGreen/95 transition-all py-4 pl-8 bg-ForestGreen text-white"
                    ></Column>
                    <Column
                        className="py-4 border-b text-end pr-4"
                        bodyClassName="hover:bg-customWhite"
                        sortable
                        field="Total"
                        header="Total &nbsp;"
                        headerClassName="hover:bg-ForestGreen/95 transition-all py-4 pl-8 bg-ForestGreen text-white"
                        body={(rowData, rowMeta) => {
                            const formatter = new Intl.NumberFormat("id-ID");

                            return (
                                <div className="flex justify-between">
                                    {" "}
                                    <p>Rp </p>{" "}
                                    <p> {formatter.format(rowData.Total)}</p>{" "}
                                </div>
                            );
                        }}
                    ></Column>
                    <Column
                        className="py-4 border-b text-center"
                        bodyClassName="hover:bg-customWhite"
                        sortable
                        field="Metode Pembayaran"
                        header="Metode Pembayaran &nbsp;"
                        headerClassName="hover:bg-ForestGreen/95 transition-all py-4 pl-8 bg-ForestGreen text-white"
                    ></Column>
                    <Column
                        className="py-4 border-b flex justify-center"
                        sortable
                        field="Status Pembayaran"
                        header="Status &nbsp;"
                        bodyClassName="hover:bg-customWhite"
                        headerClassName="hover:bg-ForestGreen/95 transition-all py-4 pl-8 bg-ForestGreen text-white"
                        body={(rowData) => (
                            <span
                                className={`text-customWhite w-32 py-1 text-sm uppercase rounded-md flex items-center justify-center font-semibold
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

export default StaffRekamMedis;
