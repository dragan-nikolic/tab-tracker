<template>
  <panel title="YouTube Video">
    <youtube 
      :video-id="youtubeId"
      :player-width="550"
      :player-height="216">
    </youtube>
  </panel>
</template>

<script>
export default {
  components: {
  },

  props: [
    'youtubeId'
  ]
}
</script>

<style scoped>
</style>
