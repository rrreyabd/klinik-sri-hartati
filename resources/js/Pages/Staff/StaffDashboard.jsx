import { StaffMenu } from "@/lib/data";
import { Head, Link } from "@inertiajs/react";

const StaffDashboardCard = ({ id, title, desc, icon, url }) => {
    return (
        <Link
            href={url}
            className={`hover:brightness-90 hover:-translate-y-1 duration-500 transition-all ${
                (id == 1) | (id == 2)
                    ? "bg-ForestGreen"
                    : "bg-KellyGreen"
            } w-5/12 h-64 rounded-xl flex overflow-hidden shadow-xl`}
        >
            <div className="w-1/2 pl-8 pt-20">
                <h2 className="font-semibold text-2xl text-customWhite">
                    {title}
                </h2>
                <p className="text-customWhite/70">{desc}</p>
            </div>
            <div className="w-1/2 flex justify-end items-end pl-4">
                <img src={icon} alt="Icon Menu" className="max-h-2/3" />
            </div>
        </Link>
    );
};

const StaffDashboard = () => {
    return (
        <div className="min-h-screen w-full bg-customWhite flex justify-center items-center">
            <Head title="Staff" />
            <div className="w-full flex flex-col gap-10 max-w-[1300px]">
                <div className="flex flex-col text-center gap-1">
                    <h1 className="font-semibold text-4xl">
                        Dashboard Staff
                    </h1>
                    <p className="text-lg text-slate-600 font-medium">
                        Ada Perlu apa hari ini?
                    </p>
                </div>

                <div className="flex flex-row flex-wrap justify-center gap-8 w-full">
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
