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
          v-if="isUserLoggedIn && !bookmark" 
          dark 
          class="cyan" 
          @click="setAsBookmark">
          Set As Bookmark
        </v-btn>

        <v-btn 
          v-if="isUserLoggedIn && bookmark" 
          dark 
          class="cyan" 
          @click="unsetAsBookmark">
          Unset As Bookmark
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
      bookmark: null
    }
  },

  props: [
    'song'
  ],

  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },

  watch: {
    async song () {
      console.log('*** watch song called ***')
      if (!this.isUserLoggedIn) {
        return
      }

      try {
        this.bookmark = (await BookmarkService.index({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data

        console.log(
          `bookmark:${this.isBookmarked}, song:${this.song.id}, user:${this.$store.state.user.id}`)
      } catch (err) {
        console.log(err)
      }
    }
  },

  methods: {
    async setAsBookmark () {
      try {
        this.bookmark = (await BookmarkService.post({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },

    async unsetAsBookmark () {
      try {
        await BookmarkService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
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
