<template>
  <div>
    <v-row>
      <v-col cols="10" offset-md="1">
        <div class="loader">
          <v-progress-circular
            v-if="!comic.results"
            :size="70"
            :width="7"
            color="red"
            indeterminate
          ></v-progress-circular>
        </div>
        <div v-for="comi in comic.results" :key="comi.key">
          <v-row align="center">
            <v-col cols="6">
              <v-img
                class="mt-2 mb-2"
                contain
                max-height="800px"
                :src="comi.thumbnail.path + '.' + comi.thumbnail.extension"
              ></v-img>
            </v-col>
            <v-col cols="6">
              <h1 class="text-center mt-3">{{ comi.title }}</h1>
              <h2 class="text-center">
                Price: {{ comi.prices[0].price + "$" }}
              </h2>
              <v-col cols="12" >
                <div
                  class="d-inline-flex"
                  v-for="char in comi.characters.items"
                  :key="char.id"
                >
                  <v-chip class="ml-1 my-1" color="" label>
                    <v-icon left> mdi-label </v-icon>
                    {{ char.name }}
                  </v-chip>
                </div>
                <p class="text-center mt-3">{{ comi.description }}</p>
              </v-col>
              <v-row justify="center">
                <div v-for="url in comi.urls" :key="url.key">
                  <a class="pa-2" :href="url.url" target="_blank">
                    <v-btn color="red" text>{{ url.type }}</v-btn></a
                  >
                </div>
              </v-row>

              <v-row class="mt-5 pb-8" justify="center">
                <v-col cols="4">
                  <v-expansion-panels>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <h3>Series</h3>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        {{ comi.series.name }}
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
                <v-col cols="4">
                  <v-expansion-panels>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <h3>Creators</h3>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <li v-for="item in comi.creators.items" :key="item.key">
                          {{ item.name + " - " + item.role }}
                        </li>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
                <v-col cols="4">
                  <v-expansion-panels>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        <h3>Stories</h3>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <li v-for="item in comi.stories.items" :key="item.key">
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
    comic: [],
  }),
  mounted() {
    this.getComic();
  },
  methods: {
    async getComic() {
      const comicsId = this.$route.params.id;
      await axios
        .get(`http://localhost:4000/comic?comicsId=${ comicsId }`)
        .then((res) => {
          console.log(res);
          this.comic = res.data.data;
        });
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.pbold {
  font-weight: bold;
}
h1,p, h2 {
  color: white;
}
</style>
