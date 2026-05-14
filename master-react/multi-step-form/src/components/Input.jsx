import React from "react";

const Input = ({
    label,
    type = "text",
    name,
    value,
    onChange,
    placeholder,
}) => {
    return (
        <div className='input-group'>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
