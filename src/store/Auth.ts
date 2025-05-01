import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  isActiveLogIn: true,
  ChangeIsActiveLogIn: () =>
    set((state) => ({ isActiveLogIn: !state.isActiveLogIn })),
}));
