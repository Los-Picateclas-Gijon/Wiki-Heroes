<template>
  <gallery></gallery>
</template>

<script>
import Gallery from "../components/Gallery.vue";
import ApiRepository from "../api/infrastructure/ApiRepository";
export default {
  name: "Home",
  components: {
    Gallery,
  },
  data: () => ({
    heroesList: [],
  }),
  methods: {},
  created: async function () {
    const url = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api";
    const api = await new ApiRepository(url);
    this.heroesList = await api.getAllData();
    console.log(this.heroesList);
  },
};
</script>
