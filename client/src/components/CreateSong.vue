<template>
  <div>
    <panel title="Song Metadada">
      <v-text-field
        v-model="title"
        label="Title"
        id="input-title"
      ></v-text-field>

      <v-text-field
        v-model="artist"
        label="Artist"
        id="input-artist"
      ></v-text-field>

      <v-text-field
        v-model="genre"
        label="Genre"
        id="input-genre"
      ></v-text-field>

      <v-text-field
        v-model="album"
        label="Album"
        id="input-album"
      ></v-text-field>

      <v-text-field
        v-model="albumImageUrl"
        label="Album Image URL"
        id="input-album-image-url"
      ></v-text-field>

      <v-text-field
        v-model="youtubeId"
        label="YouTube ID"
        id="input-youtube-id"
      ></v-text-field>
    </panel>
  </div>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      title: null,
      artist: null,
      genre: null,
      album: null,
      albumImageUrl: null,
      youtubeId: null,
      lyrics: null,
      tab: null
    }
  },

  components: {
    Panel
  }
}

</script>

<style scoped>
</style>
