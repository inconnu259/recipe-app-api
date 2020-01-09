<template>
  <v-app-bar app flat>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer" />
    <v-container mx-auto py-0>
      <v-layout>
        <v-img
          :src="require('@/assets/logo.png')"
          class="mr-5"
          contain
          height="48"
          width="48"
          max-width="48"
          @click="$vuetify.goTo(0)"
        />
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          class="ml-0 hidden-sm-and-down"
          text
          @click="onClick($event, link)"
        >
          {{ link.text }}
        </v-btn>
        <v-spacer />
        <v-text-field
          append-icon="mdi-magnify"
          flat
          hide-details
          solo-inverted
          style="max-width: 300px;"
        />
        <v-spacer />
        <v-btn
          v-if="isLoggedIn"
          @click="logout"
          text
          class="ml-0 hidden-sm-and-down"
        >
          Logout
        </v-btn>
        <v-btn v-else to="/login" text class="ml-0 hidden-sm-and-down">
          Login
        </v-btn>
      </v-layout>
    </v-container>
  </v-app-bar>
</template>

<script>
// Utilities
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["links"]),
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    ...mapMutations(["toggleDrawer"]),
    onClick(e, item) {
      e.stopPropagation();
      if (item.to || !item.href) return;
      this.$vuetify.goTo(item.href);
    },
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>
