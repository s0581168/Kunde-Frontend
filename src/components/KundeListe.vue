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
        <th scope="col"> Telefonnummer</th>
        <th scope="col"> Termin</th>
        <th scope="col"> Edit</th>
        <th scope="col"> Delete</th>
        <th scope="col"> create Termin</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="k in kunde" v-bind:key="k.id">
        <td> {{k.id }}</td>
        <td> {{k.firstName }}</td>
        <td> {{k.lastName}}</td>
        <td> {{k.geburtsDatum}}</td>
        <td> {{k.telefonnummer}}</td>
        <td> {{k.termine.length}}</td>
        <td>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#kunde-update-offcanvas" aria-controls="#kunde-update-offcanvas">Edit</button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="kunde-update-offcanvas" aria-labelledby="offcanvas-label">
              <div class="offcanvas-header">
                <h5 id="offcanvas-label">Update Kunde</h5>
                <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <form class="text-start needs-validation" id="kunde-update" novalidate>
                  <div class="mb-3">
                    <label for="first-name" class="form-label">First name</label>
                    <input type="text" class="form-control" id="first-name" v-model="firstName" required>
                    <div class="invalid-feedback">
                      Please provide the first name.
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="last-name" class="form-label">Last name</label>
                    <input type="text" class="form-control" id="last-name" v-model="lastName" required>
                    <div class="invalid-feedback">
                      Please provide the last name.
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="geburtsdatum" class="form-label">Geburtsdatum</label>
                    <input type="date" class="form-control" id="geburtsdatum" v-model="geburtsDatum" required>
                    <div class="invalid-feedback">
                      Please provide the geburtsdatum.
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="telefonnumer" class="form-label">Telefonnummer</label>
                    <input type="number" class="form-control" id="e-mail" v-model="telefonnumer" required>
                    <div class="invalid-feedback">
                      Please provide the nummer.
                    </div>
                  </div>
                  <div v-if="this.serverValidationMessages">
                    <ul>
                      <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: red">
                        {{ message }}
                      </li>
                    </ul>
                  </div>
                  <div class="mt-5">
                    <button class="btn btn-primary me-3" type="submit" @click.prevent="updateKunde(k.id)">Update</button>
                    <button class="btn btn-danger" type="reset">Reset</button>
                  </div>
                </form>
              </div>
            </div>
        </td>
        <td>
            <button class="btn btn-secondary me-3" type="submit" @click.prevent ="deletekunde(k.id)">Delete</button>
        </td>
        <td>
          <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#termin-create-offcanvas" aria-controls="#termin-create-offcanvas">create Termin</button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="termin-create-offcanvas" aria-labelledby="offcanvas-label">
            <div class="offcanvas-header">
              <h5 id="offcanvas-label">New Termin</h5>
              <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <form class="text-start needs-validation" id="termin-create" novalidate>
                <div class="mb-3">
                  <label for="termin" class="form-label">Termin</label>
                  <input type="datetime-local" class="form-control" id="termin" v-model="termindate" required>
                  <div class="invalid-feedback">
                    Please provide the Termin.
                  </div>
                </div>
                <div class="mt-5">
                  <button class="btn btn-primary me-3" type="submit" @click.prevent="createTermin(k.id)">Create</button>
                  <button class="btn btn-danger" type="reset">Reset</button>
                </div>
              </form>
            </div>
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
      kunde: [],
      termine: [],
      firstName: '',
      lastName: '',
      geburtsDatum: '',
      telefonnumer: '',
      termindate: '',
      serverValidationMessages: []
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
    },
    updateKunde (id) {
      const valid = this.validate()
      if (valid) {
        const endpoint2 = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/kunde_verwaltung' + '/' + id

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        const kunde = JSON.stringify({
          firstName: this.firstName,
          lastName: this.lastName,
          geburtsDatum: this.geburtsDatum,
          telefonnumer: this.telefonnumer
        })
        const requestOptions = {
          method: 'PUT',
          headers: headers,
          body: kunde,
          redirect: 'follow'
        }

        fetch(endpoint2, requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error))
      }
    },
    createTermin (terminid) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/termine'

      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      const termin = JSON.stringify({
        termindate: this.termindate,
        ownerId: terminid
      })
      const requestOptions = {
        method: 'POST',
        headers: headers,
        body: termin,
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .catch(error => console.log('error', error))
    },
    validate () {
      let valid = true
      const forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              valid = false
              event.preventDefault()
              event.stopPropagation()
            }

            form.classList.add('was-validated')
          }, false)
        })
      return valid
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
