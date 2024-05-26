import { DatePicker } from "@/Components/shared/Staff/DateRangePicker";
import StaffSheet from "@/Components/shared/Staff/StaffSheet";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { FaMagnifyingGlass } from "react-icons/fa6";

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
} from "@/Components/ui/alert-dialog";

const StaffPembayaran = ({ payments }) => {
    const [dateFrom, setDateFrom] = useState(null);
    const [dateTo, setDateTo] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const [rows, setRows] = useState(5);
    const rowsPerPageOptions = [5, 10, 25, 50];

    const isDateInRange = (date) => {
        if (!dateFrom || !dateTo) return true;
        const currentDate = new Date(date);
        return currentDate >= dateFrom && currentDate <= dateTo;
    };

    // Debugging: Log the state values
    console.log("Date From:", dateFrom);
    console.log("Date To:", dateTo);
    console.log("Global Filter:", globalFilter);

    // Filter the payments based on date range and global filter
    const filteredPayments = payments.filter((row) => {
        const isInRange = isDateInRange(row.payment_date);
        const matchesFilter = globalFilter
            ? row.user.name.toLowerCase().includes(globalFilter.toLowerCase()) ||
              row.payment_code.toLowerCase().includes(globalFilter.toLowerCase()) ||
              row.payment_date.includes(globalFilter) ||
              row.amount.toString().includes(globalFilter)
            : true;
        return isInRange && matchesFilter;
    });

    // Debugging: Log the filtered payments
    console.log("Filtered Payments:", filteredPayments);

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
                    <p className="font-semibold text-gray-600">Tanggal Periode : </p>
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
                            <div className="bg-white hover:bg-customWhite py-1 px-6">
                                {option.label}
                            </div>
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
                    value={filteredPayments}
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
                        header="No &nbsp;"
                        className="text-lg py-4 font-semibold text-center"
                        headerClassName="hover:bg-ForestGreen/95 transition-all py-4 pl-4 bg-ForestGreen text-white"
                        bodyClassName="hover:bg-customWhite"
                    ></Column>
                    <Column
                        className="py-4 border-b pl-4"
                        bodyClassName="hover:bg-customWhite"
                        sortable
                        header="Nama Pasien &nbsp;"
                        headerClassName="hover:bg-ForestGreen/95 transition-all py-4 pl-8 bg-ForestGreen text-white"
                        body={(rowData) => rowData.user.name}
                    ></Column>
                    <Column
                        className="py-4 border-b text-center"
                        bodyClassName="hover:bg-customWhite"
                        sortable
                        body={(rowData) => rowData.payment_code}
                        header="Kode &nbsp;"
                        headerClassName="hover:bg-ForestGreen/95 transition-all py-4 pl-8 bg-ForestGreen text-white"
                    ></Column>
                    <Column
                        className="py-4 border-b"
                        bodyClassName="hover:bg-customWhite"
                        sortable
                        header="Nominal &nbsp;"
                        headerClassName="hover:bg-ForestGreen/95 transition-all py-4 pl-12 bg-ForestGreen text-white"
                        body={(rowData) => {
                            const formatter = new Intl.NumberFormat("id-ID");
                            return (
                                <div className="flex justify-center">
                                    <div className="flex justify-between w-24">
                                        <p>Rp </p>
                                        <p>{formatter.format(rowData.amount)}</p>
                                    </div>
                                </div>
                            );
                        }}
                    ></Column>
                    <Column
                        className="py-4 border-b text-center"
                        bodyClassName="hover:bg-customWhite"
                        sortable
                        body={(rowData) => rowData.payment_date.split(" ")[0]}
                        header="Tanggal &nbsp;"
                        headerClassName="hover:bg-ForestGreen/95 transition-all py-4 pl-8 bg-ForestGreen text-white"
                    ></Column>
                    <Column
                        className="py-4 border-b text-center"
                        bodyClassName="hover:bg-customWhite"
                        sortable
                        body={(rowData) => (
                            <ProofModal
                                image={rowData.payment_proof}
                                payment_code={rowData.payment_code}
                            />
                        )}
                        header="Bukti Transfer &nbsp;"
                        headerClassName="hover:bg-ForestGreen/95 transition-all py-4 pl-8 bg-ForestGreen text-white"
                    ></Column>
                    <Column
                        className="py-4 border-b flex justify-center"
                        sortable
                        field="payment_status"
                        header="Status &nbsp;"
                        bodyClassName="hover:bg-customWhite"
                        headerClassName="hover:bg-ForestGreen/95 transition-all py-4 pl-8 bg-ForestGreen text-white"
                        body={(rowData) => (
                            <span
                                className={`text-customWhite w-32 py-1 text-sm uppercase rounded-md flex items-center justify-center font-semibold text-center
                                ${
                                    rowData.status === "Menunggu Pembayaran"
                                        ? "bg-customYellow"
                                        : rowData.status === "Berhasil"
                                        ? "bg-green-600"
                                        : "bg-customRed"
                                }`}
                            >
                                {rowData.status}
                            </span>
                        )}
                    ></Column>
                </DataTable>
            </div>
        </div>
    );
};

export default StaffPembayaran;

const ProofModal = ({ image, payment_code }) => {
    return image && payment_code ? (
        <AlertDialog>
            <AlertDialogTrigger className="underline text-ForestGreen font-medium">
                Lihat Bukti
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Bukti Pembayaran {payment_code}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        <div className="flex justify-center">
                            <img
                                src={image}
                                alt="Bukti Pembayaran"
                                className="max-h-[80vh] max-w-96"
                            />
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Tutup</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    ) : (
        "-"
    );
};
