<template>
  <div class="card card-widget widget-user">
    <!-- Add the bg color to the header using any of the bg-* classes -->
    <div :class="'widget-user-header '+ type_local" :style="header_img_local">
      <h3 :class="'widget-user-username '+ user_info_direction_local">{{user_name_local}}</h3>
      <h5 :class="'widget-user-desc ' + user_info_direction_local">{{user_desc_local}}</h5>
    </div>
    <slot name="usr_img">
      <i class="far fa-user-circle fa-3x"></i>
    </slot>
    <div class="card-footer">
      <div class="row">
        <div class="col-sm-4 border-right" v-for="(item, index) in items" :key="index">
          <div class="description-block">
            <h5 class="description-header">{{item.header}}</h5>
            <span class="description-text">{{item.text}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ACardProfile',
  data () {
    return {
      items_local: this.items,
      user_name_local: this.user_name,
      user_desc_local: this.user_desc,
      type_local: this.type ? 'bg-' + this.type : '',
      header_img_local: this.header_img,
      user_info_direction_local: this.user_info_direction
    }
  },
  props: {
    items: Array,
    user_name: String,
    user_desc: String,
    type: { type: String, default: 'info' },
    header_img: String,
    user_info_direction: String
  }
}
</script>
