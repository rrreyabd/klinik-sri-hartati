const Input = ({ label, placeholder, name, type, id, className, onChange, labelClassName, disabled, value, ...props }) => {
    return (
        <div className="flex flex-col space-y-1">
            <label htmlFor={name} className={`font-semibold ${labelClassName}`}>
                {label}
            </label>
            <input
                {...props}
                disabled={disabled}
                type={type}
                name={name}
                value={value}
                id={id}
                placeholder={placeholder}
                className={`bg-customWhite rounded-md placeholder:font-medium h-12 ${className} `}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;




