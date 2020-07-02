<template>
  <button type="button" @click="clicked()" :disabled="updating_local" class="btn btn-tool">
    <i class="fas fa-sync-alt"></i>
  </button>
</template>
<script>
export default {
  name: 'ACardHeaderToolButtonRefresh',
  data () {
    return {
      updating_local: this.updating
    }
  },
  props: {
    updating: Boolean
  },
  created () {
    this.$on('updated', () => {
      this.updating_local = false
    })
  },
  methods: {
    clicked () {
      this.$emit('click')
      this.updating_local = !this.updating_local
    }
  }
}
</script>
