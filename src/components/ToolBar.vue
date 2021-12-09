<template>
  <div>
    <v-app-bar color="#1B1B1B" dark src="HeaderImg.png">
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top, rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0.21)"
        ></v-img>
      </template>

      <v-toolbar-title id="title">Wiki Heroes</v-toolbar-title>

      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs align-with-title show-arrows>
          <v-tab to="/">Home</v-tab>
          <v-tab to="/favouritos">Favoritos</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "ToolBar",
  data: () => ({
    drawer: null,
  }),
};
</script>

<style scoped>
#title {
  font-size: 3rem;
  padding-top: 1rem;
  padding-left: 1rem;
  text-shadow: 2px 2px 2px rgba(181, 181, 181, 0.9);
}

a:link,
a:visited,
a:active {
  text-decoration: none;
}
</style>
