import WhiteNavbarLayout from "@/Layouts/WhiteNavbarLayout";
import { useState } from "react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { InertiaLink } from "@inertiajs/inertia-react";

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

import { Input } from "@/Components/ui/input";

const Tagihan = ({
    auth,
    payments,
    pendingPayments,
    successPayments,
    cancelledPayments,
    confirmPayments,
}) => {
    const [showData, setShowData] = useState("Semua");
    const [dataPayment, setDataPayment] = useState(payments);

    useEffect(() => {
        if (showData == "Semua") setDataPayment(payments);
        if (showData == "Menunggu Pembayaran") setDataPayment(pendingPayments);
        if (showData == "Menunggu Konfirmasi") setDataPayment(confirmPayments);
        if (showData == "Berhasil") setDataPayment(successPayments);
        if (showData == "Dibatalkan") setDataPayment(cancelledPayments);
    }, [showData]);
    console.log(showData);
    const { data, setData, post, processing, errors } = useForm({
        payment_id: "",
        payment_proof: "",
    });

    const handleFileChange = (e) => {
        setData("payment_proof", e.target.files[0]);
    };

    const submit = (e) => {
        e.preventDefault();

        // Create a FormData object to handle the file upload
        const formData = new FormData();
        formData.append("payment_id", data.payment_id);
        formData.append("payment_proof", data.payment_proof);

        post(route("tagihan.store"), {
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    };

    return (
        <WhiteNavbarLayout auth={auth} title="Tagihan">
            <div className="mt-6 flex flex-col gap-6">
                <div className="flex justify-between">
                    <InertiaLink
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.history.back();
                        }}
                        className="flex gap-2 items-center font-semibold w-32 group"
                    >
                        <div className="p-1 group-hover:bg-gray-200 transition-all duration-500 rounded-full">
                            <ArrowLeft className="h-6 w-6" />
                        </div>
                        Kembali
                    </InertiaLink>

                    <h1 className="text-4xl font-semibold">Tagihan</h1>

                    <div className="w-32"></div>
                </div>

                {/* Dropdown */}
                <div className="flex gap-4 items-center">
                    <p className="font-semibold">Status: </p>

                    <Select
                        defaultValue="Semua"
                        onValueChange={(value) => setShowData(value)}
                    >
                        <SelectTrigger className="w-64 bg-transparent bg-white border-none shadow-md h-12 font-semibold focus:ring-0 focus:outline-ForestGreen">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className={`bg-white border-2 `}>
                            <SelectItem
                                value="Semua"
                                className={`x transition-all font-semibold cursor-pointer py-3 bg-white w-full flex justify-between border-b border-gray-300`}
                            >
                                Semua
                            </SelectItem>
                            <SelectItem
                                value="Menunggu Pembayaran"
                                className={`x transition-all font-semibold cursor-pointer py-3 bg-white w-full flex justify-between border-b border-gray-300`}
                            >
                                Menunggu Pembayaran
                            </SelectItem>
                            <SelectItem
                                value="Menunggu Konfirmasi"
                                className={`x transition-all font-semibold cursor-pointer py-3 bg-white w-full flex justify-between border-b border-gray-300`}
                            >
                                Menunggu Konfirmasi
                            </SelectItem>
                            <SelectItem
                                value="Berhasil"
                                className={`x transition-all font-semibold cursor-pointer py-3 bg-white w-full flex justify-between border-b border-gray-300`}
                            >
                                Berhasil
                            </SelectItem>
                            <SelectItem
                                value="Dibatalkan"
                                className={`x transition-all font-semibold cursor-pointer py-3 bg-white w-full flex justify-between`}
                            >
                                Dibatalkan
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {dataPayment ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {dataPayment.map((payment) => {
                            return (
                                <div
                                    className={`h-72 bg-white shadow-md rounded-lg border p-4`}
                                    key={payment.id}
                                >
                                    <div className="flex justify-end">
                                        <div
                                            className={`bg-ForestGreen text-white px-2 py-1 rounded-md font-semibold ${
                                                payment.status == "Berhasil"
                                                    ? "bg-green-600"
                                                    : payment.status ==
                                                      "Dibatalkan"
                                                    ? "bg-red-600"
                                                    : payment.status ==
                                                      "Menunggu Pembayaran"
                                                    ? "bg-yellow-600"
                                                    : ""
                                            }`}
                                        >
                                            {payment.status}
                                        </div>
                                    </div>

                                    <div className="flex flex-col">
                                        <p>{payment.appointment.date}</p>
                                        <p>{payment.payment_code}</p>
                                        <p>{payment.amount}</p>
                                        <p>
                                            Batas Pembayaran:{" "}
                                            {payment.payment_due}
                                        </p>
                                        {payment.payment_date && (
                                            <p>
                                                Dibayar Pada:{" "}
                                                {payment.payment_date}
                                            </p>
                                        )}
                                        {!payment.date &&
                                            !payment.payment_proof && (
                                                <AlertDialog
                                                defaultOpen={false}
                                                    onOpenChange={() =>
                                                        setData(
                                                            "payment_id",
                                                            payment.id
                                                        )
                                                    }
                                                >
                                                    <AlertDialogTrigger>
                                                        Konfirmasi Pembayaran
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <form onSubmit={submit}>
                                                            <AlertDialogHeader>
                                                                <AlertDialogTitle>
                                                                    Konfirmasi
                                                                    Pembayaran  {payment.payment_code}
                                                                </AlertDialogTitle>
                                                                <div>
                                                                    <p>
                                                                        Unggah
                                                                        bukti
                                                                        pembayaran
                                                                        Anda dan
                                                                        Staff
                                                                        kami
                                                                        akan
                                                                        mengkonfirmasi
                                                                        janji
                                                                        temu
                                                                        Anda
                                                                    </p>
                                                                    <div className="py-8 flex flex-col gap-2">
                                                                        <input
                                                                            type="file"
                                                                            accept="image/*"
                                                                            id="image"
                                                                            onChange={
                                                                                handleFileChange
                                                                            }
                                                                        />
                                                                        <p className="text-sm font-medium">
                                                                            File
                                                                            yang
                                                                            diterima
                                                                            :
                                                                            .jpeg,
                                                                            .jpg,
                                                                            .png,
                                                                            .webp:{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </AlertDialogHeader>
                                                            <AlertDialogFooter>
                                                                <AlertDialogCancel>
                                                                    Batal
                                                                </AlertDialogCancel>
                                                                {data.payment_proof ? (
                                                                    <button
                                                                        type="submit"
                                                                        className={`bg-ForestGreen hover:bg-ForestGreen hover:brightness-95 px-4 py-1 rounded-md text-white text-sm ${
                                                                            processing
                                                                                ? "cursor-not-allowed opacity-30"
                                                                                : ""
                                                                        }`}
                                                                        disabled={
                                                                            processing
                                                                        }
                                                                    >
                                                                        {processing
                                                                            ? "Mengunggah..."
                                                                            : "Unggah"}
                                                                    </button>
                                                                ) : (
                                                                    <button
                                                                        type="submit"
                                                                        className={`bg-ForestGreen hover:bg-ForestGreen hover:brightness-95 px-4 py-1 rounded-md text-white text-sm `}
                                                                        disabled
                                                                    >
                                                                        Unggah
                                                                    </button>
                                                                )}
                                                            </AlertDialogFooter>
                                                        </form>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="flex flex-col gap-4">
                        <p className="text-center text-2xl font-semibold text-gray-500">
                            Tidak ada tagihan yang terdata
                        </p>
                        <p className="text-center text-lg font-medium text-gray-500">
                            Silahkan buat Janji Temu Anda{" "}
                            <Link
                                href={route("janjiTemu.index")}
                                className="font-bold underline text-ForestGreen"
                            >
                                Disini
                            </Link>
                        </p>
                    </div>
                )}
            </div>
        </WhiteNavbarLayout>
    );
};

export default Tagihan;
