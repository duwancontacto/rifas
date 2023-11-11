import React from "react";
import fondoRifasActivas from "@/assets/img/gal-microsite-apac2.jpg";
import imagenConfirmacionRifa from "@/assets/img/Premio-donar.jpg";

import Image from "next/image";
import { MdAccessTime } from "react-icons/md";
import LogoRifas from "@/assets/img/logoRifas.jpeg";
import { parseNumber } from "@/utils/ParseNumber";
import { useRouter } from "next/router";

export default function ConfirmacionRifa({
  raffle,
  resetRaffle,
  handleSubmit,
}: any) {
  const router = useRouter();

  const preview: string | null =
    raffle?.image && raffle?.image[0]
      ? URL.createObjectURL(raffle?.image[0] || "")
      : null;

  return (
    <section className=" shadow  px-3">
      <p className="title-confirmacionRifa mb-0 mt-3">
        ¡Felicidades estas a un pequeño paso!
      </p>
      <p className="subtitle-confirmacionRifa m-0">
        Tu Rifa esta en proceso de aprobación:
      </p>
      <p className="text-confirmacionRifa  col-11">
        Gracias por rifarte con nosotros, tu rifa esta en proceso de aprobación
        y en menos de 24 horas estará lista para que la compartas con todos tus
        conocidos y juntos apoyemos a tu noble causa.
      </p>

      <p className="subtitle-confirmacionRifa ">
        Recibirás un correo electrónico una vez que tu causa haya sido aprobada
        y este en circulación.
      </p>

      <div className="d-flex row  m-0 justify-content-center p-1 p-lg-3 rounded-2  ">
        <div className="col-12 col-lg-12 shadow mt-4 mt-md-0 p-3">
          {/*  <Image src={fondoRifasActivas} className="w-100 h-25" alt="" /> */}
          <div className="p-3">
            <div className="d-block  justify-content-between d-md-flex  row col-12 col-lg-10 ">
              <div className="col-12  col-lg-6  z-2 ">
                <Image
                  src={preview || LogoRifas}
                  alt="fondoDescription"
                  className=" d-block w-100 h-auto mx-auto mx-lg-0 rounded-1 "
                  style={{ maxHeight: "300px", objectFit: "contain" }}
                  width={160}
                  height={160}
                />
              </div>
              <p className="col-12 col-lg-6 mt-4 mt-md-0 text-rifaDescription mb-5 ">
                <h6 className="raffles-title-card  ">{raffle?.name || ""}</h6>
                <p className="card-text raffles-subtitle-card my-1">
                  {raffle?.description || ""}
                </p>
                <p className=" textInformatinRifa  d-flex m-0 lh-sm">
                  La meta es de:{" "}
                  <p className="fw-bold m-0 text-black">
                    {"  $"}
                    {parseNumber(raffle?.price) || ""} MXN.
                  </p>
                </p>
                <div className="d-flex textInformatinRifa  m-0 lh-sm">
                  <p className=" m-0 ">Costo por boleto: </p>
                  <p className="  fw-semibold m-0 ">
                    ${parseNumber(raffle?.ticket_price) || ""}
                  </p>
                </div>
                <div className="d-flex  textInformatinRifa m-0  ">
                  <p className="m-0"> Numero de boletos: </p>
                  <p className=" fw-semibold m-0 ">
                    {raffle?.ticket_number || ""}
                  </p>
                </div>
                <h6 className=" textInformatinRifa ">
                  Fecha de inicio:{" "}
                  {new Date(raffle?.start_date || "").toLocaleDateString()}
                </h6>
                <h6 className=" textInformatinRifa my-1">
                  Fecha de fin:{" "}
                  {new Date(raffle?.end_date || "").toLocaleDateString()}
                </h6>
              </p>
            </div>

            <h5 className="subtitle-rifDescription text-center text-lg-start  z-2 py-2 pt-5 ">
              ¿Cuál es la causa?
            </h5>
            <div className="d-block  justify-content-between d-md-flex  row col-12 col-lg-10 ">
              <div className="col-12  col-lg-6  z-2 ">
                <Image
                  src={raffle?.cause?.image || LogoRifas}
                  alt="fondoDescription"
                  className=" d-block w-100 h-auto mx-auto mx-lg-0 rounded-1 "
                  style={{ maxHeight: "300px", objectFit: "contain" }}
                  width={160}
                  height={160}
                />
              </div>
              <p className="col-12 col-lg-6 mt-4 mt-md-0 opacity-75 text-rifaDescription mb-5 ">
                {raffle?.cause?.name || ""}
                <br />
                {raffle?.cause?.description || ""}
              </p>
            </div>

            <h5 className="subtitle-rifDescription text-center text-lg-start  z-2 py-2  pt-5 ">
              ¿Cuál es el premio?
            </h5>
            <div className="d-block  justify-content-between d-md-flex  row col-12 col-lg-10 ">
              <div className="col-12  col-lg-6  z-2 ">
                <Image
                  src={raffle?.prize?.image || LogoRifas}
                  alt="fondoDescription"
                  className=" d-block w-100 h-auto mx-auto mx-lg-0 rounded-1 "
                  style={{ maxHeight: "300px", objectFit: "contain" }}
                  width={160}
                  height={160}
                />
              </div>
              <p className="col-12 col-lg-6 mt-4 mt-md-0 opacity-75 text-rifaDescription mb-5 ">
                {raffle?.prize?.name || ""}
                <br />
                {raffle?.prize?.description || ""}
              </p>
            </div>
          </div>
        </div>
        <button onClick={handleSubmit} className="btn btn-pink mt-4">
          Enviar rifa para aprobación
        </button>
        <button
          onClick={() => router.push("/")}
          className="btn btn-border-pink mt-3"
        >
          Ir al inicio
        </button>
      </div>
    </section>
  );
}
