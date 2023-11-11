import { useRouter } from "next/router";
import React from "react";

export default function SuccessAsociation() {
  const router = useRouter();
  return (
    <div className="row mt-5 ">
      <div className="col-12 col-lg-7 mx-auto text-center">
        <h3 className="tittle-registroSucessfull">
          ¡Casi estamos listos para rifarnos!
        </h3>

        <div className=" my-5 p-5 pb-2 text-center shadow col-11 col-lg-8 mx-auto">
          <h3 className="text-secondary pt-5" style={{ fontSize: "21px" }}>
            En un plazo máximo de 24 horas, revisaremos los datos
            proporcionados, y estarás listo para rifarte.
          </h3>

          <h3 className="text-secondary pt-5" style={{ fontSize: "21px" }}>
            Agradecemos tu paciencia, pronto estaremos en contacto por correo
            electrónico.
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
