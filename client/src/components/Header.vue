<template>
  <v-toolbar fixed dark class="cyan">
    </v-toolbar-title class="mr-4">
      TabTracker
    </v-toolbar-title>

    <!-- TODO: implement Browse -->
    <!-- <v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn>
    </v-toolbar-items> -->

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <router-link to="register">
        <v-btn flat dark>
          Sign Up
        </v-btn>
      </router-link>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    register () {

    }
  }
}
</script>

<style scoped>
</style>
