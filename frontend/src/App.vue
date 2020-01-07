<template>
  <v-app>
    <core-toolbar />
    <core-drawer />
    <core-view />
    <core-footer />
    <core-cta />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default Vue.extend({
  name: "App",

  components: {
    CoreCta: () => import("@/components/core/Cta.vue"),
    CoreDrawer: () => import("@/components/core/Drawer.vue"),
    CoreToolbar: () => import("@/components/core/Toolbar.vue"),
    CoreFooter: () => import("@/components/core/Footer.vue"),
    CoreView: () => import("@/components/core/View.vue")
  },

  data: () => ({
    //
  })
});
</script>
