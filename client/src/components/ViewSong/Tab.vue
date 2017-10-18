<template>
  <panel title="Tab">
    <textarea
      readonly
      v-model="songTab">
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
    'songTab'
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
  padding: 10px;
}
</style>
