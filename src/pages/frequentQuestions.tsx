import Layout from "@/components/Layout";
import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useFaqStore } from "@/store/zustand/faqStore";
import { FaRegQuestionCircle } from "react-icons/fa";

export default function FrequentQuestions() {
  const [step, setStep] = useState(0);

  const handleStep = (newStep: number) =>
    setStep(newStep === step ? -1 : newStep);

  const { faq, getFaq } = useFaqStore((state) => state);

  const StepIcon = (step: number, currentStep: number) => {
    if (step === currentStep) return <MdKeyboardArrowUp size={30} />;
    return <MdKeyboardArrowDown size={30} />;
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getFaq();
    }, 200);

    return () => clearTimeout(timeoutId);
    //eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <div className=" col-12 text-center row container-Pivacy pt-4 m-auto pb-5 mt-3 mt-md-0 ">
        <div className="col-12 col-lg-8  m-auto text-start ">
          <h5 className="title-preguntasFrecuentes">Preguntas frecuentes</h5>
          <p className="text-Questions">
            Esta es una lista de las preguntas que más recibimos frecuentemente.
            Para mayor información, o si necesitas soporte técnico, por favor
            utiliza nuestro servicio de Ayuda en Línea.
          </p>

          <div className="  m-auto containerText-questions  mt-2   p-3 p-md-5 ">
            <h5 className="subtitle-questions lh-1">Información General</h5>
            <div className="horizontal-bar mb-2 mb-4"></div>

            {faq?.map((question, index) => (
              <div className="mb-2" key={index}>
                <div className=" d-flex justify-content-between align-items-center    ">
                  <button
                    onClick={() => {
                      handleStep(index);
                    }}
                    className={` fs-4 text-light  faq-container d-flex justify-content-between align-item-center  ${
                      step !== index ? " opacity-50 " : " opacity-100  "
                    }`}
                  >
                    <div className="text-fondo-container">
                      <FaRegQuestionCircle size={25} className="me-2" />
                      {question.title}
                    </div>
                    <div className="m-0">{StepIcon(step, index)}</div>
                  </button>
                </div>
                {step === index && (
                  <p className="p-3 pb-0"> {question.message}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
