<template>
  <div class="events mx-12 mt-12" style="width: 500px">
    <div style="display: inline-flex">
      <h1>Upcoming Events</h1>
      <v-btn class="mt-1" fab small icon
        ><v-icon color="white" @click="getEvents">mdi-refresh</v-icon></v-btn
      >
    </div>
    <v-divider dark class="mb-4" />
    <v-alert
      type="info"
      text
      color="primary"
      dense
      v-for="index in 5"
      :key="index"
    >
      {{ calendar.value[index-1].subject }} 
    </v-alert>
  </div>
</template>

<script>
import { client } from "../client.js";
export default {
  data() {
    return {
      calendar: "",
    };
  },
  methods: {
    async getEvents() {
      this.calendar = await client
        .api(
          "/me/events?$select=subject,body,bodyPreview,organizer,attendees,start,end,location"
        )
        .get();
    },
  },
  async mounted() {
      this.getEvents()
  },
};
</script>