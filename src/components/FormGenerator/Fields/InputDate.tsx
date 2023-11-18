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
  limitDays?: number;
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
  limitDays,
}: Props) {
  const values: any = watch();

  const getMaxDate = () => {
    // Si no se provee una fecha máxima, usamos la fecha actual
    const baseMaxDate = new Date(values[maxDate] || new Date());

    if (!limitDays) {
      return baseMaxDate;
    }

    // Calculamos la fecha máxima teniendo en cuenta limitDate
    return new Date(baseMaxDate.getTime() - limitDays * 24 * 60 * 60 * 1000);
  };

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
            max={getMaxDate().toISOString().slice(0, 16)}
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
