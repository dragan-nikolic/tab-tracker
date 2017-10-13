<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form name="tab-tracker-form" autocomplete="off">
          <v-text-field
            v-model="email"
            label="Email"
            id="input-email"
          ></v-text-field>
          <br>

          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            id="input-password"
          ></v-text-field>
          <br>
          <div class="error" v-html="error" />
          <br>
          <v-btn 
            dark 
            class="cyan" 
            @click="register">
            Register
          </v-btn>
        </form>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },

  components: {
    Panel
  },

  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.error = ''
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        console.log(response)
      } catch (error) {
        if (error.response) {
          this.error = error.response.data.error
        } else {
          console.log(error)
          this.error = error.message
        }
      }
    }
  }
}
</script>
<style scoped>
  .error {
    color: black;
  }
</style>
