<template>
  <a-card-color
    :color="color_local"
    :title="title_local"
    :body="body_local"
    :outline="outline_local"
    :collapse="collapse_local"
  />
</template>
<script>
  import ACardColor from './ACardColor'
  export default {
    name: 'ACardColorBase',
    extends: ACardColor,
    components: { ACardColor },
  }
</script>
