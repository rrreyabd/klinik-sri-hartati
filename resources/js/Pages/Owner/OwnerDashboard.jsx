import OwnerLayout from "@/Layouts/OwnerLayout";
import { useState } from "react";

const OwnerDashboard = () => {
    const [open, setOpen] = useState(true);
    return (
        <>
            <OwnerLayout open={open} setOpen={setOpen}>
                <div className="flex justify-between">
                    <div className="h-24 shadow-md bg-white rounded-lg w-80"></div>
                    <div className="h-24 shadow-md bg-white rounded-lg w-80"></div>
                    <div className="h-24 shadow-md bg-white rounded-lg w-80"></div>
                </div>

                <h1 className="mt-10 text-3xl font-semibold">Transaksi</h1>

                <div className="mt-4 h-96 shadow-md bg-white rounded-lg">

                </div>
            </OwnerLayout>
        </>
    );
};

export default OwnerDashboard;
