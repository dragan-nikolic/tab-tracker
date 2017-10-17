<template>
</template>

<script>
import SongService from '@/services/SongService'

export default {
  data () {
    return {
      songs: null
    }
  },

  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongService.show(songId)).data
    console.log(this.song)
  }
}
</script>

<style scoped>
</style>
