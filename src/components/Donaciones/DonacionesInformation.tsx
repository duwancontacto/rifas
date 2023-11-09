import React, { useEffect } from "react";
import Image from "next/image";
import imagenDonaciones from "@/assets/img/Premio-donar.jpg";
import FormGenerator from "../FormGenerator";
import { Field } from "@/types/Component/FormGenerator";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthState } from "@/store/slices/auth";
import { Donation2 } from "@/types/Model/Profile";
import LogoRifas from "@/assets/img/logoRifas.jpeg";
import {
  Donations,
  GetAssociations,
  selectRaffleState,
  setDonationsForm2,
} from "@/store/slices/raffles";
export default function DonacionesInformation({ nextStep, backStep }: any) {
  const { associations, donationFrom2, loading } =
    useSelector(selectRaffleState);

  const dispatch = useDispatch();

  const submitData = async (data: Donation2) => {
    await dispatch(setDonationsForm2(data) as any);

    const { payload } = await dispatch(Donations({}) as any);
    if (payload) nextStep();
  };

  const gallery =
    donationFrom2?.image && donationFrom2?.image?.length > 0
      ? donationFrom2?.image?.map((image: any) => image)
      : [];

  const fields: Field[] = [
    {
      label: "2 / 3  Completa la informacion",
      name: "complete_information",
      type: "title",
      required: true,
    },
    {
      label: "¿Cual es el la condicion de tu producto?*",
      name: "status",
      required: true,
      type: "radioButton",
      options: [
        { label: "Nuevo", value: 0 },
        { label: "Usado", value: 1 },
      ],
      default: donationFrom2?.status || "",
      customChange: ({ setValue, newValue }: any) => {
        dispatch(setDonationsForm2({ status: newValue }) as any);
      },
    },

    {
      label: "¿Cuál es el precio de tu producto (En pesos MXN)?*",
      name: "value",
      required: true,
      type: "number",
      default: donationFrom2?.value || "",
      customChange: ({ setValue, newValue }: any) => {
        dispatch(setDonationsForm2({ value: newValue }) as any);
      },
    },
    {
      label: "¿Quieres asignar tu premio a alguna Asociación?",
      name: "association",
      required: false,
      type: "select",
      options: associations.map((association) => ({
        label: association.association_name,
        value: association.id,
      })),
      default: donationFrom2?.association || "",
      customChange: ({ setValue, newValue }: any) => {
        dispatch(setDonationsForm2({ association: newValue }) as any);
      },
    },
    {
      label: "Agrega las fotos de tu premio",
      name: "image",
      required: false,
      type: "file",
      customChange: ({ setValue, newValue }: any) => {
        dispatch(setDonationsForm2({ image: newValue }) as any);
      },
      default: gallery,
    },
  ];

  useEffect(() => {
    dispatch(GetAssociations({}) as any);
    //eslint-disable-next-line
  }, []);

  const preview: string | null =
    donationFrom2?.image && donationFrom2?.image[0]
      ? URL.createObjectURL(donationFrom2?.image[0] || "")
      : null;

  return (
    <div>
      <section className="row m-0 my-3">
        <div className=" col-12 col-md-6    ">
          <Image
            src={preview || LogoRifas}
            alt="donation"
            width={100}
            height={100}
            className="w-100 h-auto mx-0 "
            style={{ maxWidth: "600px", maxHeight: "600px" }}
          />
        </div>
        <div className="col-12 col-md-6 text-secondary mx-0 pt-5 pt-md-0 ps-md-5">
          <FormGenerator
            buttonText="Continuar"
            submitData={submitData}
            fields={fields}
            loading={loading}
            renderButton={() => (
              <div className="d-flex justify-content-between  w-100 mt-4 ">
                <button
                  disabled={loading}
                  className="btn btn-border-pink btn-sm w-25  "
                  onClick={() => {
                    backStep();
                  }}
                >
                  Regresar
                </button>
                <button
                  disabled={loading}
                  className="btn btn-pink btn-sm px-5 fs-6  "
                  type="submit"
                >
                  Continuar
                </button>
              </div>
            )}
          />
        </div>
      </section>
    </div>
  );
}
