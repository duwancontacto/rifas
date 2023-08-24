import React from "react";
import fondo from "@/assets/img/fondoRifaActivas.svg";
import Image from "next/image";
import fondoRifasActivas from "@/assets/img/gal-microsite-apac2.jpg";
import { MdAccessTime } from "react-icons/md";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectRaffleState } from "@/store/slices/raffles";
import { RafflesI } from "@/types/Model/Raffle";

export default function RifasActivas({ href = "/rifas" }) {
  const router = useRouter();

  const { raffles } = useSelector(selectRaffleState);

  return (
    <div>
      <section className=" mx-3 mx-lg-5" style={{ marginBottom: "120px" }}>
        <div className="d-flex  m-0  ">
          <p className=" raffles-title lh-1 m-0">Rifas activas</p>

          <p
            className=" raffles-subtitle ms-4 mt-1  "
            onClick={() => router.push(`/rifas/allRifas`)}
            style={{ cursor: "pointer" }}
          >
            Ver todas las rifas
          </p>
        </div>
        <div className=" raffles-navbar d-flex flex-wrap fw-light my-3 ">
          <p className="me-5">Todas</p>
          <p className="me-5">Animales</p>
          <p className="me-5">Comunidad</p>
          <p className="me-5">Cultura</p>
          <p className="me-5">Deporte</p>
          <p className="me-5">Educacion</p>
          <p className="me-5">Emergencia</p>
          <p className="me-5">Salud</p>
          <p className="me-5">Sustentabilidad</p>
        </div>

        <div className="d-flex row m-0">
          {raffles.map((raffle: RafflesI, index: number) => (
            <div
              key={index}
              className="col-3 col-lg-2 shadow  p-0  mt-4 mt-md-0 me-3 me-lg-3  "
              style={{ maxWidth: "309px", width: "100%", height: "" }}
            >
              <Image src={fondoRifasActivas} className="w-100 h-50" alt="" />
              <div className="p-3">
                <h6 className="raffles-title-card  ">{raffle.name}</h6>
                <p className="card-text raffles-subtitle-card lh-sm">
                  {raffle.description}
                </p>

                <p className="card-text  raffles-subtitle-card  p-0  ">
                  <MdAccessTime size={20} className="mb-1 me-2 opacity-75 " />
                  20% 8,040.00 recaudado
                </p>
                <button
                  onClick={() => router.push(`/rifas/${raffle.id}`)}
                  className="btn fs-6 btn-pink w-100"
                >
                  Comprar boleto
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-5 ">
          <div className="circle-homeTestimonios border mx-2"></div>
          <div className="circle-homeTestimonios  bg-light  border mx-2"></div>
          <div className="circle-homeTestimonios  bg-light  border mx-2"></div>
          <div className="circle-homeTestimonios  bg-light  border mx-2"></div>
        </div>
      </section>

    </div>
  );
}
