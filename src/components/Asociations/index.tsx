import React from "react";
import Tabs from "../Tab";
import RegistroCuenta from "../Registro/RegistroCuenta";
import CreateAsociation from "./CreateAsociation";
import SuccessAsociation from "./SuccessAsociation";

export default function Asoaciation() {
  const tabs = [
    { label: " Registro una AC", Component: CreateAsociation },
    { label: " Asociacion creada", Component: SuccessAsociation, active: true },
  ];

  return (
    <section className="">
      <Tabs tabs={tabs} />
    </section>
  );
}
