import { getFaq } from "@/services/notification";
import { create } from "zustand";

interface IFaq {
  faq: any[];
  loading: boolean;
  getFaq: () => Promise<void>;
}

export const useFaqStore = create<IFaq>((set) => ({
  faq: [],
  loading: false,

  getFaq: async () => {
    set({ loading: true });

    const { data } = await getFaq();

    set({
      faq: data.results,
      loading: false,
    });
  },
}));
