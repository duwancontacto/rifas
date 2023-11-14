"use strict";
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 2521:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RifasActivas)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8278);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1598);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4751);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_img_logoRifas_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3037);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store_slices_raffles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9818);
/* harmony import */ var _utils_ParseNumber__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6843);
/* harmony import */ var _utils_truncateText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_slices_raffles__WEBPACK_IMPORTED_MODULE_11__]);
_store_slices_raffles__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














function RifasActivas({ all , rafflesCustom  }) {
    const slider = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const { raffles , causesCategories  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(_store_slices_raffles__WEBPACK_IMPORTED_MODULE_11__/* .selectRaffleState */ .VB);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const [selectedCategory, setSelectedCategory] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    const settings = {
        dots: true,
        infinite: false,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    let filterRaffles = (rafflesCustom || raffles).filter((raffle)=>(!selectedCategory || raffle.categories[0].id === selectedCategory) && raffle.status === 1);
    const getPercetRaised = (raffle)=>{
        const meta = Number(raffle?.ticket_number) * Number(raffle?.ticket_price);
        const raisedPercent = (raffle?.raised || 0) * 100 / meta;
        return raisedPercent.toFixed(2);
    };
    if (!(rafflesCustom || raffles).length) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mt-3 mx-3 mx-lg-0  ",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: ` mx-3 ${!all && "mx-lg-5"} `,
            style: {
                marginBottom: "120px"
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "d-flex  m-0  ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: " raffles-title lh-1 m-0",
                            children: "Rifas activas"
                        }),
                        !all && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: " raffles-subtitle ms-4 mt-1  ",
                            onClick: ()=>router.push(`/rifas`),
                            style: {
                                cursor: "pointer"
                            },
                            children: "Ver todas las rifas"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " raffles-navbar d-flex flex-wrap fw-light my-3 ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            style: {
                                cursor: "pointer"
                            },
                            onClick: ()=>setSelectedCategory(null),
                            className: "me-5",
                            children: "Todas"
                        }),
                        causesCategories?.map((category, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    cursor: "pointer"
                                },
                                onClick: ()=>setSelectedCategory(category.id),
                                className: "me-5",
                                children: category.name
                            }, index))
                    ]
                }),
                all ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "d-flex flex-wrap justify-content-start ",
                    children: filterRaffles.map((raffle, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-3 col-lg-3  mt-4  mx-0 shadow card-raffle mx-2",
                            style: {
                                maxWidth: "309px",
                                width: "100%",
                                height: "100%"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    width: 100,
                                    height: 100,
                                    src: raffle.image || _assets_img_logoRifas_jpeg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                    className: "w-100 h-100",
                                    style: {
                                        maxHeight: "200px",
                                        objectFit: "contain"
                                    },
                                    alt: ""
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "p-3 px-3",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                            className: "raffles-title-card  ",
                                            children: [
                                                " ",
                                                (0,_utils_truncateText__WEBPACK_IMPORTED_MODULE_12__/* .truncateText */ .a)(raffle.name, 40)
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "card-text raffles-subtitle-card lh-sm",
                                            children: (0,_utils_truncateText__WEBPACK_IMPORTED_MODULE_12__/* .truncateText */ .a)(raffle.description, 70)
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "card-text  raffles-subtitle-card  p-0  ",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdAccessTime, {
                                                    size: 20,
                                                    className: "mb-1 me-2 opacity-75 "
                                                }),
                                                getPercetRaised(raffle),
                                                "%",
                                                " ",
                                                (0,_utils_ParseNumber__WEBPACK_IMPORTED_MODULE_13__/* .parseNumber */ .p)(raffle?.raised || 0),
                                                " recaudado"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            disabled: Number(getPercetRaised(raffle)) === 100,
                                            onClick: ()=>router.push(`/rifas/${raffle.id}`),
                                            className: "btn fs-6 btn-pink w-100",
                                            children: "Comprar boleto"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "btn fs-6 btn-border-pink w-100 mt-2",
                                            onClick: ()=>router.push(`/rifas/detalles/${raffle.id}`),
                                            children: "Ver detalles"
                                        })
                                    ]
                                })
                            ]
                        }, index))
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "px-2 px-md-5 position-relative  ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "position-absolute  buttonPrevious-RifasActivas ",
                            onClick: ()=>{
                                slider?.current?.slickPrev();
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowBack, {
                                color: "#C3286D",
                                className: "iconPreviousNext"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                            ref: slider,
                            ...settings,
                            className: "  ",
                            children: filterRaffles.map((raffle, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "slide-container-raffle mt-4 mt-md-0 py-3",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mx-2 shadow card-raffle-slide",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                width: 100,
                                                height: 100,
                                                src: raffle.image || _assets_img_logoRifas_jpeg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                                className: "w-100 h-100",
                                                style: {
                                                    maxHeight: "200px",
                                                    objectFit: "contain"
                                                },
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "p-3 px-3",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                        className: "raffles-title-card  ",
                                                        children: [
                                                            " ",
                                                            (0,_utils_truncateText__WEBPACK_IMPORTED_MODULE_12__/* .truncateText */ .a)(raffle.name, 40)
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "card-text raffles-subtitle-card lh-sm",
                                                        children: (0,_utils_truncateText__WEBPACK_IMPORTED_MODULE_12__/* .truncateText */ .a)(raffle.description, 70)
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "card-text  raffles-subtitle-card  p-0  ",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdAccessTime, {
                                                                size: 20,
                                                                className: "mb-1 me-2 opacity-75 "
                                                            }),
                                                            getPercetRaised(raffle),
                                                            "%",
                                                            " ",
                                                            (0,_utils_ParseNumber__WEBPACK_IMPORTED_MODULE_13__/* .parseNumber */ .p)(raffle?.raised || 0),
                                                            " recaudado"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        disabled: Number(getPercetRaised(raffle)) === 100,
                                                        onClick: ()=>router.push(`/rifas/${raffle.id}`),
                                                        className: "btn fs-6 btn-pink w-100",
                                                        children: "Comprar boleto"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "btn fs-6 btn-border-pink w-100 mt-2",
                                                        onClick: ()=>router.push(`/rifas/detalles/${raffle.id}`),
                                                        children: "Ver detalles"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, index))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "position-absolute  buttonNext-RifasActivas ",
                            onClick: ()=>{
                                slider?.current?.slickNext();
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowForward, {
                                color: "#C3286D",
                                className: "iconPreviousNext"
                            })
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ truncateText)
/* harmony export */ });
const truncateText = (text, maxLength)=>{
    // Si el texto es más largo que maxLength, cortarlo y añadir puntos suspensivos.
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};


/***/ })

};
;