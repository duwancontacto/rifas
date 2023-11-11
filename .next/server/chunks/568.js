"use strict";
exports.id = 568;
exports.ids = [568];
exports.modules = {

/***/ 4568:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ useAsociatonsStoreDashboard),
/* harmony export */   "p": () => (/* binding */ useRaffleStoreDashboard)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
/* harmony import */ var _services_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3697);
/* harmony import */ var _services_raffles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3843);
/* harmony import */ var _utils_handleError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9956);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__, _services_dashboard__WEBPACK_IMPORTED_MODULE_1__, _services_raffles__WEBPACK_IMPORTED_MODULE_2__, _utils_handleError__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__]);
([zustand__WEBPACK_IMPORTED_MODULE_0__, _services_dashboard__WEBPACK_IMPORTED_MODULE_1__, _services_raffles__WEBPACK_IMPORTED_MODULE_2__, _utils_handleError__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const useRaffleStoreDashboard = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({
        isLoading: false,
        raffle: [],
        error: false,
        rafflePurchase: [],
        paginacion: 1,
        getRaffle: async (id)=>{
            set({
                isLoading: true
            });
            const { data  } = await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .getDashboardRaffle */ .Kj)(id);
            set({
                raffle: data.results,
                isLoading: false
            });
        },
        getRafflesPurchase: async (pagination)=>{
            try {
                set({
                    isLoading: true
                });
                const { data  } = await (0,_services_raffles__WEBPACK_IMPORTED_MODULE_2__/* .getRafflesPurchase */ .bN)(pagination || 1);
                const nextPagination = data.next ? pagination + 1 : null;
                set((state)=>({
                        rafflePurchase: pagination === 1 ? data.results : [
                            ...state.rafflePurchase,
                            ...data.results
                        ],
                        isLoading: false,
                        paginacion: nextPagination
                    }));
            } catch (error) {}
        }
    }));
const useAsociatonsStoreDashboard = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({
        isLoading: false,
        asociations: [],
        resumen: [],
        error: false,
        wallets: [],
        pagination: 1,
        paginationProfile: 1,
        user: [],
        resumenProfile: [],
        microsite: null,
        site: null,
        walletsProfile: [],
        getAsociations: async ()=>{
            set({
                isLoading: true
            });
            const { data  } = await (0,_services_raffles__WEBPACK_IMPORTED_MODULE_2__/* .getAssociationsApproveds */ .fM)();
            set({
                asociations: data.results,
                isLoading: false
            });
        },
        getWallet: async (id, pagination)=>{
            set({
                isLoading: true
            });
            const { data  } = await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .getDashboardWallet */ .An)(id, pagination);
            const nextPagination = data.next ? pagination + 1 : null;
            set((state)=>({
                    wallets: pagination === 1 ? data.results : [
                        ...state.wallets,
                        ...data.results
                    ],
                    isLoading: false,
                    pagination: nextPagination
                }));
        },
        getWalletProfile: async (pagination)=>{
            set({
                isLoading: true
            });
            const { data  } = await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .getProfileWallet */ .l)(pagination);
            const nextPagination = data.next ? pagination + 1 : null;
            set((state)=>({
                    walletsProfile: pagination === 1 ? data.results : [
                        ...state.walletsProfile,
                        ...data.results
                    ],
                    isLoading: false,
                    paginationProfile: nextPagination
                }));
        },
        getUser: async (id, pagination)=>{
            try {
                set({
                    isLoading: true
                });
                const { data  } = await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .getDashboardUser */ .ep)(id, pagination);
                const nextPagination = data.next ? pagination + 1 : null;
                set((state)=>({
                        user: pagination === 1 ? data.results : [
                            ...state.user,
                            ...data.results
                        ],
                        isLoading: false,
                        pagination: nextPagination
                    }));
            } catch (error) {}
        },
        setAddUser: async (id, payload)=>{
            try {
                set({
                    isLoading: true
                });
                await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .setDashboardAddUser */ .c5)(id, payload);
                set((state)=>({
                        isLoading: false
                    }));
                return true;
            } catch (error) {
                (0,_utils_handleError__WEBPACK_IMPORTED_MODULE_3__/* .handleError */ .S)(error);
                set((state)=>({
                        isLoading: false
                    }));
                return false;
            }
        },
        setCreateUser: async (id, payload)=>{
            try {
                set({
                    isLoading: true
                });
                await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .setDashboardCreateUser */ .ng)(id, payload);
                set((state)=>({
                        isLoading: false
                    }));
                return true;
            } catch (error) {
                (0,_utils_handleError__WEBPACK_IMPORTED_MODULE_3__/* .handleError */ .S)(error);
                set((state)=>({
                        isLoading: false
                    }));
                return false;
            }
        },
        setEditUser: async (id, payload)=>{
            try {
                set({
                    isLoading: true
                });
                await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .setDashboardUpdateUser */ .qN)(id, payload);
                set((state)=>({
                        isLoading: false
                    }));
                return true;
            } catch (error) {
                (0,_utils_handleError__WEBPACK_IMPORTED_MODULE_3__/* .handleError */ .S)(error);
                set((state)=>({
                        isLoading: false
                    }));
                return false;
            }
        },
        setRemoveUser: async (id, userId)=>{
            try {
                set({
                    isLoading: true
                });
                await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .setDashboardDeleteUser */ .Ie)(id, userId);
                set((state)=>({
                        isLoading: false
                    }));
                return true;
            } catch (error) {
                (0,_utils_handleError__WEBPACK_IMPORTED_MODULE_3__/* .handleError */ .S)(error);
                set((state)=>({
                        isLoading: false
                    }));
                return false;
            }
        },
        getResumen: async (id)=>{
            set({
                isLoading: true
            });
            const { data  } = await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .getDashboardResumen */ .eB)(id);
            set({
                resumen: data,
                isLoading: false
            });
        },
        getResumenProfile: async ()=>{
            try {
                set({
                    isLoading: true
                });
                const { data  } = await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .getDashboardResumenProfile */ .zQ)();
                set({
                    resumenProfile: data,
                    isLoading: false
                });
            } catch (error) {}
        },
        getSite: async (slug)=>{
            try {
                set({
                    isLoading: true
                });
                const { data  } = await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .getSite */ .NP)(slug);
                set({
                    site: data,
                    isLoading: false
                });
            } catch (error) {}
        },
        getMicrosite: async (asociationId)=>{
            try {
                set({
                    isLoading: true
                });
                const { data  } = await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .getMicrosite */ .ED)(asociationId);
                set({
                    microsite: data,
                    isLoading: false
                });
            } catch (error) {}
        },
        updateMicrosite: async (asociationId, payload)=>{
            try {
                set({
                    isLoading: true
                });
                if (payload.images.length > 0) {
                    const petitions = [];
                    payload.images.map((gallery)=>petitions.push((0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .createImagesGallery */ .qA)(gallery, payload.id.toString())));
                    const resultGallery = await Promise.all(petitions);
                    payload.images = resultGallery.map((gallery)=>gallery.data.id);
                }
                const petitionsOld = [];
                payload.oldImages.map((image)=>petitionsOld.push((0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .deleteImagesGallery */ .EH)(image.id)));
                await Promise.all(petitionsOld);
                const { data  } = await (0,_services_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .updateMicrosite */ .gR)(asociationId, payload);
                react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"].success("Se actualizo el micrositio con exito!!");
                set({
                    microsite: data,
                    isLoading: false
                });
            } catch (error) {}
        }
    }));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;