"use strict";
exports.id = 657;
exports.ids = [657];
exports.modules = {

/***/ 9338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/gente-rifada.5e869620.png","height":396,"width":506,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR4nAHGADn/AZXG+wDRIQQLIc3mFCgJ9i0U9BbrtvAOIBsRAKkH580EAfjLlAD/48xNxOYcPhEMGfAqKgUgusXCAFCaGXwA14vpAfCx2i3k0bG2GltPGNnd5gTfyLQAJDU189/K0a9Xf4aFAcNvlY4ke15xEPfyALyxo/8pQkT+/dXw/+UAAgQC7e6ZAc3U7ZcXFQdoGOq4/QIA1QMBEBcA5sz//usmWQIHEQqrAcHC0ZT36OVrFQvc+xAO/QIA/vwA7PAL/e7+KwYJDgmL0QNd/a5xEd0AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ 8682:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Rifa)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_bg_iconos_rifa_destacada_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3131);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8510);
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_lu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_img_logoRifas_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3037);
/* harmony import */ var _utils_ParseNumber__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6843);
/* harmony import */ var _utils_getDays__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2514);
/* harmony import */ var _store_zustand_RaffleStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1047);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6158);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_share__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Chart_PercentChart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_zustand_RaffleStore__WEBPACK_IMPORTED_MODULE_8__]);
_store_zustand_RaffleStore__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













function Rifa({ all  }) {
    const raffleFeature = (0,_store_zustand_RaffleStore__WEBPACK_IMPORTED_MODULE_8__/* .useRaffleStore */ .Z)((state)=>state.raffleFeature);
    const isLoading = (0,_store_zustand_RaffleStore__WEBPACK_IMPORTED_MODULE_8__/* .useRaffleStore */ .Z)((state)=>state.isLoading);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const raffle = raffleFeature;
    if (!raffle || isLoading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "my-4"
    });
    const shareUrl = `${"https://www.rifaconcausa.org"}/rifas/detalles/${raffle.id}`;
    const title = raffle.name;
    const meta = Number(raffle?.ticket_number) * Number(raffle?.ticket_price);
    const raisedPercent = (raffle?.raised || 0) * 100 / meta;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: " ",
        style: {
            marginBottom: "100px"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: ` mt-5 mb-5 mx-0 ${!all && "mx-lg-0"} container-destacada position-relative p-4`,
            children: [
                !all && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: _assets_img_bg_iconos_rifa_destacada_jpg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                    alt: "fondodestacada",
                    className: "img-fluid position-absolute top-0 start-0 w-100 h-100 rounded"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: " raffle-title mt-5 mt-md-3 ",
                    children: "Rifa Destacada"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: " raffe-text mt-2 mb-3   ",
                    children: raffle.name
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "d-flex justify-content-between row m-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6  position-relative m-0 ",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                src: raffle.image || _assets_img_logoRifas_jpeg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                alt: "fondo",
                                className: " w-100 h-100 ",
                                width: 100,
                                height: 100
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: " col-lg-6  ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "fs-3 mt-4 mt-md-0 raffle-container-title",
                                    children: "Recaudado"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "raffle-container-textinformation3",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Chart_PercentChart__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            percentage: raisedPercent
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "ps-2 m-0 raffle-container-textinformation  ",
                                            children: [
                                                raisedPercent,
                                                "%"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "m-0 ms-0 ms-lg-4 raffle-container-textinformation  ",
                                            children: [
                                                "$ ",
                                                (0,_utils_ParseNumber__WEBPACK_IMPORTED_MODULE_11__/* .parseNumber */ .p)(raffle?.raised || 0)
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "raffle-container-title   fs-3",
                                    children: [
                                        "La meta es de ",
                                        (0,_utils_ParseNumber__WEBPACK_IMPORTED_MODULE_11__/* .parseNumber */ .p)(meta),
                                        " MXN"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: " border-bottom border-2  my-2 position-relative "
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "d-flex  justify-content-between text-start me-3 pt-3  ",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    className: " raffle-container-textinformation2",
                                                    children: "Costo por boleto"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: " raffle-container-value fw-semibold  ",
                                                    children: [
                                                        "$",
                                                        (0,_utils_ParseNumber__WEBPACK_IMPORTED_MODULE_11__/* .parseNumber */ .p)(Number(raffle.ticket_price))
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    className: "raffle-container-textinformation2",
                                                    children: "Numero de boletos"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "raffle-container-value fw-semibold  ",
                                                    children: raffle.ticket_number
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "d-flex justify-content-start ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            disabled: raisedPercent === 100,
                                            className: "btn btn-pink btn-sm border col-6 button-rifaDestacada  ",
                                            onClick: ()=>router.push(`/rifas/${raffle.id}`),
                                            children: "Comprar boletos"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "btn btn-border-pink btn-sm col-6 ms-1   button-rifaDestacada ",
                                            onClick: ()=>router.push(`/rifas/detalles/${raffle.id}`),
                                            children: "Ver detalles"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: " border-bottom border-2  my-3 position-relative "
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "d-flex  justify-content-between text-start me-3   ",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    className: " raffle-container-finish",
                                                    children: "La rifa termina en:"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: " raffle-container-value lh-1  m-0 fw-bold",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_lu__WEBPACK_IMPORTED_MODULE_4__.LuCalendarDays, {
                                                            color: "#5C5C5C",
                                                            className: "mb-1"
                                                        }),
                                                        " ",
                                                        (0,_utils_getDays__WEBPACK_IMPORTED_MODULE_12__/* .getDays */ .g)(raffle.end_date),
                                                        " dias"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    className: "raffle-container-finish",
                                                    children: "Compartir:"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_9__.FacebookShareButton, {
                                                    url: shareUrl,
                                                    quote: title,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsFacebook, {
                                                        color: " #C3286D",
                                                        size: 25,
                                                        className: "mx- position-relative 2"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_9__.TwitterShareButton, {
                                                    url: shareUrl,
                                                    title: title,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsTwitter, {
                                                        color: " #C3286D",
                                                        size: 25,
                                                        className: "mx-2  position-relative "
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_9__.EmailShareButton, {
                                                    url: shareUrl,
                                                    subject: title,
                                                    body: "body",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdEmail, {
                                                        color: "#C3286D",
                                                        size: 25,
                                                        className: "mx-2  position-relative "
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_9__.WhatsappShareButton, {
                                                    url: shareUrl,
                                                    title: title,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsWhatsapp, {
                                                        color: "#C3286D",
                                                        size: 25,
                                                        className: "mx-2  position-relative "
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;