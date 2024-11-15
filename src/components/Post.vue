<script>
import hashtagIcon from './icons/hashtag-icon.vue'
import heartIcon from './icons/heart-icon.vue'
import messageIcon from './icons/message-icon.vue'
import viewIcon from './icons/view-icon.vue'

export default{
    props:{
        post_tag: String,
        post_date: String,
        post_content: Object,
        post_likes: Number,
        post_comments: Number,
        post_views: Number,
    },
    components:{
        hashtagIcon,
        heartIcon,
        messageIcon,
        viewIcon,
    }
}
</script>

<template>
    <article class="post-card">
        <div class="post-wrapp">
            <div class="post-content">
                <div class="post-header">
                    <div class="post-tag">
                        <hashtagIcon/>
                        <span class="post-tag-title">{{ post_tag }}</span>
                    </div>
                    <div class="post-date">
                        {{ post_date }}
                    </div>
                </div>
                <div class="post-body">
                    <h2 class="post-title">{{ post_content[0] }}</h2>
                    <p class="post-caption">{{ post_content[1] }}</p>
                </div>
            </div>
            <div class="post-media">
                <!-- Post image -->
            </div>
        </div>
        <div class="post-action">
            <div class="post-action-left">
                <button class="post-action-btn post-like-btn">
                    <heartIcon/>
                    <span>{{ post_likes }}</span>
                </button>
                <button class="post-action-btn post-comment-btn">
                    <messageIcon/>
                    <span>{{ post_comments }}</span>
                </button>
            </div>
            <div class="post-action-right">
                <div class="post-views">
                    <viewIcon/>
                    <span>{{ post_views }}</span>
                </div>
            </div>
        </div>
    </article>
</template>

<style scoped>
.post-card{
    background: #1A1919;
    border-radius: 20px;
    padding: 20px;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.post-wrapp {
    display: flex;
    gap: 20px;
    align-items: stretch;
}
.post-media{
    display: flex;
    height: 200px;
    background: #D9D9D9;
    aspect-ratio: 1;
    border-radius: 10px;
}
.post-content{
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.post-header{
    display: flex;
    align-items: center;
    gap: 10px;
}
.post-tag{
    display: flex;
    gap: 5px;
    align-items: center;
    height: 25px;
    padding: 0 10px;
    background: #2D2C2C;
    border-radius: 25px;
}
.post-tag-title{
    font-size: 16px;
    font-weight: 500;
}
.post-date{
    font-size: 16px;
    font-weight: 500;
    color: #B0B0B0;
}
.post-body{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    gap: 15px;
}
.post-title{
    font-size: 26px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
    white-space: normal;
}
.post-caption {
    font-size: 20px;
    font-weight: 400;
    line-height: 135%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;
    white-space: normal;
}
.post-action {
    display: flex;
    justify-content: space-between;
}
.post-action-btn{
    display: flex;
    gap: 5px;
    height: 35px;
    padding: 5px;
    border-radius: 30px;
    align-items: center;
    color: #fff;
    font-size: 16px;
}
.post-action-btn:hover{
    color: #B0B0B0;
}
.post-action-left{
    display: flex;
    gap: 20px;
}
.post-action-right{
    display: flex;
    gap: 20px;
}
.post-views{
    display: flex;
    gap: 5px;
    height: 35px;
    padding: 5px;
    align-items: center;
    color: #fff;
    font-size: 16px;
}
</style>