import OwnerNavbar from "@/Components/shared/Owner/OwnerNavbar";
import OwnerSidebar from "@/Components/shared/Owner/OwnerSidebar";

const OwnerLayout = ({ children, open, setOpen, navTitle }) => {
    return (
        <div className="w-full min-h-screen bg-white">
            <OwnerNavbar setOpen={setOpen} open={open} navTitle={navTitle} />
            <div className="flex">
                <OwnerSidebar open={open} />

                <main
                    className={`p-8 flex min-h-screen flex-col flex-grow bg-customWhite items-center ${
                        open ? "ml-72" : "ml-0"
                    } transition-all duration-500 ease-in-out
                }`}
                >
                    <div className={` w-full max-w-[80vw] `}>{children}</div>
                </main>
            </div>
        </div>
    );
};

export default OwnerLayout;
