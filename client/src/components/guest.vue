<template lang="html">
  <form  method="post">
  <div class="guest">
    <h2>{{guest.name}}</h2>
    <p>{{guest.email}}</p>
    <h2>{{guest.checkedIn}}</h2>

  <div class="formWrap">



      <label for="checkedIn">Checked In:</label>
      <input type="radio" id="yes"  v-model="guest.checkedIn" name="a"  :value="true"></input>
      <label for="yes">Yes</label>
      <input type="radio" id="no" v-model="guest.checkedIn" name="a" :value="false"></input>
      <label for="no">No</label>
    </div>

    <button type="button" v-on:click='updateGueest'>updated</button>

    <button type="button" v-on:click='deleteGuest'>DELETE</button>
  </div>
  </form>

</template>

<script>
import {eventBus} from '@/main.js'
import ManageService from '@/services/ManageService.js'
export default {
  name: "guest",
  props: ['guest'],
  methods: {
    deleteGuest(){
      ManageService.deleteGuest(this.guest._id)
      .then(() => eventBus.$emit('guest-deleted', this.guest._id))
    },
    updateGueest(){
      // console.log(this.guest._id)
      let guestDeets = {
        name: this.guest.name,
        email: this.guest.email,
        checkedIn: this.guest.checkedIn

      }
      ManageService.updateGuest(this.guest._id, guestDeets)
      .then(() => eventBus.$emit('guest-updated', this.guest._id, guestDeets))
    }
  }
};


</script>

<style lang="css" scoped>
</style>
