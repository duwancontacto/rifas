import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { useDispatch, useSelector } from "react-redux";
import { Auth } from "@/types/Model/Profile";
import { Login, selectAuthState } from "@/store/slices/auth";

export default function ModalPremio({ showPrice, handleCloseCPrice }: any) {
    const dispatch = useDispatch();
    const { loading } = useSelector(selectAuthState);
    const fields: Field[] = [
        {
            label: " ¿Cuál es el nombre del premio?*",
            name: "name-price",
            required: true,
            type: "text",
        },
        {
            label: "¿Cuál es la descripción del  premio?*",
            name: "price-description",
            required: true,
            type: "textarea",
        },
        {
            label: "¿Qué categoría describe tu producto?*",
            name: "price-category",
            required: true,
            type: "select",
        },
        {
            label: "¿Cuál es el precio de tu producto (pesos MXN)?*",
            name: "product-price",
            required: true,
            type: "number",
        },
        {
            label: "¿Cuál es la condición de tu producto?*",
            name: "product_conditionpremio",
            required: true,
            type: "radioButton",
            options: [
                { label: "Nuevo", value: "nuevo" },
                { label: "Usado", value: "usado" },
            ],
        },
        {
            label: "Agrega las fotos de tu premio",
            name: "product_files",
            required: false,
            type: "file",
        },
    ];

    const submitData = async (data: Auth) => {
        const { payload } = await dispatch(Login(data) as any);
        if (payload) handleCloseCPrice();
    };
    return (
        <Modal show={showPrice} onHide={handleCloseCPrice} className="custom-modal ">
            <Modal.Body className="px-4">
                <Modal.Header><h4 className="text-dark">Donar premio</h4></Modal.Header>
                <div style={{ cursor: "pointer" }} className="fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2" onClick={handleCloseCPrice}> X</div>
                <div className="mt-4">
                    <FormGenerator
                        /*    buttonText="Iniciar sesion" */

                        fields={fields}
                        submitData={submitData}
                        loading={loading}

                        renderButton={() =>


                            <section className="row w-100 mx-auto mt-5   ">
                                <div className="border-bottom  border border-dark opacity-50 w-100 "></div>
                                <div className="d-flex justify-content-end mt-3">
                                    <div className="col-3 p-0 pe-2   ">
                                        <Button
                                            disabled={loading}
                                            variant="secondary"
                                            onClick={handleCloseCPrice}
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
                                            className="w-100 btn btn-danger"
                                        >

                                            Guardar causa
                                        </Button>
                                    </div>
                                </div>



                            </section>}

                    />
                </div>



            </Modal.Body>
        </Modal>
    )
}