import { Link } from "@inertiajs/react";
import { FaArrowLeft } from "react-icons/fa6";
import IconLayanan from "./IconLayanan";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { services } from "@/lib/data";

const Layanan = () => {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className="flex flex-col py-20 lg:py-36 gap-8" id="layanan">
            <h1 className="text-ForestGreen font-semibold text-3xl sm:text-4xl text-center">
                Kenapa Memilih Kami?
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-14">
                {services &&
                    services.map((service, index) => {
                        let delay = (index * 500);
                        return (
                            <div
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay={delay}
                                data-aos-once={true}
                                className="bg-customWhite shadow-lg
                                shadow-black/30 rounded-md p-8 flex flex-col
                                gap-4"
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
                                        <Link
                                            href={service.url}
                                            className="bg-Pistachio w-10 sm:w-12 h-10 sm:h-12 rounded-full flex justify-center items-center"
                                        >
                                            <FaArrowLeft className="text-2xl text-ForestGreen rotate-[135deg] hover:rotate-[180deg] transition-all duration-500" />
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
