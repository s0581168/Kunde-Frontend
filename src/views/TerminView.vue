<template>
  <TerminListe>:termine="this.termine"</TerminListe>

</template>

<script>
import TerminListe from '@/components/TerminListe'
export default {
  name: 'TerminView.vue',
  components: { TerminListe },
  data () {
    return {
      kunde: []
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/termine'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(t => {
        this.termine.push(t)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
