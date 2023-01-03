<template>
  <div class="card">
    <img src="patientlogo.5935dc54.png" class="card-img-top" alt="k.firstName + ' ' + k.lastName">
    <div class="card-body">
      <h5 class="card-title">{{ k.firstName }} {{k.lastName}}</h5>
      <p class="card-text">
        {{ k.firstName }} {{k.lastName}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Kunde',
  props: {
    Kunde: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
