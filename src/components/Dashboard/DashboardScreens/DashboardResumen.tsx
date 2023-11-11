import React, { useEffect } from "react";
import {
  AiOutlineMenu,
  AiFillDollarCircle,
  AiOutlineUser,
} from "react-icons/ai";

import { FaWallet } from "react-icons/fa";
import { FaHandHoldingHeart, FaGift, FaUsers } from "react-icons/fa";
import { BsWindowSidebar } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/router";
import { useAsociatonsStoreDashboard } from "@/store/zustand/DashboardStore";
import HeaderDashboard from "../Components/HeaderDashboard";
export default function DashboardResumen({ setShowScreen }: any) {
  const router = useRouter();
  const getResumen = useAsociatonsStoreDashboard((state) => state.getResumen);
  const resumen = useAsociatonsStoreDashboard((state) => state.resumen);

  const associations = useAsociatonsStoreDashboard(
    (state) => state.asociations
  );

  useEffect(() => {
    getResumen(router.query.id as string);
  }, []);

  const filterAssociation = associations.find(
    (association) => association.id === Number(router.query.id)
  );

  const associationName = filterAssociation?.association_name;
  return (
    <section className="">
      <HeaderDashboard screen="Resumen" />

      <div className="row m-0 d-flex flex-wrap mt-3 background-dashboard  py-2">
        <div className="container-resumen col-9 col-md-3 mx-4 my-2 text-center py-3">
          <AiFillDollarCircle color="#784B5F" size={30} />
          <p className="title-resumen m-0">Rifas</p>
          <p className="informationRaffle-resumen m-0 mb-2 ">
            {resumen.raffles} creadas
          </p>
          <button
            onClick={() => {
              setShowScreen(2);
            }}
            className="button-Resumen p-2 px-3 m-0"
          >
            Ver Rifas
          </button>
        </div>
        <div className="container-resumen col-9 col-md-3 mx-4 my-2 text-center py-3">
          <FaHandHoldingHeart color="#784B5F" size={30} />
          <p className="title-resumen m-0">Causas</p>
          <p className="informationRaffle-resumen m-0 mb-2 ">
            {resumen.causes} creadas
          </p>
          <button
            onClick={() => {
              setShowScreen(3);
            }}
            className="button-Resumen p-2 px-3 m-0"
          >
            Ver Causas
          </button>
        </div>
        <div className="container-resumen col-9 col-md-3 mx-4 my-2 text-center py-3">
          <FaGift color="#784B5F" size={30} />
          <p className="title-resumen m-0">Premios</p>
          <p className="informationRaffle-resumen m-0 mb-2 ">
            {resumen.prizes} creadas
          </p>
          <button
            onClick={() => {
              setShowScreen(4);
            }}
            className="button-Resumen p-2 px-3 m-0"
          >
            Ver Premios
          </button>
        </div>
        <div className="container-resumen col-9 col-md-3 mx-4 my-2 text-center py-3">
          <FaWallet color="#784B5F" size={30} />
          <p className="title-resumen m-0">Cartera</p>
          <p className="informationRaffle-resumen m-0 mb-2 ">
            {resumen.raffles} creadas
          </p>
          <button
            onClick={() => {
              setShowScreen(5);
            }}
            className="button-Resumen p-2 px-3 m-0"
          >
            Ver Cartera
          </button>
        </div>
        <div className="container-resumen col-9 col-md-3 mx-4 my-2 text-center py-3">
          <BsWindowSidebar color="#784B5F" size={30} />
          <p className="title-resumen m-0">Micrositios</p>
          <p className="informationRaffle-resumen m-0 mb-2 ">
            {associationName}
          </p>
          <button
            onClick={() => {
              setShowScreen(6);
            }}
            className="button-Resumen p-2 px-3 m-0"
          >
            Ver Micrositio
          </button>
        </div>
        <div className="container-resumen col-9 col-md-3 mx-4 my-2 text-center py-3">
          <FaUsers color="#784B5F" size={30} />
          <p className="title-resumen m-0">Usuarios</p>
          <p className="informationRaffle-resumen m-0 mb-2 ">
            {resumen.users} usuarios
          </p>
          <button
            onClick={() => {
              setShowScreen(7);
            }}
            className="button-Resumen p-2 px-3 m-0"
          >
            Ver usuarios
          </button>
        </div>
        <div className="container-resumen col-9 col-md-3 mx-4 my-2 text-center py-3">
          <AiOutlineUser color="#784B5F" size={30} />
          <p className="title-resumen m-0">Mi perfil</p>
          <p className="informationRaffle-resumen m-0 mb-2 ">
            {associationName}
          </p>
          <button
            onClick={() => {
              setShowScreen(8);
            }}
            className="button-Resumen p-2 px-3 m-0"
          >
            Ver perfil
          </button>
        </div>
      </div>
    </section>
  );
}
