"use strict";
exports.id = 380;
exports.ids = [380];
exports.modules = {

/***/ 5616:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CreateAsociacion)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(424);
/* harmony import */ var _RegistroCuenta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1486);
/* harmony import */ var _FinalizarRegistro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8731);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RegistroCuenta__WEBPACK_IMPORTED_MODULE_3__]);
_RegistroCuenta__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function CreateAsociacion() {
    const tabs = [
        {
            label: " Registro una AC",
            Component: _RegistroCuenta__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
        },
        {
            label: " Crear rifa",
            Component: _FinalizarRegistro__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tab__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            tabs: tabs
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1486:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RegistroCuenta)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7488);
/* harmony import */ var _store_slices_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9403);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9649);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FormGenerator__WEBPACK_IMPORTED_MODULE_2__, _store_slices_auth__WEBPACK_IMPORTED_MODULE_3__]);
([_FormGenerator__WEBPACK_IMPORTED_MODULE_2__, _store_slices_auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function RegistroCuenta({ nextStep , backStep  }) {
    const { loading , profile  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_store_slices_auth__WEBPACK_IMPORTED_MODULE_3__/* .selectAuthState */ ._9);
    const [success, setSuccess] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [pending, setPending] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const submitData = async (data)=>{
        const { payload  } = await dispatch((0,_store_slices_auth__WEBPACK_IMPORTED_MODULE_3__/* .CreateAsociacion */ .Ek)(data));
        if (payload) setSuccess(true);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (profile?.hasAssociation) {
            setPending(true);
        }
    }, [
        profile
    ]);
    if (success || pending) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row mt-5 ",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "col-12 col-lg-7 mx-auto text-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "tittle-registroSucessfull",
                    children: "\xa1Casi estamos listos para rifarnos!"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " my-5 p-5 pb-2 text-center shadow col-11 col-lg-8 mx-auto",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "text-secondary pt-5",
                            style: {
                                fontSize: "21px"
                            },
                            children: "En un plazo m\xe1ximo de 24 horas, revisaremos los datos proporcionados, y estar\xe1s listo para rifarte."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "text-secondary pt-5",
                            style: {
                                fontSize: "21px"
                            },
                            children: "Agradecemos tu paciencia, pronto estaremos en contacto por correo electr\xf3nico."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>router.push("/rifas"),
                            className: "btn  btn-outline-pink w-100 mt-5",
                            children: "Participar en una Rifa"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>router.push("/donaciones"),
                            className: "btn btn-pink w-100 mt-3",
                            children: "Donar un premio"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            onClick: ()=>router.push("/"),
                            className: "volver-inicio mt-5 ",
                            children: "Prefiero volver al inicio"
                        })
                    ]
                })
            ]
        })
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "text-secondary row  ",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-md-8  col-12 mx-auto mt-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "tittle-registroSucessfull text-center",
                        children: "Ay\xfadanos a completar los datos de tu asociaci\xf3n."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-center fw-light  fs-5 mt-3 mx-md-5",
                        children: "Comenzamos el camino para rifarnos. Es importante verificar la informaci\xf3n de tu asociaci\xf3n, por lo que te pedimos que llenes con cuidado este formulario."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-white pt-3 my-3 text-secondary border  shadow rounded mx-auto px-5",
                style: {
                    maxWidth: "600px",
                    width: "100%"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    buttonText: "Registrar",
                    submitData: submitData,
                    fields: _helper__WEBPACK_IMPORTED_MODULE_5__/* .registerFields */ .k,
                    loading: loading
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " text-dark text-center ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: " my-2 w-50 btn btn-outline-secondary",
                    type: "button",
                    onClick: ()=>router.push("/"),
                    children: "ir al inicio"
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ registerFields)
/* harmony export */ });
const registerFields = [
    {
        label: " 1 / 2 Datos de asociacion",
        name: "",
        type: "title"
    },
    {
        label: "Nombre(s) del representante legal*",
        name: "first_name",
        required: true,
        type: "text"
    },
    {
        label: "Apellido Paterno del representante legal*",
        name: "last_name",
        required: true,
        type: "text"
    },
    {
        label: "Apellido Materno del representante legal*",
        required: true,
        name: "last_name2",
        type: "text"
    },
    {
        label: "Raz\xf3n Social*",
        required: true,
        name: "association_name",
        type: "text"
    },
    {
        label: "RFC*",
        required: true,
        name: "rfc",
        type: "text"
    },
    {
        label: "Regimen Fiscal*",
        required: false,
        name: "regime",
        type: "select",
        options: [
            {
                label: "R\xe9gimen General de las personas morales",
                value: "Regimen General"
            },
            {
                label: "R\xe9gimen de las personas morales con fines no lucrativos",
                value: "Regimen no lucrativos"
            },
            {
                label: "R\xe9gimen de las personas morales con fines no lucrativos autorizadas para recibir donativos deducibles",
                value: "Regimen no lucrativoscon donaciones"
            }
        ]
    },
    {
        label: "Correo electronico*",
        name: "email",
        type: "email",
        required: true
    },
    {
        label: "Tel\xe9fono*",
        required: true,
        name: "phone",
        type: "text"
    },
    {
        label: "Cuenta de PayPal*",
        required: true,
        name: "paypal",
        type: "text",
        tooltip: "Cuenta de PayPal para recibir donaciones"
    },
    {
        label: "Agrega el logotipo de tu asociacion*",
        required: true,
        name: "image",
        type: "file",
        maxFile: 1
    },
    {
        label: " 2 / 2 Direcci\xf3n Fiscal",
        name: "address",
        type: "title"
    },
    {
        label: " \xbfLa direcci\xf3n de la asociaci\xf3n es diferente a la fiscal?",
        required: false,
        name: "fiscal_address2",
        type: "checkbox"
    },
    {
        label: "Calle y n\xfamero*",
        required: true,
        name: "address",
        type: "text",
        visible: "fiscal_address2"
    },
    {
        label: "C\xf3digo postal*",
        required: true,
        name: "zip",
        type: "number",
        visible: "fiscal_address2"
    },
    {
        label: "Estado*",
        required: true,
        name: "state",
        type: "text",
        visible: "fiscal_address2"
    },
    {
        label: "Municipio*",
        required: true,
        name: "province",
        type: "text",
        visible: "fiscal_address2"
    }
];


/***/ }),

/***/ 8644:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ConfiguraRifa)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal_ModalCausa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3044);
/* harmony import */ var _modal_ModalPremio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9997);
/* harmony import */ var _store_slices_raffles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9818);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _FormGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7488);
/* harmony import */ var _ResumeRaffle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2233);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modal_ModalCausa__WEBPACK_IMPORTED_MODULE_2__, _modal_ModalPremio__WEBPACK_IMPORTED_MODULE_3__, _store_slices_raffles__WEBPACK_IMPORTED_MODULE_4__, _FormGenerator__WEBPACK_IMPORTED_MODULE_6__]);
([_modal_ModalCausa__WEBPACK_IMPORTED_MODULE_2__, _modal_ModalPremio__WEBPACK_IMPORTED_MODULE_3__, _store_slices_raffles__WEBPACK_IMPORTED_MODULE_4__, _FormGenerator__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function ConfiguraRifa({ handleChangeRaffle  }) {
    const { loading , associations  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_store_slices_raffles__WEBPACK_IMPORTED_MODULE_4__/* .selectRaffleState */ .VB);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const timeoutId = setTimeout(()=>{
            dispatch((0,_store_slices_raffles__WEBPACK_IMPORTED_MODULE_4__/* .GetAssociations */ .f_)({}));
        }, 200);
        return ()=>clearTimeout(timeoutId);
    //eslint-disable-next-line
    }, []);
    const submitData = async (data)=>{
        handleChangeRaffle(data);
    };
    const fields = [
        {
            label: " Seleccionar Asociaci\xf3n Civil",
            name: "association",
            required: true,
            type: "select",
            options: associations?.map((association)=>({
                    label: association.association_name,
                    value: association.id
                }))
        },
        {
            label: " 2. Elige una causa o agrega una nueva",
            name: "cause",
            required: true,
            type: "selectItems",
            createTitle: "Agregar una causa",
            selectTitle: "Seleccionar una causa",
            ModalComponent: _modal_ModalCausa__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
        },
        {
            label: "3. Elige tu premio o agrega uno nuevo",
            name: "prize",
            required: true,
            type: "selectItems",
            createTitle: "Agregar un premio",
            selectTitle: "Seleccionar un premio",
            ModalComponent: _modal_ModalPremio__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
        },
        {
            label: "4. Datos de la rifa",
            name: "datos_rifa",
            type: "subtitle"
        },
        {
            label: " Monto a recaudar en pesos MXN",
            required: true,
            name: "price",
            type: "number",
            customChange: ({ setValue , newValue , values  })=>{
                setValue("ticket_price", newValue / (values["ticket_number"] || 1));
            }
        },
        {
            subLabel: "Tu monto a recaudar tiene que ser mayor al valor del premio ($1,500)m\xe1s tus gastos de recuperaci\xf3n.Te recomendamos un monto a recaudar de: $2, 100.00",
            name: "datos_rifa",
            type: "subtitle"
        },
        {
            label: "  Selecciona el n\xfamero de boletos para tu rifa",
            name: "ticket_number",
            required: true,
            type: "sliser",
            customChange: ({ setValue , newValue , values  })=>{
                setValue("ticket_price", (values["price"] || 0) / newValue);
            },
            marks: {
                0: "1",
                1: "5",
                2: "10",
                3: "25",
                4: "50",
                5: "100",
                6: "250",
                7: "500",
                8: "1000",
                9: "2500",
                10: "5000",
                11: "10000"
            }
        },
        {
            label: " Costo por boleto",
            name: "ticket_price",
            required: true,
            type: "range",
            maxRange: 100000,
            customChange: ({ setValue , newValue , values  })=>{
                setValue("price", (values["ticket_number"] || 0) * newValue);
            }
        },
        {
            label: "5. Calculadora del costo por boleto",
            name: "calculatorRifas",
            type: "custom",
            Component: _ResumeRaffle__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "px-4 shadow ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "opacity-75 mt-3 fs-4 fw-medium",
                children: "1. Selecciona una de tus asociaciones a la que quieres apoyar."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormGenerator__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                buttonText: "Continuar",
                submitData: submitData,
                fields: fields,
                loading: loading
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ConfirmacionRifa)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_logoRifas_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9037);
/* harmony import */ var _utils_ParseNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6843);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);






function ConfirmacionRifa({ raffle , resetRaffle , handleSubmit  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const preview = raffle?.image && raffle?.image[0] ? URL.createObjectURL(raffle?.image[0] || "") : null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: " shadow  px-3",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "title-confirmacionRifa mb-0 mt-3",
                children: "\xa1Felicidades estas a un peque\xf1o paso!"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "subtitle-confirmacionRifa m-0",
                children: "Tu Rifa esta en proceso de aprobaci\xf3n:"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-confirmacionRifa  col-11",
                children: "Gracias por rifarte con nosotros, tu rifa esta en proceso de aprobaci\xf3n y en menos de 24 horas estar\xe1 lista para que la compartas con todos tus conocidos y juntos apoyemos a tu noble causa."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "subtitle-confirmacionRifa ",
                children: "Recibir\xe1s un correo electr\xf3nico una vez que tu causa haya sido aprobada y este en circulaci\xf3n."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex row  m-0 justify-content-center p-1 p-lg-3 rounded-2  ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 col-lg-12 shadow mt-4 mt-md-0 p-3",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "p-3",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "d-block  justify-content-between d-md-flex  row col-12 col-lg-10 ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-12  col-lg-6  z-2 ",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                src: preview || _assets_img_logoRifas_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                                                alt: "fondoDescription",
                                                className: " d-block w-100 h-auto mx-auto mx-lg-0 rounded-1 ",
                                                style: {
                                                    maxHeight: "300px"
                                                },
                                                width: 160,
                                                height: 160
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "col-12 col-lg-6 mt-4 mt-md-0 text-rifaDescription mb-5 ",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    className: "raffles-title-card  ",
                                                    children: raffle?.name || ""
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "card-text raffles-subtitle-card my-1",
                                                    children: raffle?.description || ""
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: " textInformatinRifa  d-flex m-0 lh-sm",
                                                    children: [
                                                        "La meta es de:",
                                                        " ",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "fw-bold m-0 text-black",
                                                            children: [
                                                                "  $",
                                                                (0,_utils_ParseNumber__WEBPACK_IMPORTED_MODULE_5__/* .parseNumber */ .p)(raffle?.price) || "",
                                                                " MXN."
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "d-flex textInformatinRifa  m-0 lh-sm",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: " m-0 ",
                                                            children: "Costo por boleto: "
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "  fw-semibold m-0 ",
                                                            children: [
                                                                "$",
                                                                (0,_utils_ParseNumber__WEBPACK_IMPORTED_MODULE_5__/* .parseNumber */ .p)(raffle?.ticket_price) || ""
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "d-flex  textInformatinRifa m-0  ",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "m-0",
                                                            children: " Numero de boletos: "
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: " fw-semibold m-0 ",
                                                            children: raffle?.ticket_number || ""
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    className: " textInformatinRifa ",
                                                    children: [
                                                        "Fecha de inicio:",
                                                        " ",
                                                        new Date(raffle?.start_date || "").toLocaleDateString()
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    className: " textInformatinRifa my-1",
                                                    children: [
                                                        "Fecha de fin:",
                                                        " ",
                                                        new Date(raffle?.end_date || "").toLocaleDateString()
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    className: "subtitle-rifDescription text-center text-lg-start  z-2 py-2 pt-5 ",
                                    children: "\xbfCu\xe1l es la causa?"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "d-block  justify-content-between d-md-flex  row col-12 col-lg-10 ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-12  col-lg-6  z-2 ",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                src: raffle?.cause?.image || _assets_img_logoRifas_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                                                alt: "fondoDescription",
                                                className: " d-block w-100 h-auto mx-auto mx-lg-0 rounded-1 ",
                                                style: {
                                                    maxHeight: "300px"
                                                },
                                                width: 160,
                                                height: 160
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "col-12 col-lg-6 mt-4 mt-md-0 opacity-75 text-rifaDescription mb-5 ",
                                            children: [
                                                raffle?.cause?.name || "",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                raffle?.cause?.description || ""
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    className: "subtitle-rifDescription text-center text-lg-start  z-2 py-2  pt-5 ",
                                    children: "\xbfCu\xe1l es el premio?"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "d-block  justify-content-between d-md-flex  row col-12 col-lg-10 ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-12  col-lg-6  z-2 ",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                src: raffle?.prize?.image || _assets_img_logoRifas_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                                                alt: "fondoDescription",
                                                className: " d-block w-100 h-auto mx-auto mx-lg-0 rounded-1 ",
                                                width: 160,
                                                height: 160
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "col-12 col-lg-6 mt-4 mt-md-0 opacity-75 text-rifaDescription mb-5 ",
                                            children: [
                                                raffle?.prize?.name || "",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                raffle?.prize?.description || ""
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: handleSubmit,
                        className: "btn btn-pink mt-4",
                        children: "Enviar rifa para aprobaci\xf3n"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>router.push("/"),
                        className: "btn btn-border-pink mt-3",
                        children: "Ir al inicio"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3316:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DefinicionRifa)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7488);
/* harmony import */ var _store_zustand_RaffleStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1047);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FormGenerator__WEBPACK_IMPORTED_MODULE_2__, _store_zustand_RaffleStore__WEBPACK_IMPORTED_MODULE_3__]);
([_FormGenerator__WEBPACK_IMPORTED_MODULE_2__, _store_zustand_RaffleStore__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function DefinicionRifa({ handleChangeRaffle  }) {
    const submitData = async (data)=>{
        handleChangeRaffle(data);
    };
    const setRaffleDate = (0,_store_zustand_RaffleStore__WEBPACK_IMPORTED_MODULE_3__/* .useRaffleStore */ .Z)((state)=>state.setRaffleDate);
    const raffleDate = (0,_store_zustand_RaffleStore__WEBPACK_IMPORTED_MODULE_3__/* .useRaffleStore */ .Z)((state)=>state.raffleDate);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const timeoutId = setTimeout(()=>{
            setRaffleDate();
        }, 200);
        return ()=>{
            clearTimeout(timeoutId);
        };
    //eslint-disable-next-line
    }, []);
    const fields = [
        {
            label: " 1. Selecciona una de tus asociaciones a la que quieres apoyar.",
            name: "selectAsociacion",
            required: true,
            type: "subtitle"
        },
        {
            label: " Fecha de Fin",
            name: "end_date",
            required: true,
            type: "select",
            options: raffleDate?.map((date)=>({
                    label: new Date(date.date).toLocaleDateString(),
                    value: date.date
                })),
            customChange: ({ setValue  })=>{
                setValue("start_date", undefined);
            }
        },
        {
            label: " Fecha de Inicio",
            name: "start_date",
            required: true,
            type: "date",
            maxDate: "end_date"
        },
        {
            label: "2. Informacion de tu rifa",
            name: "seubtitle",
            type: "subtitle"
        },
        {
            label: "",
            subLabel: "T\xedtulo de la rifa",
            name: "name",
            required: true,
            type: "text"
        },
        {
            label: "",
            subLabel: "Escribe la frase promocional de tu rifa",
            name: "short_description",
            required: true,
            type: "text"
        },
        {
            label: "",
            subLabel: "Escribe la descripci\xf3n de tu rifa",
            name: "description",
            required: true,
            type: "textarea"
        },
        {
            label: "3. M\xe9todo de entrega",
            name: "seubtitle",
            type: "subtitle"
        },
        {
            label: "Elige como quieres entregar tu premio",
            subLabel: "En persona",
            name: "delivery_type",
            required: true,
            type: "radioButton",
            disabledStyle: true,
            options: [
                {
                    label: "En persona",
                    value: 0
                },
                {
                    label: "Envio por paqueteria",
                    value: 1
                },
                {
                    label: "Acordar con el gandador",
                    value: 2
                }
            ]
        },
        {
            label: "Ficha promocional de tu rifa",
            subLabel: "La ficha promocional se utiliza para promover la rifa en las redes sociales.",
            required: true,
            name: "image",
            type: "file"
        },
        {
            label: "Banner promocional de tu rifa",
            subLabel: "El banner promocional se utiliza para promover la rifa en nuestros cat\xe1logos y micro sitios",
            required: true,
            name: "banner",
            type: "file"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "  px-5 shadow",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "row",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                buttonText: "Continuar",
                submitData: submitData,
                fields: fields,
                loading: false
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ResumeRaffle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_ParseNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6843);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function ResumeRaffle({ register , label , name , required , error , watch  }) {
    const values = watch();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "my-3",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: `form-check-label fw-bold ps-2 fs-6 my-2`,
                children: "Calculadora del costo por boleto"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex justify-content-between  border-bottom  text-secondary  shadow-sm p-2  ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "m-0 text-calculadora-boletos",
                        children: "N\xfamero de boletos"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "m-0 value-calculadora-boletos",
                        children: (0,_utils_ParseNumber__WEBPACK_IMPORTED_MODULE_2__/* .parseNumber */ .p)(values.ticket_number)
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex justify-content-between  border-bottom  text-secondary shadow-sm p-2  ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "m-0 text-calculadora-boletos",
                        children: "Costo por boleto"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "m-0 value-calculadora-boletos",
                        children: [
                            "$ ",
                            (0,_utils_ParseNumber__WEBPACK_IMPORTED_MODULE_2__/* .parseNumber */ .p)(values.ticket_price)
                        ]
                    })
                ]
            }),
            " ",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex justify-content-between  border-bottom  text-secondary shadow-sm p-2 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "m-0 text-calculadora-boletos",
                        children: "Monto a recaudar"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "m-0 value-calculadora-boletos",
                        children: [
                            "$ ",
                            (0,_utils_ParseNumber__WEBPACK_IMPORTED_MODULE_2__/* .parseNumber */ .p)(values.price)
                        ]
                    })
                ]
            }),
            " ",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex justify-content-between  border-bottom  text-secondary shadow-sm p-2 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "m-0 text-calculadora-boletos",
                        children: "Valor del premio"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "m-0 value-calculadora-boletos",
                        children: [
                            "$ ",
                            (0,_utils_ParseNumber__WEBPACK_IMPORTED_MODULE_2__/* .parseNumber */ .p)(values?.prize?.value || 0)
                        ]
                    })
                ]
            }),
            " ",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex justify-content-between  border-bottom  text-secondary shadow-sm p-2 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "m-0 text-calculadora-boletos",
                        children: "Cuota de recuperaci\xf3n"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "m-0 value-calculadora-boletos",
                        children: [
                            "$ ",
                            (0,_utils_ParseNumber__WEBPACK_IMPORTED_MODULE_2__/* .parseNumber */ .p)(values.price - values.price * 0.8)
                        ]
                    })
                ]
            }),
            " ",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex justify-content-between  border-bottom  text-secondary shadow-sm p-2 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "m-0 text-calculadora-boletos",
                        children: "Ingreso total generado"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "m-0 value-calculadora-boletos",
                        children: [
                            "$ ",
                            (0,_utils_ParseNumber__WEBPACK_IMPORTED_MODULE_2__/* .parseNumber */ .p)(values.price - values.price * 0.2)
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " w-100 mb-3 mt-3 "
            })
        ]
    });
}


/***/ }),

/***/ 3044:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ModalCausa)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9306);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FormGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7488);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_slices_raffles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9818);
/* harmony import */ var _ModalSelectCausa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3904);
/* harmony import */ var _store_zustand_CausesStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5140);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FormGenerator__WEBPACK_IMPORTED_MODULE_4__, _store_slices_raffles__WEBPACK_IMPORTED_MODULE_6__, _ModalSelectCausa__WEBPACK_IMPORTED_MODULE_7__, _store_zustand_CausesStore__WEBPACK_IMPORTED_MODULE_8__]);
([_FormGenerator__WEBPACK_IMPORTED_MODULE_4__, _store_slices_raffles__WEBPACK_IMPORTED_MODULE_6__, _ModalSelectCausa__WEBPACK_IMPORTED_MODULE_7__, _store_zustand_CausesStore__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function ModalCausa({ show , setShow , handleSubmit , handleClose , activeSelect  }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const getCauses = (0,_store_zustand_CausesStore__WEBPACK_IMPORTED_MODULE_8__/* .useCausesStore */ .e)((state)=>state.getCauses);
    const { causesCategories , associations  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_store_slices_raffles__WEBPACK_IMPORTED_MODULE_6__/* .selectRaffleState */ .VB);
    const fields = [
        {
            label: " \xbfCual es el titulo de la causa?*",
            name: "name",
            required: true,
            type: "text"
        },
        {
            label: "\xbfCual es la descripcion de la causa?*",
            name: "description",
            required: true,
            type: "textarea"
        },
        {
            label: "\xbfQue categoria describe mejor tu causa?",
            name: "categories",
            required: true,
            type: "select",
            options: causesCategories.map((cause)=>({
                    label: cause.name,
                    value: cause.id
                }))
        },
        {
            label: "\xbfCual es el monto a recaudar (pesos MXN)?*",
            name: "goal",
            required: true,
            type: "number"
        },
        {
            label: "\xbfQuieres asignar tu premio a alguna Asociaci\xf3n?",
            name: "association",
            required: true,
            type: "select",
            options: associations.map((association)=>({
                    label: association.association_name,
                    value: association.id
                }))
        },
        {
            label: "Agrega las fotos de tu causa",
            name: "image",
            required: false,
            type: "file"
        }
    ];
    const submitData = async (data)=>{
        setLoading(true);
        const { payload  } = await dispatch((0,_store_slices_raffles__WEBPACK_IMPORTED_MODULE_6__/* .createRafflesCause */ .Z8)(data));
        setLoading(false);
        if (payload) {
            getCauses(1);
            return handleSubmit({
                type: "cause",
                ...payload
            });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default()), {
        show: show,
        onHide: handleClose,
        className: "custom-modal ",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Body), {
            className: "px-4",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Header), {
                    children: [
                        !activeSelect && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: "title-Modal mx-0 ",
                            children: "Crear una causa"
                        }),
                        activeSelect && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: "title-Modal mx-0 ",
                            children: "Seleccionar causa"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        cursor: "pointer"
                    },
                    className: "fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2",
                    onClick: handleClose,
                    children: "X"
                }),
                !activeSelect && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        fields: fields,
                        submitData: submitData,
                        loading: loading,
                        renderButton: (handleSend)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                className: "row w-100 mx-auto mt-5   ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "border-bottom  border border-dark opacity-50 w-100 "
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex justify-content-end mt-3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-3 p-0 pe-2   ",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    disabled: loading,
                                                    variant: "secondary",
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                        handleClose();
                                                    },
                                                    className: "w-100 text-dark bg-light",
                                                    children: "Cerrar"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-4 p-0 ps-2 ",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    disabled: loading,
                                                    variant: "secondary",
                                                    type: "submit",
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                        handleSend();
                                                    },
                                                    className: "w-100 btn btn-pink",
                                                    children: "Guardar causa"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                    })
                }),
                activeSelect && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalSelectCausa__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    handleSubmit: handleSubmit
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9997:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ModalPremio)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9306);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FormGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7488);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_slices_raffles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9818);
/* harmony import */ var _ModalSelectPremio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5951);
/* harmony import */ var _store_zustand_PremioStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9899);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FormGenerator__WEBPACK_IMPORTED_MODULE_4__, _store_slices_raffles__WEBPACK_IMPORTED_MODULE_6__, _ModalSelectPremio__WEBPACK_IMPORTED_MODULE_7__, _store_zustand_PremioStore__WEBPACK_IMPORTED_MODULE_8__]);
([_FormGenerator__WEBPACK_IMPORTED_MODULE_4__, _store_slices_raffles__WEBPACK_IMPORTED_MODULE_6__, _ModalSelectPremio__WEBPACK_IMPORTED_MODULE_7__, _store_zustand_PremioStore__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function ModalPremio({ show , handleClose , handleSubmit , activeSelect  }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { prizesCategories  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_store_slices_raffles__WEBPACK_IMPORTED_MODULE_6__/* .selectRaffleState */ .VB);
    const { associations  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_store_slices_raffles__WEBPACK_IMPORTED_MODULE_6__/* .selectRaffleState */ .VB);
    const getPremio = (0,_store_zustand_PremioStore__WEBPACK_IMPORTED_MODULE_8__/* .usePremioStore */ .Z)((state)=>state.getPremio);
    const fields = [
        {
            label: " \xbfCu\xe1l es el nombre del premio?*",
            name: "name",
            required: true,
            type: "text"
        },
        {
            label: "\xbfCu\xe1l es la descripci\xf3n del  premio?*",
            name: "description",
            required: true,
            type: "textarea"
        },
        {
            label: "\xbfQu\xe9 categor\xeda describe tu producto?*",
            name: "category",
            required: true,
            type: "select",
            options: prizesCategories.map((prize)=>({
                    label: prize.name,
                    value: prize.id
                }))
        },
        {
            label: "\xbfCu\xe1l es el precio de tu producto (pesos MXN)?*",
            name: "value",
            required: true,
            type: "number"
        },
        {
            label: "\xbfQuieres asignar tu premio a alguna Asociaci\xf3n?",
            name: "association",
            required: false,
            type: "select",
            options: associations.map((association)=>({
                    label: association.association_name,
                    value: association.id
                }))
        },
        {
            label: "\xbfCu\xe1l es la condici\xf3n de tu producto?*",
            name: "status",
            required: true,
            type: "radioButton",
            options: [
                {
                    label: "Nuevo",
                    value: "nuevo"
                },
                {
                    label: "Usado",
                    value: "usado"
                }
            ]
        },
        {
            label: "Agrega las fotos de tu premio",
            name: "image",
            required: false,
            type: "file"
        }
    ];
    const submitData = async (data)=>{
        setLoading(true);
        const { payload  } = await dispatch((0,_store_slices_raffles__WEBPACK_IMPORTED_MODULE_6__/* .createRafflesPrize */ .FL)(data));
        setLoading(false);
        if (payload) {
            getPremio(1);
            return handleSubmit({
                type: "prize",
                ...payload
            });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default()), {
        show: show,
        onHide: handleClose,
        className: "custom-modal ",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Body), {
            className: "px-4",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Header), {
                    children: [
                        !activeSelect && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: "title-Modal",
                            children: "Donar premio"
                        }),
                        activeSelect && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: "title-Modal",
                            children: "Seleccionar premio"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        cursor: "pointer"
                    },
                    className: "fs-4 text-secondary position-absolute top-0 end-0 mx-3 my-2",
                    onClick: handleClose,
                    children: "X"
                }),
                !activeSelect && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        fields: fields,
                        submitData: submitData,
                        loading: loading,
                        renderButton: (handleSend)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                className: "row w-100 mx-auto mt-5   ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "border-bottom  border border-dark opacity-50 w-100 "
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex justify-content-end mt-3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-3 p-0 pe-2   ",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    disabled: loading,
                                                    variant: "secondary",
                                                    onClick: handleClose,
                                                    className: "w-100 text-dark bg-light",
                                                    children: "Cerrar"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-4 p-0 ps-2 ",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    disabled: loading,
                                                    variant: "secondary",
                                                    type: "submit",
                                                    className: "w-100 btn btn-pink",
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                        handleSend();
                                                    },
                                                    children: "Guardar premio"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                    })
                }),
                activeSelect && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModalSelectPremio__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    handleSubmit: handleSubmit
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3904:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ModalSelectCausa)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_logoRifas_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9037);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_zustand_CausesStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5140);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4009);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_zustand_CausesStore__WEBPACK_IMPORTED_MODULE_4__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__]);
([_store_zustand_CausesStore__WEBPACK_IMPORTED_MODULE_4__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function ModalSelectCausa({ handleSubmit  }) {
    const { isLoading , error , causes , getCauses , paginacion , setFilterCauses , filterCauses  } = (0,_store_zustand_CausesStore__WEBPACK_IMPORTED_MODULE_4__/* .useCausesStore */ .e)();
    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [ref, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)({
        triggerOnce: false
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (inView) {
            paginacion && getCauses(paginacion);
        }
    //eslint-disable-next-line
    }, [
        inView
    ]);
    const allCauses = search === "" ? causes : filterCauses;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "",
            children: [
                !!isLoading && !causes.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "m-0",
                    children: "Cargando..."
                }),
                !!error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "m-0 text-danger ",
                    children: "Error al cargar las notificaciones"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    placeholder: "Buscar causa",
                    type: "text",
                    value: search,
                    onChange: (e)=>{
                        setFilterCauses(e.target.value);
                        setSearch(e.target.value);
                    },
                    className: `w-100 form-control my-2 fs-5 m-0 ${error && "border-danger "}`
                }),
                !error && allCauses.map((causes, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex my-4 px-3 row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-10 col-sm-4 p-0 ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    src: causes.image || _assets_img_logoRifas_svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                                    alt: "fondo",
                                    className: " rounded ",
                                    width: 160,
                                    height: 160
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "ms-0 ms-lg-3 col-8 col-sm-7  mt-3 mt-lg-0",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                        children: [
                                            " ",
                                            causes.name
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "d-flex px-1 ",
                                        children: causes.description
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>{
                                            handleSubmit({
                                                type: "cause",
                                                ...causes
                                            });
                                        },
                                        className: "btn btn-pink",
                                        children: "Cambiar Causa"
                                    })
                                ]
                            })
                        ]
                    }, index)),
                search === "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    ref: ref
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5951:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ModalSelectPremio)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_logoRifas_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9037);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_zustand_PremioStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9899);
/* harmony import */ var _utils_ParseNumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6843);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4009);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_zustand_PremioStore__WEBPACK_IMPORTED_MODULE_4__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__]);
([_store_zustand_PremioStore__WEBPACK_IMPORTED_MODULE_4__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function ModalSelectPremio({ handleSubmit  }) {
    const { isLoading , error , premio , getPremio , paginacion , setFilterPremios , filterPremios  } = (0,_store_zustand_PremioStore__WEBPACK_IMPORTED_MODULE_4__/* .usePremioStore */ .Z)();
    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [ref, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)({
        triggerOnce: false
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (inView) {
            paginacion && getPremio(paginacion);
        }
    //eslint-disable-next-line
    }, [
        inView
    ]);
    const allPremios = search === "" ? premio : filterPremios;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "d-flex  mt-3 mt-lg-4 row",
            children: [
                !!isLoading && !premio.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "m-0",
                    children: "Cargando..."
                }),
                !!error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "m-0 text-danger ",
                    children: "Error al cargar las notificaciones"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    placeholder: "Buscar causa",
                    type: "text",
                    value: search,
                    onChange: (e)=>{
                        setFilterPremios(e.target.value);
                        setSearch(e.target.value);
                    },
                    className: `w-100 form-control my-2 fs-5 m-0 ${error && "border-danger "}`
                }),
                !error && allPremios.map((premio, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex row mt-3 mt-lg-4 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-10 col-sm-4  mx-auto mx-sm-0    p-0 ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    src: premio.image || _assets_img_logoRifas_svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                                    alt: "fondo",
                                    className: " rounded ",
                                    width: 160,
                                    height: 160
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "ms-3 ms-lg-3 col-8 col-sm-7  mx-auto  mt-3 mt-lg-0",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                        children: [
                                            " ",
                                            premio.name
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "m-0",
                                        children: [
                                            " ",
                                            premio.description
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "d-flex",
                                        children: [
                                            "Valor del premio:",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "fw-semibold  ms-2",
                                                children: [
                                                    "$ ",
                                                    (0,_utils_ParseNumber__WEBPACK_IMPORTED_MODULE_6__/* .parseNumber */ .p)(Number(premio.value))
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>{
                                            handleSubmit({
                                                type: "prize",
                                                ...premio
                                            });
                                        },
                                        className: "btn btn-pink",
                                        children: "Cambiar premio"
                                    })
                                ]
                            })
                        ]
                    }, index)),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    ref: ref
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 265:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F7": () => (/* binding */ getCausesStore),
/* harmony export */   "I": () => (/* binding */ getSeachPremios),
/* harmony export */   "KZ": () => (/* binding */ getSeachCause)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(444);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_0__]);
___WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getCausesStore = (pagination)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/causes/my_causes/?page=${pagination}`,
        method: "GET"
    });
};
const getSeachCause = (search)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/causes/search/?name=${search}`,
        method: "GET"
    });
};
const getSeachPremios = (search)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/prizes/search/?name=${search}`,
        method: "GET"
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2251:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ getPremioStore)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(444);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_0__]);
___WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getPremioStore = (pagination)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/prizes/?page=${pagination}`,
        method: "GET"
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5140:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ useCausesStore)
/* harmony export */ });
/* harmony import */ var _services_getCauses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(265);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_getCauses__WEBPACK_IMPORTED_MODULE_0__, zustand__WEBPACK_IMPORTED_MODULE_1__]);
([_services_getCauses__WEBPACK_IMPORTED_MODULE_0__, zustand__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const useCausesStore = (0,zustand__WEBPACK_IMPORTED_MODULE_1__.create)((set)=>({
        isLoading: false,
        causes: [],
        filterCauses: [],
        error: false,
        paginacion: 1,
        getCauses: async (pagination)=>{
            set({
                isLoading: true
            });
            const { data  } = await (0,_services_getCauses__WEBPACK_IMPORTED_MODULE_0__/* .getCausesStore */ .F7)(pagination || 1);
            const nextPagination = data.next ? pagination + 1 : null;
            set((state)=>({
                    causes: pagination === 1 ? data.results : [
                        ...state.causes,
                        ...data.results
                    ],
                    isLoading: false,
                    paginacion: nextPagination
                }));
        },
        resetCauses: ()=>{
            set({
                causes: []
            });
        },
        setFilterCauses: async (search)=>{
            set({
                isLoading: true
            });
            const { data  } = await (0,_services_getCauses__WEBPACK_IMPORTED_MODULE_0__/* .getSeachCause */ .KZ)(search);
            set((state)=>({
                    filterCauses: data.results,
                    isLoading: false
                }));
        }
    }));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9899:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ usePremioStore)
/* harmony export */ });
/* harmony import */ var _services_getCauses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(265);
/* harmony import */ var _services_getPremio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2251);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_getCauses__WEBPACK_IMPORTED_MODULE_0__, _services_getPremio__WEBPACK_IMPORTED_MODULE_1__, zustand__WEBPACK_IMPORTED_MODULE_2__]);
([_services_getCauses__WEBPACK_IMPORTED_MODULE_0__, _services_getPremio__WEBPACK_IMPORTED_MODULE_1__, zustand__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const usePremioStore = (0,zustand__WEBPACK_IMPORTED_MODULE_2__.create)((set)=>({
        isLoading: false,
        premio: [],
        error: false,
        filterPremios: [],
        paginacion: 1,
        getPremio: async (pagination)=>{
            set({
                isLoading: true
            });
            const { data  } = await (0,_services_getPremio__WEBPACK_IMPORTED_MODULE_1__/* .getPremioStore */ .q)(pagination || 1);
            const nextPagination = data.next ? pagination + 1 : null;
            set((state)=>({
                    premio: pagination === 1 ? data.results : [
                        ...state.premio,
                        ...data.results
                    ],
                    isLoading: false,
                    paginacion: nextPagination
                }));
        },
        resetPremio: ()=>{
            set({
                premio: [],
                paginacion: 1
            });
        },
        setFilterPremios: async (search)=>{
            set({
                isLoading: true
            });
            const { data  } = await (0,_services_getCauses__WEBPACK_IMPORTED_MODULE_0__/* .getSeachPremios */ .I)(search);
            set((state)=>({
                    filterPremios: data.results,
                    isLoading: false
                }));
        }
    }));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;