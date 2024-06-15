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
    treatments,
}) => {
    const [showData, setShowData] = useState("Semua");
    const [dataPayment, setDataPayment] = useState(payments);

    console.log(payments)
    console.log(pendingPayments)
    console.log(successPayments)
    console.log(cancelledPayments)
    console.log(confirmPayments)


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

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const options = { year: "numeric", month: "short", day: "numeric" };
        return date.toLocaleDateString("id-ID", options);
    };

    const formatter = new Intl.NumberFormat("id-ID");

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

                            // Countdown
                            const calculateTimeLeft = () => {
                                let difference =
                                    +new Date(payment.payment_due) -
                                    +new Date();
                                let timeLeft = {};

                                if (difference > 0) {
                                    timeLeft = {
                                        days: Math.floor(
                                            difference / (1000 * 60 * 60 * 24)
                                        ),
                                        hours: Math.floor(
                                            (difference / (1000 * 60 * 60)) % 24
                                        ),
                                        minutes: Math.floor(
                                            (difference / 1000 / 60) % 60
                                        ),
                                        seconds: Math.floor(
                                            (difference / 1000) % 60
                                        ),
                                    };
                                }

                                return timeLeft;
                            };

                            const [timeLeft, setTimeLeft] = useState(
                                calculateTimeLeft()
                            );

                            useEffect(() => {
                                const timer = setTimeout(() => {
                                    setTimeLeft(calculateTimeLeft());
                                }, 1000);

                                return () => clearTimeout(timer);
                            });

                            return (
                                // <div className="w-full p-4 bg-white shadow-md h-52 rounded-md border-l-8 border-l-green-500">
                                <div className="w-full p-4 pl-8 bg-white shadow-md rounded-md relative overflow-hidden flex flex-col gap-3">
                                    <div className="flex justify-between">
                                        <p
                                            className={`font-semibold ${payment.status == "Berhasil"
                                                ? "text-customGreen"
                                                : payment.status ==
                                                    "Menunggu Pembayaran"
                                                    ? "text-blue-600"
                                                    : payment.status ==
                                                        "Menunggu Konfirmasi"
                                                        ? "text-ForestGreen"
                                                        : payment.status ==
                                                            "Dibatalkan"
                                                            ? "text-customRed"
                                                            : null
                                                } `}
                                        >
                                            {payment.status}
                                        </p>
                                        <p className="font-bold text-gray-400">
                                            {payment.payment_code}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="font-semibold text-xl">
                                            Rp <span className="text-2xl">{formatter.format(payment.amount)}</span>
                                        </p>
                                    </div>

                                    <div className="font-medium text-base">
                                        <div className="flex justify-between">
                                            <p>Jadwal: </p>
                                            <p>{formatDate(payment.appointment.date)}, {payment.appointment.time.substring(0, 5)} WIB</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p>Layanan: </p>
                                            <p>{treatments[payment.appointment.treatment_id - 1].name}</p>
                                        </div>
                                        {
                                            timeLeft.minutes > 0 | timeLeft.seconds > 0 && payment.status !== 'Berhasil' ?
                                                <div className="flex justify-between">
                                                    <p>Batas Pembayaran: </p>
                                                    <p>
                                                        {timeLeft.minutes} Menit {timeLeft.seconds} Detik
                                                    </p>
                                                </div> : null
                                        }
                                    </div>

                                    {payment.payment_date && (
                                        <p className="font-medium text-sm text-gray-400">
                                            Dibayar Pada {payment.payment_date}
                                        </p>
                                    )}

                                    {!payment.date &&
                                        !payment.payment_proof && payment.status == "Menunggu Pembayaran" && (
                                            <AlertDialog
                                                defaultOpen={false}
                                                onOpenChange={() =>
                                                    setData(
                                                        "payment_id",
                                                        payment.id
                                                    )
                                                }
                                            >
                                                <AlertDialogTrigger className="w-full bg-blue-600 text-white font-semibold py-1 px-2 rounded-md shadow-md hover:bg-blue-700 transition-all">
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
                                                                    Kirim bukti pembayaran Anda dan Staff kami akan mengkonfirmasi janji temu Anda
                                                                </p>
                                                                <div className="py-8 flex flex-col gap-2">
                                                                    <input
                                                                        type="file"
                                                                        accept="image/*"
                                                                        id="image"
                                                                        onChange={
                                                                            handleFileChange
                                                                        }
                                                                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ForestGreen focus:border-transparent"
                                                                    />
                                                                    <p className="text-sm font-medium">
                                                                        Format file yang diterima: jpeg, jpg, png, webp
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
                                                                    className={`bg-ForestGreen hover:bg-ForestGreen hover:brightness-95 px-4 py-1 rounded-md text-white text-sm ${processing
                                                                        ? "cursor-not-allowed opacity-30"
                                                                        : ""
                                                                        }`}
                                                                    disabled={
                                                                        processing
                                                                    }
                                                                >
                                                                    {processing
                                                                        ? "Mengirim..."
                                                                        : "Kirim"}
                                                                </button>
                                                            ) : (
                                                                <button
                                                                    type="submit"
                                                                    className={`bg-ForestGreen hover:bg-ForestGreen hover:brightness-95 px-4 py-1 rounded-md text-white text-sm cursor-pointer`}
                                                                    disabled
                                                                >
                                                                    Kirim
                                                                </button>
                                                            )}
                                                        </AlertDialogFooter>
                                                    </form>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                        )}


                                    <div
                                        className={`absolute left-0 top-0 h-full w-4 ${payment.status == "Berhasil"
                                            ? "bg-customGreen"
                                            : payment.status ==
                                                "Menunggu Pembayaran"
                                                ? "bg-blue-600"
                                                : payment.status ==
                                                    "Menunggu Konfirmasi"
                                                    ? "bg-ForestGreen"
                                                    : payment.status == "Dibatalkan"
                                                        ? "bg-customRed"
                                                        : null
                                            } `}
                                    ></div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="flex flex-col gap-4 py-32">
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
