<template>
  <base-card dark>
    <v-img
      class="grey lighten-2"
      height="400"
      width="100%"
      :src="require('@/assets/recipies/ancien-livre-recettes.jpg')"
    >
      <v-layout fill-height align-center pa-3>
        <v-flex xs12 md7 offset-md5>
          <h1 class="display-3 font-weight-light">
            L'art de la cuisine
          </h1>
          <div class="subheading text-uppercase pl-2 mb-4">
            Trouvez la meilleure recette !
          </div>
          <v-btn color="primary" depressed rounded>
            Abonnez vous
          </v-btn>
        </v-flex>
      </v-layout>
    </v-img>
  </base-card>
</template>
