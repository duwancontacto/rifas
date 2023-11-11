import React, { Component } from "react";
import fondo from "@/assets/img/fondoRifaActivas.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import fondoRifasActivas from "@/assets/img/gal-microsite-apac2.jpg";
import { MdAccessTime } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import LogoRifas from "@/assets/img/logoRifas.jpeg";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectRaffleState } from "@/store/slices/raffles";
import { RafflesI } from "@/types/Model/Raffle";
import { parseNumber } from "@/utils/ParseNumber";
import { truncateText } from "@/utils/truncateText";

export default function RifasActivas({ all }: { all?: boolean }) {
  const slider = React.useRef<any>(null);
  const { raffles, causesCategories } = useSelector(selectRaffleState);
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = React.useState<any>(null);
  const settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  let filterRaffles = raffles.filter(
    (raffle) =>
      (!selectedCategory || raffle.categories[0].id === selectedCategory) &&
      raffle.status === 1
  );

  const getPercetRaised = (raffle: RafflesI) => {
    const meta = Number(raffle?.ticket_number) * Number(raffle?.ticket_price);
    const raisedPercent = ((raffle?.raised || 0) * 100) / meta;
    return raisedPercent.toFixed(2);
  };

  return (
    <div className="mt-3 mx-3 mx-lg-0  ">
      <section
        className={` mx-3 ${!all && "mx-lg-5"} `}
        style={{ marginBottom: "120px" }}
      >
        <div className="d-flex  m-0  ">
          <p className=" raffles-title lh-1 m-0">Rifas activas</p>

          {!all && (
            <p
              className=" raffles-subtitle ms-4 mt-1  "
              onClick={() => router.push(`/rifas`)}
              style={{ cursor: "pointer" }}
            >
              Ver todas las rifas
            </p>
          )}
        </div>
        <div className=" raffles-navbar d-flex flex-wrap fw-light my-3 ">
          <p
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedCategory(null)}
            className="me-5"
          >
            Todas
          </p>
          {causesCategories?.map((category, index) => (
            <p
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedCategory(category.id)}
              key={index}
              className="me-5"
            >
              {category.name}
            </p>
          ))}
        </div>

        {all ? (
          <div className="d-flex flex-wrap justify-content-between ">
            {filterRaffles.map((raffle: RafflesI, index: number) => (
              <div
                key={index}
                className="col-3 col-lg-3  mt-4  mx-0 shadow card-raffle"
                style={{ maxWidth: "309px", width: "100%", height: "100%" }}
              >
                <Image
                  width={100}
                  height={100}
                  src={raffle.image || LogoRifas}
                  className="w-100 h-100"
                  style={{ maxHeight: "200px", objectFit: "contain" }}
                  alt=""
                />
                <div className="p-3 px-3">
                  <h6 className="raffles-title-card  ">
                    {" "}
                    {truncateText(raffle.name, 40)}
                  </h6>
                  <p className="card-text raffles-subtitle-card lh-sm">
                    {truncateText(raffle.description, 70)}
                  </p>

                  <p className="card-text  raffles-subtitle-card  p-0  ">
                    <MdAccessTime size={20} className="mb-1 me-2 opacity-75 " />
                    {getPercetRaised(raffle)}%{" "}
                    {parseNumber(raffle?.raised || 0)} recaudado
                  </p>
                  <button
                    disabled={Number(getPercetRaised(raffle)) === 100}
                    onClick={() => router.push(`/rifas/${raffle.id}`)}
                    className="btn fs-6 btn-pink w-100"
                  >
                    Comprar boleto
                  </button>

                  <button
                    className="btn fs-6 btn-border-pink w-100 mt-2"
                    onClick={() => router.push(`/rifas/detalles/${raffle.id}`)}
                  >
                    Ver detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="px-2 px-md-5 position-relative  ">
            <button
              className="position-absolute  buttonPrevious-RifasActivas "
              onClick={() => {
                slider?.current?.slickPrev();
              }}
            >
              <IoIosArrowBack color="#C3286D" className="iconPreviousNext" />
            </button>
            <Slider ref={slider} {...settings} className="  ">
              {filterRaffles.map((raffle: RafflesI, index: number) => (
                <div
                  key={index}
                  className="slide-container-raffle mt-4 mt-md-0 py-3"
                >
                  <div className="mx-2 shadow card-raffle-slide">
                    <Image
                      width={100}
                      height={100}
                      src={raffle.image || LogoRifas}
                      className="w-100 h-100"
                      style={{ maxHeight: "200px", objectFit: "contain" }}
                      alt=""
                    />
                    <div className="p-3 px-3">
                      <h6 className="raffles-title-card  ">
                        {" "}
                        {truncateText(raffle.name, 40)}
                      </h6>
                      <p className="card-text raffles-subtitle-card lh-sm">
                        {truncateText(raffle.description, 70)}
                      </p>

                      <p className="card-text  raffles-subtitle-card  p-0  ">
                        <MdAccessTime
                          size={20}
                          className="mb-1 me-2 opacity-75 "
                        />
                        {getPercetRaised(raffle)}%{" "}
                        {parseNumber(raffle?.raised || 0)} recaudado
                      </p>
                      <button
                        disabled={Number(getPercetRaised(raffle)) === 100}
                        onClick={() => router.push(`/rifas/${raffle.id}`)}
                        className="btn fs-6 btn-pink w-100"
                      >
                        Comprar boleto
                      </button>

                      <button
                        className="btn fs-6 btn-border-pink w-100 mt-2"
                        onClick={() =>
                          router.push(`/rifas/detalles/${raffle.id}`)
                        }
                      >
                        Ver detalles
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <button
              className="position-absolute  buttonNext-RifasActivas "
              onClick={() => {
                slider?.current?.slickNext();
              }}
            >
              <IoIosArrowForward color="#C3286D" className="iconPreviousNext" />
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
