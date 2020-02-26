<template lang="html">
  <div>
    <guest v-for="guest in guests" :guest="guest"/>

  </div>
</template>

<script>
import Guest from "./guest.vue";
import ManageService from "../services/ManageService.js";
import {eventBus} from '../main.js';
export default {
  name: 'guest-grid',
  data(){
    return{
      guests: []
    }
  },
  components: {
    'guest': Guest
  },
  mounted(){
    ManageService.getGuests()
    .then(guests => this.guests = guests);

    eventBus.$on('guest-added', (guest) =>{
      this.guests.push(guest)
    })

    eventBus.$on('guest-deleted', (id)=> {
      let index = this.guests.findIndex(guest => guest._id === id)
      this.guests.splice(index, 1)
    })
    eventBus.$on('guest-updated', (id, guestDeets)=>{
      

    })
  }
}
  </script>

  <style lang="css" scoped>
  </style>
