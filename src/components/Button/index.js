const Button = ({children, className, onClick}) => {
    return (
        <button 
            type="button" 
            class={className}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;