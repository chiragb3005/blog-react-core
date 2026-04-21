import React, {forwardRef, useId} from "react";

function Select ({
    label,
    className = '',
    options=[],
    ...props
}, ref) {
    const id = useId()
    return(
        <div className="w-full">
            {label && <label className="" htmlFor={id}></label>}
            <select
            id={id}
            {...props}
            ref={ref}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full${className}`}
            >
                 {options? options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                 )) : null}
            </select>
        </div>
    )
}

export default forwardRef(Select);
// for now forwardRef later to consume useRef....