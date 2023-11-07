import React from "react";
interface Props {
  register: any;
  label: string;
  name: string;
  required?: boolean;
  error?: any;
  subLabel: string;
  visible?: string;
  watch: any;
  disabled?: boolean;
}
export default function InputText({
  register,
  label,
  name,
  required,
  error,
  subLabel,
  disabled,
  visible,
  watch,
}: Props) {
  const values: any = watch();

  if (visible && !values[visible]) return <> </>;
  return (
    <div>
      <label
        className={`${error && "text-danger"} title-form-generator`}
        htmlFor={name}
      >
        {label}
      </label>
      {subLabel === "" ? null : (
        <p className={` text-secondary fs-6 mb-0 ${error && "text-danger"}`}>
          {subLabel}
        </p>
      )}

      <input
        id={name}
        name={name}
        disabled={disabled}
        type="text"
        {...register(name, { required })}
        className={`w-100 form-control my-2 fs-5 m-0 ${
          error && "border-danger "
        }`}
      />
    </div>
  );
}
