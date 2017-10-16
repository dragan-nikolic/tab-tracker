<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadada">
        <v-text-field
          v-model="song.title"
          label="Title"
          id="input-title"
        ></v-text-field>

        <v-text-field
          v-model="song.artist"
          label="Artist"
          id="input-artist"
        ></v-text-field>

        <v-text-field
          v-model="song.genre"
          label="Genre"
          id="input-genre"
        ></v-text-field>

        <v-text-field
          v-model="song.album"
          label="Album"
          id="input-album"
        ></v-text-field>

        <v-text-field
          v-model="song.albumImageUrl"
          label="Album Image URL"
          id="input-album-image-url"
        ></v-text-field>

        <v-text-field
          v-model="song.youtubeId"
          label="YouTube ID"
          id="input-youtube-id"
        ></v-text-field>
      </panel>
    </v-flex>
    <v-flex xs8 class="ml-2">
      <panel title="Song Structure">
        <v-text-field
          v-model="song.tab"
          label="Tab"
          id="input-tab"
          multi-line
        ></v-text-field>

        <v-text-field
          v-model="song.lyrics"
          label="Lyrics"
          id="input-lyrics"
          multi-line
        ></v-text-field>
      </panel>
      <v-btn 
        dark 
        class="cyan" 
        @click="create">
        Create
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongService from '@/services/SongService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    }
  },

  components: {
    Panel
  },

  methods: {
    async create () {
      try {
        await SongService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}

</script>

<style scoped>
</style>
