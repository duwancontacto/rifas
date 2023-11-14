import LogoRifas from "@/assets/img/logoRifas.jpeg";
import { useCausesStore } from "@/store/zustand/CausesStore";
import { usePremioStore } from "@/store/zustand/PremioStore";
import { SelectedItems } from "@/types/Component/FormGenerator";
import { parseNumber } from "@/utils/ParseNumber";
import Image from "next/image";

interface Props {
  selectedItem: SelectedItems;
  setSelected: any;
  resetValue?: any;
  handleSelect: any;
  handleShow: any;
}

export const Cause = ({
  selectedItem,
  resetValue,
  handleSelect,
  handleShow,
}: Props) => {
  const createdCauses = useCausesStore((state) => state.createdCauses);

  const findPrize = createdCauses.find((prize) => prize === selectedItem.id);

  console.log("TEst", findPrize);
  return (
    <div>
      <p className="m-0 mt-2">Causa seleccionada</p>
      <div className="d-flex mt-2  ">
        <Image
          src={selectedItem.image || LogoRifas}
          alt="logorifas"
          width={150}
          height={150}
          style={{ objectFit: "contain" }}
          className="rounded"
        />
        <div className="ms-3">
          <h6 className="lh-1  fw-bold">{selectedItem.name}</h6>
          <p className="m-0 lh-sm">{selectedItem?.description}</p>
          <p className="m-0 lh-sm pt-1">
            Monto a recaudar:{" "}
            <span className="fw-bold">${parseNumber(selectedItem?.goal)}</span>
          </p>

          <button
            className="btn btn-pink  mt-3  mb-4"
            onClick={(e) => {
              e.preventDefault();
              resetValue();
              handleSelect(e);
            }}
          >
            Cambiar causa
          </button>
          <button
            className="btn btn-outline-pink  mt-3 ms-2  mb-4"
            onClick={(e) => {
              e.preventDefault();
              resetValue();
              handleShow(e);
            }}
          >
            Crear nueva Causa
          </button>
          {findPrize && (
            <button
              className="btn btn-outline-pink  mt-3 ms-2  mb-4"
              onClick={(e) => {
                e.preventDefault();
                // resetValue();
                handleShow(e, selectedItem);
              }}
            >
              Editar Causa
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export const Prize = ({
  selectedItem,
  resetValue,
  handleSelect,
  handleShow,
}: Props) => {
  const createdPrizes = usePremioStore((state) => state.createdPrizes);

  const findPrize = createdPrizes.find((prize) => prize === selectedItem.id);
  return (
    <div>
      <p className="m-0 mt-2">Premio seleccionado</p>
      <div className="d-flex mt-2  ">
        <Image
          src={selectedItem.image || LogoRifas}
          alt="logorifas2"
          width={150}
          height={150}
          style={{ objectFit: "contain" }}
          className="rounded"
        />
        <div className="ms-3">
          <h6 className="lh-1 fw-bold ">{selectedItem.name}</h6>
          <p className="m-0 lh-sm">{selectedItem?.description}</p>
          <p className="m-0 lh-sm pt-1">
            Valor del premio:{" "}
            <span className="fw-bold">
              ${parseNumber(Number(selectedItem?.value))}
            </span>
          </p>

          <button
            className="btn btn-pink  mt-3  mb-4"
            onClick={(e) => {
              e.preventDefault();
              resetValue();
              handleSelect(e);
            }}
          >
            Cambiar premio
          </button>
          <button
            className="btn btn-outline-pink  mt-3 ms-2 mb-4"
            onClick={(e) => {
              e.preventDefault();
              resetValue();
              handleShow(e);
            }}
          >
            Crear nuevo Premio
          </button>
          {findPrize && (
            <button
              className="btn btn-outline-pink  mt-3 ms-2 mb-4"
              onClick={(e) => {
                e.preventDefault();
                resetValue();
                handleShow(e, selectedItem);
              }}
            >
              Editar Premio
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
