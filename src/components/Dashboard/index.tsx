import React, { useState } from 'react'
import Image from "next/image";
import FondoProfile from "../../assets/img/Contacto-bg.jpg";
import { AiOutlineMenu, AiFillDollarCircle, AiOutlineUser } from "react-icons/ai";
import { FaHandHoldingHeart, FaGift, FaBriefcase, FaUsers } from "react-icons/fa";
import { BsWindowSidebar } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import DashboardResumen from './DashboardResumen';
import DashboadrRifas from './DashboadrRifas';
import DashboardCausas from './DashboardCausas';
import DashboardPremios from './DashboardPremios';
import DashboardCartera from './DashboardCartera';
import DashboardMicrositio from './DashboardMicrositio';
import DasboardUsers from './DasboardUsers';
import DashboardProfile from './DashboardProfile';


export default function index() {

    const [showScreen, setShowScreen] = useState('1')

    const options = [

        {
            label: "Resumen", value: "1", icon: <AiOutlineMenu />,
        },
        {
            label: "rifas", value: "2", icon: <AiFillDollarCircle />
        },
        {
            label: "Causas", value: "3", icon: <FaHandHoldingHeart />
        }, {
            label: "Premios", value: "4", icon: <FaGift />
        },
        {
            label: "Cartera", value: "5", icon: <FaBriefcase />
        },
        {
            label: "Micrositio", value: "6", icon: <BsWindowSidebar />
        },
        {
            label: "Usuarios", value: "7", icon: <FaUsers />
        },
        {
            label: "perfil", value: "8", icon: <AiOutlineUser />
        },

    ]

    const optionScreen: any = {
        "1": DashboardResumen,
        "2": DashboadrRifas,
        "3": DashboardCausas,
        "4": DashboardPremios,
        "5": DashboardCartera,
        "6": DashboardMicrositio,
        "7": DasboardUsers,
        "8": DashboardProfile,

    }

    const Component = optionScreen[showScreen]

    return (
        <section className="mx-0 mx-md-5 position-relative   ">
            <div className="position-absolute top-0 overflow-hidden fondoContacto  ">
                <Image src={FondoProfile} alt="fondoProfile" className="w-100 h-100 " />
            </div>
            <div className=" mx-0 mx-lg-5 mt-3 mt-lg-3  position-relative pt-3  text-center ">
                <h3 className="contacto mx-auto ">Mi cuenta</h3>
            </div>

            <section className='row d-flex z-3 mt-5 container-Dashboard justify-content-between  m-0'>

                <div className='col-12 col-lg-2   container-sidebar px-3'>

                    {options.map((option, index) => (
                        <div onClick={() => { setShowScreen(option.value) }} className='d-flex justify-content-start mx-auto   py-2  container-boxSidebar my-2 '>
                            <p className='m-0 ms-2 '> {option.icon} </p>
                            <p className=" m-0 ms-2" >{option.label}</p>
                        </div>
                    ))}


                </div>
                <div className='col-12 col-lg-10 mt-2 mt-md-0   m-0'>
                    <div className='background-dashboard  d-block d-lg-flex justify-content-between align-items-center p-3  col-12'>
                        <div className=' d-block d-md-flex '>
                            <p className='title-dashboard ms-3  '>APAC, A.C. /</p>
                            <p className='title-dashboard ms-3 '>Resumen</p>
                        </div>

                        <button className='me-0 me-3 button-dashboard m-0 p-2 '><MdKeyboardArrowLeft />Mis asociaciones </button>
                    </div>

                    <div className='mt-3 background-dashboard  pt-2'>
                        <Component />

                    </div>

                </div>

            </section>
        </section >

    )
}