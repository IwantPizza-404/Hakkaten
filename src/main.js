import './assets/css/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import { createPinia } from 'pinia';

const app = createApp(App);

// Установка базового URL для Axios
axios.defaults.baseURL = 'http://localhost:6060';

// Настройка интерсептора для автоматической передачи JWT токена
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// Глобальное свойство для Axios
app.config.globalProperties.$axios = axios;

// Использование Pinia для управления состоянием
const pinia = createPinia();
app.use(pinia);

// Подключение роутера
app.use(router);

// Регистрация глобальных компонентов (пример)
// import MyButton from './components/MyButton.vue';
// app.component('MyButton', MyButton);

// Монтирование приложения
app.mount('#app');