import React from "react";
import RegistroSucessfull from "./RegistroSucessfull";
import Tabs from "../Tab";
import RegistroCuenta from "./RegistroCuenta";
import CreateRifa from "./CreateRifa";
import SuccessRaffle from "../Rifas/SuccessRaffle";

export default function CrearRifaRegistro() {
  const tabs = [
    {
      label: " Cuenta Completada",
      Component: RegistroSucessfull,
      active: true,
    },
    { label: " Registro una AC", Component: RegistroCuenta },
    { label: " Crear rifa", Component: CreateRifa },
    { label: " Rifa enviada", Component: SuccessRaffle, active: true },
  ];

  return (
    <section>
      <Tabs tabs={tabs} />
    </section>
  );
}
