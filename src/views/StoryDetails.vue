<template>
  <div>
    <v-row>
      <v-col cols="10" offset-md="1">
        <div class="loader">
          <v-progress-circular
            v-if="!story.results"
            :size="70"
            :width="7"
            color="red"
            indeterminate
          ></v-progress-circular>
        </div>
        <div v-for="story in story.results" :key="story.key">
          <v-col cols="12">
            <h1 class="text-center mt-3">{{ story.title }}</h1>
            <v-col cols="8" offset-md="2">
              <div
                class="d-inline-flex justify-center"
                v-for="story in story.characters.items"
                :key="story.id"
              >
                <v-chip class="ml-1 my-1" label>
                  <v-icon left> mdi-label </v-icon>
                  {{ story.name }}
                </v-chip>
              </div>
              <p v-if="story.originalIssue.name" class="mt-1 text-center pbold">
                Original Issue: {{ story.originalIssue.name }}
              </p>
              <p class="text-center">{{ story.description }}</p>
            </v-col>
          </v-col>
          <v-row class="mt-5 pb-8" justify="center">
            <v-col cols="3" offset-md="1">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <h3>Creators</h3>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <li v-for="item in story.creators.items" :key="item.key">
                      {{ item.name + " - " + item.role }}
                    </li>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
            <v-col cols="3">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <h3>Comics</h3>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <li v-for="item in story.comics.items" :key="item.key">
                      {{ item.name }}
                    </li>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
            <v-col cols="3">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <h3>Series</h3>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <li v-for="item in story.series.items" :key="item.key">
                      {{ item.name }}
                    </li>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
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
    story: [],
  }),
  mounted() {
    this.getStory();
  },
  methods: {
    async getStory() {
      const StoryId = this.$route.params.id;
      await axios
        .get(`http://localhost:4000/story?StoryId=${ StoryId }`)
        .then((res) => {
          console.log(res);
          this.story = res.data.data;
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
h1,p {
  color: white;
}
</style>
