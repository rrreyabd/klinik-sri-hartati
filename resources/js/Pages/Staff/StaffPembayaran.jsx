import { DatePicker } from "@/Components/shared/Staff/DateRangePicker";
import StaffSheet from "@/Components/shared/Staff/StaffSheet";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { IoWarningOutline } from "react-icons/io5";

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

    const { data, setData, post, processing } = useForm({
        payment_id: "",
    });

    const isDateInRange = (date) => {
        if (!dateFrom || !dateTo) return true;
        const currentDate = new Date(date);
        return currentDate >= dateFrom && currentDate <= dateTo;
    };

    // Filter the payments based on date range and global filter
    const filteredPayments = payments.filter((row) => {
        const isInRange = isDateInRange(row.payment_date);
        const matchesFilter = globalFilter
            ? row.user.name
                .toLowerCase()
                .includes(globalFilter.toLowerCase()) ||
            row.payment_code
                .toLowerCase()
                .includes(globalFilter.toLowerCase()) ||
            row.payment_date.includes(globalFilter) ||
            row.amount.toString().includes(globalFilter)
            : true;
        return isInRange && matchesFilter;
    });

    const handleConfirm = (payment_id) => {
        setData("payment_id", payment_id);
        post(route("staff.konfirmasi"));
    };

    return (
        <div className="min-h-screen w-full bg-customWhite flex justify-center">
            <Head title="Pembayaran" />
            <div className="w-3/4 py-16 flex flex-col gap-4 max-w-[1300px]">
                <header className="flex justify-between">
                    <StaffSheet />
                    <h1 className="text-4xl font-semibold">
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
                                        <p>
                                            {formatter.format(rowData.amount)}
                                        </p>
                                    </div>
                                </div>
                            );
                        }}
                    ></Column>
                    <Column
                        className="py-4 border-b text-center"
                        bodyClassName="hover:bg-customWhite"
                        sortable
                        body={(rowData) =>
                            rowData.payment_date
                                ? rowData.payment_date.split(" ")[0]
                                : "Belum dibayar"
                        }
                        header="Dibayar pada &nbsp;"
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
                        headerClassName="hover:bg-ForestGreen/95 transition-all py-4 pl-16 bg-ForestGreen text-white"
                        body={(rowData) => (
                            <span
                                className={`text-customWhite w-48 py-2 text-sm uppercase rounded-md flex items-center justify-center font-semibold text-center
                                ${rowData.status === "Menunggu Konfirmasi"
                                        ? "bg-yellow-600"
                                        : rowData.status === "Berhasil"
                                            ? "bg-green-600"
                                            : rowData.status ===
                                                "Menunggu Pembayaran"
                                                ? "bg-ForestGreen"
                                                : "bg-red-600"
                                    }`}
                            >
                                {rowData.status}
                            </span>
                        )}
                    ></Column>

                    <Column
                        className="py-4 border-b text-center"
                        sortable
                        body={(rowData) => {
                            if (rowData.status === "Menunggu Konfirmasi") {
                                return (
                                    <AlertDialog onOpenChange={() => setData("payment_id", rowData.id)} defaultOpen={false}>
                                        <AlertDialogTrigger className="underline text-ForestGreen font-medium">
                                            Konfirmasi
                                        </AlertDialogTrigger>
                                        <AlertDialogContent className="p-4 max-w-xl">
                                            <AlertDialogHeader className="pt-4">
                                                <AlertDialogTitle>
                                                    <div className="flex flex-col items-center gap-2">
                                                        <IoWarningOutline className="h-20 w-20 text-ForestGreen" />
                                                        <p className="text-xl text-ForestGreen">
                                                            Apakah
                                                            pembayaran sudah
                                                            dikonfirmasi?
                                                        </p>
                                                    </div>
                                                </AlertDialogTitle>
                                                <AlertDialogDescription className="py-2 text-lg text-center px-8 text-black">
                                                    Pastikan pembayaran
                                                    sudah dikonfirmasi,
                                                    karena pembayaran yang
                                                    sudah dikonfirmasi tidak
                                                    bisa diubah.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel className="border-none">
                                                    Tutup
                                                </AlertDialogCancel>
                                                <button
                                                    onClick={() => handleConfirm(rowData.id)}
                                                    disabled={processing}
                                                    className="font-medium text-sm bg-ForestGreen px-4 py-2 rounded-md hover:bg-ForestGreen hover:brightness-95 text-white"
                                                >
                                                    {processing
                                                        ? "Memproses"
                                                        : "Konfirmasi"}
                                                </button>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                );
                            } else if (rowData.status === "Berhasil") {
                                return <p className="flex justify-center">
                                    <FaCheck className="text-customGreen" />
                                </p>
                            } else {
                                return <p className="flex justify-center">
                                    -
                                </p>
                            }
                        }}
                        header="Konfirmasi &nbsp;"
                        headerClassName="hover:bg-ForestGreen/95 transition-all py-4 px-3 bg-ForestGreen text-white"
                    ></Column>
                </DataTable>
            </div>
        </div>
    );
};

export default StaffPembayaran;

export const ProofModal = ({ image, payment_code }) => {
    return image && payment_code ? (
        <AlertDialog>
            <AlertDialogTrigger className="underline text-ForestGreen font-medium">
                Lihat Bukti
            </AlertDialogTrigger>
            <AlertDialogContent className="p-4">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-center">
                        {payment_code}
                    </AlertDialogTitle>

                    <div className="flex justify-center">
                        <img
                            src={`http://localhost:8000/storage/${image}`}
                            alt="Bukti Pembayaran"
                            className="max-h-[80vh] max-w-96"
                        />
                    </div>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="bg-ForestGreen text-white hover:brightness-95 hover:bg-ForestGreen hover:text-white">
                        Tutup
                    </AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    ) : (
        "-"
    );
};
