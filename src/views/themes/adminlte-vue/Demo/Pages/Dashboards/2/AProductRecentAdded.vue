<template>
  <a-card>
    <a-card-header title="Recently Added Products" slot="header">
      <a-card-header-tools slot="tools">
        <a-card-header-tool-button-collapse/>
        <a-card-header-tools-button-remove/>
      </a-card-header-tools>
    </a-card-header>
    <a-card-body class="p-0">
      <ul class="products-list product-list-in-card pl-2 pr-2">
        <li class="item">
          <div class="product-img">
            <img src="/dist/img/default-150x150.png" alt="Product Image" class="img-size-50">
          </div>
          <div class="product-info">
            <a href="javascript:void(0)" class="product-title">Samsung TV
              <span class="badge badge-warning float-right">$1800</span></a>
            <span class="product-description">
                      Samsung 32" 1080p 60Hz LED Smart HDTV.
                    </span>
          </div>
        </li>
        <!-- /.item -->
        <li class="item">
          <div class="product-img">
            <img src="/dist/img/default-150x150.png" alt="Product Image" class="img-size-50">
          </div>
          <div class="product-info">
            <a href="javascript:void(0)" class="product-title">Bicycle
              <span class="badge badge-info float-right">$700</span></a>
            <span class="product-description">
                      26" Mongoose Dolomite Men's 7-speed, Navy Blue.
                    </span>
          </div>
        </li>
        <!-- /.item -->
        <li class="item">
          <div class="product-img">
            <img src="/dist/img/default-150x150.png" alt="Product Image" class="img-size-50">
          </div>
          <div class="product-info">
            <a href="javascript:void(0)" class="product-title">
              Xbox One <span class="badge badge-danger float-right">
                      $350
                    </span>
            </a>
            <span class="product-description">
                      Xbox One Console Bundle with Halo Master Chief Collection.
                    </span>
          </div>
        </li>
        <!-- /.item -->
        <li class="item">
          <div class="product-img">
            <img src="/dist/img/default-150x150.png" alt="Product Image" class="img-size-50">
          </div>
          <div class="product-info">
            <a href="javascript:void(0)" class="product-title">PlayStation 4
              <span class="badge badge-success float-right">$399</span></a>
            <span class="product-description">
                      PlayStation 4 500GB Console (PS4)
                    </span>
          </div>
        </li>
        <!-- /.item -->
      </ul>
    </a-card-body>
    <template slot="footer">
      <a-card-footer class="text-center">
        <a href="javascript:void(0)" class="uppercase">View All Products</a>
      </a-card-footer>
    </template>
  </a-card>
</template>
<script>
import ACard from '@/components/Widget/Card/ACard'
import ACardHeader from '@/components/Widget/Card/CardHeader/ACardHeader'
import ACardBody from '@/components/Widget/Card/ACardBody'
import ACardFooter from '@/components/Widget/Card/ACardFooter'
import ACardHeaderTools from '@/components/Widget/Card/CardHeader/CardHeaderTools/ACardHeaderTools'
import ACardHeaderToolButtonCollapse
  from '@/components/Widget/Card/CardHeader/CardHeaderTools/ACardHeaderToolButtonCollapse'
import ACardHeaderToolsButtonRemove
  from '@/components/Widget/Card/CardHeader/CardHeaderTools/ACardHeaderToolButtonRemove'

export default {
  name: 'AProductRecentAdded',
  components: {
    ACardHeaderToolsButtonRemove,
    ACardHeaderToolButtonCollapse,
    ACardHeaderTools,
    ACard,
    ACardHeader,
    ACardBody,
    ACardFooter
  }
}
</script>
