<template>
  <v-main>
    <v-container fluid>
      <v-row>
        <v-col v-for="card in cards" :key="card.name" cols="4">
          <v-card :card="cards"></v-card>
          <v-img :src="card.images.lg"> </v-img>
          <v-card-title v-text="card.name"></v-card-title>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      cards: [],
    };
  },
  created: async function () {
    const url = "https://akabab.github.io/superhero-api/api/all.json";
    let response = await fetch(url);
    let data = await response.json();
    this.cards = data;
    console.log(this.cards);
  },
};
</script>
<style scoped></style>
