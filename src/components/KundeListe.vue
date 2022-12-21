<template>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col" v-for="k in kunde" :key="k.id">
    </div>
  </div>
</template>

<script>
import Kunde from '@/components/Kunde'

export default {
  name: 'KundeListe',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Kunde
  },
  props: {
    kunde: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
