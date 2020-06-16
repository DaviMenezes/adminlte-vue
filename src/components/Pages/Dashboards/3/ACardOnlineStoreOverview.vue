<template>
  <Card>
    <template slot="header">
      <CardHeader title="Online Store Overview" class="border-0">
        <template slot="tools">
          <a href="#" class="btn btn-sm btn-tool">
            <i class="fas fa-download"></i>
          </a>
          <a href="#" class="btn btn-sm btn-tool">
            <i class="fas fa-bars"></i>
          </a>
        </template>
      </CardHeader>
      <CardBody>
        <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
          <p class="text-success text-xl">
            <i class="ion ion-ios-refresh-empty"></i>
          </p>
          <p class="d-flex flex-column text-right">
                    <span class="font-weight-bold">
                      <i class="ion ion-android-arrow-up text-success"></i> 12%
                    </span>
            <span class="text-muted">CONVERSION RATE</span>
          </p>
        </div>
        <!-- /.d-flex -->
        <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
          <p class="text-warning text-xl">
            <i class="ion ion-ios-cart-outline"></i>
          </p>
          <p class="d-flex flex-column text-right">
                    <span class="font-weight-bold">
                      <i class="ion ion-android-arrow-up text-warning"></i> 0.8%
                    </span>
            <span class="text-muted">SALES RATE</span>
          </p>
        </div>
        <!-- /.d-flex -->
        <div class="d-flex justify-content-between align-items-center mb-0">
          <p class="text-danger text-xl">
            <i class="ion ion-ios-people-outline"></i>
          </p>
          <p class="d-flex flex-column text-right">
                    <span class="font-weight-bold">
                      <i class="ion ion-android-arrow-down text-danger"></i> 1%
                    </span>
            <span class="text-muted">REGISTRATION RATE</span>
          </p>
        </div>
      </CardBody>
    </template>
    <template slot="body"></template>
  </Card>
</template>
<script>
import Card from '../../../Widget/Card/ACard'
import CardHeader from '../../../Widget/Card/ACardHeader'
import CardBody from '../../../Widget/Card/ACardBody'

export default {
  name: 'ACardOnlineStoreOverview',
  components: {
    Card,
    CardHeader,
    CardBody
  },
  data () { return { } },
  props: { }
}
</script>
