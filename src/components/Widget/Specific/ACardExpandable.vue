<template>
  <BCard class="card-primary collapsed-card">
    <template slot="header">
      <h3 class="card-title">{{title}}</h3>
      <div class="card-tools">
        <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-plus"></i>
        </button>
      </div>
    </template>
      <slot name="body">{{body}}</slot>
  </BCard>
</template>
<script>
export default {
  name: 'ACardExpandable',
  props: {
    title: { type: String },
    body: { type: String }
  }
}
</script>
