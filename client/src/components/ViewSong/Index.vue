<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song" />
      </v-flex>

      <v-flex xs6 class="ml-2">
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>

    <v-layout class="mt-2">
      <v-flex xs6>
        <lyrics :songLyrics="song.lyrics" />
      </v-flex>

      <v-flex xs6 class="ml-2">
        <tab :songTab="song.tab" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'
import SongService from '@/services/SongService'

export default {
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  },

  data () {
    return {
      song: null
    }
  },

  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongService.show(songId)).data
    console.log('*** ViewSong mounted ***')
    console.log(this.song)
  }
}
</script>

<style scoped>
</style>
