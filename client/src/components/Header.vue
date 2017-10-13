<template>
  <v-toolbar fixed dark class="cyan">
    </v-toolbar-title class="mr-4">
      <span
        class="home"
        @click="navigateTo({name: 'home'})">
        TabTracker
      </span>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn 
        v-if="$store.state.isUserLoggedIn"
        flat
        dark
        @click="navigateTo({name: 'songs'})">
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        @click="navigateTo({name: 'login'})">
        Login
      </v-btn>

      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        @click="navigateTo({name: 'register'})">
        Sign Up
      </v-btn>

      <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat
        dark
        @click="logout()">
        Logout
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },

    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUSer', null)
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: blueviolet;
}
</style>
