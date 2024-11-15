<script>
import { RouterView } from "vue-router";

import SideBar from '@/components/SideBar.vue'
import TopBar from '@/components/Header.vue'

export default {
  data(){
    return{
    }
  },
  components: {
    SideBar,
    TopBar,
  },
  methods:{
    
  }
}
</script>

<template>
  <div class="horizontal-grid">
    <TopBar v-if="$route.meta.showUI"/>
    <div class="vertical-grid">
      <SideBar v-if="$route.meta.showUI"/>
      <div class="content-wrapp">
        <RouterView/>
      </div>
    </div>
  </div>
</template>

<style>
.vertical-grid{
  display: flex;
  flex-direction: row;
}
.horizontal-grid{
  display: flex;
  flex-direction: column;
}
.content-wrapp{
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}
</style>