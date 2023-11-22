"use strict";
exports.id = 697;
exports.ids = [697];
exports.modules = {

/***/ 3697:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ab": () => (/* binding */ getDashboardPrizeUser),
/* harmony export */   "An": () => (/* binding */ getDashboardWallet),
/* harmony export */   "ED": () => (/* binding */ getMicrosite),
/* harmony export */   "EH": () => (/* binding */ deleteImagesGallery),
/* harmony export */   "Hd": () => (/* binding */ getDashboardPrize),
/* harmony export */   "Ie": () => (/* binding */ setDashboardDeleteUser),
/* harmony export */   "Kj": () => (/* binding */ getDashboardRaffle),
/* harmony export */   "LG": () => (/* binding */ setDeleteImagePrize),
/* harmony export */   "NP": () => (/* binding */ getSite),
/* harmony export */   "SB": () => (/* binding */ editPrize),
/* harmony export */   "c5": () => (/* binding */ setDashboardAddUser),
/* harmony export */   "eB": () => (/* binding */ getDashboardResumen),
/* harmony export */   "ep": () => (/* binding */ getDashboardUser),
/* harmony export */   "gR": () => (/* binding */ updateMicrosite),
/* harmony export */   "l": () => (/* binding */ getProfileWallet),
/* harmony export */   "ng": () => (/* binding */ setDashboardCreateUser),
/* harmony export */   "p6": () => (/* binding */ getDashboardCause),
/* harmony export */   "qA": () => (/* binding */ createImagesGallery),
/* harmony export */   "qN": () => (/* binding */ setDashboardUpdateUser),
/* harmony export */   "sX": () => (/* binding */ setDeleteImageCause),
/* harmony export */   "xU": () => (/* binding */ setEditCauses),
/* harmony export */   "zQ": () => (/* binding */ getDashboardResumenProfile)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(444);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__]);
([___WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const baseUrl = "https://www.api.rifaconcausa.org" || 0;
const getDashboardCause = (id, pagination)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/associations/${id}/causes/?page=${pagination}`,
        method: "GET"
    });
};
const getDashboardWallet = (id, pagination)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/associations/${id}/refunds/?page=${pagination}`,
        method: "GET"
    });
};
const getProfileWallet = (pagination)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/buying/refunds/?page=${pagination}`,
        method: "GET"
    });
};
const getDashboardPrize = (id, pagination)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/associations/${id}/prizes/?page=${pagination}`,
        method: "GET"
    });
};
const getDashboardPrizeUser = (pagination)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/prizes/my_prizes/?page=${pagination}`,
        method: "GET"
    });
};
const getDashboardResumen = (id)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/associations/${id}/counts/`,
        method: "GET"
    });
};
const getDashboardResumenProfile = ()=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/prizes/get_counts/`,
        method: "GET"
    });
};
const getMicrosite = (asociationId)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/associations/${asociationId}/`,
        method: "GET"
    });
};
const getSite = (slug)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/associations/microsite/?slug=${slug}`,
        method: "GET"
    });
};
const createImagesGallery = (image, associationId)=>{
    const formData = new FormData();
    formData.append("association", associationId);
    if (image) formData.append("file", image);
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(baseUrl + "/association_gallery/", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("sessionToken")}`
        }
    });
};
const deleteImagesGallery = (id)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/association_gallery/${id}`,
        method: "DELETE"
    });
};
const updateMicrosite = (asociationId, asociacion)=>{
    const formData = new FormData();
    formData.append("association_name", asociacion.association_name);
    formData.append("first_name", asociacion.first_name);
    formData.append("last_name", asociacion.last_name);
    formData.append("last_name2", asociacion.last_name2);
    formData.append("rfc", asociacion.rfc);
    formData.append("slug", asociacion.slug);
    formData.append("who", asociacion.who);
    formData.append("what", asociacion.what);
    formData.append("address", asociacion.address);
    formData.append("zip", asociacion.zip);
    formData.append("state", asociacion.state);
    formData.append("province", asociacion.province);
    formData.append("email", asociacion.email);
    formData.append("phone", asociacion.phone);
    formData.append("facebook", asociacion.facebook);
    formData.append("twitter", asociacion.twitter);
    formData.append("instagram", asociacion.instagram);
    formData.append("tiktok", asociacion.tiktok);
    formData.append("youtube", asociacion.youtube);
    formData.append("vimeo", asociacion.vimeo);
    formData.append("linkedin", asociacion.linkedin);
    formData.append("pinterest", asociacion.pinterest);
    if (asociacion.image && asociacion.image[0] && typeof asociacion.image[0] !== "string") formData.append("image", asociacion.image[0]);
    if (asociacion.main_image && asociacion.main_image[0] && typeof asociacion.main_image[0] !== "string") formData.append("main_image", asociacion.main_image[0]);
    if (asociacion.main_image && typeof asociacion.main_image === "object" && !asociacion.main_image.length) {
        formData.append("main_image", "");
    }
    if (asociacion.image && typeof asociacion.image === "object" && !asociacion.image.length) {
        formData.append("image", "");
    }
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].put(baseUrl + `/associations/${asociationId}/`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("sessionToken")}`
        }
    });
};
const getDashboardRaffle = (id)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/associations/${id}/raffles/`,
        method: "GET"
    });
};
const getDashboardUser = (id, pagination)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/associations/${id}/list_helpers/?page=${pagination}`,
        method: "GET"
    });
};
const setDashboardAddUser = (id, payload)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/associations/${id}/add_helper/?email=${payload.email}`,
        method: "POST",
        _data: payload
    });
};
const setDashboardCreateUser = (id, payload)=>{
    const formData = new FormData();
    formData.append("company_name", payload.company_name);
    formData.append("full_name", payload.full_name);
    formData.append("email", payload.email);
    formData.append("password", payload.password);
    if (payload.image[0]) formData.append("image", payload.image[0]);
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(baseUrl + `/associations/${id}/create_helper/?email=${payload.email}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("sessionToken")}`
        }
    });
};
const setDashboardUpdateUser = (id, payload)=>{
    const formData = new FormData();
    formData.append("company_name", payload.company_name);
    formData.append("full_name", payload.full_name);
    formData.append("email", payload.email);
    if (payload.password) formData.append("password", payload.password);
    if (payload.image[0]) formData.append("image", payload.image[0]);
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].put(baseUrl + `/associations/${id}/update_helper/?user_id=${payload.id}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("sessionToken")}`
        }
    });
};
const setDashboardDeleteUser = (id, userId)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/associations/${id}/delete_helper/?user_id=${userId}`,
        method: "DELETE"
    });
};
const setDeleteImageCause = (id)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/causes/${id}/delete_image/`,
        method: "PUT"
    });
};
const setDeleteImagePrize = (id)=>{
    return (0,___WEBPACK_IMPORTED_MODULE_0__/* .Api */ .V)({
        endpoint: `/prizes/${id}/delete_image/`,
        method: "PUT"
    });
};
const setEditCauses = (id, cause)=>{
    const formData = new FormData();
    formData.append("name", cause.name);
    formData.append("description", cause.description);
    formData.append("categories", cause.categories);
    formData.append("goal", cause.goal);
    formData.append("association", cause.association);
    if (cause.image[0]) formData.append("image", cause.image[0]);
    else formData.append("image", "");
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].put(baseUrl + `/causes/${id}/`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("sessionToken")}`
        }
    });
};
const editPrize = (id, donation)=>{
    const formData = new FormData();
    formData.append("name", donation.name);
    formData.append("description", donation.description);
    formData.append("category", donation.category);
    formData.append("status", donation.status);
    formData.append("value", donation.value);
    if (donation.association) formData.append("association", donation.association);
    if (typeof donation.image[0] !== "string" && donation.image[0]) formData.append("image", donation.image[0]);
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].put(baseUrl + `/prizes/${id}/`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("sessionToken")}`
        }
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;