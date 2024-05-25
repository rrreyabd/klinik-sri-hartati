import { FaClock, FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "@inertiajs/react";

const Footer = ({ information }) => {
    return (
        <div className="w-full bg-ForestGreen flex flex-col items-center pt-12 pb-8 space-y-16">
            <div className="w-full md:w-4/5 px-8 md:px-0 flex flex-col sm:flex-row justify-between md:justify-evenly text-white max-w-[1300px] space-y-6 sm:space-y-0">
                <div className="flex flex-col space-y-4 w-full sm:w-48">
                    <div className="flex flex-col-reverse sm:flex-col sm:items-center gap-4">
                        <h6 className="font-semibold text-xl">
                            {information.name}
                        </h6>
                        <img
                            src="/assets/logo_white.png"
                            alt="Footer Logo"
                            width={72}
                        />
                    </div>
                </div>

                <div className="hidden sm:flex flex-col text-center space-y-4 w-full sm:w-48">
                    <h6 className="font-semibold text-lg">Halaman</h6>

                    <div className="flex flex-col">
                        <Link href="/">Rekam Medis</Link>
                        <Link href="/">Janji Temu</Link>
                        <Link href="/">Tagihan</Link>
                        <Link href="/">Profil</Link>
                    </div>
                </div>

                <div className="flex flex-col space-y-4 w-full sm:w-48">
                    <div className="flex space-x-4 items-center">
                        <FaLocationDot className="h-5 w-5" />
                        <p>{information.address}</p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <FaPhoneAlt />
                        <p>{information.phone}</p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <FaClock />
                        <p>{information.open_time.substring(0, 5)} - {information.close_time.substring(0, 5)}</p>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-4/5 px-8 md:px-0 flex justify-start sm:justify-center text-white/80 text-sm">
                <p>Copyright &copy;2024 - Klinik Sri Hartati</p>
            </div>
        </div>
    );
};

export default Footer;
