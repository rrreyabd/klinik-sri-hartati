const Profil = () => {
    return (
        <div className="flex flex-col space-y-8 py-28">
            <div className="flex justify-between min-h-80">
                <div className="w-1/2">
                    <div className="w-3/4 aspect-video bg-ForestGreen relative">
                        <img
                            src="/assets/image1.png"
                            alt="Profile Image"
                            className="w-full aspect-video static top-4 left-4"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4 w-1/2">
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

            <div className="flex shadow-md shadow-black/40 py-8">
                <div className="text-center w-1/3 flex flex-col gap-2">
                    <h2 className="text-4xl font-semibold">98%</h2>
                    <p className="text-black/40">Persentase Kepuasan Pasien</p>
                </div>
                <div className="text-center w-1/3 flex flex-col gap-2">
                    <h2 className="text-4xl font-semibold">2 RB+</h2>
                    <p className="text-black/40">Total Pasien Tertanganin</p>
                </div>
                <div className="text-center w-1/3 flex flex-col gap-2">
                    <h2 className="text-4xl font-semibold">97%</h2>
                    <p className="text-black/40">Tingkat Keberhasilan Pengobatan</p>
                </div>
            </div>
        </div>
    );
};

export default Profil;
