<template>
  <img class="img-circle" :src="src_local" :alt="alt_local" :title="title_local">
</template>
<script>
export default {
  name: 'AImgCircle',
  data () {
    return {
      src_local: this.src,
      alt_local: this.alt,
      title_local: this.title
    }
  },
  props: {
    src: { type: String, required: true },
    alt: String,
    title: String
  }
}
</script>
