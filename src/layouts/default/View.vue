<template>
  <v-main class="body_background">
    <router-view />
  </v-main>
  <v-bottom-navigation v-if="isAuthenticated" class="bottom_nav" :bg-color="color">
    <v-btn value="/" to="/" icon="mdi-home" exact></v-btn>
    <v-btn value="search" to="/search" icon="mdi-magnify"></v-btn>
    <v-btn>
      <v-icon size="x-large">mdi-plus-circle</v-icon>
    </v-btn>
    <v-btn value="notifications" to="/notifications" icon="mdi-bell-outline"></v-btn>
    <v-btn value="account" to="/account">
      <v-avatar size="small" color="grey-darken-3">
        <v-img :src=storeApp.picture></v-img>
      </v-avatar>
    </v-btn>
</v-bottom-navigation>
</template>

<script>
import { useAppStore } from '@/store/app';
export default {
  setup() {
    const storeApp = useAppStore();
    return {
      storeApp,
    }
  },
  data: () => ({ value: 1 }),

  computed: {
    isAuthenticated() {
      return localStorage.getItem('publickey');
    },
    color() {
      switch (this.value) {
        default: return 'blue-grey'
      }
    },
  },
}
</script>

<style scoped>
.body_background {
  background: radial-gradient(at top right, #070a28, #04080f)
}

.bottom_nav {
  background: radial-gradient(at bottom, #233d5c, #04080f)
}
</style>