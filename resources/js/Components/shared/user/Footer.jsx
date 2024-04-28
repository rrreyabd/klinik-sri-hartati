import { FaClock, FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "@inertiajs/react";

const Footer = () => {
    return (
        <div className="w-full bg-ForestGreen flex justify-center py-12">
            <div className="w-full md:w-4/5 px-8 md:px-0 flex flex-col sm:flex-row justify-between md:justify-evenly text-white max-w-[1300px] space-y-6 sm:space-y-0">
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col-reverse sm:flex-col sm:items-center gap-4">
                        <h6 className="font-semibold text-xl">Klinik Sri Hartati</h6>
                        <img
                            src="/assets/logo_white.png"
                            alt="Footer Logo"
                            width={72}
                        />
                    </div>
                </div>

                <div className="hidden sm:flex flex-col space-y-4">
                    <h6 className="font-semibold text-lg">Halaman</h6>
                    <div className="flex flex-col">
                      <Link href="/">Home</Link>
                      <Link href="/">Layanan</Link>
                      <Link href="/">Tentang Kami</Link>
                      <Link href="/">Kontak</Link>
                    </div>
                </div>

                <div className="flex flex-col space-y-4">
                    <div className="flex space-x-2 items-center">
                        <FaLocationDot />
                        <p>At 123 Avenue Ltd, Indonesia</p>
                    </div>

                    <div className="flex items-center space-x-2">
                        <FaPhoneAlt />
                        <p>08121212121212</p>
                    </div>

                    <div className="flex items-center space-x-2">
                        <FaClock />
                        <p>08.00 - 23.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
