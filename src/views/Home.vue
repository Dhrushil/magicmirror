<template>
  <div class="home" style="overflow:hidden">
    <Weather style="float:right;"/>
    <Time/>
    <Events/>
    <News style="top: 65%; left: 25%;position: absolute"/>
    
  </div>
</template>

<script>
import Events from '../components/Events.vue'
import News from '../components/News.vue'
import Time from '../components/Time.vue'
import Weather from '../components/Weather.vue'
export default {
  components: { Weather, Time, Events, News },

}
</script>