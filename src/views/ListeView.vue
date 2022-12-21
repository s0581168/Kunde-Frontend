<template>
  <h1>Welcome to Patienten-Liste</h1>
  <div class="container-fluid">
    <Kunde-List :Kunde="this.kunde"></Kunde-List>
  </div>
  <kunde-create @created="addKunde"></kunde-create>
</template>

<script>
import KundeCreate from '@/components/KundeCreate'
import KundeListe from '@/components/KundeListe'

export default {
  name: 'ListeView.vue',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    KundeListe,
    KundeCreate
  },
  data () {
    return {
      kunde: []
    }
  },
  methods: {
    addKunde (k) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + k
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(k => this.kunde.push(k))
        .catch(error => console.log('error', error))
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/kunde_verwaltung'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
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
