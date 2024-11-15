<script>
import Post from "@/components/Post.vue"
export default {
  data() {
    return {
      posts: [
        {
          tag: 'volunteer',
          date: '14 Nov 2024',
          content: ['Volunteer start-up in Tashkent', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium blanditiis incidunt eligendi ducimus, aut quisquam voluptate consequatur officiis rerum aspernatur ipsam maxime laboriosam dolore culpa ea illo, ratione atque iusto ipsum, similique soluta obcaecati?'],
          likes: 15,
          comments: 16,
          views: 17,
        }
      ],
    }
  },
  components: {
    Post
  },
  methods: {
    
  }
};
</script>

<template>
  <div class="main-container">
    <main class="main">
      <Post
        v-for="(post, index) in posts"
        :key="index"
        :post_tag="post.tag"
        :post_date="post.date"
        :post_content="post.content"
        :post_likes="post.likes"
        :post_comments="post.comments"
        :post_views="post.views"
      />
    </main>
    <div class="right-side-bar">

    </div>
  </div>
</template>

<style scoped>
.main-container{
  display: flex;
  gap: 25px;
}
.main{
  position: relative;
  display: flex;
  gap: 15px;
  padding: 20px;
  height: 150vh;
  flex: 1;
  max-height: 835px;
  min-height: 500px;
  overflow: hidden;
}
.right-side-bar{
  min-width: 250px;
  width: 250px;
}
</style>