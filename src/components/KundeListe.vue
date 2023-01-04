<template>
  <div class = "container">

    <h1 class = "text-center"> Kunde Liste</h1>

    <table class = "table table-striped">
      <thead>
      <tr>
        <th scope="col"> Kunde Id</th>
        <th scope="col"> First Name</th>
        <th scope="col"> Last Name</th>
        <th scope="col"> Geburtsdatum</th>
        <th scope="col"> Email</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="k in kunde" v-bind:key="k.id">
        <td> {{k.id }}</td>
        <td> {{k.firstName }}</td>
        <td> {{k.lastName}}</td>
        <td> {{k.geburtsDatum}}</td>
        <td> {{k.email}}</td>
        <td>
          <div class="mt-5">
          <button class="btn btn-secondary me-3" type="submit" @click.prevent ="deletekunde(k.id)">Delete</button>
          </div>
        </td>
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
  methods: {
    deletekunde (kundeid) {
      const endpoint1 = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/kunde_verwaltung' + '/' + kundeid
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
