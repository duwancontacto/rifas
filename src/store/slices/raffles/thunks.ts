import {
  createCause,
  createCauseGallery,
  createDonations,
  createNewRaffle,
  createPrizeGallery,
  getAssociationsApproveds,
  getCausesCategories,
  getPrizebyId,
  getPrizesCategories,
  getRaffle,
  getRaffleTickets,
  getRaffles,
  updateGalleryCause,
  updateGalleryPrize,
  validateApplyCoupon,
} from "@/services/raffles";
import { RootState } from "@/store";
import { handleError } from "@/utils/handleError";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { setCausesCategories, setPrizesCategories, setRaffle } from ".";
import { RafflesI } from "@/types/Model/Raffle";
import { deleteReservedTickets, getReservedTickets } from "@/services/Payments";
const PREFIX: string = "raffles";

export const Raffles = createAsyncThunk(
  `${PREFIX}/raffles`,
  async (Profile: any, thunkAPI): Promise<{} | undefined> => {
    try {
      const result = await getRaffles();

      return result.data.results;
    } catch (error) {
      handleError(error);
    }
  }
);
export const GetAssociations = createAsyncThunk(
  `${PREFIX}/associations`,
  async (Profile: any, thunkAPI): Promise<{} | undefined> => {
    try {
      const result = await getAssociationsApproveds();

      return result.data.results;
    } catch (error) {
      handleError(error);
    }
  }
);
export const GetRaffle = createAsyncThunk(
  `${PREFIX}/raffle`,
  async (raffleId: string | string[], thunkAPI): Promise<{} | undefined> => {
    try {
      thunkAPI.dispatch(setRaffle(null));
      const result = await getRaffle(raffleId);

      const raffleTickets = await getRaffleTickets(raffleId);
      const prize = await getPrizebyId(result.data.prize);

      thunkAPI.dispatch(
        setRaffle({
          ...result.data,
          ticketUnavailable: raffleTickets.data,
          prizeData: prize.data,
        })
      );

      return result.data;
    } catch (error) {
      handleError(error);
    }
  }
);

export const Donations = createAsyncThunk(
  `${PREFIX}/donations-create`,
  async (donation: any, thunkAPI): Promise<{} | undefined> => {
    try {
      const { raffles } = thunkAPI.getState() as RootState;

      const dataDonation = {
        ...raffles.donationForm1,
        ...raffles.donationFrom2,
      };

      dataDonation.status = dataDonation.status === "on" ? 1 : 0;

      dataDonation.association = Number(dataDonation.association);

      if (
        dataDonation.association === 0 ||
        dataDonation.association === undefined
      )
        delete dataDonation.association;

      dataDonation.category = Number(dataDonation.category);
      const result = await createDonations(dataDonation);

      const petitions: any[] = [];
      if (dataDonation.image && dataDonation.image.length > 1) {
        dataDonation.image.map((gallery: any) =>
          petitions.push(createPrizeGallery(gallery, result.data.id))
        );

        const resultGallery = await Promise.all(petitions);

        await updateGalleryPrize(result.data.id, {
          gallery: resultGallery.map((gallery) => gallery.data.id),
          name: dataDonation.name,
          value: dataDonation.value,
        });
      }

      return result.data;
    } catch (error) {
      handleError(error);
    }
  }
);

export const createRafflesCause = createAsyncThunk(
  `${PREFIX}/causes`,
  async (cause: any, thunkAPI): Promise<{} | undefined> => {
    try {
      cause.categories = [Number(cause.categories)];
      cause.association = Number(cause.association);

      let result: any;
      result = await createCause(cause);

      const petitions: any[] = [];
      if (cause.image && cause.image.length > 0) {
        cause.image.map((gallery: any) =>
          petitions.push(createCauseGallery(gallery, result.data.id))
        );

        const resultGallery = await Promise.all(petitions);

        result = await updateGalleryCause(result.data.id, {
          gallery: resultGallery.map((gallery) => gallery.data.id),
          goal: cause.goal,
          association: cause.association,
          name: cause.name,
          categories: cause.categories,
        });
      }

      return result.data;
    } catch (error) {
      handleError(error);
    }
  }
);

export const createRafflesPrize = createAsyncThunk(
  `${PREFIX}/prizes`,
  async (prize: any, thunkAPI): Promise<{} | undefined> => {
    try {
      prize.status = prize.status === "on" ? 1 : 0;

      prize.association = Number(prize.association);

      if (prize.association === 0 || prize.association === undefined)
        delete prize.association;

      prize.category = Number(prize.category);

      let result: any;
      result = await createDonations(prize);

      if (prize.image && prize.image.length > 0) {
        const petitions: any[] = [];
        prize.image.map((gallery: any) =>
          petitions.push(createPrizeGallery(gallery, result.data.id))
        );

        const resultGallery = await Promise.all(petitions);

        result = await updateGalleryPrize(result.data.id, {
          gallery: resultGallery.map((gallery) => gallery.data.id),
          name: prize.name,
          value: prize.value,
        });
      }

      return result.data;
    } catch (error) {
      handleError(error);
    }
  }
);

export const getCategories = createAsyncThunk(
  `${PREFIX}/prizes`,
  async (prize: any, thunkAPI): Promise<{} | undefined> => {
    try {
      const causesResult = await getCausesCategories();
      const prizesResult = await getPrizesCategories();

      thunkAPI.dispatch(setCausesCategories(causesResult.data.results));
      thunkAPI.dispatch(setPrizesCategories(prizesResult.data.results));

      return {};
    } catch (error) {
      handleError(error);
    }
  }
);
export const createRaffle = createAsyncThunk(
  `${PREFIX}/create-raffles`,
  async (raffle: RafflesI, thunkAPI): Promise<{} | undefined> => {
    try {
      const payload = { ...raffle };
      if (typeof payload?.prize === "object")
        payload.prize = payload?.prize?.id.toString();
      if (typeof payload?.cause === "object")
        payload.cause = payload?.cause?.id.toString();
      const raffleResult = await createNewRaffle(payload);

      return raffleResult.data;
    } catch (error) {
      handleError(error);
    }
  }
);

export const validateCoupon = createAsyncThunk(
  `${PREFIX}/validate-coupon`,
  async (coupon: string, thunkAPI): Promise<{} | undefined> => {
    try {
      const { raffles } = thunkAPI.getState() as RootState;

      const result = await validateApplyCoupon(
        coupon,
        raffles?.raffle?.id || 0
      );

      return result.data;
    } catch (error) {
      handleError(error);
    }
  }
);
