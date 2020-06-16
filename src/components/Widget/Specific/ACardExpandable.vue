<template>
  <a-card-default :collapsed="collapsed" collapsable :title="title_local" :body="body_local"></a-card-default>
</template>
<script>
import ACardDefault from '../Card/Color/ACardDefault'

export default {
  name: 'ACardExpandable',
  components: { ACardDefault },
  extends: ACardDefault
}
</script>
