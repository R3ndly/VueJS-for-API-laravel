<template>
    <div class="header">
      <router-link to="/" class="header__title">
        <span>Smart Home - ваш умный дом</span>
      </router-link>

      <nav class="nav-menu">
        <router-link to="/about">О нас</router-link>

        <template v-if="authStore.isAuthenticated">
          <router-link to="/products">Товары</router-link>
          <router-link to="/vacancies">Вакансии</router-link>
          <router-link class="btn btn-primary" to="/cart">Корзина</router-link>
        </template>

        <div class="dropdown" v-if="authStore.isAuthenticated" @click="toggleDropdown">
          <button class="btn btn-primary" type="button">
            {{ authStore.user.name }}
          </button>
          <ul class="dropdown-menu" v-if="isDropdownOpen">
            <li>
              <button @click="logout" class="btn btn-primary dropdown-item">Выйти</button>
            </li>
          </ul>
        </div>
        <router-link v-else to="/login" class="btn btn-primary">Войти</router-link>
      </nav>
    </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth';

export default {
  data() {
    return {
      isDropdownOpen: false,
      authStore: useAuthStore()
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown(e) {
      if (!this.$el.contains(e.target)) {
        this.isDropdownOpen = false;
      }
    },
    logout() {
      this.authStore.logout();
      this.isDropdownOpen = false;
    }
  },
  mounted() {
    document.addEventListener('click', this.closeDropdown);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closeDropdown);
  }
}
</script>
