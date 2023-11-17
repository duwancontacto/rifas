import { Auth, FacebookAuth, GoogleAuth, Profile } from "@/types/Model/Profile";
import { Api } from ".";

import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

export const registerUser = (profile: Profile) => {
  return Api({
    endpoint: "/profile/register_profile/",
    method: "POST",
    _data: {
      ...profile,
    },
  });
};
export const loginUser = (auth: Auth) => {
  return Api({
    endpoint: "/auth/JWT",
    method: "POST",
    _data: {
      ...auth,
    },
  });
};
export const loginGoogleUser = (auth: GoogleAuth) => {
  return Api({
    endpoint: "/profile/google/",
    method: "POST",
    _data: {
      ...auth,
    },
  });
};
export const loginFacebookUser = (auth: FacebookAuth) => {
  return Api({
    endpoint: "/profile/facebook/",
    method: "POST",
    _data: {
      ...auth,
    },
  });
};
export const getUserProfile = () => {
  return Api({
    endpoint: "/profile/show_profile",
    method: "GET",
  });
};

export const updateUserProfile = (profilePayload: any) => {
  const formData = new FormData();
  formData.append("company_name", profilePayload.company_name);
  formData.append("full_name", profilePayload.full_name);
  formData.append("email", profilePayload.email);

  if (profilePayload.image[0])
    formData.append("image", profilePayload.image[0]);

  return axios.put(baseUrl + "/profile/update_profile/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("sessionToken")}`,
    },
  });
};
export const refreshToken = (refresh: String) => {
  return Api({
    endpoint: "/auth/JWT/refresh/",
    method: "POST",
    _data: {
      refresh,
    },
  });
};

export const postEmail = (email: String) => {
  return Api({
    endpoint: `/resert_password/`,
    method: "POST",
    _data: {
      email,
    },
  });
};

export const postValidateAccount = (code: String) => {
  return Api({
    endpoint: `/activation/${code}/activate`,
    method: "GET",
  });
};

export const getMyAssociations = () => {
  return Api({
    endpoint: `/associations/`,
    method: "GET",
  });
};

export const createAsociacion = (asociacion: any) => {
  const formData = new FormData();
  formData.append("association_name", asociacion.association_name);
  formData.append("email", asociacion.email);
  formData.append("first_name", asociacion.first_name);
  formData.append("last_name", asociacion.last_name);
  formData.append("last_name2", asociacion.last_name2);
  formData.append("account_owner", asociacion.account_owner);
  formData.append("n_account", asociacion.n_account);
  formData.append("bank", asociacion.bank);
  formData.append("clabe", asociacion.clabe);
  formData.append("phone", asociacion.phone);
  formData.append("regime", asociacion.regime);
  formData.append("rfc", asociacion.rfc);

  formData.append("user", asociacion.user);

  formData.append("address", asociacion.address);
  formData.append("zip", asociacion.zip);
  formData.append("state", asociacion.state);
  formData.append("province", asociacion.province);

  formData.append("video", "");

  formData.append(
    "association_address",
    asociacion.fiscal_address2 ? asociacion.association_address : ""
  );
  formData.append(
    "association_zip",
    asociacion.fiscal_address2 ? asociacion.association_zip : ""
  );
  formData.append(
    "association_state",
    asociacion.fiscal_address2 ? asociacion.association_state : ""
  );
  formData.append(
    "association_province",
    asociacion.fiscal_address2 ? asociacion.association_province : ""
  );

  if (asociacion.image[0]) formData.append("image", asociacion.image[0]);

  return axios.post(baseUrl + "/associations/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("sessionToken")}`,
    },
  });
};

export const updateAsociacion = (asociacion: any) => {
  const formData = new FormData();
  formData.append("association_name", asociacion.association_name);
  formData.append("email", asociacion.email);
  formData.append("first_name", asociacion.first_name);
  formData.append("last_name", asociacion.last_name);
  formData.append("last_name2", asociacion.last_name2);
  formData.append("account_owner", asociacion.account_owner);
  formData.append("n_account", asociacion.n_account);
  formData.append("bank", asociacion.bank);
  formData.append("clabe", asociacion.clabe);
  formData.append("phone", asociacion.phone);
  formData.append("regime", asociacion.regime);
  formData.append("rfc", asociacion.rfc);
  formData.append("user", asociacion.user);

  formData.append("address", asociacion.address);
  formData.append("zip", asociacion.zip);
  formData.append("state", asociacion.state);
  formData.append("province", asociacion.province);

  formData.append(
    "association_address",
    asociacion.fiscal_address2 ? asociacion.association_address : ""
  );
  formData.append(
    "association_zip",
    asociacion.fiscal_address2 ? asociacion.association_zip : ""
  );
  formData.append(
    "association_state",
    asociacion.fiscal_address2 ? asociacion.association_state : ""
  );
  formData.append(
    "association_province",
    asociacion.fiscal_address2 ? asociacion.association_province : ""
  );

  if (asociacion.image[0]) formData.append("image", asociacion.image[0]);

  return axios.put(baseUrl + `/associations/${asociacion.id}/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("sessionToken")}`,
    },
  });
};
