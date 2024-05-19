import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/Components/ui/hover-card";
import { FaCircleInfo } from "react-icons/fa6";
import { BsQuestionCircleFill } from "react-icons/bs";

const HeaderForm = ({ auth }) => {

    return (
        <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-semibold text-ForestGreen">
                Halo, {auth.user.name} 👋
            </h1>
            <p>
                Mohon luangkan waktu sejenak untuk mengisi formulir data pribadi.
            </p>

            <HoverCard openDelay={500}>
                <HoverCardTrigger className="text-ForestGreen cursor-pointer font-semibold text-sm w-fit mt-4">
                    <p className="flex items-center gap-2 hover:underline">
                        <BsQuestionCircleFill className="h-4 w-4" />
                        Kenapa saya harus mengisi formulir ini?
                    </p>
                </HoverCardTrigger>
                <HoverCardContent
                    className="w-96 ml-2 mb-1 bg-ForestGreen text-white relative chat-bubble flex gap-3 items-center"
                    side="top"
                    align="start"
                >
                    <FaCircleInfo className="w-8 h-8" />
                    <p className="text-sm">
                        Agar Anda dapat mendaftar layanan di Klinik kami dengan
                        lebih cepat
                    </p>
                </HoverCardContent>
            </HoverCard>
        </div>
    );
};

export default HeaderForm;
