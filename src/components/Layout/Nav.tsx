import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/img/logo-rifa-menu.png";
import ModalLogin from "../modal/ModalLogin";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  ValidateSession,
  selectAuthState,
  setLogout,
} from "@/store/slices/auth";
import { IoIosNotifications, IoIosArrowDown } from "react-icons/io";

import ModalNotification from "../modal/ModalNotification";
import ModalProfile from "../modal/ModalProfile";
import ResponsiveNav from "./ResponsiveNav";
import { useNotificationStore } from "@/store/zustand/NotificationStore";
import { ForgotPasswordStore } from "@/store/zustand/ForgotPassword";

export default function Nav() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { authenticated, profile } = useSelector(selectAuthState);
  const [showNotification, setShowNotification] = useState(false);
  const [showprofile, setShowProfile] = useState(false);
  const notificationsSize = useNotificationStore(
    (state) => state.notificationsSize
  );

  const postValidateAccount = ForgotPasswordStore(
    (state) => state.postValidateAccount
  );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const options = [
    { label: "Inicio", path: "/" },
    { label: "Rifas", path: "/rifas" },
    { label: "Nosotros", path: "/nosotros" },
    { label: "Ingreso", path: "/", onClick: handleShow },
    { label: "Registro", path: "/registro" },
  ];
  const authOptions = [
    { label: "Inicio", path: "/" },
    { label: "Rifas", path: "/rifas" },
    { label: "Donaciones", path: "/donaciones" },
    { label: "Crear Rifa", path: "/rifas/crear_rifas" },
    { label: "Registrar AC", path: "/crear_asociacion" },
    { label: "Nosotros", path: "/nosotros" },
    {
      label: "Perfil",
      path: "/perfil",
      Icon: IoIosNotifications,
      onClick: () => setShowNotification(!showNotification),
    },
    {
      label: `Hola ${profile?.full_name}`,
      path: "/",
      onClick: () => setShowProfile(!showprofile),
    },
  ];

  const selectOptions = authenticated ? authOptions : options;

  const handleValidateAccount = async () => {
    if (router?.query?.validateAccount) {
      await postValidateAccount(router?.query?.validateAccount as string);
      await dispatch(ValidateSession({}) as any);
      router.push("/rifas/crear_rifas");
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => handleValidateAccount(), 200);

    return () => clearTimeout(timeoutId);

    //eslint-disable-next-line
  }, []);

  return (
    <div className="position-absolute top-0 w-100 ">
      <ModalNotification
        showNotification={showNotification}
        setShowNotification={setShowNotification}
      />
      <ModalProfile setShowProfile={setShowProfile} showprofile={showprofile} />

      <ModalLogin show={show} handleClose={handleClose} />
      <nav className="d-md-flex justify-content-between align-items-center mt-2">
        <div
          className="mx-0 mx-lg-2"
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/")}
        >
          <Image src={logo} alt="fondo" className="img-fluid" />
        </div>
        <ResponsiveNav selectOptions={selectOptions} />

        <ul className="d-none  home-navbar d-md-flex  list-unstyled text-secondary align-items-center justify-content-center m-0">
          {selectOptions.map((option: any, index) => (
            <li
              key={index}
              className=" mx-3 my-2"
              style={{ cursor: "pointer" }}
              onClick={() =>
                option.onClick ? option.onClick() : router.push(option.path)
              }
            >
              {option.Icon ? (
                <div className="position-relative">
                  <div className="notification-active">{notificationsSize}</div>
                  <option.Icon className=" size-icon m-0" />
                </div>
              ) : (
                option.label
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
