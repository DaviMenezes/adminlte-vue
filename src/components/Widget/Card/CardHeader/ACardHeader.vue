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
<!--    <div class="card-tools" v-if="collapsable_local || removable_local || maximizable_local"> -->
    <slot name="tools">
      <a-card-header-tools>
        <a-card-header-tool-button-collapse v-if="collapsable_local"/>
        <a-card-header-tools-button-remove v-if="removable_local"/>
        <a-card-header-tool-button-maximize v-if="maximizable_local"/>
      </a-card-header-tools>
    </slot>
  </div>
</template>
<script>
import ACardHeaderTools from '@/components/Widget/Card/CardHeader/CardHeaderTools/ACardHeaderTools'
import ACardHeaderToolButtonCollapse
  from '@/components/Widget/Card/CardHeader/CardHeaderTools/ACardHeaderToolButtonCollapse'
import ACardHeaderToolsButtonRemove
  from '@/components/Widget/Card/CardHeader/CardHeaderTools/ACardHeaderToolButtonRemove'
import ACardHeaderToolButtonMaximize
  from '@/components/Widget/Card/CardHeader/CardHeaderTools/ACardHeaderToolButtonMaximize'
export default {
  name: 'ACardHeader',
  components: { ACardHeaderToolButtonMaximize, ACardHeaderToolsButtonRemove, ACardHeaderToolButtonCollapse, ACardHeaderTools },
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
