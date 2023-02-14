<template>
  <!-- main container -->
  <v-container>
    <v-row>
      <v-col class="flex-column justify-center text-center">
        <!-- welcome message -->
        <h1 class="font-weight-bold">Welcome back</h1>
        <h4>Please enter your details.</h4>

        <!-- public/private key inputs -->
        <v-row>
          <v-col class="px-6 pt-9 pb-0">
            <!-- public key text input -->
            <p class="text-body-2 font-weight-bold text-left pb-1">Public Key</p>
            <v-text-field v-model="publickey" density="compact" label="enter your public key" variant="outlined"
              single-line></v-text-field>
            <!-- private key text input -->
            <p class="text-body-2 font-weight-bold text-left pb-1">Private Key</p>
            <v-text-field v-model="privatekey" density="compact" type="password" label="or enter your private key"
              variant="outlined" single-line></v-text-field>
          </v-col>
        </v-row>

        <!-- remember me checkbox -->
        <v-row class="my-0">
          <v-col class="py-6">

            <!-- sign in button -->
            <v-row>
              <v-col class="mx-3 py-0">
                <v-btn color="primary" block @click="signIn">Sign Up</v-btn>
              </v-col>
            </v-row>

            <!-- Don't have an account? Sign up -->
            <v-row>
              <v-col class="mx-3 py-6">
                <p>Already have an account? <span class="link_text text-primary" @click="goToLogin">Sign
                    in</span></p>
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
    publickey: '',
    privatekey: '',
    checkbox: ''
  }),

  methods: {
    goToLogin() {
      this.$router.push('/login')
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