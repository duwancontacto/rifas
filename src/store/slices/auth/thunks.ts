import {
  createAsociacion,
  getMyAssociations,
  getUserProfile,
  loginFacebookUser,
  loginGoogleUser,
  loginUser,
  refreshToken,
  registerUser,
  updateAsociacion,
  updateUserProfile,
} from "@/services/auth";
import { RootState } from "@/store";
import { Auth, FacebookAuth, GoogleAuth, Profile } from "@/types/Model/Profile";
import { handleError } from "@/utils/handleError";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const PREFIX: string = "auth";
export const Register = createAsyncThunk(
  `${PREFIX}/register`,
  async (
    Profile: Profile,
    thunkAPI
  ): Promise<{ test: boolean } | undefined> => {
    try {
      const { data } = await registerUser(Profile);

      /* await thunkAPI.dispatch(
        Login({ email: Profile.email, password: Profile.password })
      ); */

      return data;
    } catch (error) {
      handleError(error);
    }
  }
);
export const Login = createAsyncThunk(
  `${PREFIX}/login`,
  async (auth: Auth, thunkAPI): Promise<{ test: boolean } | undefined> => {
    try {
      const { data } = await loginUser(auth);
      await localStorage.setItem("sessionToken", data.access);
      await localStorage.setItem("sessionTokenRefresh", data.refresh);

      const profile = await getUserProfile();

      const associations = await getMyAssociations();

      if (associations.data.results.length > 0)
        profile.data.hasAssociation = true;

      return { ...data, ...profile.data };
    } catch (error) {
      handleError(error);
    }
  }
);

export const LoginGoogle = createAsyncThunk(
  `${PREFIX}/login`,
  async (
    auth: GoogleAuth,
    thunkAPI
  ): Promise<{ test: boolean } | undefined> => {
    try {
      const { data } = await loginGoogleUser(auth);
      await localStorage.setItem("sessionToken", data.access);
      await localStorage.setItem("sessionTokenRefresh", data.refresh);

      const profile = await getUserProfile();

      const associations = await getMyAssociations();

      if (associations.data.results.length > 0)
        profile.data.hasAssociation = true;

      return { ...data, ...profile.data };
    } catch (error) {
      handleError(error);
    }
  }
);
export const LoginFacebook = createAsyncThunk(
  `${PREFIX}/login`,
  async (
    auth: FacebookAuth,
    thunkAPI
  ): Promise<{ test: boolean } | undefined> => {
    try {
      const { data } = await loginFacebookUser(auth);
      await localStorage.setItem("sessionToken", data.access);
      await localStorage.setItem("sessionTokenRefresh", data.refresh);

      const profile = await getUserProfile();

      const associations = await getMyAssociations();

      if (associations.data.results.length > 0)
        profile.data.hasAssociation = true;

      return { ...data, ...profile.data };
    } catch (error) {
      handleError(error);
    }
  }
);
export const CreateAsociacion = createAsyncThunk(
  `${PREFIX}/create-asociacion`,
  async (Asociacion: any, thunkAPI): Promise<{} | undefined> => {
    try {
      const { auth } = thunkAPI.getState() as RootState;
      const { id } = auth.profile || { id: null };

      Asociacion.user = id?.toString();

      const result = await createAsociacion(Asociacion);

      return {};
    } catch (error) {
      handleError(error);
    }
  }
);

export const UpdateProfile = createAsyncThunk(
  `${PREFIX}/update_profile`,
  async (ProfilePayload: any, thunkAPI): Promise<{} | undefined> => {
    try {
      const result = await updateUserProfile(ProfilePayload);

      const profile = await getUserProfile();

      return profile.data;
    } catch (error) {
      handleError(error);
    }
  }
);

export const UpdateAsociacion = createAsyncThunk(
  `${PREFIX}/asociacion`,
  async (Asociacion: any, thunkAPI): Promise<{} | undefined> => {
    try {
      const { auth } = thunkAPI.getState() as RootState;
      const { id } = auth.profile || { id: null };

      Asociacion.user = id?.toString();

      const result = await updateAsociacion(Asociacion);

      toast.success("Se actualizo el perfil con exito!!");

      return result.data;
    } catch (error) {
      handleError(error);
    }
  }
);
export const ValidateSession = createAsyncThunk(
  `${PREFIX}/login`,
  async (auth: any, thunkAPI): Promise<{ test: boolean } | undefined> => {
    try {
      const access = await localStorage.getItem("sessionToken");
      const refresh = await localStorage.getItem("sessionTokenRefresh");

      const refreshResponse = await refreshToken(refresh || "");

      const profile = await getUserProfile();

      const associations = await getMyAssociations();

      if (associations.data.results.length > 0)
        profile.data.hasAssociation = true;

      localStorage.setItem("sessionToken", refreshResponse.data.access);

      const data = { refresh, access: refreshResponse.data.access };

      return { ...data, ...profile.data };
    } catch (error) {
      //handleError(error)
      await localStorage.removeItem("sessionToken");
      await localStorage.removeItem("sessionTokenRefresh");
    }
  }
);
