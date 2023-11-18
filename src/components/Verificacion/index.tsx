import { useRouter } from "next/router";
import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
export default function Verificacion({ nextStep }: any) {
  const router = useRouter();

  return (
    <section className="text-center mt-5">
      <div className="col-8 mx-auto">
        <h3 className="tittle-registroSucessfull">¡Rífate con tu registro!</h3>
        <h3 className="tittle-registroSucessfull">
          Para poder participar en una rifa necesitamos tu información. Esto
          para mantenerte informado acerca de las actualizaciones de la rifa.
          Además, será nuestro medio de comunicación en caso de que resultes
          ganador.
        </h3>
      </div>

      <div className="row m-0 d-flex justify-content-center mt-5 mb-3 ">
        <div className="col-12  bg-white col-lg-4 me-0 me-lg-5 shadow rounded p-3 pt-5">
          <FaHandHoldingHeart color="#C3286D" size={100} />
          <p className="text-registroSucessfull mt-3">
            Da clic en el botón para comenzar a rifarte.
          </p>
          <button
            onClick={() => router.push("/donaciones")}
            className=" btn btn-pink col-12 mt-3 "
          >
            ¡Me rifo, iniciar mi registro!
          </button>
          <button
            onClick={() => router.push("/rifas")}
            className="btn btn-border-pink col-12 mt-3  "
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </section>
  );
}
