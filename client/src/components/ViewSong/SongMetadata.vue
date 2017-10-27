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
          :to="{
            name: 'songs-edit',
            params () {
              return {
                songId: song.id
              }
            }
          }">
          Edit
        </v-btn>

        <v-btn
          v-if="isUserLoggedIn" 
          dark 
          class="cyan" 
          @click="bookmark">
          Bookmark
        </v-btn>

        <v-btn 
          v-if="isUserLoggedIn" 
          dark 
          class="cyan" 
          @click="unbookmark">
          Unbookmark
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
import {mapState} from 'vuex'

export default {
  props: [
    'song'
  ],

  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },

  methods: {
    bookmark () {
      console.log('bookmark')
    },

    unbookmark () {
      console.log('unbookmark')
    }
  }
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
