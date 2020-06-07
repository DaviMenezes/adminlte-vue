<template>
  <Card>
    <template slot="header">
      <CardHeader title="Latest Orders" class=" border-transparent">
        <template slot="tools">
          <button type="button" class="btn btn-tool" data-card-widget="collapse">
            <i class="fas fa-minus"></i>
          </button>
          <button type="button" class="btn btn-tool" data-card-widget="remove">
            <i class="fas fa-times"></i>
          </button>
        </template>
      </CardHeader>
    </template>
    <template slot="body">
      <CardBody class="p-0">
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
      </CardBody>
    </template>
    <template slot="footer">
      <CardFooter class="clearfix">
        <a href="javascript:void(0)" class="btn btn-sm btn-info float-left">Place New Order</a>
        <a href="javascript:void(0)" class="btn btn-sm btn-secondary float-right">View All Orders</a>
      </CardFooter>
    </template>
  </Card>
</template>
<script>
import Card from '../../../Widget/Card/Card'
import CardHeader from '../../../Widget/Card/CardHeader'
import CardBody from '../../../Widget/Card/CardBody'
import CardFooter from '../../../Widget/Card/CardFooter'

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
  props: {}
}
</script>
