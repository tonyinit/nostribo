<template>
  <!-- main container -->
  <v-container class="px-0">

    <!-- header element -->
    <v-card color="transparent">

      <v-row>
        <v-col class="mx-3 pb-0">
          <p class="text-body-1 font-weight-thin text-center">Explore Nostr</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="mx-3 ">
          <v-text-field prepend-inner-icon="mdi-magnify" density="compact" variant="outlined" hide-details
            clearable></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="my-0 pt-0">
          <v-tabs v-model="tab" color="primary">
            <v-tab v-for="item in items" :key="item" :value="item">
              {{ item }}
            </v-tab>
          </v-tabs>
        </v-col>
      </v-row>

    </v-card>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    tab: null,
    items: [
      'Top', 'Accounts', 'Categories', 'Tags',
    ],
  }),

  methods: {

  },
  async mounted() {

  }
}
</script>

<style scoped>
.post_card {
  background-color: #0e1219;
  border-radius: 20px;
}

.font_size_18 {
  font-size: 18px !important;
}

.font-spacing-sm {
  letter-spacing: 0px;
}

.bordered {
  border: 1px solid #2c304c;
}
</style>