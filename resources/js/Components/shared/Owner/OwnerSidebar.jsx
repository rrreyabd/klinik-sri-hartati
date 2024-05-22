import { Link, usePage } from "@inertiajs/react";
import { BiHomeAlt } from "react-icons/bi";
import { FaUserInjured } from "react-icons/fa";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { MdOutlinePayments } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";

const menu = [
    {
        label: "Dashboard",
        icon: <BiHomeAlt className="w-6 h-6" />,
        link: "/owner",
    },
    {
        label: "Pasien",
        icon: <FaUserInjured className="w-6 h-6" />,
        link: "/owner/pasien",
    },
    {
        label: "Jadwal",
        icon: <RiCalendarScheduleLine className="w-6 h-6" />,
        link: "/owner/jadwal",
    },
    {
        label: "Obat",
        icon: <AiOutlineMedicineBox className="w-6 h-6" />,
        link: "/owner/obat",
    },
    {
        label: "Pembayaran",
        icon: <MdOutlinePayments className="w-6 h-6" />,
        link: "/owner/pembayaran",
    },
    { label: "Akun", icon: <FaRegUser className="w-6 h-6" />, link: "/owner/akun" },
];

const OwnerSidebar = ({ open }) => {
    const { url } = usePage();

    return (
        <aside
            className={`w-72 h-screen transition-all py-10 fixed top-24 left-0 z-0 shadow-xl ${
                open ? "translate-x-0" : "-translate-x-72"
            } transition-all duration-500 ease-in-out `}
        >
            <div className="flex flex-col">
                {menu.map((item, index) => (
                    <Link
                        key={index}
                        href={item.link}
                        className={`flex items-center gap-4 pl-16 py-4 w-full border-l-8 hover:bg-ForestGreen/20 hover:text-ForestGreen transition-all  ${
                            url == item.link
                                ? "border-ForestGreen text-ForestGreen bg-ForestGreen/20"
                                : "text-gray-500 bg-white border-transparent"
                        } `}
                    >
                        {item.icon}
                        <p className="font-semibold">{item.label}</p>
                    </Link>
                ))}
            </div>
        </aside>
    );
};

export default OwnerSidebar;
