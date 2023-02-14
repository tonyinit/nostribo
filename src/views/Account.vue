<template>
  <!-- main container -->
  <v-container class="px-0">

    <!-- header element -->
    <v-card color="transparent">

      <!-- logo, nostribo, messages? -->
      <v-row>
        <v-col class="mx-3 mt-3">
          <v-row>
            <v-col class="d-flex align-center">
              <v-img src="../assets/nostribo.svg" max-width="30px"></v-img>
              <span class="text-h5 pl-1">Nostribo</span>
            </v-col>
            <v-col class="d-flex justify-end align-center">
              <v-btn class="rounded-lg bordered" color="card" icon="mdi-message-outline"></v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

    </v-card>
  </v-container>
</template>

<script>

export default {
  data: () => ({}),

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