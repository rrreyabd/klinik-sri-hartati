import { useForm } from '@inertiajs/inertia-react'; 

const HubungiKami = ({auth}) => {
    const {data, setData, post} = useForm({
        nama: auth && auth.user ? auth.user.name : '',
        email: auth && auth.user ? auth.user.email : '',
        pesan: ''
    });
    
    console.log('Auth:', auth); 
    
    const submitMessage = async (e) => {
        e.preventDefault();
        await post(route("message.store"));
        setData({
            nama: auth && auth.user ? auth.user.name : '',
            email: auth && auth.user ? auth.user.email : '',
            pesan: ''
        });
    };

    return (
        <div className="py-20 flex flex-col items-center gap-12" id="kontak">
            <h2 className="text-ForestGreen font-semibold text-4xl text-center">
                Hubungi Kami
            </h2>

            <p className="w-full lg:w-4/5 xl:w-3/5 text-center text-black/75">
                Silakan isi formulir kontak berikut untuk menghubungi kami. Tim
                kami akan segera merespons pertanyaan atau permintaan Anda.
                Terima kasih atas kepercayaan Anda pada layanan kami.
            </p>

            <form className="w-full lg:w-4/5 xl:w-3/5 flex flex-col gap-4" onSubmit={submitMessage}>
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <input
                        type="text"
                        name="nama"
                        id="nama"
                        value={data.nama}
                        onChange={(e) =>
                            setData("nama", e.target.value)
                        }
                        readOnly={auth ? true : false}
                        className="w-full sm:w-1/2 h-12 rounded-md bg-customWhite focus:border-KellyGreen border focus:ring-KellyGreen"
                        placeholder="Nama Lengkap"
                        autoComplete="off"
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={data.email}
                        onChange={(e) =>
                            setData("email", e.target.value)
                        }
                        readOnly={auth ? true : false}
                        className="w-full sm:w-1/2 h-12 rounded-md bg-customWhite focus:border-KellyGreen border focus:ring-KellyGreen"
                        placeholder="Alamat Email"
                        autoComplete="off"
                    />
                </div>
                <textarea
                    name="pesan"
                    id="pesan"
                    value={data.pesan}
                    onChange={(e) =>
                        setData("pesan", e.target.value)
                    }
                    cols="30"
                    rows="10"
                    placeholder="Pesan Kamu"
                    autoComplete="off"
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
