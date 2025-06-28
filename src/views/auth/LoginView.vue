<template>
<div class="container">
    <div class="card-1 login__form">
      <h1 class="text-center">Вход</h1><br>

        <form @submit.prevent="handleSubmit">
            <input
              v-model="form.email"
              type="email"
              class="form-control"
              placeholder="Email"
              required
            >
            <div class="invalid-feedback">{{ error }}</div>

            <input
              v-model="form.password"
              type="password"
              class="form-control"
              placeholder="Пароль"
              required
            >

            <div class="mb-3">
                <router-link to='/register'>Регистрация</router-link>
            </div>

            <button
              type="submit"
              class="btn btn-primary"
              :disabled="loading"
              >
              {{ loading ? 'Вход...' : 'Войти' }}
            </button>
        </form>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const authStore = useAuthStore();

const form = ref({
  email: '',
  password: ''
});
const error = ref('');
const loading = ref(false);

const handleSubmit = async () => {
  loading.value = true;
  error.value = '';

  try {
    await authStore.login(form.value.email, form.value.password);
    router.push('/');
  } catch (err) {
    error.value = err.message || 'Ошибка авторизации';
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped src="@/assets/home.css">
@import './pageBD.css';
</style>

<style scoped>
/* Новые стили взамен Bootstrap */
.container {
    display: flex;
    justify-content: center;
}

.card-1 {
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    width: 100%;
    max-width: 400px;
}

.text-center {
    text-align: center;
}

.mb-3 {
    margin-bottom: 1rem;
}

.form-control {
    display: block;
    width: 100%;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin-bottom: 1rem;
}

.form-control:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.invalid-feedback {
    width: 100%;
    margin-top: -0.75rem;
    margin-bottom: 1rem;
    font-size: 80%;
    color: #dc3545;
    display: none;
}

.btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
                border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    width: 100%;
}

.btn-primary:hover {
    background-color: #0069d9;
    border-color: #0062cc;
}

.login__form {
   margin-top: 100px;
}
</style>
