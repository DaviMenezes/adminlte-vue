<template>
  <Card>
    <template slot="card_header">
      <CardHeader title="US-Visitors Report">
        <template slot="card_tools">
          <button type="button" class="btn btn-tool" data-card-widget="collapse">
            <i class="fas fa-minus"></i>
          </button>
          <button type="button" class="btn btn-tool" data-card-widget="remove">
            <i class="fas fa-times"></i>
          </button>
        </template>
      </CardHeader>
    </template>
    <template slot="card_body">
      <CardBody class="p-0">
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
      </CardBody>
    </template>
  </Card>
</template>
<script>
import Card from '../../../Widget/Card/Card'
import CardHeader from '../../../Widget/Card/CardHeader'
import CardBody from '../../../Widget/Card/CardBody'
import $ from 'jquery'
require('raphael')
require('jquery-mapael')
require('jquery-mapael/js/maps/usa_states')

export default {
  components: {
    Card,
    CardHeader,
    CardBody
  },
  data () { return { } },
  props: { },
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
