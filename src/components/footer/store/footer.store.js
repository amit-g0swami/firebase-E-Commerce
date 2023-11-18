import { create } from "zustand";

const useFooterStore = create((set) => ({
  footerString: null,
  setFooterString: (footerString) => set({ footerString }),
}));

export default useFooterStore;
