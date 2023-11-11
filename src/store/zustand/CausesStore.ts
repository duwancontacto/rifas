import { getAllNotifications } from "@/services/notification";
import { getCausesStore, getSeachCause } from "@/services/getCauses";
import { create } from "zustand";

interface CausesStore {
  isLoading: boolean;
  causes: any[];
  filterCauses: any[];
  error: boolean;
  getCauses: (pagination: number) => Promise<void>;
  setFilterCauses: (search: string) => Promise<void>;
  setCreatedCauses: (id: number) => void;
  resetCauses: () => void;
  paginacion: number | null;
  createdCauses: number[];
}

export const useCausesStore = create<CausesStore>((set) => ({
  isLoading: false,
  causes: [],
  filterCauses: [],
  error: false,
  paginacion: 1,
  createdCauses: [],
  getCauses: async (pagination: number) => {
    set({ isLoading: true });

    const { data } = await getCausesStore(pagination || 1);

    const nextPagination = data.next ? pagination + 1 : null;

    set((state) => ({
      causes:
        pagination === 1 ? data.results : [...state.causes, ...data.results],
      isLoading: false,
      paginacion: nextPagination,
    }));
  },
  resetCauses: () => {
    set({ causes: [] });
  },

  setCreatedCauses: (id: number) => {
    set((state) => ({
      createdCauses: [...state.createdCauses, id],
    }));
  },

  setFilterCauses: async (search: string) => {
    set({ isLoading: true });

    const { data } = await getSeachCause(search);

    set((state) => ({
      filterCauses: data.results,
      isLoading: false,
    }));
  },
}));
