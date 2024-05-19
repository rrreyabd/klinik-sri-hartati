import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";

const AlertDialogComponent = ({
    trigger,
    title,
    desc,
    cancel,
    children,
    triggerClassName,
    actionOnClick,
    actionClassName,
    processing,
}) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger className={triggerClassName}>
                {trigger}
            </AlertDialogTrigger>
            <AlertDialogContent className="flex flex-col gap-16">
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>{desc}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>{cancel}</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={actionOnClick}
                        className={actionClassName}
                        disabled={processing}
                    >
                        {children}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default AlertDialogComponent;
