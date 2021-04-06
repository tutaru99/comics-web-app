<template>
  <div>
    <v-footer dark padless>
      <v-row justify="center" no-gutters>
        <v-btn color="red" text rounded class="my-2" to="/characters">
          Characters
        </v-btn>
        <v-btn color="red" text rounded class="my-2" to="/comics">
          Comics
        </v-btn>
        <v-btn color="red" text rounded class="my-2" to="/series"> Series </v-btn>
        <v-btn color="red" text rounded class="my-2" to="/stories"> Stories </v-btn>
        <v-col class="dark lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Simas & Niko</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>
