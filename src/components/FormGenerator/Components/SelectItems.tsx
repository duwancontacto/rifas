import LogoRifas from "@/assets/img/logoRifas.svg";
import { SelectedItems } from "@/types/Component/FormGenerator";
import { parseNumber } from "@/utils/ParseNumber";
import Image from "next/image";

interface Props {
  selectedItem: SelectedItems;
  setSelected: any;
}

export const Cause = ({ selectedItem, setSelected }: Props) => {
  return (
    <div>
      <p className="m-0 mt-2">Causa seleccionada</p>
      <div className="d-flex mt-2  ">
        <Image src={LogoRifas} alt="logorifas" className="me-4" />
        <div>
          <h6 className="lh-1  fw-bold">{selectedItem.name}</h6>
          <p className="m-0 lh-sm">{selectedItem?.description}</p>
          <p className="m-0 lh-sm pt-1">
            Monto a recaudar:{" "}
            <span className="fw-bold">${parseNumber(selectedItem?.goal)}</span>
          </p>

          <button
            className="btn btn-light  mt-3  mb-4"
            onClick={(e) => {
              e.preventDefault();
              setSelected(null);
            }}
          >
            Cambiar causa
          </button>
        </div>
      </div>
    </div>
  );
};

export const Prize = ({ selectedItem }: Props) => {
  console.log("first", selectedItem);
  return (
    <div>
      <p className="m-0 mt-2">Premio seleccionado</p>
      <div className="d-flex mt-2  ">
        <Image src={LogoRifas} alt="logorifas" className="me-4 " />
        <div className=" ">
          <h6 className="lh-1 fw-bold ">{selectedItem.name}</h6>
          <p className="m-0 lh-sm">{selectedItem?.description}</p>
          <p className="m-0 lh-sm pt-1">
            Monto a recaudar:{" "}
            <span className="fw-bold">
              ${parseNumber(Number(selectedItem?.value))}
            </span>
          </p>

          <button
            className="btn btn-light  mt-3  mb-4"
            onClick={() => {
              //setprize(null);
            }}
          >
            Cambiar premio
          </button>
        </div>
      </div>
    </div>
  );
};