import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('auth_token') || null,
    user: JSON.parse(localStorage.getItem('user_data')) || null,
    error: null,
    loading: false
  }),
  actions: {
    async login(email, password) {
      this.loading = true;
      this.error = null;

      try {
        await fetch('http://localhost/sanctum/csrf-cookie', {
          credentials: 'include'
        });

        const response = await fetch('http://localhost/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message || 'Ошибка авторизации');
        }

        const { token, user } = await response.json();
        this.token = token;
        this.user = user;
        localStorage.setItem('auth_token', token);
        localStorage.setItem('user_data', JSON.stringify(user));

      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },
    async logout() {
      await fetch('http://localhost/api/logout', {
        method: 'POST',
        credentials: 'include'
      });

      this.token = null;
      this.user = null;
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user_data');
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.token
  }
});
