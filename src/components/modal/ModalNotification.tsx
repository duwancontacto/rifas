import React from 'react'
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import portadarifa1 from "@/assets/img/portada-rifa1.jpg"
import { AiOutlineCheckCircle, } from 'react-icons/ai'

export default function ModalNotification({ setShowNotification, showNotification, handleClose }: any) {
    return (
        <>
            {showNotification &&
                <div className='container-modalNotification rounded-3 shadow'>
                    <div className=' contenedor border-bottom border rounded-3'>
                        <div className=' d-flex justify-content-around  pt-2 '>
                            <p className=' z-3 notification '>Notificaciones (5)</p>
                            <p className='z-3 leido-notification '>marcar todo como leido</p>
                        </div>
                    </div>

                    {/*     <div className=" border-bottom my-2 w-100"></div> */}
                    <div className='mt-3 row m-0 border-bottom'>

                        <p className='name-notifications '>¡felicidades,  eres el ganador!</p>
                        <div className='d-flex justify-content-between   row m-0 '>
                            <div className='col-10 col-lg-4  p-0   '>
                                <Image className=' mt-1 size-imagenNotifications w-100 h-auto  rounded' src={portadarifa1} alt='portadarifa1' />
                            </div>
                            <p className='col-12 col-lg-7 px-3 parraf-notifications mt-3 mt-lg-0 '>Queremos informarte que has sido el ganador de la rifa ¡Ayuda a Ray!, gracias por la increíble y abrumadora respuesta que recibimos de tu parte.</p>

                            <div className='col-12 col-lg-1 p-0 d-flex justify-content-center  align-items-center mb-5 '><AiOutlineCheckCircle size={30} /></div>
                        </div>


                    </div>


                </div>}
        </>
    )
}
