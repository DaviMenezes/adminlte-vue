<template>
  <a-card>
    <a-card-header slot="header" title="US-Visitors Report">
      <a-card-header-tools slot="tools" collapsable removable/>
    </a-card-header>
    <a-card-body class="p-0">
      <div class="d-md-flex">
        <div class="p-1 flex-fill" style="overflow: hidden">
          <!-- Map will be created here -->
          <div id="world-map-markers" style="height: 325px; overflow: hidden">
            <div class="map"></div>
          </div>
        </div>
        <div class="card-pane-right bg-success pt-2 pb-2 pl-4 pr-4">
          <div class="description-block mb-4">
            <div class="sparkbar pad" data-color="#fff">90,70,90,70,75,80,70</div>
            <h5 class="description-header">8390</h5>
            <span class="description-text">Visits</span>
          </div>
          <!-- /.description-block -->
          <div class="description-block mb-4">
            <div class="sparkbar pad" data-color="#fff">90,50,90,70,61,83,63</div>
            <h5 class="description-header">30%</h5>
            <span class="description-text">Referrals</span>
          </div>
          <!-- /.description-block -->
          <div class="description-block">
            <div class="sparkbar pad" data-color="#fff">90,50,90,70,61,83,63</div>
            <h5 class="description-header">70%</h5>
            <span class="description-text">Organic</span>
          </div>
          <!-- /.description-block -->
        </div><!-- /.card-pane-right -->
      </div>
    </a-card-body>
  </a-card>
</template>
<script>
import ACard from '@/components/Widget/Card/ACard'
import ACardHeader from '@/components/Widget/Card/CardHeader/ACardHeader'
import ACardBody from '@/components/Widget/Card/ACardBody'
import $ from 'jquery'
import ACardHeaderTools from '@/components/Widget/Card/CardHeader/CardHeaderTools/ACardHeaderTools'
require('raphael')
require('jquery-mapael')
require('jquery-mapael/js/maps/usa_states')

export default {
  name: 'AMapBoxPane',
  components: {
    ACardHeaderTools,
    ACard,
    ACardHeader,
    ACardBody
  },
  mounted () {
    $('#world-map-markers').mapael({
      map: {
        name: 'usa_states',
        zoom: {
          enabled: true,
          maxLevel: 10
        }
      }
    })
  }
}
</script>
