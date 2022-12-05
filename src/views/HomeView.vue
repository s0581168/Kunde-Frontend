<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/patientlogo.png">
    <HelloWorld msg="Welcome to Patienten-Verwaltung-App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
