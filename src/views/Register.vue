<template>
  <div class="register-form">
    <h2>Register</h2>
    <form @submit.prevent="registerUser">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="user.username" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="user.email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="user.password" required />
      </div>
      <div>
        <label for="phone_number">Phone Number:</label>
        <input type="text" id="phone_number" v-model="user.phone_number" />
      </div>
      <button type="submit">Register</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";
    
export default {
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
        phone_number: "",
      },
      message: "",
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await axios.post(
          "http://localhost:5050/api/users/register",
          this.user
        );
        this.message = response.data.message;
        if (response.status === 201) {
            this.$router.push("/login"); // Redirect to login page
        }
      } catch (error) {
        this.message =
          error.response?.data?.message || "Error registering user.";
      }
    },
  },
};
</script>

<style>
/* Add your styles here */
</style>
