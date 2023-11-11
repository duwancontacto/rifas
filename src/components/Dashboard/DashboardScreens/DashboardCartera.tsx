import React from "react";
import { FaImage } from "react-icons/fa";
import DashboardTable from "../Components/DashboardTable";
import { useRouter } from "next/router";
import HeaderDashboard from "../Components/HeaderDashboard";
import CarteraOption from "../Components/TableComponents/CarteraOption";
import { useAsociatonsStoreDashboard } from "@/store/zustand/DashboardStore";

function DashboardCartera() {
  const router = useRouter();

  const getWallet = useAsociatonsStoreDashboard((state) => state.getWallet);
  const pagination = useAsociatonsStoreDashboard((state) => state.pagination);
  const wallets = useAsociatonsStoreDashboard((state) => state.wallets);

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

  return (
    <section className=" ">
      <HeaderDashboard screen="Cartera" />

      <DashboardTable
        title="Detalle de movimientos"
        disableFilter
        disablePagination
        head={head}
        options={wallets}
        Component={CarteraOption}
        getRequest={(pagination: number) => {
          getWallet(router.query.id as string, pagination);
        }}
        pagination={pagination}
      />
    </section>
  );
}

export default DashboardCartera;
