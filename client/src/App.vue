<template lang="html">
  <div class="">
    <guest-form />
    <guest-grid />
  </div>
</template>

<script>
import guestForm from './components/guestForm.vue'
import guestGrird from './components/guestGrid.vue'
export default {
  name: 'app',

  components: {
    'guest-form': guestForm,
    "guest-grid": guestGrird
  }
}
</script>

<style lang="css" scoped>
</style>
