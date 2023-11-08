import { useRouter } from "next/router";
import React from "react";

export default function SuccessRaffle() {
  const router = useRouter();
  return (
    <div className="row mt-5 ">
      <div className="col-12 col-lg-7 mx-auto text-center">
        <h3 className="tittle-registroSucessfull">
          ¡Estamos cada vez más cerca de rifarnos!
        </h3>

        <div className=" my-5 p-5 pb-2 text-center shadow col-11 col-lg-8 mx-auto">
          <h3 className="text-secondary " style={{ fontSize: "24px" }}>
            Nos estamos rifando validando los datos de solicitud para tu causa.
            Podrás rifarte con nosotros en las próximas horas y obtener la ayuda
            que necesitas para tu causa.
          </h3>

          <h3 className="text-secondary pt-3" style={{ fontSize: "20px" }}>
            Mientras tanto, puedes darte una vuelta por las rifas y apoyar otras
            causas en lo que terminamos de validar tu rifa.
          </h3>
          <button
            onClick={() => router.push("/rifas")}
            className="btn  btn-outline-pink w-100 mt-5"
          >
            Participar en una Rifa
          </button>

          <button
            onClick={() => router.push("/donaciones")}
            className="btn btn-pink w-100 mt-3"
          >
            Donar un premio
          </button>
          <p onClick={() => router.push("/")} className="volver-inicio mt-5 ">
            Prefiero volver al inicio
          </p>
        </div>
      </div>
    </div>
  );
}
