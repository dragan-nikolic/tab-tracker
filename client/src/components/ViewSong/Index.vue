<template>
  <v-layout row>
    <v-flex xs6>
      <song-metadata :song="song" />
    </v-flex>

    <v-flex xs6 class="ml-2">
      <you-tube :youtubeId="song.youtubeId" />
    </v-flex>
    <!-- <v-flex xs6 class="ml-2">
      <panel title="Tabs">
        <textarea
          readonly
          v-model="song.tab">
        </textarea>
      </panel>
    </v-flex> -->
  </v-layout>
</template>

<script>
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import SongService from '@/services/SongService'
import Panel from '@/components/Panel'

export default {
  components: {
    SongMetadata,
    YouTube,
    Panel
  },

  data () {
    return {
      song: null
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
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  border-color: transparent;
  height: 500px;
  overflow: auto;
  padding: 20px;
}
</style>
