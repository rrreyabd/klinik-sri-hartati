import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/Components/ui/toast"
import { useToast } from "@/Components/ui/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    (<ToastProvider>
      {toasts.map(function ({ id, title, description, action, titleClassName, descClassName, ...props }) {
        return (
          (<Toast key={id} {...props}>
            <div className="grid gap-1 w-full">
              {title && <ToastTitle className={` ${titleClassName}`}>{title}</ToastTitle>}
              {description && (
                <ToastDescription className="text-xs text-slate-200">{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className="text-white hover:text-white" />
          </Toast>)
        );
      })}
      <ToastViewport />
    </ToastProvider>)
  );
}
