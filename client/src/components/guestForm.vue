<template lang="html">
  <form class="" v-on:submit='addGuest' method="post">
    <h2>Add Guest</h2>
    <div class="formWrap" >
      <label for="name">Name:</label>
      <input type="text" v-model="name" required>
    </div>

    <div class="formWrap">
      <label for="email">Email:</label>
      <input type="text" v-model="email" required>
    </div>

    <div class="formWrap">
      <label for="checkedIn">Checked In:</label>
      <input type="radio" v-model="checkedIn" :value="true">Yes</input>
      <input type="radio" v-model="checkedIn" :value="false">No</input>
    </div>

    <input type="submit" value="save">
  </form>
</template>

<script>
import {eventBus} from '@/main.js'
import ManageService from '@/services/ManageService.js'

export default {
  name: "guest-form",
  data(){
    return {
      name: null,
      email: null,
      checkedIn: null
    }
  },

  methods: {
    addGuest(event){
      event.preventDefault()
      const guest ={
        name: this.name,
        email: this.email,
        checkedIn: this.checkedIn
      }
      ManageService.postGuest(guest)
      .then(res => eventBus.$emit('guest-added', res))
    }
  }


}
</script>

<style lang="css" scoped>
h2 {
	margin: 10px 0;
	padding: 0;
}
form {
	width: 75%;
	margin: 0 auto;
	background: rgba(255, 255, 255, 0.7);
	padding: 20px;
	margin-bottom: 40px;
}
label {
	min-width: 100px;
	display: inline-block;
}
.formWrap {
	margin-bottom: 10px;
}
</style>
