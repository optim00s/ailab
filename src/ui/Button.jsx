const Button = ({
    variant = 'primary',
    children = '',
    className = '',
    fullWidth = false,
    onClick,
    ...props
}) => {
    const baseStyles = "px-7 py-3 rounded-lg transition-all duration-200";

    const variants = {
        primary: "bg-ailab-purple hover:bg-ailab-purple/60 text-white",
        secondary: "bg-transparent border-2 border-ailab-purple text-ailab-purple hover:bg-ailab-purple/30 hover:text-white",
        darkPrimary: "bg-black hover:bg-black/70 text-white",
        darkOutline: "bg-transparent border-2 border-black text-black hover:bg-black/70 hover:text-white"
    };

    const widthClass = fullWidth ? 'w-full' : '';

    return (
        <button 
            className={`${baseStyles} ${variants[variant]} ${className} ${widthClass}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )

}

export default Button;