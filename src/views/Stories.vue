<template>
  <div class="bg">
    <div>
      <v-col cols="10" offset-md="1">
        <h1 class="text-center titletxt pb-5">Stories</h1>
        <v-row class="d-flex" justify="center">
          <div>
            <v-progress-circular
              class="loader"
              v-if="!stories.results"
              :size="70"
              :width="7"
              color="red"
              indeterminate
            ></v-progress-circular>
          </div>
          <v-card
          :to="{ path: '/story/' + story.id }"
            v-for="story in stories.results"
            :key="story.id"
            class="mx-auto mt-5 offset-2"
            max-width="270"
            min-width="270"
            outlined
            dark
          >
   <!--          <v-img
              :src="story.thumbnail.path + '.' + story.thumbnail.extension"
              height="200px"
              contain
            ></v-img> -->

            <v-card-title>
              {{ story.originalIssue.name }}
            </v-card-title>
            <v-btn
              :to="{ path: '/story/' + story.id }"
              class="mt-5 mb-1"
              color="red"
              text
            >
              About story
            </v-btn>
          </v-card>
        </v-row>
      </v-col>
    </div>
    <v-row justify="center">
      <v-col cols="4">
        <v-pagination
          v-if="stories.results"
          class="mt-10 pb-15"
          v-model="page"
          :length="Math.ceil(stories.total / 20)"
          @input="getStories"
          @next="getStories"
          @previous="getStories"
        ></v-pagination>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  data: () => ({
    stories: [],
    page: 1,
  }),
  mounted() {
    this.getStories();
  },
  methods: {
    async getStories() {
      const page = this.page;
      await axios
        .get(`http://localhost:4000/stories?page=${page}`)
        .then((res) => {
          this.scrollToTop();
          console.log(res);
          this.stories = res.data.data;
        });
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.titletxt {
  color: red;
  text-transform: uppercase;
  font-size: 44px;
    letter-spacing: 5px;
  font-family: 'Bangers', cursive !important;
}
</style>