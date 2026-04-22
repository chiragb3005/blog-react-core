import React, { Children } from "react";

function Button ({
    children,
    type = "button",
    bgColor= 'bg-blue-600',
    textColor = 'white',
    className = '',
    ...props
}) {
    
    return (
            <button
            type={type}
            className={`px-4 py-2 text-base rounded-lg ${bgColor} ${textColor} ${className}`}
            {...props}        // ✅ spread here on the element
        >
            {children}
        </button>
    )
}

export default Button;