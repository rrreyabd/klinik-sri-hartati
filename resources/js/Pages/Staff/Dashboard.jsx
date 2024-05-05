import { StaffMenu } from "@/lib/data";
import { Head, Link } from "@inertiajs/react";

const StaffDashboardCard = ({ id, title, desc, icon, url }) => {
    return (
        <Link
            href={url}
            className={` ${
                id == 1
                    ? "bg-ForestGreen"
                    : id > 3
                    ? "bg-ForestGreen"
                    : "bg-KellyGreen"
            } h-64 rounded-xl flex overflow-hidden shadow-xl`}
        >
            <div className="w-1/2 pl-8 pt-20">
                <h2 className="font-semibold text-2xl text-customWhite">
                    {title}
                </h2>
                <p className="text-customWhite/70">{desc}</p>
            </div>
            <div className="w-1/2 flex justify-end items-end">
                <img src={icon} alt="Icon Menu" className="h-2/3" />
            </div>
        </Link>
    );
};

const StaffDashboard = () => {
    return (
        <div className="min-h-screen w-full bg-customWhite flex justify-center">
            <Head title="Staff" />
            <div className="w-3/4 py-16 flex flex-col gap-8 max-w-[1300px]">
                <div className="flex flex-col text-center ">
                    <h1 className="font-semibold text-4xl text-ForestGreen">
                        Selamat Datang
                    </h1>
                    <p className="text-lg text-slate-600 font-medium">
                        Ada Perlu apa hari ini?
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    {StaffMenu &&
                        StaffMenu.map((menu) => {
                            return (
                                <StaffDashboardCard
                                    key={menu.id}
                                    id={menu.id}
                                    title={menu.title}
                                    desc={menu.desc}
                                    icon={menu.icon}
                                    url={menu.url}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default StaffDashboard;
