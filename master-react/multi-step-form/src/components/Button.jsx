import React from "react";

const Button = ({
    children,
    onClick,
    type = "button",
    className = "",
    disabled = false,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`custom-button ${className}`}
            disabled={disabled}
        >
            <span>{children}</span>
        </button>
    );
};

export default Button;
