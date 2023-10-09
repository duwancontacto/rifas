import { getStatusOptions } from "@/utils/getStatusOptions";
import React from "react";
import {
  FaBriefcase,
  FaImage,
  FaRegEdit,
  FaInfoCircle,
  FaDownload,
} from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import DashboardTable from "./Components/DashboardTable";
import { useRouter } from "next/router";

function DashboardCartera() {

  const router = useRouter();

  const options = [
    {
      icon: <FaImage size={30} className="mt-3 mx-2" />,
      titulo: "¡Ayúdanos a concluir la Biblioteca del Centro EcoDiálogo!",
      informacion:
        "Tú apoyo es muy importante para nuestro Centro de Educación para la Vida, ya que así lograremos concluir nuestra Biblioteca-Área Administrativa.",
      fecha: "04-10-2023",
      precio: "$890.00",
      estado: "Canjeado",
    },
    {
      icon: <FaImage size={30} className="mt-3 mx-2" />,
      titulo: "¡Hola! ¡Soy Emiliano, ayúdame a vencer el cáncer!",
      informacion:
        "Tú apoyo es muy importante para nuestro Centro de Educación para la Vida, ya que así lograremos concluir nuestra Biblioteca-Área Administrativa.",
      fecha: "04-10-2023",
      precio: "$890.00",
      estado: "Abonado",
    },
  ];

  const head = [
    { label: "Imagen" },
    { label: "Titulo" },
    { label: "Fecha rifa", width: "120px" },
    { label: "Monto" },
    { label: "Estado" },
  ];

  const CarteraOption = ({ option, index }: any) => {
    return (
      <tr
        key={index}
        className="table-secondary   position-relative border "
        style={{ background: index % 2 === 0 ? "#F2F2F2" : "#fff" }}
      >
        <th scope="row ps-2">
          <div
            className="position-absolute top-0 start-0 borderLateral-Rifas "
            style={{
              backgroundColor: getStatusOptions(option.estado),
            }}
          ></div>
          <div
            style={{ width: "42px", height: "42px" }}
            className="  d-flex justify-content-center  align-items-center bg-white  icon ms-3 "
          >
            {option.icon}
          </div>
        </th>
        <td>
          <h6 className="text-cartera ">{option.titulo}</h6>
          <p className="parraf-cartera">{option.informacion}</p>
        </td>
        <td className="number-dashboardRifas">{option.fecha}</td>
        <td style={{ width: "120px" }} className="number-dashboardRifas ">
          {option.precio}
        </td>
        <td
          style={{ color: getStatusOptions(option.estado) }}
          className="number-dashboardRifas"
        >
          {option.estado}
        </td>
      </tr>
    );
  };

  return (
    <section className=" ">
      <div className="background-dashboard  d-block d-lg-flex justify-content-between align-items-center p-3 col-12">
        <div className=" d-block d-md-flex mt-2 ">
          <p className="title-dashboard mx-2  ">APAC, A.C. /</p>
          <p className="title-dashboard  ">Cartera</p>
        </div>

        <button className="me-0 me-3 button-dashboard m-0 p-2 " onClick={() => router.push("/dashboard/")}>
          <MdKeyboardArrowLeft />
          Mis asociaciones{" "}
        </button>
      </div>

      <div className="pt-3 background-dashboard mt-3 px-3">
        <div className="d-flex container-cartera  p-3 mt-2">
          <div className="ms-4 text-center">
            <FaBriefcase color="#784B5F" size={30} />
            <p className="value-Cartera mt-2">$1600.00</p>
          </div>

          <div className="ms-4">
            <p className="m-0 saldo-Cartera">Saldo de tu cartera</p>
            <p className="m-0 information-Saldo">
              Este es el saldo aplicado a tu cuenta, no tiene vencimiento y lo
              puedes ocupar para comprar boletos para cualquier rifa.
            </p>
          </div>
        </div>
      </div>

      <DashboardTable
        title="Detalle de movimientos"
        disableFilter
        disablePagination
        head={head}
        options={options}
        Component={CarteraOption}
      />
    </section>
  );
}

export default DashboardCartera;
