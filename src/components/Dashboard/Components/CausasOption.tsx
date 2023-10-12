import ModalCausasDashboard from "@/components/modal/ModalCausasDashboard";
import ModalEditCausa from "@/components/modal/ModalEditCausa";
import ModalInformationCausa from "@/components/modal/ModalInformationCausa";
import { getStatusColor } from "@/utils/getStatusColor";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaBriefcase,
  FaImage,
  FaRegEdit,
  FaInfoCircle,
  FaDownload,
} from "react-icons/fa";
export default function CausasOption({ option, index, actions }: any) {
  const { setShowEdit, setShowInfo } = actions;

  return (
    <tr
      className="border position-relative text-center "
      style={{ background: index % 2 === 0 ? "#F2F2F2" : "#fff" }}
    >
      <th scope="row">
        <div
          className="position-absolute top-0 start-0 borderLateral-Rifas "
          style={{ backgroundColor: getStatusColor(option.estado) }}
        ></div>
        <div
          style={{ width: "42px", height: "42px" }}
          className="  d-flex justify-content-center  align-items-center bg-white  icon ms-3 rounded overflow-hidden  "
        >
          {option.image && (
            <Image
              width={50}
              height={50}
              src={option.image}
              alt={option.name}
            />
          )}

          {option.icon}
        </div>
      </th>

      <td>
        <h6 className="text-cartera px-2 ">{option.name}</h6>
        <p className="parraf-cartera px-2">{option.descripcion}</p>
      </td>
      <td className="number-dashboardRifas ">
        {new Date(option.created_at).toLocaleDateString()}
      </td>
      <td className="number-dashboardRifas">{option.goal}</td>
      <td
        style={{ width: "110px", color: getStatusColor(option.status) }}
        className="number-dashboardRifas"
      >
        {option.status}
      </td>
      <td className="icon-dashboarRifas">
        <FaRegEdit
          onClick={() => {
            setShowEdit(option);
          }}
          color="#2161BD"
          size={18}
        />{" "}
        <FaInfoCircle
          onClick={() => {
            setShowInfo(option);
          }}
          color="#2161BD"
          size={18}
        />{" "}
        <FaDownload color="#2161BD" size={18} />
      </td>
    </tr>
  );
}
