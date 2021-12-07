<template>
  <v-footer id="footer" v-bind="localAttrs" height="60px" color="#1B1B1B">
    <v-row align="center" justify="center">
      <v-card-text align="center">
        <v-btn v-for="icon in icons" :key="icon" icon color="#FFFFFF">
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: ["mdi-twitter", "mdi-facebook", "mdi-instagram", "mdi-linkedin"],
  }),
};
</script>

<style scoped>
#footer {
  box-shadow: 0px -8px 8px rgba(0, 0, 0, 0.25);
}
</style>
