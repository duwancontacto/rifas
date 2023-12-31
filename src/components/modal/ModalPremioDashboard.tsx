import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { useDispatch, useSelector } from "react-redux";
import { createRafflesPrize, selectRaffleState } from "@/store/slices/raffles";
import ModalSelectPremio from "./ModalSelectPremio";
import { useAsociatonsStoreDashboard } from "@/store/zustand/DashboardStore";

export default function ModalPremioDashboard({
  showScreen,
  handleClose,
  handleSubmit,
  activeSelect,
  setShowScreen,
}: any) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { prizesCategories } = useSelector(selectRaffleState);
  const associations = useAsociatonsStoreDashboard(
    (state) => state.asociations
  );
  const fields: Field[] = [
    {
      label: " ¿Cuál es el nombre del premio?",
      name: "name",
      required: true,
      type: "text",
    },
    {
      label: "¿Cuál es la descripción del  premio?*",
      name: "description",
      required: true,
      type: "textarea",
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
    },
    {
      label: "¿Cuál es el precio de tu producto (pesos MXN)?*",
      name: "value",
      required: true,
      type: "number",
    },
    {
      label: "¿Quieres asignar tu premio a alguna Asociación?",
      name: "association",
      required: false,
      type: "select",
      options: associations.map((association) => ({
        label: association.association_name,
        value: association.id,
      })),
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
    },
    {
      label: "Agrega las fotos de tu premio",
      name: "image",
      required: false,
      type: "file",
    },
  ];

  const submitData = async (data: any) => {
    setLoading(true);
    const { payload } = await dispatch(createRafflesPrize(data) as any);
    if (payload) {
      return handleSubmit({
        type: "prize",
        ...payload,
      });
    }
    setLoading(false);
  };
  return (
    <section>
      <Modal show={showScreen} onHide={handleClose} className="custom-modal ">
        <Modal.Body className="px-4">
          <Modal.Header>
            {!activeSelect && <h4 className="title-Modal">Donar premio</h4>}
            {activeSelect && (
              <h4 className="title-Modal">Seleccionar premio</h4>
            )}
          </Modal.Header>
          <div
            style={{ cursor: "pointer" }}
            className="fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2"
            onClick={handleClose}
          >
            X
          </div>
          {!activeSelect && (
            <div className="mt-4">
              <FormGenerator
                fields={fields}
                submitData={submitData}
                loading={loading}
                renderButton={(handleSend) => (
                  <section className="row w-100 mx-auto mt-5   ">
                    <div className="border-bottom  border border-dark opacity-50 w-100 "></div>
                    <div className="d-flex justify-content-end mt-3">
                      <div className="col-3 p-0 pe-2   ">
                        <Button
                          disabled={loading}
                          variant="secondary"
                          onClick={handleClose}
                          className="w-100 text-dark bg-light"
                        >
                          Cerrar
                        </Button>
                      </div>
                      <div className="col-4 p-0 ps-2 ">
                        <Button
                          disabled={loading}
                          variant="secondary"
                          type="submit"
                          className="w-100 btn btn-pink"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSend();
                          }}
                        >
                          Guardar premio
                        </Button>
                      </div>
                    </div>
                  </section>
                )}
              />
            </div>
          )}

          {activeSelect && <ModalSelectPremio handleSubmit={handleSubmit} />}
        </Modal.Body>
      </Modal>
    </section>
  );
}
