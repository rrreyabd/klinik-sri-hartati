import OwnerNavbar from "@/Components/shared/Owner/OwnerNavbar";
import OwnerSidebar from "@/Components/shared/Owner/OwnerSidebar";

const OwnerLayout = ({ children, open, setOpen }) => {
    return (
        <div className="w-full min-h-screen bg-white">
            <OwnerNavbar setOpen={setOpen} open={open} />
            <div className="flex">
                <OwnerSidebar open={open} />

                <main
                    className={`h-[200vh] p-8 flex flex-col flex-grow bg-customWhite items-center ${
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
