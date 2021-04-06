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
            v-model="searchChar"
            color="red"
            outlined
          ></v-text-field>
          <v-btn name="Search" id="Search" dark @click="searchCharacter(searchChar)"
            >Search</v-btn
          >
          <v-btn
            class="ml-2"
            id="SearchReset"
            dark
            v-if="searchResults.results"
            @click="(searchResults.results = null), (searchChar = null)"
            >Reset</v-btn
          >
        </v-col>
        <h1 class="text-center titletxt pb-5">Characters</h1>
        <v-row class="d-flex" justify="center">
          <!-- Loader -->

          <v-progress-circular
            class="loader"
            v-if="!characters.results"
            :size="70"
            :width="7"
            color="red"
            indeterminate
          ></v-progress-circular>

          <!-- Search results -->
          <v-card
            v-show="searchResults.results"
            :to="{ path: '/character/' + searchChar.id }"
            v-for="searchChar in searchResults.results"
            :key="searchChar.id"
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
                searchChar.thumbnail.path + '.' + searchChar.thumbnail.extension
              "
              max-height="270px"
              min-height="270px"
              position="1% 0%"
            ></v-img>
            <v-card-title>
              {{ searchChar.name }}
            </v-card-title>
            <v-btn
              :to="{ path: '/character/' + searchChar.id }"
              class="mt-5 mb-1"
              color="red"
              text
            >
              About character
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
                  @input="searchCharacter"
                  @next="searchCharacter"
                  @previous="searchCharacter"
                ></v-pagination>
              </v-col>
            </v-row>
          </v-col>
          <!-- ALL RESULTS -->
          <v-col cols="12"></v-col>
          <v-card
            v-show="!searchResults.results"
            :to="{ path: '/character/' + char.id }"
            v-for="char in characters.results"
            :key="char.id"
            class="mx-auto mt-5 offset-2"
            contain
            min-height="300"
            max-width="270"
            min-width="270"
            outlined
            dark
          >
            <v-img
              :src="char.thumbnail.path + '.' + char.thumbnail.extension"
              max-height="270px"
              min-height="270px"
              position="1% 0%"
            ></v-img>

            <v-card-title>
              {{ char.name }}
            </v-card-title>
            <v-btn
              :to="{ path: '/character/' + char.id }"
              class="mt-5 mb-1"
              color="red"
              text
            >
              About character
            </v-btn>
          </v-card>
        </v-row>
      </v-col>
    </div>
    <v-row justify="center">
      <v-col cols="4">
        <v-pagination
          v-show="!searchResults.results"
          v-if="characters.results"
          class="mt-10 pb-15"
          v-model="page"
          :length="Math.ceil(characters.total / 20)"
          @input="getChars"
          @next="getChars"
          @previous="getChars"
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
    searchChar: "",
    characters: [],
    searchResults: [],
    page: 1,
    searchPage: 1,
  }),
  mounted() {
    this.getChars();
  },
  methods: {
    async getChars() {
      const page = this.page;
      await axios
        .get(`http://localhost:4000/characters?page=${page}`)
        .then((res) => {
          this.scrollToTop();
          console.log(res);
          this.characters = res.data.data;
        });
    },
    async searchCharacter() {
      const searchChar = this.searchChar;
      const searchPage = this.searchPage;
      await axios
        .get(
          `http://localhost:4000/char?searchChar=${searchChar}&searchPage=${searchPage}`
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