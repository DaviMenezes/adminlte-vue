<template>
  <div class="card-header">
    <slot>
      <h3 class="card-title">
        <slot name="title_icon"/>{{title}}
      </h3>
    </slot>
    <div class="card-tools">
      <slot name="tools">
        <button v-if="collapsable_local" type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i></button>
        <button v-if="removable_local" type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i></button>
        <button v-if="maximizable_local" type="button" class="btn btn-tool" data-card-widget="maximize"><i class="fas fa-expand"></i></button>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ACardHeader',
  data () {
    return {
      removable_local: this.removable,
      collapsable_local: this.collapsable,
      maximizable_local: this.maximizable
    }
  },
  props: {
    title: String,
    collapsable: Boolean,
    removable: Boolean,
    maximizable: Boolean
  }
}
</script>
