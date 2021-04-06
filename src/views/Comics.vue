<template>
  <div class="bg">
    <div>
      <v-col cols="10" offset-md="1">
        <v-col cols="2" offset="10">
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            dark
            dense
            name="Search"
            label="Search.."
            v-model="searchComics"
            color="red"
            outlined
          ></v-text-field>
          <v-btn name="Search" dark @click="searchComic(searchComics)"
            >Search</v-btn
          >
          <v-btn
            class="ml-2"
            dark
            v-if="searchResults.results"
            @click="(searchResults.results = null), (searchComics = null)"
            >Reset</v-btn
          >
        </v-col>
        <h1 class="text-center titletxt pb-5">Comics</h1>
        <v-row class="d-flex" justify="center">
          <div>
            <v-progress-circular
              class="loader"
              v-if="!comics.results"
              :size="70"
              :width="7"
              color="red"
              indeterminate
            ></v-progress-circular>
          </div>

          <!-- Search Results -->
          <v-card
            v-show="searchResults.results"
            :to="{ path: '/comic/' + searchComics.id }"
            v-for="searchComics in searchResults.results"
            :key="searchComics.id"
            class="mx-auto mt-5 offset-2"
            contain
            min-height="300"
            max-width="270"
            min-width="270"
            outlined
            dark
          >
            <v-img
              :src="
                searchComics.thumbnail.path +
                '.' +
                searchComics.thumbnail.extension
              "
              max-height="270px"
              min-height="270px"
              position="1% 0%"
            ></v-img>
            <v-card-title>
              {{ searchComics.title }}
            </v-card-title>
            <v-btn
              :to="{ path: '/comic/' + searchComics.id }"
              class="mt-5 mb-1"
              color="red"
              text
            >
              About Comics
            </v-btn>
          </v-card>
          <v-col cols="12"></v-col>
          <v-col col="12">
            <v-row justify="center">
              <v-col cols="4">
                <v-pagination
                  v-show="searchResults.results"
                  class="mt-10 pb-15"
                  v-model="searchPage"
                  :length="Math.ceil(searchResults.total / 20)"
                  @input="searchComic"
                  @next="searchComic"
                  @previous="searchComic"
                ></v-pagination>
              </v-col>
            </v-row>
          </v-col>

          <!-- All results -->
            <v-col cols="12"></v-col>
          <v-card
            v-show="!searchResults.results"
            :to="{ path: '/comic/' + comic.id }"
            v-for="comic in comics.results"
            :key="comic.id"
            class="mx-auto mt-5 offset-2"
            contain
            min-height="300"
            max-width="270"
            min-width="270"
            outlined
            dark
          >
            <v-img
              :src="comic.thumbnail.path + '.' + comic.thumbnail.extension"
              height="200px"
              contain
            ></v-img>

            <v-card-title class="text-center">
              {{ comic.title }}
            </v-card-title>
            <v-btn
              :to="{ path: '/comic/' + comic.id }"
              class="mt-5 mb-1"
              color="red"
              text
            >
              About Comics
            </v-btn>
          </v-card>
        </v-row>
      </v-col>
    </div>
    <v-row justify="center">
      <v-col cols="4">
        <v-pagination
          v-show="!searchResults.results"
          v-if="comics.results"
          class="mt-10 pb-15"
          v-model="page"
          :length="Math.ceil(comics.total / 20)"
          @input="getComics"
          @next="getComics"
          @previous="getComics"
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
    searchComics: "",
    comics: [],
    searchResults: [],
    page: 1,
    searchPage: 1,
  }),
  mounted() {
    this.getComics();
  },
  methods: {
    async getComics() {
      const page = this.page;
      await axios
        .get(`http://localhost:4000/comics?page=${page}`)
        .then((res) => {
          this.scrollToTop();
          console.log(res);
          this.comics = res.data.data;
        });
    },
    async searchComic() {
      const searchComics = this.searchComics;
      const searchPage = this.searchPage;
      await axios
        .get(
          `http://localhost:4000/searchcomics?searchComics=${searchComics}&searchPage=${searchPage}`
        )
        .then((res) => {
          this.scrollToTop();
          console.log(res);
          this.searchResults = res.data.data;
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
  font-family: "Bangers", cursive !important;
}
</style>