import { FaClock, FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "@inertiajs/react";

const Footer = () => {
    return (
        <div className="w-full bg-ForestGreen flex justify-center py-12">
            <div className="w-4/5 flex justify-evenly text-white max-w-[1300px]">
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col items-center space-y-4">
                        <img
                            src="/assets/logo_white.png"
                            alt="Footer Logo"
                            width={72}
                        />
                        <h6 className="font-semibold text-xl">Klinik Sri Hartati</h6>
                    </div>
                </div>

                <div className="flex flex-col space-y-4">
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
