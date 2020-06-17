<template>
  <!-- Add the bg color to the header using any of the bg-* classes -->
  <div class="card card-widget widget-user-2">
    <div :class="'widget-user-header bg-'+type_local">
      <slot name="usr_img">
        <i class="far fa-user-circle fa-3x"></i>
      </slot>
      <h3 class="widget-user-username">{{user_name_local}}</h3>
      <h5 class="widget-user-desc">{{user_desc_local}}</h5>
    </div>
    <div class="card-footer p-0">
      <ul class="nav flex-column">
        <li class="nav-item" v-for="(item, index) in items_local" :key="index">
          <a :href="item.url" class="nav-link">
            {{item.title}} <span :class="'float-right badge bg-'+item.type">{{item.amount}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ACardProfileActivities',
  data () {
    return {
      type_local: this.type,
      user_name_local: this.user_name,
      user_desc_local: this.user_desc,
      items_local: this.items
    }
  },
  props: {
    type: { type: String, default: 'light' },
    user_name: String,
    user_desc: String,
    items: Array
  }
}
</script>
