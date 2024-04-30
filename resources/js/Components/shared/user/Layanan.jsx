import { Link } from "@inertiajs/react";
import { FaUsers, FaRegCalendarAlt } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import IconLayanan from "./IconLayanan";

const Layanan = () => {
    const services = [
        {
            id: 1,
            name: "Antrian Online",
            description: "Daftar dan tunggu giliran secara virtual",
            url: "/",
            Icon: FaUsers,
        },
        {
            id: 2,
            name: "Buat Janji Temu",
            description: "Pesan waktu kunjungan dengan mudah",
            url: route('janjiTemu.index'),
            Icon: FaRegCalendarAlt,
        },
        {
            id: 3,
            name: "Akses Rekam Medis",
            description:
                "Lihat catatan medis dan konsultasi dokter secara virtual.",
            url: "/",
            Icon: IoDocumentText,
        },
        {
            id: 4,
            name: "Bayar Online",
            description: "Lunasi tagihan dengan e-money ",
            url: "/",
            Icon: MdOutlineAttachMoney,
        },
    ];

    return (
        <div className="flex flex-col py-20 gap-4" id="layanan">
            <h1 className="text-ForestGreen font-medium text-3xl sm:text-4xl text-center">
                Kenapa Memilih Kami?
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-14">
                {services &&
                    services.map((service) => {
                        return (
                            <div
                                className="bg-customWhite shadow-lg shadow-black/30 rounded-md p-8 flex flex-col gap-4"
                                key={service.id}
                            >
                                <div className="bg-ForestGreen p-2 sm:p-4 w-fit rounded-full">
                                    <IconLayanan Icon={service.Icon} />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <p className="text-ForestGreen font-semibold text-lg">
                                        {service.name}
                                    </p>
                                    <hr className="border-2 border-ForestGreen/40 w-2/5" />
                                </div>

                                <div className="flex flex-col justify-between flex-grow">
                                    <p className="text-black/40 min-h-20">
                                        {service.description}
                                    </p>

                                    <div className="flex justify-end">
                                        <Link href={service.url} className="bg-Pistachio w-10 sm:w-12 h-10 sm:h-12 rounded-full flex justify-center items-center">
                                            <FaArrowLeft className="text-2xl text-ForestGreen rotate-[135deg]" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Layanan;
