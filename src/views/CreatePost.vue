<template>
    <div>
      <h2>Create Post</h2>
      <input v-model="title" placeholder="Title" />
      <textarea v-model="content" placeholder="Content"></textarea>
      <button @click="createPost">Submit</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        title: '',
        content: '',
      };
    },
    methods: {
      async createPost() {
        try {
          const token = localStorage.getItem('token');
          await axios.post(
            'http://localhost:5050/api/posts/',
            { title: this.title, content: this.content },
            { headers: { Authorization: `Bearer ${token}` } }
          );
          this.$router.push('/main');
        } catch (error) {
          console.error('Failed to create post:', error);
        }
      },
    },
  };
  </script>
  