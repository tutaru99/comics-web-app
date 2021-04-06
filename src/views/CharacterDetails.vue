<template>
  <div>
    <v-row>
      <v-col cols="10" offset-md="1">
        <div class="loader">
          <v-progress-circular
            v-if="!character.results"
            :size="70"
            :width="7"
            color="red"
            indeterminate
          ></v-progress-circular>
        </div>
        <div v-for="character in character.results" :key="character.key">
          <v-row align="center">
            <v-col cols="6">
              <v-img
                class="mt-2 mb-2"
                contain
                max-height="800px"
                :src="
                  character.thumbnail.path + '.' + character.thumbnail.extension
                "
              ></v-img>
            </v-col>

            <v-col cols="6">
              <h1 class="text-center mt-3">{{ character.name }}</h1>
              <v-col v-if="character.description" cols="12">
                <p class="text-center">{{ character.description }}</p>
              </v-col>
              <v-col v-else cols="12">
                <p class="text-center">Character Description not Available.</p>
              </v-col>
              <v-row justify="center">
                <div v-for="item in character.urls" :key="item.key">
                  <a class="pa-2" :href="item.url" target="_blank">
                    <v-btn color="red" text>{{ item.type }}</v-btn></a
                  >
                </div>
              </v-row>
              <v-row class="mt-5 pb-8" justify="center">
                <v-col cols="6">
                  <v-expansion-panels>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <h3>Series</h3>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <li
                          v-for="item in character.series.items"
                          :key="item.key"
                        >
                          {{ item.name }}
                        </li>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
                <v-col cols="6">
                  <v-expansion-panels>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <h3>Comics</h3>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <li
                          v-for="item in character.comics.items"
                          :key="item.key"
                        >
                          {{ item.name }}
                        </li>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
                <v-col cols="12">
                  <v-expansion-panels>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <h3>Stories</h3>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <li
                          v-for="item in character.comics.items"
                          :key="item.key"
                        >
                          {{ item.name }}
                        </li>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    character: [],
  }),
  mounted() {
    this.getCharacter();
  },
  methods: {
    async getCharacter() {
      const charId = this.$route.params.id;
      await axios
        .get(`http://localhost:4000/character?charId=${charId}`)
        .then((res) => {
          console.log(res);
          this.character = res.data.data;
        });
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
h1,
p {
  color: white;
}
</style>
