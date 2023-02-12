<template>
  <!-- main container -->
  <v-container>
    <v-row>
      <v-col class="flex-column justify-center text-center">
        <!-- welcome message -->
        <h1 class="font-weight-bold">Welcome back</h1>
        <h4>Please enter your details.</h4>
        <v-row>
          <v-col class="px-6 pt-9 pb-0">
            <!-- public key text input -->
            <p class="text-body-2 font-weight-bold text-left pb-1">Public Key</p>
            <v-text-field density="compact" label="enter your public key" variant="outlined" single-line></v-text-field>
            <!-- private key text input -->
            <p class="text-body-2 font-weight-bold text-left pb-1">Private Key</p>
            <v-text-field density="compact" type="password" label="or enter your private key" variant="outlined"
              single-line></v-text-field>
          </v-col>
        </v-row>
        <v-row class="my-0">
          <v-col class="py-0">
            <!-- remember me checkbox -->
            <v-checkbox v-model="checkbox">
              <template v-slot:label>
                <p class="text-body-2 font-weight-bold">Remember me</p>
              </template>
            </v-checkbox>
            <v-row>
              <v-col class="mx-3 py-0">
                <!-- sign in button -->
                <v-btn color="primary" block>Sign In</v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mx-3 py-6">
                <!-- Don't have an account? Sign up -->
                <p>Don't have an account? <span class="link_text text-primary" @click="signUp">Sign up</span></p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>




      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    checkbox: ''
  }),

  methods: {
    signIn() {

    },
    signUp() {
    }
  },
}
</script>

<style scoped>
:deep() .v-field__outline__start {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

:deep() .v-field__outline__end {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.link_text {
  cursor: pointer;
}
</style>