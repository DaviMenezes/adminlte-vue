<template>
  <a-card :class="'card-'+type">
    <a-card-header slot="header">
      <h4 class="card-title">
        <a data-toggle="collapse" :data-parent="'#'+id" :href="'#collapse_'+id">
          {{title}}
        </a>
      </h4>
    </a-card-header>
    <div :id="'collapse_'+id" class="panel-collapse collapse in">
      <div class="card-body">
        <slot name="body">
          <span v-html="body"></span>
        </slot>
      </div>
    </div>
  </a-card>
</template>
<script>
import ACard from '../Card/ACard'
import ACardHeader from '../Card/CardHeader/ACardHeader'
const typeEnum = {
  primary: 'primary',
  success: 'success',
  warning: 'warning',
  danger: 'danger'
}
export default {
  name: 'AAccordionItem',
  components: { ACardHeader, ACard },
  data () {
    return {}
  },
  props: {
    title: String,
    id: { type: String, required: true },
    /** valid types: primary, success, warning, danger */
    type: { type: String, default: typeEnum.primary, validator: (val) => Object.keys(typeEnum).includes(val) },
    body: String
  }
}
</script>
