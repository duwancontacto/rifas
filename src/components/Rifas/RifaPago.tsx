import React from "react";
import logoPaypal from "@/assets/img/paypal.svg";
import logoMercadoPago from "@/assets/img/mercadoPago.svg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import Image from "next/image";
import BuyTickes from "./BuyTickes";
import { useSelector } from "react-redux";
import { selectRaffleState } from "@/store/slices/raffles";

import { parseNumber } from "@/utils/ParseNumber";

import useTotalValue from "@/hooks/useTotalValue";
import useTimer from "@/hooks/useTimer";
export default function RifaPago({ nextStep, backStep }: any) {
  const { selectedPaymentMethod, selectedTickets } =
    useSelector(selectRaffleState);

  const Icon =
    selectedPaymentMethod === "paypal" ? logoPaypal : logoMercadoPago;

  const { totalPay } = useTotalValue();
  const { displayTime } = useTimer();

  return (
    <div className="d-block justify-content-center d-lg-flex  mt-5 mx-3 mx-lg-0   ">
      <div className=" col-12 col-lg-6  ">
        <BuyTickes />
      </div>
      <div className="col-lg-6 col-12 pt-5 pt-lg-0  ms-0 mx-lg-3  ">
        <p className=" donaciones-title">3 / 3 Efectua el pago</p>
        <p className="subtitle-boletosaRifa m-0">Confirma y paga tus boletos</p>
        <div className="d-flex text-secondary  mt-3 ">
          <p className="m-0 ">Paga con: </p>
          {selectedPaymentMethod ? (
            <Image src={Icon} alt="" className="ms-2" />
          ) : (
            <div className="ps-1 ">Billetera</div>
          )}
        </div>
        <div className=" border-bottom my-2 w-100"></div>

        <div className="row  mt-3 m-2  ">
          <div className="col-6">
            <p className=" subtitle-boletosaRifa ">Total a pagar</p>
            <p className="value-boletosRifas ">$ {parseNumber(totalPay)}</p>
          </div>
          <div className="col-6">
            <p className="subtitle-boletosaRifa">
              Boletos selecionados: {selectedTickets.length}
            </p>
            <ul className="flex-wrap d-flex  rounded list-unstyled   ">
              {selectedTickets.map((ticketNumber) => (
                <li
                  className="raffle-container raffle-container-success"
                  style={{ cursor: "pointer" }}
                  key={ticketNumber}
                >
                  <div className="lh-sm  border-1 border rounded-1 text-center raffle-box raffle-box-success ">
                    {ticketNumber}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="boletos m-0 d-flex">
          Boletos reservados por:{" "}
          <p className="time-boletos">{displayTime} min</p>
        </p>

        <div className="d-flex justify-content-between mt-4   ">
          <button
            className="btn btn-border-pink btn-sm px-2 rounded-2 fw-fw-semibold  "
            onClick={() => backStep()}
          >
            {" "}
            <AiOutlineArrowLeft /> Regresar
          </button>
          <button
            className="btn btn-pink btn-sm px-2 rounded-2 "
            onClick={() => nextStep()}
          >
            {" "}
            Proceder al pago <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
