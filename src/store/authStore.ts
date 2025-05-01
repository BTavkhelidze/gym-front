// lib/authStore.ts
import { create } from 'zustand';

type User = { id: string; name: string } | null;

interface AuthState {
  user: User;
  setUser: (user: User) => void;
  fetchUser: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  fetchUser: async () => {
    try {
      const response = await fetch('/api/current-user', {
        credentials: 'include',
      });
      const data = await response.json();
      set({ user: data.user || null });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ user: null });
    }
  },
  logout: async () => {
    await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
    set({ user: null });
  },
}));
