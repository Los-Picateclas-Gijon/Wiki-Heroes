<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col align="center" v-for="n in 9" :key="n" cols="4">
          <v-card rounded="xl" height="100" width="100">
            <v-img></v-img>
          </v-card>
          <v-card-subtitle></v-card-subtitle>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "Gallery",
  props: {
    heroesList: Array,
  },
};
</script>

<style scoped></style>
