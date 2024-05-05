import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";

const StaffSheet = () => {
    return (
        <Sheet>
            <SheetTrigger className="p-2 bg-white rounded-md shadow-md">
                <GiHamburgerMenu className="text-2xl" />
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription>

                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};

export default StaffSheet;
