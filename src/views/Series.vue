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
            v-model="searchSeries"
            color="red"
            outlined
          ></v-text-field>
          <v-btn name="Search" dark @click="searchSerie(searchSeries)"
            >Search</v-btn
          >
          <v-btn
            class="ml-2"
            dark
            v-if="searchResults.results"
            @click="(searchResults.results = null), (searchSeries = null)"
            >Reset</v-btn
          >
        </v-col>
        <h1 class="text-center titletxt pb-5">Series</h1>
        <v-row class="d-flex" justify="center">
          <div>
            <v-progress-circular
              class="loader"
              v-if="!series.results"
              :size="70"
              :width="7"
              color="red"
              indeterminate
            ></v-progress-circular>
          </div>

 <!-- Search Results -->
          <v-card
            v-show="searchResults.results"
            :to="{ path: '/serie/' + searchSeries.id }"
            v-for="searchSeries in searchResults.results"
            :key="searchSeries.id"
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
                searchSeries.thumbnail.path +
                '.' +
                searchSeries.thumbnail.extension
              "
              max-height="270px"
              min-height="270px"
              position="1% 0%"
            ></v-img>
            <v-card-title>
              {{ searchSeries.title }}
            </v-card-title>
            <v-btn
              :to="{ path: '/serie/' + searchSeries.id }"
              class="mt-5 mb-1"
              color="red"
              text
            >
              About Series
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
                  @input="searchSerie"
                  @next="searchSerie"
                  @previous="searchSerie"
                ></v-pagination>
              </v-col>
            </v-row>
          </v-col>


    <!-- All results -->
      <v-col cols="12"></v-col>
          <v-card
          v-show="!searchResults.results"
          :to="{ path: '/serie/' + serie.id }"
            v-for="serie in series.results"
            :key="serie.id"
            class="mx-auto mt-5 offset-2"
            contain
            min-height="300"
            max-width="270"
            min-width="270"
            outlined
            dark
          >
            <v-img
              :src="serie.thumbnail.path + '.' + serie.thumbnail.extension"
              height="200px"
              contain
            ></v-img>

            <v-card-title>
              {{ serie.title }}
            </v-card-title>
            <v-btn
              :to="{ path: '/serie/' + serie.id }"
              class="mt-5 mb-1"
              color="red"
              text
            >
              About series
            </v-btn>
          </v-card>
        </v-row>
      </v-col>
    </div>
    <v-row justify="center">
      <v-col cols="4">
        <v-pagination
        v-show="!searchResults.results"
          v-if="series.results"
          class="mt-10 pb-15"
          v-model="page"
          :length="Math.ceil(series.total / 20)"
          @input="getSeries"
          @next="getSeries"
          @previous="getSeries"
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
    searchCSeries: "",
    series: [],
    searchResults: [],
    searchPage: 1,
    page: 1,
  }),
  mounted() {
    this.getSeries();
  },
  methods: {
    async getSeries() {
      const page = this.page;
      await axios.get(`http://localhost:4000/series?page=${page}`).then((res) => {
        this.scrollToTop();
        this.series = res.data.data;
      });
    },
     async searchSerie() {
      const searchSeries = this.searchSeries;
      const searchPage = this.searchPage;
      await axios
        .get(
          `http://localhost:4000/searchseries?searchSeries=${searchSeries}&searchPage=${searchPage}`
        )
        .then((res) => {
          this.scrollToTop();
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