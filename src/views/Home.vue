<template>
  <div>
    <Header />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Header, Footer},
  name: "Home",

  component: {
    Header,
    Footer,
  },
};
</script>
