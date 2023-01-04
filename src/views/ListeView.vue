<template>
  <div class="container-fluid">
    <KundeListe>:kunde="this.kunde"</KundeListe>
  </div>
  <KundeCreate @created="addKunde"></KundeCreate>
</template>

<script>
import KundeCreate from '@/components/KundeCreate'
import KundeListe from '@/components/KundeListe'

export default {
  name: 'ListeView',
  components: {
    KundeListe,
    KundeCreate
  },
  data () {
    return {
      kunde: []
    }
  },
  methods: {
    addKunde (kundeLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + kundeLocation
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
