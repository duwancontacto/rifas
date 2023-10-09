import React from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  head: { label: String; width?: string }[];
  options: any;
  Component: any;
  actions?: any;
  disableFilter?: boolean;
  title?: string;
  disablePagination?: boolean;
}

export default function DashboardTable({
  head,
  options,
  Component,
  actions,
  disableFilter,
  title,
}: Props) {
  return (
    <div className="pt-3 background-dashboard mt-3 ">
      {title && <p className="mt-3 ps-3 details-Cartera ">{title}</p>}
      {!disableFilter && (
        <div className="d-block d-md-flex justify-content-between align-items-center border-1   mb-4  px-3 ">
          <div className="d-flex align-items-center ">
            <h6 className="me-2">Fechas </h6>
            <input
              type="datetime-local"
              className={`w-25 form-control my-2 fs-5 m-0 `}
            />
            <input
              type="datetime-local"
              className={`w-25 form-control my-2 fs-5 m-0 `}
            />
          </div>

          <div className="input-group  w-75  border-input ">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar Rifas "
            />
            <button
              className="btn btn-btn-outline-light  "
              type="button"
              id="button-addon2"
            >
              <BsSearch />
            </button>
          </div>
        </div>
      )}

      <div className="table-responsive  mx-3 ">
        <table className="table ">
          <thead className="container-cartera ">
            <tr className="">
              {head.map((item, index) => (
                <th
                  key={index}
                  className="select-DashboarRifas px-2"
                  scope="col"
                  style={item.width ? { width: item.width } : {}}
                >
                  {item.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {options.map((option: any, index: number) => (
              <Component
                actions={actions}
                key={index}
                option={option}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
