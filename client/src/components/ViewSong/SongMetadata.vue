<template>
  <panel title="Song Metadata">
    <v-layout>
      <v-flex xs6>
        <div class="song-title">
          {{song.title}}
        </div>
        <div class="song-artist">
          {{song.artist}}
        </div>
        <div class="song-genre">
          {{song.genre}}
        </div>

        <v-btn 
          dark 
          class="cyan" 
          @click="navigateTo({
            name: 'songs-edit',
            params: {
              songId: song.id
            }
          })">
          Edit
        </v-btn>
      </v-flex>

      <v-flex xs6>
        <img class="album-image" :src="song.albumImageUrl" />
        <br>
        <div class="song-album">
          {{song.album}}
        </div>
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },

  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },

  props: [
    'song'
  ]
}
</script>

<style scoped>
.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.song-album {
  font-size: 12px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
