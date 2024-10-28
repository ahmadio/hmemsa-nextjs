import { create } from "zustand";

interface DonationModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useDonationModal = create<DonationModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));