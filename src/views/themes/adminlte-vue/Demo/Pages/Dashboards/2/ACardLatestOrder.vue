<template>
  <a-card>
    <a-card-header title="Latest Orders" class=" border-transparent" slot="header">
        <a-card-header-tools slot="tools">
          <a-card-header-tool-button-collapse/>
          <a-card-header-tools-button-remove/>
        </a-card-header-tools>
      </a-card-header>
    <a-card-body class="p-0">
        <div class="table-responsive">
          <table class="table m-0">
            <thead>
            <tr>
              <th>Order ID</th>
              <th>Item</th>
              <th>Status</th>
              <th>Popularity</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><a href="pages/examples/invoice.html">OR9842</a></td>
              <td>Call of Duty IV</td>
              <td><span class="badge badge-success">Shipped</span></td>
              <td>
                <div class="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div>
              </td>
            </tr>
            <tr>
              <td><a href="pages/examples/invoice.html">OR1848</a></td>
              <td>Samsung Smart TV</td>
              <td><span class="badge badge-warning">Pending</span></td>
              <td>
                <div class="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</div>
              </td>
            </tr>
            <tr>
              <td><a href="pages/examples/invoice.html">OR7429</a></td>
              <td>iPhone 6 Plus</td>
              <td><span class="badge badge-danger">Delivered</span></td>
              <td>
                <div class="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63</div>
              </td>
            </tr>
            <tr>
              <td><a href="pages/examples/invoice.html">OR7429</a></td>
              <td>Samsung Smart TV</td>
              <td><span class="badge badge-info">Processing</span></td>
              <td>
                <div class="sparkbar" data-color="#00c0ef" data-height="20">90,80,-90,70,-61,83,63</div>
              </td>
            </tr>
            <tr>
              <td><a href="pages/examples/invoice.html">OR1848</a></td>
              <td>Samsung Smart TV</td>
              <td><span class="badge badge-warning">Pending</span></td>
              <td>
                <div class="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</div>
              </td>
            </tr>
            <tr>
              <td><a href="pages/examples/invoice.html">OR7429</a></td>
              <td>iPhone 6 Plus</td>
              <td><span class="badge badge-danger">Delivered</span></td>
              <td>
                <div class="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63</div>
              </td>
            </tr>
            <tr>
              <td><a href="pages/examples/invoice.html">OR9842</a></td>
              <td>Call of Duty IV</td>
              <td><span class="badge badge-success">Shipped</span></td>
              <td>
                <div class="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </a-card-body>
    <a-card-footer class="clearfix" >
        <a href="javascript:void(0)" class="btn btn-sm btn-info float-left">Place New Order</a>
        <a href="javascript:void(0)" class="btn btn-sm btn-secondary float-right">View All Orders</a>
      </a-card-footer>
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
  name: 'ACardLatestOrder',
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
