<template>
  <div :id="id">
    <!-- we are adding the .class so bootstrap.js collapse plugin detects it -->
    <a-accordion-item v-for="(item, index) in items" :key="index" :id="id" :type="item.type" :title="item.title">
      <template slot="body">
        <span>{{item.body}}</span>
      </template>
    </a-accordion-item>
  </div>
</template>

<script>
import AAccordionItem from './AAccordionItem'
export default {
  name: 'AAccordion',
  components: { AAccordionItem },
  data () {
    return {
      id: 'accordion_' + (new Date().getTime())
    }
  },
  props: {
    items: Array
  }
}
</script>
