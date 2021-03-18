<template>
  <div class="time mx-12">
    <div style="width: 480px">
      <h1 class="heading">{{ date }}</h1>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      date: "",
    };
  },
  mounted() {
   
    var d = new Date();
    var dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    this.date =
      dayNames[d.getDay()] +
      ", " +
      months[d.getMonth()] +
      " " +
      d.getDate() +
      ", " +
      d.getFullYear();
  },
};
</script>