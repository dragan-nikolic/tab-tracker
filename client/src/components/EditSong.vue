<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadada">
        <v-text-field
          v-model="song.title"
          label="Title"
          required
          :rules="[required]"
          id="input-title"
        ></v-text-field>

        <v-text-field
          v-model="song.artist"
          label="Artist"
          required
          :rules="[required]"
          id="input-artist"
        ></v-text-field>

        <v-text-field
          v-model="song.genre"
          label="Genre"
          required
          :rules="[required]"
          id="input-genre"
        ></v-text-field>

        <v-text-field
          v-model="song.album"
          label="Album"
          required
          :rules="[required]"
          id="input-album"
        ></v-text-field>

        <v-text-field
          v-model="song.albumImageUrl"
          label="Album Image URL"
          required
          :rules="[required]"
          id="input-album-image-url"
        ></v-text-field>

        <v-text-field
          v-model="song.youtubeId"
          label="YouTube ID"
          required
          :rules="[required]"
          id="input-youtube-id"
        ></v-text-field>
      </panel>
    </v-flex>
    <v-flex xs8 class="ml-2">
      <panel title="Song Structure">
        <v-text-field
          v-model="song.tab"
          label="Tab"
          required
          :rules="[required]"
          id="input-tab"
          multi-line
        ></v-text-field>

        <v-text-field
          v-model="song.lyrics"
          label="Lyrics"
          required
          :rules="[required]"
          id="input-lyrics"
          multi-line
        ></v-text-field>
      </panel>

      <div class="danger-alert" v-if="error">
        {{error}}
      </div>

      <v-btn 
        dark 
        class="cyan" 
        @click="save">
        Save
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
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
      },

      error: null,

      required: (value) => !!value || 'Required'
    }
  },

  components: {
  },

  methods: {
    async save () {
      this.error = null

      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])

      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields!'
        return
      }

      try {
        this.song = await SongService.put(this.song)
        this.$router.push({
          name: 'songs',
          params: {
            songId: this.$store.state.route.params.songId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },

  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongService.show(songId)).data
      console.log(this.song)
    } catch (err) {
      console.log(err)
    }
  }
}

</script>

<style scoped>
</style>
