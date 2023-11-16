import React from "react";
import { Modal } from "react-bootstrap";
import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { Profile } from "@/types/Model/Profile";
import { useSelector } from "react-redux";
import { selectRaffleState } from "@/store/slices/raffles";
import { usePrizeStoreDashboard } from "@/store/zustand/PrizesDashboardStore";
import { useRouter } from "next/router";

export default function ModalEditRafflePremio({
  show,
  setShow,
  handleReset,
  associations,
}: any) {
  const { loading } = useSelector(selectRaffleState);
  const router = useRouter();
  const updatePrize = usePrizeStoreDashboard((state) => state.updatePrize);
  const { prizesCategories } = useSelector(selectRaffleState);

  const submitData = async (data: Profile) => {
    const result = await updatePrize(show.id, data, show);
    setShow(false);
    handleReset(result);
  };
  const gallery =
    show?.images && show?.images?.length > 0
      ? show?.images?.map((image: any) => image.file)
      : [];

  const fields: Field[] = [
    {
      label: " ¿Cuál es el nombre del premio?",
      name: "name",
      required: true,
      type: "text",
      default: show?.name,
    },
    {
      label: "¿Cuál es la descripción del  premio?*",
      name: "description",
      required: true,
      type: "textarea",
      default: show?.description,
    },
    {
      label: "¿Qué categoría describe tu producto?*",
      name: "category",
      required: true,
      type: "select",
      options: prizesCategories.map((prize) => ({
        label: prize.name,
        value: prize.id,
      })),
      default: show?.categories ? show?.categories[0] : show?.category,
    },
    {
      label: "¿Cuál es el precio de tu producto (pesos MXN)?*",
      name: "value",
      required: true,
      type: "number",
      default: show?.value,
    },
    {
      label: "¿Quieres asignar tu premio a alguna Asociación?",
      name: "association",
      required: false,
      type: "select",
      options: associations.map((association: any) => ({
        label: association.association_name,
        value: association.id,
      })),
      default: show?.association,
    },
    {
      label: "¿Cuál es la condición de tu producto?*",
      name: "status",
      required: true,
      type: "radioButton",
      options: [
        { label: "Nuevo", value: "nuevo" },
        { label: "Usado", value: "usado" },
      ],
      default: "nuevo",
    },
    {
      label: "Agrega las fotos de tu premio",
      name: "image",
      required: false,
      type: "file",
      default: [...gallery],
    },
  ];
  return (
    <>
      {show ? (
        <div>
          <Modal
            className="custom-modal"
            show={show}
            setShowScreen={() => setShow(false)}
          >
            <Modal.Body className="px-4">
              <div className="m-auto mb-4">
                <h4 className="text-secondary text-center m-0">
                  Editar Premio
                </h4>
              </div>
              <div
                style={{ cursor: "pointer" }}
                className="fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2"
                onClick={() => setShow(false)}
              >
                X
              </div>
              <FormGenerator
                buttonText="Guardar Causa"
                fields={fields}
                submitData={submitData}
                renderButton={(handleSubmit) => {
                  return (
                    <>
                      <button
                        className="btn btn-pink w-100 my-4"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSubmit();
                        }}
                      >
                        Guardar Premio
                      </button>
                    </>
                  );
                }}
              />
            </Modal.Body>
          </Modal>
        </div>
      ) : null}
    </>
  );
}
