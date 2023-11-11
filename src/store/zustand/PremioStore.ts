import { getCausesStore, getSeachPremios } from "@/services/getCauses";
import { getPremioStore } from "@/services/getPremio";
import { create } from "zustand";

interface PremioStore {
  isLoading: boolean;
  premio: any[];
  error: boolean;
  filterPremios: any[];
  getPremio: (pagination: number) => Promise<void>;
  setFilterPremios: (search: string) => Promise<void>;
  resetPremio: () => void;
  setCreatedPrizes: (id: number) => void;
  paginacion: number | null;
  createdPrizes: number[];
}

export const usePremioStore = create<PremioStore>((set) => ({
  isLoading: false,
  premio: [],
  error: false,
  filterPremios: [],
  paginacion: 1,
  createdPrizes: [],
  getPremio: async (pagination: number) => {
    set({ isLoading: true });

    const { data } = await getPremioStore(pagination || 1);

    const nextPagination = data.next ? pagination + 1 : null;

    set((state) => ({
      premio:
        pagination === 1 ? data.results : [...state.premio, ...data.results],
      isLoading: false,
      paginacion: nextPagination,
    }));
  },
  resetPremio: () => {
    set({ premio: [], paginacion: 1 });
  },

  setCreatedPrizes: (id: number) => {
    set((state) => ({
      createdPrizes: [...state.createdPrizes, id],
    }));
  },

  setFilterPremios: async (search: string) => {
    set({ isLoading: true });

    const { data } = await getSeachPremios(search);

    set((state) => ({
      filterPremios: data.results,
      isLoading: false,
    }));
  },
}));
