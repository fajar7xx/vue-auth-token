<template>
  <div>
    <form @submit.prevent="login">
      <label for="email">Email: </label>
      <input
        id="email"
        v-model="loginForm.email"
        type="email"
        name="email"
        placeholder="youremail.domain"
      >

      <label for="password">Password: </label>
      <input
        id="password"
        v-model="loginForm.password"
        type="password"
        name="password"
        placeholder="your password "
      >

      <button type="submit" name="button">
        Register Now
      </button>

      <p>{{ error }}</p>

      <router-link :to="{name: 'register'}">
        Don't have an account? Register.
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      error: null
    }
  },
  methods: {
    login () {
      this.$store
        .dispatch('auth/login', this.loginForm)
        .then(() => {
          this.$router.push({ name: 'dashboard' })
        })
        .catch(err => {
          // console.log(err.response)
          this.error = err.response.data.error
        })
    }
  }
}
</script>

<style>

</style>
