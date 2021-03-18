<template>
  <div class="news mx-12" style="width: 1000px">
      <v-sheet color="rgba(225, 223, 223, 0.05)" rounded dark>
        <v-carousel height="150" hide-delimiters :show-arrows="false" :continuous="true" :cycle="true" :interval="30000">
            <v-carousel-item v-for="headline in headlines" :key="headline.id">
                <v-card-title>{{headline.title}}</v-card-title>
                <v-card-text>{{headline.description}}</v-card-text>
            </v-carousel-item>
        </v-carousel>
      </v-sheet>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
        headlines: ""
    };
  },
  methods: {
    getNews() {
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=gb&apiKey=666b8340d8e243ba8c0fd5bad09cdf8b"
        )
        .then((res) => {
          this.headlines = res.data.articles
        });
    },
  },
  mounted() {
    this.getNews();
  },
};
</script>