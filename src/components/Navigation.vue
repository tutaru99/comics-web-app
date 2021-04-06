<template>
  <v-card>
    <v-app-bar
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://wallpaperaccess.com/full/14358.jpg"
    >
      <template v-slot:img="{ props }">
        <v-img
          position="80% 18%"
          v-bind="props"
          gradient="to top right, rgba(000,000,000,.8), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab id="home" to="/">Home</v-tab>
          <v-tab id="characters" to="/characters">Characters</v-tab>
          <v-tab id="comics" to="/comics">Comics</v-tab>
          <v-tab id="series" to="/series">Series</v-tab>
          <v-tab id="stories" to="/stories">Stories</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
  </v-card>
</template>