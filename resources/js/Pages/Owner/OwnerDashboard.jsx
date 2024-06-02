import OwnerLayout from "@/Layouts/OwnerLayout";
import { useState } from "react";
import { LuStethoscope } from "react-icons/lu";
import { FaMoneyBillTransfer, FaUserDoctor } from "react-icons/fa6";
import { FaUserNurse } from "react-icons/fa";

const OwnerDashboard = ({revenue,totalDoctor,totalStaff,transactions}) => {
    const [open, setOpen] = useState(true);
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 2,
    });
    
    return (
        <>
            <OwnerLayout open={open} setOpen={setOpen} navTitle="Dashboard">
                <div className="flex justify-between gap-4">
                    <SummaryContainer
                        label={"Pendapatan"}
                        value={formatter.format(revenue)}
                        Icon={FaMoneyBillTransfer}
                    />
                    <SummaryContainer
                        label={"Dokter"}
                        value={totalDoctor}
                        Icon={FaUserDoctor}
                    />
                    <SummaryContainer
                        label={"Staff"}
                        value={totalStaff}
                        Icon={FaUserNurse}
                    />
                </div>

                <h1 className="mt-10 text-3xl font-semibold">Transaksi</h1>

                <div className="mt-4 min-h-72 overflow-y-scroll shadow-md bg-white rounded-lg flex flex-col divide-y-2 divide-gray-300">
                    {transactions.map(transaction => (
                    <div className="h-24 px-8 flex items-center gap-6">
                        <div className={`p-3 rounded-full flex items-center justify-center ${
                                transaction.status === 'Berhasil' ? 'bg-customGreen' : 'bg-customRed'
                            }`}>
                            <LuStethoscope className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-lg font-semibold">
                                { transaction.appointment.treatment.name }
                            </h4>
                            <p className="text-gray-500">{ transaction.user.name }</p>
                        </div>
                    </div>
                    ))}
                </div>
            </OwnerLayout>
        </>
    );
};

export default OwnerDashboard;

const SummaryContainer = ({ label, value, Icon }) => {
    return (
        <div className="h-24 shadow-md bg-white rounded-lg w-1/3 flex items-center px-8 py-4 gap-4">
            <div className="p-2 lg:p-4 rounded-xl bg-ForestGreen">
                <Icon className="text-white h-6 lg:h-8 w-6 lg:w-8" />
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
