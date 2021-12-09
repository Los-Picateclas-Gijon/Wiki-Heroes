<template>
  <gallery></gallery>
</template>

<script>
import Gallery from "../components/Gallery.vue";
export default {
  name: "Home",
  components: {
    Gallery,
  },
  data: () => ({
    heroesList: [],
  }),
  methods: {},
  created: async () => {
    const url = "https://akabab.github.io/superhero-api/api/all.json";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data[0].name);
  },
};
</script>
