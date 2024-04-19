import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, Icon, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className='relative flex items-center'>
            <input
                {...props}
                type={type}
                className={
                    'border-2 border-customBlack focus:border-ForestGreen focus:ring-ForestGreen rounded-xl shadow-sm pl-20 placeholder:font-semibold placeholder:text-sm text-sm font-semibold ' + className
                }
                ref={input}
            />
            <div className='absolute left-0 w-16 h-3/5 flex justify-center items-center border-r-2 border-customBlack'>
                {Icon && <Icon className="w-5 h-5" /> }
            </div>

            
        </div>
    );
});
