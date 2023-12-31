import React, { use } from "react";

import { BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectRaffleState } from "@/store/slices/raffles";
import { parseNumber } from "@/utils/ParseNumber";
import PercentChart from "../Chart/PercentChart";

import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  WhatsappShareButton,
} from "react-share";

export default function BuyTickes() {
  const { raffle } = useSelector(selectRaffleState);

  const meta = Number(raffle?.ticket_number) * Number(raffle?.ticket_price);
  const raisedPercent = ((raffle?.raised || 0) * 100) / meta;

  const shareUrl = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/rifas/detalles/${raffle?.id}`;
  const title = raffle?.name;

  return (
    <div className="text-secondary position-relative   col-12 ">
      {raffle?.image && (
        <Image
          width={100}
          height={100}
          src={raffle?.image}
          alt="fondotickes"
          className=" fondo-buy-tickes  "
        />
      )}

      <div className="p-3" style={{ background: "rgba(0,0,0,0.5)" }}>
        <p className="title-buyTickes ">{raffle?.name}</p>
        <p className=" title-buyTickes ">Recaudado</p>
        <div className="d-flex container-butTickes lh-1">
          <PercentChart percentage={raisedPercent} />
          <p className="  fs-3 fw-bold ">{raisedPercent}%</p>
          <p className="fs-3 mx-4 fw-bold ">
            {" "}
            $ {parseNumber(raffle?.raised || 0)}
          </p>
        </div>
        <p className=" title-buyTickes position-relative z-3 lh-1 ">
          La meta es de {parseNumber(meta)} MXN
        </p>

        <div className=" border-bottom my-1 position-relative z-3 "></div>
        <div className="d-flex  text-start me-3   ">
          <div className="mx-4">
            <h6 className="position-relative z-3 container-costoBoletos">
              Costo por boleto
            </h6>
            <p className="position-relative z-3 container-value-buyTickes">
              {" "}
              ${parseNumber(Number(raffle?.ticket_price)) || ""}
            </p>
          </div>
          <div className="mx-5">
            <h6 className="position-relative z-3 container-costoBoletos">
              Numero de boleto
            </h6>
            <p className="position-relative z-3 container-value-buyTickes">
              {raffle?.ticket_number || ""}
            </p>
          </div>
        </div>
        <p className="share-buyTickes m-0 lh-lg ">Compartir</p>
        <FacebookShareButton
          url={shareUrl}
          quote={title}
          className="Demo__some-network__share-button"
        >
          <BsFacebook
            color=" #FFFFFF"
            size={25}
            className="mx- position-relative 2"
          />
        </FacebookShareButton>

        <TwitterShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button"
        >
          <BsTwitter
            color=" #FFFFFF"
            size={25}
            className="mx-2  position-relative "
          />
        </TwitterShareButton>

        <EmailShareButton
          url={shareUrl}
          subject={title}
          body="body"
          className="Demo__some-network__share-button"
        >
          <MdEmail
            color=" #FFFFFF"
            size={25}
            className="mx-2  position-relative "
          />
        </EmailShareButton>

        <WhatsappShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button"
        >
          <BsWhatsapp
            color=" #FFFFFF"
            size={25}
            className="mx-2  position-relative "
          />
        </WhatsappShareButton>
      </div>
    </div>
  );
}
