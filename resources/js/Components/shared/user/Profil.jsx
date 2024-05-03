import { motion } from "framer-motion";

const Image = () => {
    
    return (
        <div className="w-full lg:w-5/12">
            <div className="bg-ForestGreen">
                <motion.img
                    src="/assets/image1.png"
                    alt="Profile Image"
                    className="w-full aspect-video"
                    initial={{ x: 0, y: 0 }}
                    whileInView={{ x: 16, y: -16 }}
                    transition={{ duration: .5, delay: 1 }}
                    viewport={{ once: true }}
                />
            </div>
        </div>
    );
};

const Profil = () => {
    return (
        <div className="flex flex-col space-y-12 py-12 lg:py-20" id="tentang">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between">
                <Image />

                <div className="flex flex-col gap-4 w-full lg:w-1/2 pt-4">
                    <h2 className="text-ForestGreen font-semibold text-4xl">
                        Klinik Sri Hartati
                    </h2>
                    <p className="text-lg">
                        Kami adalah tim yang berdedikasi untuk memberikan
                        layanan kesehatan terbaik kepada Anda.{" "}
                    </p>
                    <p className="text-lg">
                        Dengan kombinasi teknologi canggih dan perhatian
                        personal, kami berkomitmen untuk memastikan pengalaman
                        perawatan yang nyaman, efisien, dan berkualitas tinggi.
                        Temukan solusi kesehatan yang tepat bersama kami.
                    </p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row shadow-md shadow-black/40 py-12 px-8 gap-16 sm:gap-2">
                <div className="text-center w-full sm:w-1/3 flex flex-col gap-2">
                    <h2 className="text-3xl md:text-4xl text-ForestGreen font-semibold">
                        98%
                    </h2>
                    <p className="text-black/40">Persentase Kepuasan Pasien</p>
                </div>
                <div className="text-center w-full sm:w-1/3 flex flex-col gap-2">
                    <h2 className="text-3xl md:text-4xl text-ForestGreen font-semibold">
                        2 RB+
                    </h2>
                    <p className="text-black/40">Total Pasien Tertanganin</p>
                </div>
                <div className="text-center w-full sm:w-1/3 flex flex-col gap-2">
                    <h2 className="text-3xl md:text-4xl text-ForestGreen font-semibold">
                        97%
                    </h2>
                    <p className="text-black/40">
                        Tingkat Keberhasilan Pengobatan
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profil;

