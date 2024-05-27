import WhiteNavbarLayout from "@/Layouts/WhiteNavbarLayout";

const Jadwal = ({ auth }) => {
    return (
        <WhiteNavbarLayout auth={auth} title="Jadwal">
            <div className="mt-6 flex flex-col gap-4">
                <h1 className="text-3xl font-semibold">Jadwal</h1>
                
                <div className="flex gap-4">
                    <button>Menunggu</button>
                    <button>Selesai</button>
                </div>

                <div className=""></div>
            </div>
        </WhiteNavbarLayout>
    );
};

export default Jadwal;
