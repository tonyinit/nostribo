<template>
  <v-main class="body_background">
    <router-view />
  </v-main>
  <v-bottom-navigation class="bottom_nav" :bg-color="color">
    <v-btn icon="mdi-home"></v-btn>
    <v-btn icon="mdi-magnify"></v-btn>
    <v-btn>
      <v-icon size="x-large">mdi-plus-circle</v-icon>
    </v-btn>
    <v-btn icon="mdi-bell-outline"></v-btn>
    <v-btn>
      <v-avatar size="small" color="grey-darken-3"
        image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-avatar>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({ value: 1 }),

  computed: {
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