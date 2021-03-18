<template>
  <div class="weather">
    <v-card color="transparent">
      <v-card-title>
        <img :src="weather[0].icon" />
        <h1 class="">{{ weather[0].temp }}&#176;C</h1>
      </v-card-title>
    </v-card>
    <v-divider dark/>
    <v-card color="transparent" dark>
      <v-card-title v-for="index in 4" :key="index">
         <img style="width:40px" :src="`http://openweathermap.org/img/wn/`+fourday[index-1].weather[0].icon+
              `@2x.png`" />
        {{fourdayName[(index + day)%7]}}
        {{fourday[index-1].temp.day }} &#176;C
       
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      weather: [],
      fourday: [],
      fourdayName: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      date: "",
      day: "",
    };
  },

  methods: {
    getWeather() {
      axios
        .get(
          "http://api.openweathermap.org/data/2.5/weather?q=Leicester&units=metric&appid=5f88303049ce762c6f22f7a4da73600a"
        )
        .then((res) => {
          console.log(res);
          this.weather.push({
            temp: res.data.main.temp,
            humidity: res.data.main.humidity,
            weather: res.data.weather[0].main,
            icon:
              "http://openweathermap.org/img/wn/" +
              res.data.weather[0].icon +
              "@2x.png",
          });
        });

      axios
        .get(
          "https://api.openweathermap.org/data/2.5/onecall?lat=52.6369&lon=1.1398&units=metric&exclude=hourly,current,minutely,alerts&appid=5f88303049ce762c6f22f7a4da73600a"
        )
        .then((res) => {
          console.log(res);
          this.fourday = res.data.daily
        });

   

    },
  },
  mounted() {
    this.getWeather();
    var d = new Date();
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    this.day = d.getDay()
    this.date = dayNames[d.getDay()] + ", " + months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
  },
};
</script>

