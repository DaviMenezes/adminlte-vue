<template>
  <a-card class="bg-gradient-primary" >
    <a-card-header title="Visitors" slot="header">
      <template slot="title_icon"><i class="fas fa-map-marker-alt mr-1"></i></template>
      <a-card-header-tools slot="tools">
        <button type="button"
                class="btn btn-tool btn-sm daterange"
                data-toggle="tooltip"
                title="Date range">
          <i class="far fa-calendar-alt"></i>
        </button>
        <a-card-header-tool-button-collapse/>
      </a-card-header-tools>
    </a-card-header>
    <a-card-body>
      <div ref="world_map" id="world-map" style="height: 250px; width: 100%;"></div>
    </a-card-body>
    <a-card-footer class="bg-transparent" slot="footer">
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
    </a-card-footer>
  </a-card>
</template>
<script>
import jQuery from 'jquery'
import ACard from '@/components/Widget/Card/ACard'
import ACardHeader from '@/components/Widget/Card/CardHeader/ACardHeader'
import ACardBody from '@/components/Widget/Card/ACardBody'
import ACardFooter from '@/components/Widget/Card/ACardFooter'
import ACardHeaderTools from '@/components/Widget/Card/CardHeader/CardHeaderTools/ACardHeaderTools'
import ACardHeaderToolButtonCollapse
  from '@/components/Widget/Card/CardHeader/CardHeaderTools/ACardHeaderToolButtonCollapse'
window.jQuery = window.$ = jQuery
require('jqvmap')
require('jqvmap/dist/maps/jquery.vmap.usa')
require('jqvmap/dist/maps/jquery.vmap.brazil')

export default {
  name: 'AVisitorsChart',
  components: {
    ACardHeaderToolButtonCollapse,
    ACardHeaderTools,
    ACardFooter,
    ACardBody,
    ACardHeader,
    ACard
  },
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
