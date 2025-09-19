import React, { memo } from "react";

interface Props {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  max?: number;
  min?: number;
  multiple?: boolean;
  required?: boolean;
}

const Input = ({
  label,
  name,
  placeholder,
  disabled = false,
  type = "text",
  required = true,
  max,
  min,
  multiple,
}: Props) => {
  return (
    <div className="mb-5">
      <label htmlFor={name}>{label}</label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          className="input-field min-h-[100px] max-h-[151px]"
        />
      ) : (
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          name={name}
          min={min}
          max={max}
          required={required}
          disabled={disabled}
          multiple={multiple}
          className="input-field"
        />
      )}
    </div>
  );
};

export default memo(Input);
