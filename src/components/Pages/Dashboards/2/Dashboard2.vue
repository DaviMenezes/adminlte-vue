<template>
  <div class="content-wrapper">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Dashboard v2</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <Breadcrumb :items="[{url:'#', label:'Home'}, {label:'Dashboard v2', class:'active'}]"/>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>

    <section class="content">
      <div class="container-fluid">
        <!-- Info boxes -->
        <div class="row">
          <div class="col-12 col-sm-6 col-md-3">
            <InfoBox text="CPU Traffic" number="10%" icon="fas fa-cog" icon_class="bg-info"></InfoBox>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <InfoBox text="Likes" number="41,410" class="mb-3" icon="fas fa-thumbs-up" icon_class="bg-danger"></InfoBox>
          </div>
          <!-- fix for small devices only -->
          <div class="clearfix hidden-md-up"></div>

          <div class="col-12 col-sm-6 col-md-3">
            <InfoBox text="Sales" number="760" class="mb-3" icon="fas fa-shopping-cart" icon_class="bg-success"></InfoBox>
          </div>
          <!-- /.col -->
          <div class="col-12 col-sm-6 col-md-3">
            <InfoBox text="New Members" number="2,000" class="mb-3" icon="fas fa-users" icon_class="bg-warning"></InfoBox>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->

        <div class="row">
          <div class="col-md-12">
            <MonthlyRecapReport/>
          </div>
        </div>
        <!-- Main row -->
        <div class="row">
          <!-- Left col -->
          <div class="col-md-8">
            <!-- MAP & BOX PANE -->
            <MapBoxPane/>

            <div class="row">
              <div class="col-md-6">
                <CardDirectChat class="direct-chat-warning" title="Direct Chat" :message="directChat"/>
              </div>
              <div class="col-md-6">
                <CardLastMembers/>
              </div>
            </div>

            <CardLatestOrder/>
          </div>

          <div class="col-md-4">
            <!-- Info Boxes Style 2 -->
            <InfoBox class="mb-3 bg-warning"
               icon_class="info-box-icon" icon="fas fa-tag"
               text="Inventory" number="5,200" no_elevation
            />
            <!-- /.info-box -->
            <InfoBox class="mb-3 bg-success" icon="far fa-heart" icon_class="info-box-icon"
              text="Mentions" number="92,050" no_elevation
            />
            <InfoBox class="mb-3 bg-danger" icon_class="info-box-icon" icon="fas fa-cloud-download-alt"
               text="Downloads" number="114,381" no_elevation/>
            <!-- /.info-box -->
            <InfoBox class="mb-3 bg-info" icon_class="info-box-icon" icon="far fa-comment" no_elevation
              text="Direct Messages" number="163,921"
            />
            <BrowserUsage/>
            <!-- /.card -->

            <!-- PRODUCT LIST -->
            <ProductRecentAdded/>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div><!--/. container-fluid -->
    </section>
  </div>
</template>
<script>
import Breadcrumb from '../1/Breadcrumb'
import InfoBox from '../../../Widget/AInfoBox'
import CardLastMembers from './ACardLastMembers'
import CardLatestOrder from './ACardLatestOrder'
import CardDirectChat from './ACardDirectChat'
import BrowserUsage from './ABrowserUsage'
import ProductRecentAdded from './AProductRecentAdded'
import MapBoxPane from './AMapBoxPane'
import MonthlyRecapReport from './AMonthlyRecapReport'

export default {
  components: {
    MonthlyRecapReport,
    MapBoxPane,
    ProductRecentAdded,
    BrowserUsage,
    Breadcrumb,
    InfoBox,
    CardDirectChat,
    CardLastMembers,
    CardLatestOrder
  },
  data () {
    return {
      directChat: { title: '3 New Messages', amount: 3, type: 'warning' }
    }
  }
}
</script>
