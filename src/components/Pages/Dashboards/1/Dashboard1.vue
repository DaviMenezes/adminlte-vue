<template>
  <div class="content-wrapper">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Dashboard</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ABreadcrumb :items="[{url:'#', label:'Home'}, {label:'Dashboard v1', class:'active'}]"/>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 col-6">
            <ACardIndicator class="bg-info" icon="ion ion-bag">
              <template slot="value"><h3>150</h3></template>
              <template slot="text"><p>New Orders</p></template>
            </ACardIndicator>
          </div>
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <a-card-indicator class="bg-success" icon="ion-stats-bars">
              <template slot="value"><h3>53<sup style="font-size: 20px">%</sup></h3></template>
              <template slot="text"><p>Bounce Rate</p></template>
            </a-card-indicator>
          </div>
          <div class="col-lg-3 col-6">
            <a-card-indicator class="bg-warning" icon="ion ion-person-add">
              <template slot="value"><h3>44</h3></template>
              <template slot="text"><p>User Registrations</p></template>
            </a-card-indicator>
          </div>
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <a-card-indicator class="bg-danger" icon="ion ion-pie-graph">
              <template slot="value"><h3>65</h3></template>
              <template slot="text"><p>Unique Visitors</p></template>
            </a-card-indicator>
          </div>
        </div>
        <div class="row">
          <!-- Left col -->
          <section class="col-lg-7 connectedSortable">
            <!-- Custom tabs (Charts with tabs)-->
            <a-sale-chart/>
            <a-card-direct-chat class="direct-chat-primary"/>
            <a-card>
              <template slot="header">
                <a-card-header title="To Do List">
                  <template slot="title_icon"><i class="ion ion-clipboard mr-1"/></template>
                  <template slot="tools">
                    <ul class="pagination pagination-sm">
                      <li class="page-item"><a href="#" class="page-link">&laquo;</a></li>
                      <li class="page-item"><a href="#" class="page-link">1</a></li>
                      <li class="page-item"><a href="#" class="page-link">2</a></li>
                      <li class="page-item"><a href="#" class="page-link">3</a></li>
                      <li class="page-item"><a href="#" class="page-link">&raquo;</a></li>
                    </ul>
                  </template>
                </a-card-header>
              </template>
              <template slot="body">
                <a-card-body>
                  <ul class="todo-list" data-widget="todo-list">
                    <li>
                      <!-- drag handle -->
                      <span class="handle">
                        <i class="fas fa-ellipsis-v"></i>
                        <i class="fas fa-ellipsis-v"></i>
                      </span>
                      <!-- checkbox -->
                      <div  class="icheck-primary d-inline ml-2">
                        <input type="checkbox" value="" name="todo1" id="todoCheck11">
                        <label for="todoCheck11"></label>
                      </div>
                      <!-- todo text -->
                      <span class="text">Design a nice theme</span>
                      <!-- Emphasis label -->
                      <small class="badge badge-danger"><i class="far fa-clock"></i> 2 mins</small>
                      <!-- General tools such as edit or delete-->
                      <div class="tools">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash-o"></i>
                      </div>
                    </li>
                    <li>
                      <span class="handle">
                        <i class="fas fa-ellipsis-v"></i>
                        <i class="fas fa-ellipsis-v"></i>
                      </span>
                      <div  class="icheck-primary d-inline ml-2">
                        <input type="checkbox" value="" name="todo2" id="todoCheck22" checked>
                        <label for="todoCheck22"></label>
                      </div>
                      <span class="text">Make the theme responsive</span>
                      <small class="badge badge-info"><i class="far fa-clock"></i> 4 hours</small>
                      <div class="tools">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash-o"></i>
                      </div>
                    </li>
                    <li>
                      <span class="handle">
                        <i class="fas fa-ellipsis-v"></i>
                        <i class="fas fa-ellipsis-v"></i>
                      </span>
                      <div  class="icheck-primary d-inline ml-2">
                        <input type="checkbox" value="" name="todo3" id="todoCheck33">
                        <label for="todoCheck33"></label>
                      </div>
                      <span class="text">Let theme shine like a star</span>
                      <small class="badge badge-warning"><i class="far fa-clock"></i> 1 day</small>
                      <div class="tools">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash-o"></i>
                      </div>
                    </li>
                    <li>
                      <span class="handle">
                        <i class="fas fa-ellipsis-v"></i>
                        <i class="fas fa-ellipsis-v"></i>
                      </span>
                      <div  class="icheck-primary d-inline ml-2">
                        <input type="checkbox" value="" name="todo4" id="todoCheck44">
                        <label for="todoCheck44"></label>
                      </div>
                      <span class="text">Let theme shine like a star</span>
                      <small class="badge badge-success"><i class="far fa-clock"></i> 3 days</small>
                      <div class="tools">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash-o"></i>
                      </div>
                    </li>
                    <li>
                      <span class="handle">
                        <i class="fas fa-ellipsis-v"></i>
                        <i class="fas fa-ellipsis-v"></i>
                      </span>
                      <div  class="icheck-primary d-inline ml-2">
                        <input type="checkbox" value="" name="todo5" id="todoCheck55">
                        <label for="todoCheck55"></label>
                      </div>
                      <span class="text">Check your messages and notifications</span>
                      <small class="badge badge-primary"><i class="far fa-clock"></i> 1 week</small>
                      <div class="tools">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash-o"></i>
                      </div>
                    </li>
                    <li>
                      <span class="handle">
                        <i class="fas fa-ellipsis-v"></i>
                        <i class="fas fa-ellipsis-v"></i>
                      </span>
                      <div  class="icheck-primary d-inline ml-2">
                        <input type="checkbox" value="" name="todo6" id="todoCheck66">
                        <label for="todoCheck66"></label>
                      </div>
                      <span class="text">Let theme shine like a star</span>
                      <small class="badge badge-secondary"><i class="far fa-clock"></i> 1 month</small>
                      <div class="tools">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash-o"></i>
                      </div>
                    </li>
                  </ul>
                </a-card-body>
              </template>
              <template slot="footer">
                <a-card-footer class="clearfix">
                  <button type="button" class="btn btn-info float-right"><i class="fas fa-plus"></i> Add item</button>
                </a-card-footer>
              </template>
            </a-card>

            <!-- /.card -->
          </section>
          <!-- /.Left col -->
          <!-- right col (We are only adding the ID to make the widgets sortable)-->
          <section class="col-lg-5 connectedSortable">

            <a-visitors-chart/>
            <a-sales-graph/>
            <a-card-calendar/>

          </section>
          <!-- right col -->
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
}
</script>
