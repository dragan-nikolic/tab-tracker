<template>
  <panel title="YouTube Video">
    {{youtubeId}}
  </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },

  props: [
    'youtubeId'
  ]
}
</script>

<style scoped>
</style>
