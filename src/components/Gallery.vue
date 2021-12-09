<template>
  <v-main>
    <v-container fluid class="one">
      <v-row>
        <v-col v-for="card in cards" :key="card.name" cols="4" class="center">
          <v-card :card="cards" class="border">
            <v-img :src="card.images.lg" rounded="xl" class="image"></v-img>
          </v-card>
          <v-card-subtitle v-text="card.name"></v-card-subtitle>
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
<style scoped>
.one {
  display: flex;
}
.border {
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  height: 100px;
  width: 100px;
  margin-bottom: 20px;
}
</style>
