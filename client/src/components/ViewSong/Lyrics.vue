<template>
  <panel title="Lyrics">
    <textarea
      readonly
      v-model="songLyrics">
    </textarea>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },

  props: [
    'songLyrics'
  ]
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
