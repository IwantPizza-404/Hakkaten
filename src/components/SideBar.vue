<script>
import fireIcon from './icons/fire-icon.vue';
import homeIcon from './icons/home-icon.vue';

export default {
    data() {
        return {
            sidebar_links: [
                {
                    name: 'Home',
                    view_url: '/',
                    icon: 'homeIcon',
                },
                {
                    name: 'Popular',
                    view_url: '/popular',
                    icon: 'fireIcon',
                },
            ],
        }
    },
    components: {
        homeIcon,
        fireIcon,
    },
    methods: {
        route(url) {
            if (url) {
                this.$router.push(url);
            }
        },
        isActive(viewUrl) {
            // Normalize paths and compare
            return this.normalizePath(this.$route.path) === this.normalizePath(viewUrl);
        },
        normalizePath(path) {
            return path.replace(/\/$/, ''); // Remove trailing slash if it exists
        },
        
    },
};
</script>

<template>
    <div class="side-bar-container">
        <aside class="side-bar">
            <nav class="sb-nav">
                <ul class="sb-menu">
                    <li 
                        v-for="(sidebar_link, index) in sidebar_links" 
                        @click="route(sidebar_link.view_url)" 
                        :key="index" 
                        :class="{'sb_link': true, 'active': isActive(sidebar_link.view_url)}"
                    >
                        <component :is="sidebar_link.icon" />
                        <span>
                            {{ sidebar_link.name }}
                        </span>
                    </li>
                </ul>
            </nav>
        </aside>
    </div>
</template>

<style scoped>
.side-bar-container{
    display: flex;
    border-right: 1px solid var(--border-color);
    width: 270px;
    z-index: 2;
}
.side-bar {
    height: calc(100vh - 70px);
    width: 100%;
    padding: 0 25px;
    background: var(--bg-color);
    overflow-y: auto;
    position: sticky;
    top: 70px;
    display: flex;
    flex-direction: column;
    z-index: 1;
}
.sb-nav {
    display: flex;
    flex-direction: column;
    padding: 35px 0;
}
.logo {
    display: flex;
    padding: 0 30px;
    align-items: center;
    font-size: 25px;
    font-weight: 600;
    height: 65px;
}
.sb-menu {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.sb_link {
    position: relative;
    display: flex;
    align-items: center;
    background: #1A1919;
    border-radius: 50px;
    padding: 0 25px;
    height: 50px;
    gap: 10px;
    cursor: pointer;
    color: #B1B1B1;
}
.sb_link.active {
    background: #fff;
    color: #000;
}
.sb_link.active span {
    color: inherit;
}
.sb_link.active svg {
    stroke: #000;
}
.sb_link span {
    color: #B1B1B1;
    font-size: 20px;
    font-weight: 500;
}
.sb_link svg {
    color: currentColor;
}
</style>