import axios from 'axios';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Membership {
  endDate: string;
  membershipPlan: string;
  startDate: string;
  status: string;
  userId: string;
  visitsLeft: number;
}

interface User {
  id: string;
  avatar: string;
  firstName: string;
  lastName: string;
  email: string;
  membershipId?: Membership;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isActiveLogIn: boolean;
  error: string | null;
  isRedirecting: boolean;
  setUser: (user: User | null) => void;
  fetchUser: (tempToken?: string) => Promise<boolean>;
  logout: () => Promise<void>;
  ChangeIsActiveLogIn: () => void;
  setIsRedirecting: (isRedirecting: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isActiveLogIn: true,
      user: null,
      isLoading: false,
      error: null,
      isRedirecting: false,

      ChangeIsActiveLogIn: () =>
        set((state) => ({ isActiveLogIn: !state.isActiveLogIn })),

      setUser: (user) => set({ user }),
      setIsRedirecting: (isRedirecting) => set({ isRedirecting }),

      fetchUser: async (tempToken?: string) => {
        // Skip if already loading
        if (get().isLoading) return false;

        set({ isLoading: true, error: null });

        try {
          const headers: Record<string, string> = {
            'Content-Type': 'application/json',
          };

          // Add temporary token if provided
          if (tempToken) {
            headers['Authorization'] = `Bearer ${tempToken}`;
          }

          const response = await axios.get<User>('/api/current-user', {
            withCredentials: true,
            headers,
            timeout: 10000,
          });

          set({
            user: response.data || null,
            isLoading: false,
            error: null,
            isRedirecting: false,
          });
          return true;
        } catch (err) {
          console.error('Error fetching user:', err);

          const errorMessage = axios.isAxiosError(err)
            ? err.response?.status === 401
              ? 'Session expired. Please log in again.'
              : err.response?.data?.message || 'Authentication failed'
            : 'Network error';

          set({
            error: errorMessage,
            isLoading: false,
            user: null,
          });
          return false;
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
