import React from "react";

const Input = ({label, type, placeholder, value, inputStyle, onchange, children, labelClass}) => {
    const input = ["text", "number", "email", "password", "tel"];
    return(
       <React.Fragment>
            <label className={`${labelClass} form-label`}>
                {label}
            </label>
        {input.indexOf(type) !== -1 && (
            <input
                className={`${inputStyle} form-control`}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onchange(e.target.value)}
                style={{backgroundColor:"#fdfdfd", width: "25%"}}
            />
        )}
       </React.Fragment>
    )
}

export default Input