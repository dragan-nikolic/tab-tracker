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
          v-if="isUserLoggedIn && !isBookmarked" 
          dark 
          class="cyan" 
          @click="bookmark">
          Bookmark
        </v-btn>

        <v-btn 
          v-if="isUserLoggedIn && isBookmarked" 
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
import BookmarkService from '@/services/BookmarkService'

export default {
  data () {
    return {
      isBookmarked: null
    }
  },

  props: [
    'song'
  ],

  computed: {
    ...mapState([
      'user',
      'isUserLoggedIn'
    ])
  },

  async mounted () {
    const bookmark = (await BookmarkService.index({
      songId: this.song.id,
      userId: this.user.id
      // userId: this.$store.state.user.id // for some reason this does not work
    })).data
    this.isBookmarked = !!bookmark
    console.log(`bookmark:${this.isBookmarked}, song:${this.song.id}, user:${this.user.id}`)
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
