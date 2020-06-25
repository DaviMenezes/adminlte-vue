<template>
  <div class="card-header">
    <slot>
      <h3 class="card-title">
        <slot name="title_icon"/>{{title}}
      </h3>
    </slot>

    <ul slot="tabs" class="nav nav-pills ml-auto p-2" v-if="tabs">
        <li v-for="(tab, index) in tabs" :key="index" :class="getNavItemClass(tab)">
            <a v-if="actionsLength(tab) > 0" class="nav-link dropdown-toggle" data-toggle="dropdown" :href="'#'+tab.url">
              {{tab.title}} <span class="caret"></span>
            </a>
            <div v-if="actionsLength(tab) > 0" class="dropdown-menu">
              <div v-for="(action, index) in tab.actions" :key="index">
                <a class="dropdown-item" tabindex="-1"
                   :href="'#'+action.url"
                   v-if="action.type === 'link'"
                >
                  <i :class="action.icon" v-if="action.icon"></i>
                  {{action.title}}
                </a>
                <div class="dropdown-divider" v-if="action.type === 'divider'"></div>
              </div>
            </div>
          <a v-else :class="tab.active ? 'nav-link active' : 'nav-link'" :href="'#'+tab.url" data-toggle="tab">{{tab.title}}</a>
        </li>
      </ul>
    <div class="card-tools" v-if="collapsable_local || removable_local || maximizable_local">
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
    maximizable: Boolean,
    tabs: Array
  },
  methods: {
    actionsLength (tab) {
      return tab.actions?.length || 0
    },
    getNavItemClass (tab) {
      if (tab.type === 'link') {
        return 'nav-item'
      }
      if (tab.type === 'dropdown') {
        return 'nav-item dropdown'
      }
      return ''
    }
  }
}
</script>
