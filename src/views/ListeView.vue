<template>
  <h1>Welcome to Patienten-Liste</h1>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col" v-for="k in kunde" :key="k.id">
      <div class="card">
        <img src="patientlogo.png" class="card-img-top" alt="k.firstName + ' ' + k.lastName">
        <div class="card-body">
          <h5 class="card-title">{{ k.firstName }} {{k.lastName}}</h5>
          <p class="card-text">
            {{ k.firstName }} {{k.lastName}}
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListeView.vue',
  data () {
    return {
      kunde: []
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('http://localhost:8080/api/v1/kunde_verwaltung', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(k => {
        this.kunde.push(k)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
