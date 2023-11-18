import React, { useRef, useState } from "react";
import { Overlay } from "react-bootstrap";
import { FaLightbulb } from "react-icons/fa";
import Tooltip from "../Components/Tooltip";
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
  tooltip?: { title: string; content: string };
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
  tooltip,
}: Props) {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const values: any = watch();

  if (visible && !values[visible]) return <> </>;
  return (
    <div>
      <label
        className={`${
          error && "text-danger"
        } title-form-generator d-flex position-relative `}
        //htmlFor={name}
      >
        {label}
        {tooltip && <Tooltip tooltip={tooltip} />}
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
