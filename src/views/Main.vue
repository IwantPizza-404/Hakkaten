<template>
<div>
    <h2>Posts Feed</h2>
    <button @click="$router.push('/create-post')">Create Post</button>
    <div v-if="posts.length">
    <div v-for="post in posts" :key="post._id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
        <span>Likes: {{ post.likes }}</span>
    </div>
    </div>
    <div v-else>
    <p>No posts available</p>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
data() {
    return {
    posts: [],
    };
},
async created() {
    try {
    const response = await axios.get('http://localhost:5050/api/posts/');
    this.posts = response.data;
    } catch (error) {
    console.error('Failed to fetch posts:', error);
    }
},
};
</script>  