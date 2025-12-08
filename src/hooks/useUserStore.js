import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create(
  persist(
    (set) => ({
      phone: '',

      setPhone: (phone) => set({ phone }),

      clearPhone: () => set({ phone: '' }),
    }),
    {
      name: 'user-phone',
      getStorage: () => localStorage,
    },
  ),
);
