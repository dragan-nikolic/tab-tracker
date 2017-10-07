<template>
  <div class="register">
    <h1>Register</h1>
    <input
      type="email"
      name="email"
      v-model=email
      placeholder="email"/>
    <br>

    <input
      type="password"
      name="password"
      v-model=password
      placeholder="password"/>
    <br>

    <button @click="register">Register</button>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: ''
    }
  },

  watch: {
    email (value) {
      console.log(`email has changed ${value}`)
    }
  },

  methods: {
    register () {
      console.log('register button was clicked!')
    }
  },

  mounted () {
    setTimeout(() => {
      this.email = 'hello world'
    }, 2000)
  }
}
</script>

<style scoped>
</style>
