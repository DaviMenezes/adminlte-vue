<template>
  <a-card :class="getClasses" :collapsed="collapsed_local">
    <a-card-header
      :title="title_local"
      :collapsable="collapsable_local"
      :removable="removable_local"
      :maximizable="maximizable_local"
      slot="header"/>

    <slot name="body">
      <BCardBody slot="body">{{body_local}}</BCardBody>
    </slot>
  </a-card>
</template>
<script>
import ACardHeader from '../ACardHeader'
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
    color: { type: String },
    all_painted: Boolean,
    gradient: Boolean
  },
  computed: {
    getClasses () {
      let classes = ''
      if (this.color_local) {
        if (this.all_painted_local) {
          classes += 'bg-' + (this.gradient_local ? 'gradient-' + this.color_local : this.color_local)
        } else {
          classes += 'card-' + this.color_local
        }
      }
      if (this.outline_local) {
        classes += ' card-outline'
      }
      return classes
    }
  },
  methods: {
    getColor () {
      return 'primary'
    }
  }
}
</script>
