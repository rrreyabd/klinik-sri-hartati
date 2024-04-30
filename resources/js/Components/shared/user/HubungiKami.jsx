const HubungiKami = () => {
    return (
        <div className="py-20 flex flex-col items-center gap-12" id="kontak">
            <h2 className="text-ForestGreen font-semibold text-4xl">
                Hubungi Kami
            </h2>

            <p className="w-full lg:w-4/5 xl:w-3/5 text-center text-black/75">
                Silakan isi formulir kontak berikut untuk menghubungi kami. Tim
                kami akan segera merespons pertanyaan atau permintaan Anda.
                Terima kasih atas kepercayaan Anda pada layanan kami.
            </p>

            <form className="w-full lg:w-4/5 xl:w-3/5 flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <input
                        type="text"
                        name=""
                        id="nama"
                        className="w-full sm:w-1/2 h-12 rounded-md bg-customWhite focus:border-KellyGreen border focus:ring-KellyGreen"
                        placeholder="Nama Lengkap"
                    />
                    <input
                        type="email"
                        name=""
                        id="email"
                        className="w-full sm:w-1/2 h-12 rounded-md bg-customWhite focus:border-KellyGreen border focus:ring-KellyGreen"
                        placeholder="Alamat Email"
                    />
                </div>
                <textarea
                    name=""
                    id="pesan"
                    cols="30"
                    rows="10"
                    placeholder="Pesan Kamu"
                    className="w-full bg-customWhite resize-none rounded-md focus:border-KellyGreen border focus:ring-KellyGreen  "
                ></textarea>

                <button
                    className="py-4 font-semibold bg-ForestGreen rounded-md text-customWhite"
                    type="submit"
                >
                    Kirimkan Pesan
                </button>
            </form>
        </div>
    );
};

export default HubungiKami;
