<template>
  <div>
    <v-col cols="12">
      <v-row>
        <v-col cols="3">
          <div class="image">
            <router-link id="charactersImg" to="/characters">
              <v-img
                class="v-img"
                height="625px"
                src="https://i.redd.it/7obyepujsgz31.jpg"
              >
              </v-img>
              <h2><span>Characters</span></h2>
            </router-link>
          </div>
        </v-col>
        <v-col cols="3">
          <div class="image">
            <router-link to="/comics">
              <v-img
                class="v-img"
                height="625px"
                src="https://pbs.twimg.com/media/EJ5PvOeUUAAtAJK?format=jpg&name=large"
              >
              </v-img>
              <h2><span>Comics</span></h2>
            </router-link>
          </div>
        </v-col>
        <v-col cols="3">
          <div class="image">
            <router-link to="/series">
              <v-img
                class="v-img"
                height="625px"
                src="https://www.scified.com/u/IMG_20200302_101115.jpg"
              >
              </v-img>
              <h2><span>Series</span></h2>
            </router-link>
          </div>
        </v-col>
        <v-col cols="3">
          <div class="image">
            <router-link to="/stories">
              <v-img
                class="v-img"
                height="625px"
                src="https://i.pinimg.com/originals/ba/9b/d7/ba9bd7476d2c2581888cec2d1a6f45f4.jpg"
              >
              </v-img>
              <h2><span>Stories</span></h2>
            </router-link>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>


<style scoped>
.image {
  position: relative;
  width: 100%; /* for IE 6 */
}

h2 {
  position: absolute;
  top: 500px;
  left: 0;
  width: 100%;
}
h2 span {
  color: #ed1d24;
  font: 40px/45px Helvetica, Sans-Serif;
   font-family: 'Bangers', cursive !important;
  text-transform: uppercase;  ;
  letter-spacing: 4px;
  background: rgb(0, 0, 0); /* fallback color */
  background: rgba(0, 0, 0, 0.7);
  padding: 10px 20px;
  background: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 100%
  );
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 100%
  );
  -webkit-transform: skewX(-25deg);
  transform: skewX(-25deg);
}

.v-img:after {
  content: "";
  position: absolute;
  top: -50%;
  left: -60%;
  width: 20%;
  height: 200%;
  opacity: 0;
  transform: rotate(30deg);

  background: rgba(255, 255, 255, 0.13);
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.13) 0%,
    rgba(255, 255, 255, 0.13) 77%,
    rgba(255, 255, 255, 0.5) 92%,
    rgba(255, 255, 255, 0) 100%
  );
}

/* Hover state - trigger effect */
.v-img:hover:after {
  opacity: 1;
  left: 130%;
  transition-property: left, top, opacity;
  transition-duration: 0.7s, 0.7s, 0.15s;
  transition-timing-function: ease;
}

/* Active state */
.v-img:active:after {
  opacity: 0;
}
</style>