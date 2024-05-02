import { IoDocumentText } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaUsers, FaRegCalendarAlt } from "react-icons/fa";

export const services = [
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
        url: route("janjiTemu.index"),
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

export const pagi = [
    {
        id: 1,
        value: "08.00",
    },
    {
        id: 2,
        value: "09.00",
    },
    {
        id: 3,
        value: "10.00",
    },
    {
        id: 4,
        value: "11.00",
    },
    {
        id: 5,
        value: "12.00",
    },
];

export const sore = [
    {
        id: 1,
        value: "14.00",
    },
    {
        id: 2,
        value: "15.00",
    },
    {
        id: 3,
        value: "16.00",
    },
    {
        id: 4,
        value: "17.00",
    },
];

export const malam = [
    {
        id: 1,
        value: "20.00",
    },
];
