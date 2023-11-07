import React from "react";
interface Props {
  register: any;
  label: string;
  name: string;
  required?: boolean;
  error?: any;
  minDate?: string;
  maxDate?: string;
  watch: any;
}
export default function InputDate({
  register,
  label,
  name,
  required,
  error,
  minDate = "",
  maxDate = "",
  watch,
}: Props) {
  const values: any = watch();

  return (
    <div className="col-5">
      <label
        className={`${error && "text-danger"} title-form-generator my-2`}
        htmlFor={name}
      >
        {label}
      </label>

      <div className="d-flex ">
        <div className="  d-flex ">
          <input
            type="datetime-local"
            min={new Date(values[minDate] || null).toISOString().slice(0, 16)}
            max={new Date(values[maxDate] || new Date())
              .toISOString()
              .slice(0, 16)}
            className={`w-100 form-control my-2 fs-5 m-0 ${
              error && "border-danger "
            }`}
            {...register(name, { required })}
          />
        </div>
      </div>
    </div>
  );
}
