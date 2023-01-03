<template>
  <div class = "container">

    <h1 class = "text-center"> Kunde Liste</h1>

    <table class = "table table-striped">
      <thead>
      <tr>
        <th> Kunde Id</th>
        <th> First Name</th>
        <th> LastName</th>
        <th> Geburtsdatum</th>
        <th> Email</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="k in kunde" v-bind:key="k.id">
        <td> {{k.id }}</td>
        <td> {{k.firstName }}</td>
        <td> {{k.lastName}}</td>
        <td> {{k.email}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'KundeListe',
  data () {
    return {
      kunde: []
    }
  },
  methode: {
    getKunde (k) {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }

      fetch('http://localhost:8080/api/v1/kunde_verwaltung' + '/' + k.id, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    }
  }

}

</script>
