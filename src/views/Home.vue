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
  data: () => ({}),
  props: {
    card: Object,
  },
};
</script>
