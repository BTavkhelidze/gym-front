import axios from 'axios';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type User = { id: string; name: string } | null;

interface AuthState {
  user: User;
  isLoading: true | false;
  isActiveLogIn: boolean;
  setUser: (user: User) => void;
  fetchUser: () => Promise<void>;
  logout: () => Promise<void>;
  ChangeIsActiveLogIn: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isActiveLogIn: true,
      ChangeIsActiveLogIn: () =>
        set((state) => ({ isActiveLogIn: !state.isActiveLogIn })),
      user: null,
      isLoading: true,
      setUser: (user) => set({ user }),
      fetchUser: async () => {
        set({ isLoading: true });
        try {
          const response = await axios.get('/api/current-user', {
            withCredentials: true,
            headers: { 'Content-Type': 'application/json' },
          });
          set({ user: response.data.data || null, isLoading: false });
        } catch (err) {
          console.log(err);
          set({ user: null, isLoading: false });
        }
      },
      logout: async () => {
        await fetch('/api/auth/logout', {
          method: 'POST',
          credentials: 'include',
        });
        set({ user: null });
      },
    }),
    {
      name: 'auth-storage', // key for localStorage
      partialize: (state) => ({ user: state.user }), // only persist user
    }
  )
);
