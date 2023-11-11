import Image from "next/image";
import React from "react";
import Layout from "@/components/Layout";
import fondoRegistro from "@/assets/img/fondoRegistro.png";
import Asoaciation from "@/components/Asociations";
export default function CrearAsociacion() {
  return (
    <>
      <Image
        src={fondoRegistro}
        alt="fondoRifaDescriptions"
        className="img-fluid position-absolute start-0  fondoRifaDescriptions "
        style={{ top: 150 }}
      />
      <Layout>
        <Asoaciation />
      </Layout>
    </>
  );
}
