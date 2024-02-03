import React from "react";

export default function FormGroup({
                                      labelText,
                                      inputType,
                                      placeholder,
                                      value,
                                      onInput,
                                      onKeyUp,
                                      onChange,
                                      className,
                                      readOnly = false,
                                      reference,
                                      name,
                                      id,
                                  }) {
    return (
        <div className="form-group">
            <label htmlFor={id}>{labelText}</label>
            <input
                type={inputType}
                placeholder={placeholder}
                value={value}
                onInput={onInput}
                onKeyUp={onKeyUp}
                onChange={onChange}
                className={className}
                readOnly={readOnly}
                ref={reference}
                name={name}
                id={id}
            />
        </div>
    );
}