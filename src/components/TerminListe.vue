<template>
  <div class = "container">

    <h1 class = "text-center"> Termin Liste</h1>

    <table class = "table table-striped">
      <thead>
      <tr>
        <th scope="col"> Kunde Id</th>
        <th scope="col"> First Name</th>
        <th scope="col"> Last Name</th>
        <th scope="col"> Geburtsdatum</th>
        <th scope="col"> Telefonnummer</th>
        <th scope="col"> TerminDatum</th>
        <th scope="col"> Delete</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="t in termine" v-bind:key="t.id">
        <td> {{t.kunde.id }}</td>
        <td> {{t.kunde.firstName }}</td>
        <td> {{t.kunde.lastName}}</td>
        <td> {{t.kunde.geburtsDatum}}</td>
        <td> {{t.kunde.telefonnummer}}</td>
        <td> {{t.termindate}}</td>
        <td><button class="btn btn-secondary me-3" type="submit" @click.prevent="deleteTermin(t.id)">Delete</button></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'TerminListe',
  data () {
    return {
      termine: []
    }
  },
  methods: {
    deleteTermin (id) {
      const endpoint1 = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/termine' + '/' + id
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      }

      fetch(endpoint1, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
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
