<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="loginUser">
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
import axios from "axios";

export default {
    setup() {
        const router = useRouter();
        const credentials = ref({ email: '', password: '' });

        const handleLogin = async () => {
            try {
                const response = await axios.post('http://localhost:5050/api/users/login', credentials.value);
                const { token } = response.data;

                localStorage.setItem('authToken', token); // Save token
                alert('Login successful!');
                router.push('/'); // Navigate to homepage
            } catch (error) {
                console.error('Login error:', error);
                alert('Login failed!');
            }
        };

        return { credentials, handleLogin };
    },
};
</script>

<style>
/* Add your styles here */
</style>
