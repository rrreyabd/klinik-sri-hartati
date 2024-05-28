import Navbar from "@/Components/shared/user/Navbar";
import { Head } from "@inertiajs/react";

const WhiteNavbarLayout = ({ auth, children, title }) => {
    return (
        <main className="flex flex-col items-center bg-customWhite lg:bg-customWhite min-h-screen">
            <Head title={title} />
            <div className="px-8 w-full flex justify-center bg-white shadow-md">
                <Navbar auth={auth} color="bg-white" className="max-w-[1235px] w-full" />
            </div>
            <div className="px-8 md:px-0 w-full md:w-4/5 max-w-[1235px]">
                {children}
            </div>
        </main>
    );
};

export default WhiteNavbarLayout;
