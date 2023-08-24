import React, { useState } from "react";
import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { useDispatch, useSelector } from "react-redux";
import { Register, selectAuthState } from "@/store/slices/auth";
import { Profile } from "@/types/Model/Profile";

import { LoginWithGoogle } from "../Login/LoginWithGoogle";
import LoginWithFacebook from "../Login/LoginWithFacebook";

export default function CreateAccount({ nextStep }: any) {
  const { loading } = useSelector(selectAuthState);

  const dispatch = useDispatch();
  const submitData = async (data: Profile) => {
    const { payload } = await dispatch(Register(data) as any);

    if (payload) {
      nextStep();
    }
  };

  const fields: Field[] = [
    {
      label: "Nombre completo",
      name: "full_name",
      required: true,
      type: "text",
    },
    {
      label: "Correo electronico",
      name: "email",
      required: true,
      type: "text",
    },
    { label: "Empresa (Opcional)", name: "company_name", type: "text" },
    { label: "Contraseña", name: "password", required: true, type: "password" },
    {
      label: "Confirmar Contraseña",
      name: "confirmarContrasena",
      required: true,
      type: "password",
    },
    {
      label: "He leido y aceptado los terminos",
      name: "accepted",
      required: true,
      type: "checkbox",
    },
  ];

  return (
    <section className="text-secondary row">
      <div className="col-md-8  col-12 mx-auto mt-5">
        <h2 className="text-center title-CreateAccount mx-md-5 ">
          Para comenzar a rifarte necesitas crear una cuenta.
        </h2>
        <h2 className="text-center title-CreateAccount mx-md-5 ">
          {" "}
          Crear una cuenta.
        </h2>
        <p className="text-center text-CreateAccount mt-3 mx-md-5">
          Es necesario crear una cuenta para apoyar alguna rifa, donar un premio
          o si eres una asociación y quieres crear tus rifas.
        </p>
      </div>
      <div
        className="  my-3 text-secondary shadow rounded mx-auto px-5"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <p className=" text-center title-registro-CreateAcount my-3 ">
          Registra tu cuenta
        </p>
        <FormGenerator
          buttonText="Registrar"
          submitData={submitData}
          fields={fields}
          loading={loading}
        />

        <div className="d-grid gap-2 col-12 mx-auto ">
          <p className="text-center fw-bold ">
            O registrate con tus redes sociales
          </p>

          <div className="col-12 mx-auto d-flex justify-content-around  mb-4">
            <LoginWithFacebook />

            <div>
              <LoginWithGoogle handleClose={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
