import { IoDocumentText } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaUsers, FaRegCalendarAlt } from "react-icons/fa";

export const services = [
    {
        id: 1,
        name: "Antrian Online",
        description: "Daftar dan tunggu giliran secara virtual",
        url: route("antrian.index"),
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

export const StaffMenu = [
    {
        id: 1,
        title: "Antrian",
        desc: "Periksa antrian saat ini",
        icon: "/assets/staff/1.png",
        url: "/staff/antrian"
    },
    {
        id: 2,
        title: "Daftar Antrian",
        desc: "Daftar antrian pasien secara langsung",
        icon: "/assets/staff/2.png",
        url: "/staff/antrian/tambah"
    },
    {
        id: 3,
        title: "Janji Temu",
        desc: "Melihat daftar janji temu pasien dan dokter",
        icon: "/assets/staff/3.png",
        url: "/staff/janji-temu"
    },
    {
        id: 4,
        title: "Rekam Medis",
        desc: "Melihat dan mencetak rekam medis pasien",
        icon: "/assets/staff/4.png",
        url: "/staff/rekam-medis"
    },
    {
        id: 5,
        title: "Pembayaran",
        desc: "Pengelolaan tagihan",
        icon: "/assets/staff/5.png",
        url: "/staff/pembayaran"
    },
];

export const pasien = [
    {
        Nama: "Raihan Abdillah",
        "Waktu Antri": "10.00",
        "Jenis Kelamin": "Pria",
        Umur: "19",
        Layanan: "Layanan 3",
        Gejala: "Gejala 1",
    },
    {
        Nama: "Jessindy Tanuwijaya",
        "Waktu Antri": "11.00",
        "Jenis Kelamin": "Perempuan",
        Umur: "19",
        Layanan: "Layanan 1",
        Gejala: "Gejala 2",
    },
    {
        Nama: "Alwin Liufandy",
        "Waktu Antri": "11.00",
        "Jenis Kelamin": "Pria",
        Umur: "19",
        Layanan: "Layanan 2",
        Gejala: "Gejala 2",
    },
    {
        Nama: "Raihan Abdillah",
        "Waktu Antri": "10.00",
        "Jenis Kelamin": "Pria",
        Umur: "19",
        Layanan: "Layanan 3",
        Gejala: "Gejala 1",
    },
    {
        Nama: "Jessindy Tanuwijaya",
        "Waktu Antri": "11.00",
        "Jenis Kelamin": "Perempuan",
        Umur: "19",
        Layanan: "Layanan 1",
        Gejala: "Gejala 2",
    },
    {
        Nama: "Alwin Liufandy",
        "Waktu Antri": "11.00",
        "Jenis Kelamin": "Pria",
        Umur: "19",
        Layanan: "Layanan 2",
        Gejala: "Gejala 2",
    },
    {
        Nama: "Raihan Abdillah",
        "Waktu Antri": "10.00",
        "Jenis Kelamin": "Pria",
        Umur: "19",
        Layanan: "Layanan 3",
        Gejala: "Gejala 1",
    },
    {
        Nama: "Jessindy Tanuwijaya",
        "Waktu Antri": "11.00",
        "Jenis Kelamin": "Perempuan",
        Umur: "19",
        Layanan: "Layanan 1",
        Gejala: "Gejala 2",
    },
    {
        Nama: "Alwin Liufandy",
        "Waktu Antri": "11.00",
        "Jenis Kelamin": "Pria",
        Umur: "19",
        Layanan: "Layanan 2",
        Gejala: "Gejala 2",
    },
];