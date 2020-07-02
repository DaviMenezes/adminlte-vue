<template>
  <a-card :class="getClasses" :collapsed="collapsed_local">
    <slot name="header">
      <a-card-header
        :title="title_local"
        :collapsable="collapsable_local"
        :removable="removable_local"
        :maximizable="maximizable_local"
        slot="header"/>
    </slot>
    <slot>
      <b-card-body>{{body_local}}</b-card-body>
    </slot>
  </a-card>
</template>
<script>
import CardColors from '@/components/Widget/Card/Color/CardColors'
import colorProps from '@/components/Widget/Card/Color/Props'
import ACardHeader from '../CardHeader/ACardHeader'
import ACard from '../ACard'
export default {
  name: 'ACardColor',
  components: { ACard, ACardHeader },
  data () {
    return {
      title_local: this.title,
      body_local: this.body,
      outline_local: this.outline,
      collapsable_local: this.collapsable,
      collapsed_local: this.collapsed,
      removable_local: this.removable,
      maximizable_local: this.maximizable,
      color_local: this.color,
      all_painted_local: this.all_painted,
      gradient_local: this.gradient
    }
  },
  props: {
    title: String,
    body: String,
    outline: Boolean,
    collapsable: Boolean,
    collapsed: Boolean,
    removable: Boolean,
    maximizable: Boolean,
    ...colorProps.props,
    all_painted: Boolean,
    gradient: Boolean
  },
  computed: {
    getClasses () {
      let classes = ''
      if (this.color_local) {
        classes += this.color_local
      }
      if (this.outline_local) {
        classes += ' ' + CardColors.outline
      }
      return classes
    }
  }
}
</script>
