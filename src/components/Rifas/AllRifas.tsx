import React from "react";
import { AiFillCamera, AiFillDelete, AiFillCloseCircle } from "react-icons/ai";
import fondoAllRifas from "@/assets/img/gal-microsite-apac1.jpg";
import historiasFondo from "@/assets/img/gente-rifada.png";
import Image from "next/image";
import Rifa from "./Rifa";
import RifasActivas from "./RifasActivas";

export default function AllRifas() {
  return (
    <div className="pt-2">
      <div className="d-block d-lg-flex px-2 justify-content-center container-AllRifas   ">
        <div className=" col-12 col-lg-5  mt-5 mx-2 mx-lg-0">
          <p className=" title-AllRifas mt-5 mt-lg-4 lh-1 ">¡Rífate! </p>
          <p className="subtitle-AllRifas lh-1"> Y súmate con amor</p>
          <p className="text-AllRifas m-0 lh-2">
            Aquí encontraras las historias con las que te puedes rifar!
          </p>
        </div>
        <div className="mx-0 mx-lg-5 mt-2 col-12 col-lg-5 ">
          <Image
            src={historiasFondo}
            alt="fondoAllrifas"
            className="w-100 h-100 "
          />
        </div>
      </div>
      <Rifa all />
      <RifasActivas all />
    </div>
  );
}
