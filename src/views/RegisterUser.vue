<template>
  <div>
    <form @submit.prevent="register">
      <label for="name">Name: </label>
      <input
        id="name"
        v-model="registerForm.name"
        type="text"
        name="name"
        placeholder="Your Full Name"
      >

      <label for="email">Email: </label>
      <input
        id="email"
        v-model="registerForm.email"
        type="email"
        name="email"
        placeholder="youremail.domain"
      >

      <label for="password">Password: </label>
      <input
        id="password"
        v-model="registerForm.password"
        type="password"
        name="password"
        placeholder="your password "
      >

      <button type="submit" name="button">
        Register Now
      </button>

      <ul>
        <li v-for="(error, index) in errors" :key="index">
          {{ error }}
        </li>
      </ul>

      <router-link :to="{name: 'login'}">
        Already have an account? Login.
      </router-link>
    </form>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
export default {
  data () {
    return {
      registerForm: {
        name: '',
        email: '',
        password: ''
      },
      errors: null
    }
  },
  methods: {
    register () {
      console.log('submit register')
      this.$store.dispatch('auth/register', this.registerForm)
        .then(() => {
          this.$router.push({ name: 'dashboard' })
        })
        .catch(err => {
          this.errors = err.response.data.errors
        })
    }
  }

}
</script>

<style scoped>

</style>
