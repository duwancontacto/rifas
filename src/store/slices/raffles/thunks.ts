
import { createDonations, getAssociationsApproveds, getRaffles } from "@/services/raffles";
import { RootState } from "@/store";
import { Donation, Profile } from "@/types/Model/Profile";
import { handleError } from "@/utils/handleError";
import {createAsyncThunk} from "@reduxjs/toolkit";
import { Console } from "console";
const PREFIX: string = "raffles";


export const Raffles = createAsyncThunk(
  `${PREFIX}/raffles`,
  async (
    Profile: any,
    thunkAPI
  ): Promise<{} | undefined> => {

    try {
      const result =  await getRaffles(); 
      return result.data.results
    } catch (error) {
      handleError(error)
    }
  }
);
export const GetAssociations = createAsyncThunk(
  `${PREFIX}/associations`,
  async (
    Profile: any,
    thunkAPI
  ): Promise<{} | undefined> => {

    try {
      const result =  await getAssociationsApproveds(); 

      return result.data
    } catch (error) {
      handleError(error)
    }
  }
);
export const Donations = createAsyncThunk(
  `${PREFIX}/donations`,
  async (
    donation: any,
    thunkAPI
  ): Promise<{} | undefined> => {

    try {

      const {raffles, auth} = thunkAPI.getState() as RootState

      const dataDonation = {...raffles.donationForm1,...raffles.donationFrom2, created_by: auth?.profile?.id}

      dataDonation.status = dataDonation.status === "on" ? 1 : 0


      dataDonation.association =  Number(dataDonation.association)

      if(dataDonation.association === 0) delete(dataDonation.association)

      
      dataDonation.category =  Number(dataDonation.category)
       const result =  await createDonations(dataDonation); 
      return result.data 

    } catch (error) {

      handleError(error)
    }
  }
);




