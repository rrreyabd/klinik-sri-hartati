import OwnerLayout from "@/Layouts/OwnerLayout";
import { useState } from "react";
import { LuStethoscope } from "react-icons/lu";
import { FaMoneyBillTransfer, FaUserDoctor } from "react-icons/fa6";
import { FaUserNurse } from "react-icons/fa";

const OwnerDashboard = () => {
    const [open, setOpen] = useState(true);

    return (
        <>
            <OwnerLayout open={open} setOpen={setOpen} navTitle="Dashboard">
                <div className="flex justify-between">
                    <SummaryContainer
                        label={"Pendapatan"}
                        value={"Rp 100.000.000"}
                        Icon={FaMoneyBillTransfer}
                    />
                    <SummaryContainer
                        label={"Dokter"}
                        value={"3"}
                        Icon={FaUserDoctor}
                    />
                    <SummaryContainer
                        label={"Staff"}
                        value={"5"}
                        Icon={FaUserNurse}
                    />
                </div>

                <h1 className="mt-10 text-3xl font-semibold">Transaksi</h1>

                <div className="mt-4 min-h-72 overflow-y-scroll shadow-md bg-white rounded-lg flex flex-col divide-y-2 divide-gray-300">
                    <div className="h-24 px-8 flex items-center gap-6">
                        <div className="p-3 rounded-full bg-customGreen flex items-center justify-center">
                            <LuStethoscope className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-lg font-semibold">
                                Layanan Pemeriksaan
                            </h4>
                            <p className="text-gray-500">Jessindy Tanuwijaya</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="h-24 px-8 flex items-center gap-6">
                        <div className="p-3 rounded-full bg-customRed flex items-center justify-center">
                            <LuStethoscope className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-lg font-semibold">
                                Layanan Pemeriksaan
                            </h4>
                            <p className="text-gray-500">Jessindy Tanuwijaya</p>
                        </div>
                    </div>
                    <div className="h-24 px-8 flex items-center gap-6">
                        <div className="p-3 rounded-full bg-customRed flex items-center justify-center">
                            <LuStethoscope className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-lg font-semibold">
                                Layanan Pemeriksaan
                            </h4>
                            <p className="text-gray-500">Jessindy Tanuwijaya</p>
                        </div>
                    </div>
                    <div className="h-24 px-8 flex items-center gap-6">
                        <div className="p-3 rounded-full bg-customRed flex items-center justify-center">
                            <LuStethoscope className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-lg font-semibold">
                                Layanan Pemeriksaan
                            </h4>
                            <p className="text-gray-500">Jessindy Tanuwijaya</p>
                        </div>
                    </div>
                    {/*  */}
                </div>
            </OwnerLayout>
        </>
    );
};

export default OwnerDashboard;

const SummaryContainer = ({ label, value, Icon }) => {
    return (
        <div className="h-24 shadow-md bg-white rounded-lg w-80 flex items-center px-8 py-4 gap-4">
            <div className="p-4 rounded-xl bg-ForestGreen">
                <Icon className="text-white h-8 w-8" />
            </div>
            <div className="flex flex-col">
                <p className="text-gray-500 font-medium">{label}</p>
                <p className="text-ForestGreen text-xl font-semibold">
                    {value}
                </p>
            </div>
        </div>
    );
};
