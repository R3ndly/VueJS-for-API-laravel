<template>
  <div class="container">
    <div class="card-1 login__form">
      <h1 class="text-center">Вход</h1><br>

        <form @submit.prevent="handleSubmit">
            <input
              v-model="form.name"
              type="name"
              class="form-control"
              placeholder="Name"
              required
            >

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
                <router-link to='/login'>Вход</router-link>
            </div>

            <button
              type="submit"
              class="btn btn-primary"
              :disabled="loading"
            >
              {{ loading ? 'Вход...' : 'Регистрация' }}
            </button>
        </form>
    </div>
</div>
</template>
