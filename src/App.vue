<template>
  <v-app>
    <ToolBar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/Footer.vue";
import ToolBar from "./components/ToolBar.vue";
export default {
  name: "App",
  components: {
    Footer,
    ToolBar,
  },
  data: () => ({
    //
  }),
};
</script>
