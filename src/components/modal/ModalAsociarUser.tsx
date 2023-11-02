import React from 'react'
import { Modal } from "react-bootstrap";
import { AiFillInfoCircle } from 'react-icons/ai';
import { Field } from "@/types/Component/FormGenerator";
import { Profile } from "@/types/Model/Profile";
import FormGenerator from "@/components/FormGenerator";
import { useAsociatonsStoreDashboard } from '@/store/zustand/DashboardStore';
import { useRouter } from 'next/router';

export default function ModalAsociarUser({ showAsociarusuario, setShowAsociarUsuario, handleCloseAsociacion, handleChangeRaffle }: any) {
    const router = useRouter();


    const setAddUser = useAsociatonsStoreDashboard((state) => state.setAddUser);
    const isLoading = useAsociatonsStoreDashboard((state) => state.isLoading);

    const submitData = async (data: Profile) => {
        console.log("data", submitData)
        setAddUser(router.query.id as string, data)
    };

    const fields: Field[] = [
        {
            label: "Correo electronico",
            name: "about",
            required: true,
            type: "email",
        }
    ];
    return (
        <div>

            {
                showAsociarusuario

                    ? <div>
                        < Modal className="custom-modal" show={showAsociarusuario} handleCloseDelete={handleCloseAsociacion} >

                            <div className="modal-header">
                                <h4 className="modal-title text-secondary text-center m-0" id="staticBackdropLabel">  Asociar usuario</h4>

                                <button style={{ cursor: "pointer" }}
                                    className="fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2 btn-close"
                                    onClick={handleCloseAsociacion} type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <Modal.Body className="px-4">

                                <div className=''>
                                    <p className='text-deleteUser  text-center lh-sm '>Captura el correo electrónico del usuario que deseas asociar a tu cuenta</p>
                                    <FormGenerator
                                        renderButton={(handleSend) => {
                                            return (<div className="modal-footer">
                                                <button disabled={isLoading} onClick={handleCloseAsociacion} type="button" className="btn btn-border-pink" data-bs-dismiss="modal">Cerrar</button>
                                                <button disabled={isLoading} type="button" onClick={handleSend} className="btn btn-pink">Asociar usuario</button>
                                            </div>)
                                        }}
                                        submitData={submitData}
                                        fields={fields}
                                        loading={isLoading}
                                    />
                                </div>
                            </Modal.Body>





                        </Modal >
                    </div >
                    : null
            }

        </div>

    )
}
