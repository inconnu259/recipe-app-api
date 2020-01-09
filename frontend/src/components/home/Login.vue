<template>
  <div id="login">
    <v-container grid-list-xl text-xs-center>
      <v-layout row wrap>
        <v-flex sx4 offset-xs4>
          <v-card
            dar
            color="dark"
            elevation-24
            style="padding: 20px; border: 1px; border-radius: 50px;"
          >
            <v-card-text>
              <h1 class="diplay-2 font-weight-bold">Login</h1>
              <hr />
              <br />
              <v-form class="login" @submit.prevent="login">
                <v-text-field
                  clearable
                  v-model="email"
                  label="Email"
                  type="email"
                  color="white"
                  prepend-icon="mdi-account-circle"
                >
                </v-text-field>
                <v-text-field
                  clearable
                  v-model="password"
                  label="Password"
                  :type="showPassword ? 'text' : 'password'"
                  color="white"
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                >
                </v-text-field>
              </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn color="success" to="/register">Register</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="grey darken-2" large @click="login">Login</v-btn>
            </v-card-actions>
            <p>{{ error }}</p>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
      showPassword: false
    };
  },
  methods: {
    login: function() {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/"))
        .catch(err => {
          this.error = err;
        });
    }
  }
};
</script>
