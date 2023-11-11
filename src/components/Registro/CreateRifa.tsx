import React, { useEffect, useState } from "react";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import { HiOutlineClipboardList } from "react-icons/hi";
import { FaHandHoldingHeart } from "react-icons/fa";

import ConfiguraRifa from "../Rifas/ConfiguraRifa";
import DefinicionRifa from "../Rifas/DefinicionRifa";
import ConfirmacionRifa from "../Rifas/ConfirmacionRifa";
import { useDispatch, useSelector } from "react-redux";
import { createRaffle } from "@/store/slices/raffles";
import { RafflesI } from "@/types/Model/Raffle";
import { selectAuthState } from "@/store/slices/auth";
import CreateAsociacion from "./CrearAsociacion";
import { useRouter } from "next/router";
import { usePremioStore } from "@/store/zustand/PremioStore";
<div></div>;

const StepIcon = (step: number, currentStep: number) => {
  if (step === currentStep) return <MdKeyboardArrowUp size={30} />;
  return <MdKeyboardArrowDown size={30} />;
};

export default function CreateRifa({ nextStep, backStep, disable }: any) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [raffle, setRaffle] = useState({});

  const getPremio = usePremioStore((state) => state.getPremio);

  const dispatch = useDispatch();
  const { profile } = useSelector(selectAuthState);
  const canCreateRaffle = profile?.role === 1;

  const handleChangeRaffle = (data: any) => {
    setRaffle({ ...raffle, ...data });
    setStep((prev) => prev + 1);
  };

  const handleSubmit = async () => {
    const { payload } = await dispatch(createRaffle(raffle as RafflesI) as any);

    if (!payload) return setStep(1);

    getPremio(1);
    nextStep();
  };

  const resetRaffle = () => {
    setStep(1);
    setRaffle({});
  };

  if (!canCreateRaffle && !disable) return <CreateAsociacion />;

  return (
    <div className="mx-4">
      <h2 className="title-page-rifaRegistro my-4">
        ¡Es momento de rifarnos {profile?.full_name}!
      </h2>

      <div className="  bg-white mb-3 col-12 col-lg-8 m-auto  ">
        <div
          className=" d-flex justify-content-between align-items-center    "
          onClick={() => {}}
        >
          <button
            onClick={() => step > 1 && setStep(1)}
            className={` fs-4 text-light  fondo-crear-rifa  d-flex justify-content-between align-item-center  ${
              step === 1 ? " opacity-50 " : " opacity-100  "
            }`}
          >
            <div className="text-fondo-container">
              <AiFillDollarCircle size={25} className="me-2" />
              Configura el premio tu rifa
            </div>
            <div className="m-0">{StepIcon(step, 1)}</div>
          </button>
        </div>
        <div className={`${step !== 1 && "d-none"}`}>
          <ConfiguraRifa handleChangeRaffle={handleChangeRaffle} />
        </div>

        <div className=" d-flex justify-content-between align-items-center  mt-4  ">
          <button
            onClick={() => step > 2 && setStep(2)}
            className={` fs-4  text-light fondo-crear-rifa d-flex justify-content-between align-item-center ${
              step === 2 ? " opacity-50 " : " opacity-100  "
            }`}
          >
            <div>
              <HiOutlineClipboardList /> Define los datos de tu rifa
            </div>
            <div className="m-0">{StepIcon(step, 2)}</div>
          </button>
        </div>

        <div className={`${step !== 2 && "d-none"}`}>
          <DefinicionRifa handleChangeRaffle={handleChangeRaffle} />
        </div>

        <div className=" d-flex justify-content-around align-items-center   mt-4   ">
          <button
            className={` fs-4 text-light fondo-crear-rifa d-flex justify-content-between align-item-center ${
              step === 3 ? " opacity-50 " : " opacity-100  "
            }`}
          >
            <div>
              <FaHandHoldingHeart /> Confirmación de la rifa
            </div>
            <div className="m-0">{StepIcon(step, 3)}</div>
          </button>
        </div>

        <div className={`${step !== 3 && "d-none"}`}>
          <ConfirmacionRifa
            handleSubmit={handleSubmit}
            resetRaffle={resetRaffle}
            raffle={raffle}
          />
        </div>
      </div>
    </div>
  );
}
