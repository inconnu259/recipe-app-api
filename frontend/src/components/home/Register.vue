<template>
  <div id="register">
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
              <h1 class="diplay-2 font-weight-bold">Register</h1>
              <hr />
              <br />
              <v-form class="login" @submit.prevent="register">
                <v-text-field
                  clearable
                  v-model="name"
                  label="Name"
                  type="text"
                  color="white"
                  prepend-icon="mdi-account-question"
                >
                </v-text-field>
                <v-text-field
                  clearable
                  v-model="email"
                  label="E-Mail Address"
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
                <v-text-field
                  clearable
                  v-model="password_confirmation"
                  label="Password"
                  type="password"
                  color="white"
                  prepend-icon="mdi-lock"
                  required
                >
                </v-text-field>
              </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn color="success" to="/login">Login</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="grey darken-2" large @click.prevent="register"
                >Register</v-btn
              >
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
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      is_admin: null,
      error: "",
      showPassword: false
    };
  },
  methods: {
    register: function() {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
        is_admin: this.is_admin
      };
      this.$store
        .dispatch("register", data)
        .then(() => this.$router.push("/"))
        .catch(err => {
          this.error = err;
        });
    }
  }
};
</script>
