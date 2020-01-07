<template>
  <div class="home">
    <recipies>
      <banner />
    </recipies>
    <about />
    <subscribe />
    <social />
  </div>
</template>

<script>
export default {
  name: "home",
  components: {
    About: () => import("@/components/home/About.vue"),
    Recipies: () => import("@/components/home/Recipies.vue"),
    Banner: () => import("@/components/home/Banner.vue"),
    Social: () => import("@/components/home/Social.vue"),
    Subscribe: () => import("@/components/home/Subscribe.vue")
  }
};
</script>
