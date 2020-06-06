<template>
  <Card class="bg-gradient-primary" >
    <template slot="card_header">
      <CardHeader title="Visitors">
        <template slot="title_icon"><i class="fas fa-map-marker-alt mr-1"></i></template>
        <template slot="card_tools">
          <button type="button"
                  class="btn btn-primary btn-sm daterange"
                  data-toggle="tooltip"
                  title="Date range">
            <i class="far fa-calendar-alt"></i>
          </button>
          <button type="button"
                  class="btn btn-primary btn-sm"
                  data-card-widget="collapse"
                  data-toggle="tooltip"
                  title="Collapse">
            <i class="fas fa-minus"></i>
          </button>
        </template>
      </CardHeader>
    </template>
    <template slot="card_body">
      <CardBody>
        <div ref="world_map" id="world-map" style="height: 250px; width: 100%;"></div>
      </CardBody>
    </template>
    <template slot="card_footer">
      <CardFooter class="bg-transparent">
        <div class="row">
          <div class="col-4 text-center">
            <div id="sparkline-1"></div>
            <div class="text-white">Visitors</div>
          </div>
          <!-- ./col -->
          <div class="col-4 text-center">
            <div id="sparkline-2"></div>
            <div class="text-white">Online</div>
          </div>
          <!-- ./col -->
          <div class="col-4 text-center">
            <div id="sparkline-3"></div>
            <div class="text-white">Sales</div>
          </div>
          <!-- ./col -->
        </div>
      </CardFooter>
    </template>
  </Card>
</template>
<script>
import Card from '../../views/themes/adminlte-vue/Widget/Card/Card'
import CardHeader from '../../views/themes/adminlte-vue/Widget/Card/CardHeader'
import CardBody from '../../views/themes/adminlte-vue/Widget/Card/CardBody'
import CardFooter from '../../views/themes/adminlte-vue/Widget/Card/CardFooter'

import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
require('jqvmap')
require('jqvmap/dist/maps/jquery.vmap.usa')
require('jqvmap/dist/maps/jquery.vmap.brazil')

export default {
  components: {
    Card,
    CardHeader,
    CardBody,
    CardFooter
  },
  data () {
    return {}
  },
  props: {},
  mounted () {
    const visitorsData = {
      US: 398, // USA
      SA: 400, // Saudi Arabia
      CA: 1000, // Canada
      DE: 500, // Germany
      FR: 760, // France
      CN: 300, // China
      AU: 700, // Australia
      BR: 600, // Brazil
      IN: 800, // India
      GB: 320, // Great Britain
      RU: 3000 // Russia
    }
    // World map by jvectormap
    jQuery('#world-map').vectorMap({
      map: 'brazil_br',
      backgroundColor: 'transparent',
      regionStyle: {
        initial: {
          fill: 'rgba(255, 255, 255, 0.7)',
          'fill-opacity': 1,
          stroke: 'rgba(0,0,0,.2)',
          'stroke-width': 1,
          'stroke-opacity': 1
        }
      },
      series: {
        regions: [{
          values: visitorsData,
          scale: ['#ffffff', '#0154ad'],
          normalizeFunction: 'polynomial'
        }]
      },
      onRegionLabelShow: function (e, el, code) {
        if (typeof visitorsData[code] !== 'undefined') {
          el.html(el.html() + ': ' + visitorsData[code] + ' new visitors')
        }
      }
    })
  }
}
</script>
