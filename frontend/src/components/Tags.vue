<template>
  <v-container pa-0>
    <base-subheading>Tags</base-subheading>
    <v-chip
      v-for="(tag, i) in tags"
      :key="i"
      tag
      label
      small
      color="secondary"
      text-color="white"
    >
      {{ tag.text }}
    </v-chip>
  </v-container>
</template>

<script>
// Utilities
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["tags"])
  }
};
</script>
