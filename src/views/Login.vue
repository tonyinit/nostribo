<template>
  <!-- main container -->
  <v-container>
    <v-row>
      <v-col class="flex-column justify-center text-center">
        <v-img class="mx-auto my-6" src="../assets/nostribo.svg" max-width="50px"></v-img>
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
          <v-col class="py-0">
            <v-checkbox v-model="checkbox">
              <template v-slot:label>
                <p class="text-body-2 font-weight-bold">Remember me</p>
              </template>
            </v-checkbox>

            <!-- log in button -->
            <v-row>
              <v-col class="mx-3 py-0">
                <v-btn color="primary" block @click="logIn">Log In</v-btn>
              </v-col>
            </v-row>

            <v-row class="d-flex align-center">
              <v-col class="mx-3 py-6">
                <hr />
              </v-col>
              <span>or</span>
              <v-col class="mx-3 py-6">
                <hr />
              </v-col>
            </v-row>

            <!-- sign up button -->
            <v-row>
              <v-col class="mx-3 py-0">
                <v-btn block @click="signUp">Sign Up</v-btn>
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
    logIn() {
      console.log('signing in')
      localStorage.setItem('publickey', this.publickey);
      this.$router.push('/')
    },
    signUp() {
      this.$router.push('/signup')
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