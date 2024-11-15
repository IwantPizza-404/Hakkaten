<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="credentials.email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="credentials.password"
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const credentials = ref({ email: '', password: '' });
    const message = ref('');

    const handleLogin = async () => {
      try {
        const response = await axios.post(
          'http://localhost:5050/api/users/loginByEmail',
          credentials.value
        );
        const { token } = response.data;

        // Сохраняем токен в localStorage
        localStorage.setItem('token', token);

        // Перенаправляем пользователя на главную страницу
        router.push('/');
      } catch (error) {
        console.error('Ошибка входа:', error);
        message.value = 'Неверные данные для входа. Пожалуйста, попробуйте снова.';
      }
    };

    return { credentials, handleLogin, message };
  },
};
</script>

<style scoped>
.login-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: #1A1919;
  border-radius: 8px;
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ddd;
  color: #fff;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

p {
  color: red;
  text-align: center;
}
</style>
