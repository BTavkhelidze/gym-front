import axios from 'axios';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  avatar: string;
  firstName: string;
  lastName: string;
  email: string;
  membershipId?: {
    endDate: string;
    membershipPlan: string;
    startDate: string;
    status: string;
    userId: string;
    visitsLeft: number;
  };
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isActiveLogIn: boolean;
  error: string | null;
  setUser: (user: User | null) => void;
  fetchUser: () => Promise<void>;
  logout: () => Promise<void>;
  ChangeIsActiveLogIn: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isActiveLogIn: true,
      user: null,
      isLoading: false,
      error: null,

      ChangeIsActiveLogIn: () =>
        set((state) => ({
          isActiveLogIn: !state.isActiveLogIn,
        })),

      setUser: (user) => set({ user }),

      fetchUser: async () => {
        try {
          set({ isLoading: true, error: null });

          const response = await axios.get('/api/current-user', {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
            },
            timeout: 10000,
          });

          set({
            user: response.data.data || null,
            isLoading: false,
            error: null,
          });
        } catch (err) {
          console.error('Error fetching user:', err);

          if (axios.isAxiosError(err)) {
            set({
              error:
                err.response?.status === 401
                  ? 'Session expired. Please log in again.'
                  : err.response?.data?.message || 'Authentication failed',
              isLoading: false,
              user: null,
            });
          } else {
            set({
              error: 'Network error',
              isLoading: false,
            });
          }
        }
      },

      logout: async () => {
        try {
          await axios.post('/api/auth/logout', null, {
            withCredentials: true,
          });
        } finally {
          set({ user: null, error: null });
        }
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user
          ? {
              id: state.user.id,
              firstName: state.user.firstName,
              lastName: state.user.lastName,
              avatar: state.user.avatar,
            }
          : null,
      }),
    }
  )
);
