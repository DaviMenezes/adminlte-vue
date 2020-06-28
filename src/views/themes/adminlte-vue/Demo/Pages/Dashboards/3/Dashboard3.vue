<template>
  <div class="content-wrapper">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Dashboard v3</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Dashboard v3</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
            <CardOnlineStoreVisitors/>
            <CardProducts/>
          </div>
          <div class="col-lg-6">
            <CardSales/>
            <CardOnlineStoreOverview/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardOnlineStoreVisitors from './ACardOnlineStoreVisitors'
import CardProducts from './ACardProducts'
import CardSales from './ACardSales'
import CardOnlineStoreOverview from './ACardOnlineStoreOverview'

export default {
  components: {
    CardOnlineStoreOverview,
    CardSales,
    CardProducts,
    CardOnlineStoreVisitors
  },
  data () { return { } },
  props: { }
}
</script>
