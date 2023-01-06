<template>
  <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#kunde-create-offcanvas" aria-controls="#kunde-create-offcanvas">
    <i class="bi bi-kunde-plus-fill"></i>neu Kunde anlegen
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="kunde-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">Neu Kunde</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation" id="kunde-create" novalidate>
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
          <input type="number" class="form-control" id="e-mail" v-model="telefonnummer" required>
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
          <button class="btn btn-primary me-3" type="submit" @click.prevent="createKunde">Create</button>
          <button class="btn btn-danger" type="reset">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KundeCreate',
  data () {
    return {
      firstName: '',
      lastName: '',
      geburtsDatum: '',
      telefonnummer: '',
      serverValidationMessages: []
    }
  },
  emits: ['created'],
  methods: {
    async createKunde () {
      const valid = this.validate()
      if (valid) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/kunde_verwaltung'

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        const kunde = JSON.stringify({
          firstName: this.firstName,
          lastName: this.lastName,
          geburtsDatum: this.geburtsDatum,
          telefonnumer: this.telefonnummer
        })
        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: kunde,
          redirect: 'follow'
        }

        fetch(endpoint, requestOptions)
          .catch(error => console.log('error', error))
      }
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
  }
}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 30px;
}
</style>
