import { create } from "zustand";

type UiState = {
  readonly isMobileNavOpen: boolean;
  readonly toggleMobileNav: () => void;
  readonly closeMobileNav: () => void;
};

export const useUiStore = create<UiState>((set) => ({
  isMobileNavOpen: false,
  toggleMobileNav: () => set((state) => ({ isMobileNavOpen: !state.isMobileNavOpen })),
  closeMobileNav: () => set({ isMobileNavOpen: false })
}));
