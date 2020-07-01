<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Buttons</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Buttons</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="card card-primary card-outline">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="fas fa-edit"></i>
                  Buttons
                </h3>
              </div>
              <div class="card-body pad table-responsive">
                <p>Various types of buttons. Using the base class <code>.btn</code></p>
                <table class="table table-bordered text-center">
                  <tr>
                    <th>Normal</th>
                    <th>Large <code>.btn-lg</code></th>
                    <th>Small <code>.btn-sm</code></th>
                    <th>Extra Small <code>.btn-xs</code></th>
                    <th>Flat <code>.btn-flat</code></th>
                    <th>Disabled <code>.disabled</code></th>
                  </tr>
                  <tr>
                    <td>
                      <a-button block>Default</a-button>
                    </td>
                    <td>
                      <a-button block :size="sizeEnum.lg">Default</a-button>
                    </td>
                    <td>
                      <a-button block>Default</a-button>
                    </td>
                    <td>
                      <a-button block :size="sizeEnum.xs">Default</a-button>
                    </td>
                    <td>
                      <a-button block flat>Default</a-button>
                    </td>
                    <td>
                      <a-button block disabled>Default</a-button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a-button block :variant="variantEnum.primary">Primary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.primary" :size="sizeEnum.lg">Primary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.primary" :size="sizeEnum.sm">Primary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.primary" :size="sizeEnum.xs">Primary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.primary" flat>Primary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.primary" disabled>Primary</a-button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a-button block :variant="variantEnum.secondary">Secondary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.secondary" :size="sizeEnum.lg">Secondary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.secondary" :size="sizeEnum.sm">Secondary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.secondary" :size="sizeEnum.xs">Secondary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.secondary" flat>Secondary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.secondary" disabled>Secondary</a-button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a-button block :variant="variantEnum.success">Success</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.success" :size="sizeEnum.lg">Success</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.success" :size="sizeEnum.sm">Success</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.success" :size="sizeEnum.xs">Success</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.success" flat>Success</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.success" disabled>Success</a-button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a-button block :variant="variantEnum.info">Info</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.info" :size="sizeEnum.lg">Info</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.info" :size="sizeEnum.sm">Info</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.info" :size="sizeEnum.xs">Info</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.info" flat>Info</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.info" disabled>Info</a-button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a-button block :variant="variantEnum.danger" >Danger</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.danger" :size="sizeEnum.lg" >Danger</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.danger" :size="sizeEnum.sm">Danger</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.danger" :size="sizeEnum.xs">Danger</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.danger" flat>Danger</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.danger" disabled>Danger</a-button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a-button block :variant="variantEnum.warning">Warning</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.warning" :size="sizeEnum.lg">Warning</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.warning" :size="sizeEnum.sm">Warning</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.warning" :size="sizeEnum.xs">Warning</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.warning" flat>Warning</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.warning" disabled>Warning</a-button>
                    </td>
                  </tr>
                </table>
              </div>
              <!-- /.card -->
            </div>
          </div>
          <!-- /.col -->
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="card card-primary card-outline">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="fas fa-edit"></i>
                  Outline Buttons
                </h3>
              </div>
              <div class="card-body pad table-responsive">
                <p>Various types of buttons. Using the base class <code>.btn</code></p>
                <table class="table table-bordered text-center">
                  <tr>
                    <th>Normal</th>
                    <th>Large <code>.btn-lg</code></th>
                    <th>Small <code>.btn-sm</code></th>
                    <th>Extra Small <code>.btn-xs</code></th>
                    <th>Flat <code>.btn-flat</code></th>
                    <th>Disabled <code>.disabled</code></th>
                  </tr>
                  <tr>
                    <td>
                      <a-button block :variant="variantEnum.outline_primary">Primary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_primary" :size="sizeEnum.lg">Primary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_primary" :size="sizeEnum.sm">Primary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_primary" :size="sizeEnum.xs">Primary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_primary" flat>Primary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_primary" disabled>Primary</a-button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a-button block :variant="variantEnum.outline_secondary">Secondary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_secondary" :size="sizeEnum.lg">Secondary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_secondary" :size="sizeEnum.sm">Secondary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_secondary" :size="sizeEnum.xs">Secondary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_secondary" flat>Secondary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_secondary" disabled>Secondary</a-button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a-button block :variant="variantEnum.outline_success">Success</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_success" :size="sizeEnum.lg">Success</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_success" :size="sizeEnum.sm">Success</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_success" :size="sizeEnum.xs">Success</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_success" flat>Success</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_success" disabled>Success</a-button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a-button block :variant="variantEnum.outline_info">Info</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_info" :size="sizeEnum.lg">Info</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_info" :size="sizeEnum.sm">Info</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_info" :size="sizeEnum.xs">Info</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_info" flat>Info</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_info" disabled>Info</a-button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a-button block :variant="variantEnum.outline_danger">Danger</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_danger" :size="sizeEnum.lg">Danger</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_danger" :size="sizeEnum.sm">Danger</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_danger" :size="sizeEnum.xs">Danger</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_danger" flat>Danger</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_danger" disabled>Danger</a-button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a-button block :variant="variantEnum.outline_warning">Warning</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_warning" :size="sizeEnum.lg">Warning</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_warning" :size="sizeEnum.sm">Warning</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_warning" :size="sizeEnum.xs">Warning</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_warning" flat>Warning</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.outline_warning" disabled>Warning</a-button>
                    </td>
                  </tr>
                </table>
              </div>
              <!-- /.card -->
            </div>
          </div>
          <!-- /.col -->
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="card card-primary card-outline">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="fas fa-edit"></i>
                  Gradient Buttons (bg-gradient-*)
                </h3>
              </div>
              <div class="card-body pad table-responsive">
                <p>Various types of buttons. Using the base class <code>.btn</code></p>
                <table class="table table-bordered text-center">
                  <tr>
                    <th>Normal</th>
                    <th>Large <code>.btn-lg</code></th>
                    <th>Small <code>.btn-sm</code></th>
                    <th>Extra Small <code>.btn-xs</code></th>
                    <th>Flat <code>.btn-flat</code></th>
                    <th>Disabled <code>.disabled</code></th>
                  </tr>
                  <tr>
                    <td>
                      <a-button block :variant="variantEnum.gradient_primary">Primary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_primary" :size="sizeEnum.lg">Primary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_primary" :size="sizeEnum.sm">Primary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_primary" :size="sizeEnum.xs">Primary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_primary" flat>Primary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_primary" disabled>Primary</a-button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a-button block :variant="variantEnum.gradient_secondary">Secondary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_secondary" :size="sizeEnum.lg">Secondary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_secondary" :size="sizeEnum.sm">Secondary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_secondary" :size="sizeEnum.xs">Secondary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_secondary" flat>Secondary</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_secondary" disabled>Secondary</a-button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a-button block :variant="variantEnum.gradient_success">Success</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_success" :size="sizeEnum.lg">Success</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_success" :size="sizeEnum.sm">Success</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_success" :size="sizeEnum.xs">Success</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_success" flat>Success</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_success" disabled>Success</a-button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a-button block :variant="variantEnum.gradient_info">Info</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_info" :size="sizeEnum.lg">Info</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_info" :size="sizeEnum.sm">Info</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_info" :size="sizeEnum.xs">Info</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_info" flat>Info</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_info" disabled>Info</a-button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a-button block :variant="variantEnum.gradient_danger">Danger</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_danger" :size="sizeEnum.lg">Danger</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_danger" :size="sizeEnum.sm">Danger</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_danger" :size="sizeEnum.xs">Danger</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_danger" flat>Danger</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_danger" disabled>Danger</a-button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a-button block :variant="variantEnum.gradient_warning">Warning</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_warning" :size="sizeEnum.lg">Warning</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_warning" :size="sizeEnum.sm">Warning</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_warning" :size="sizeEnum.xs">Warning</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_warning" flat>Warning</a-button>
                    </td>
                    <td>
                      <a-button block :variant="variantEnum.gradient_warning" disabled>Warning</a-button>
                    </td>
                  </tr>
                </table>
              </div>
              <!-- /.card -->
            </div>
          </div>
          <!-- /.col -->
        </div>
        <div class="row">
          <div class="col-md-6">
            <!-- Block buttons -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Block Buttons</h3>
              </div>
              <div class="card-body">
                <a-button block>default</a-button>
                <a-button block flat>flat</a-button>
                <a-button block :size="sizeEnum.sm">sm</a-button>
              </div>
            </div>
            <!-- /.card -->

            <!-- Horizontal grouping -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Horizontal Button Group</h3>
              </div>
              <div class="card-body table-responsive pad">
                <p>
                  Horizontal button groups are easy to create with bootstrap. Just add your buttons
                  inside <code>&lt;div class="btn-group"&gt;&lt;/div&gt;</code>
                </p>

                <table class="table table-bordered">
                  <tr>
                    <th>Button</th>
                    <th>Icons</th>
                    <th>Flat</th>
                    <th>Dropdown</th>
                  </tr>
                  <!-- Default -->
                  <tr>
                    <td>
                      <b-button-group>
                        <a-button>Left</a-button>
                        <a-button>Middle</a-button>
                        <a-button>Right</a-button>
                      </b-button-group>
                      <br>
                    </td>
                    <td>
                      <b-button-group>
                        <a-button><i class="fas fa-align-left"></i></a-button>
                        <a-button><i class="fas fa-align-center"></i></a-button>
                        <a-button><i class="fas fa-align-right"></i></a-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group>
                        <a-button flat><i class="fas fa-align-left"></i></a-button>
                        <a-button flat><i class="fas fa-align-center"></i></a-button>
                        <a-button flat><i class="fas fa-align-right"></i></a-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group>
                        <a-button>1</a-button>
                        <a-button>2</a-button>
                        <b-dropdown variant="default">
                          <b-dropdown-item href="#">Dropdown link 1</b-dropdown-item>
                          <b-dropdown-item href="#">Dropdown link 2</b-dropdown-item>
                        </b-dropdown>
                      </b-button-group>
                    </td>
                  </tr>
                  <!-- ./default -->
                  <!-- Info -->
                  <tr>
                    <td>
                      <b-button-group>
                        <a-button :variant="variantEnum.info">Left</a-button>
                        <a-button :variant="variantEnum.info">Middle</a-button>
                        <a-button :variant="variantEnum.info">Right</a-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group>
                        <a-button :variant="variantEnum.info"><i class="fas fa-align-left"></i></a-button>
                        <a-button :variant="variantEnum.info"><i class="fas fa-align-center"></i></a-button>
                        <a-button :variant="variantEnum.info"><i class="fas fa-align-right"></i></a-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group>
                        <a-button flat :variant="variantEnum.info"><i class="fas fa-align-left"></i></a-button>
                        <a-button flat :variant="variantEnum.info"><i class="fas fa-align-center"></i></a-button>
                        <a-button flat :variant="variantEnum.info"><i class="fas fa-align-right"></i></a-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group>
                        <a-button :variant="variantEnum.info">1</a-button>
                        <a-button :variant="variantEnum.info">2</a-button>
                        <b-dropdown variant="info">
                          <b-dropdown-item href="#">Link 1</b-dropdown-item>
                          <b-dropdown-item href="#">Link 2</b-dropdown-item>
                        </b-dropdown>
                      </b-button-group>
                    </td>
                  </tr>
                  <!-- /. info -->
                  <!-- /.danger -->
                  <tr>
                    <td>
                      <b-button-group>
                        <a-button :variant="variantEnum.danger">Left</a-button>
                        <a-button :variant="variantEnum.danger">Middle</a-button>
                        <a-button :variant="variantEnum.danger">Right</a-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group>
                        <a-button :variant="variantEnum.danger"><i class="fas fa-align-left"></i></a-button>
                        <a-button :variant="variantEnum.danger"><i class="fas fa-align-center"></i></a-button>
                        <a-button :variant="variantEnum.danger"><i class="fas fa-align-right"></i></a-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group>
                        <a-button flat :variant="variantEnum.danger"><i class="fas fa-align-left"></i></a-button>
                        <a-button flat :variant="variantEnum.danger"><i class="fas fa-align-center"></i></a-button>
                        <a-button flat :variant="variantEnum.danger"><i class="fas fa-align-right"></i></a-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group>
                        <a-button :variant="variantEnum.danger">1</a-button>
                        <a-button :variant="variantEnum.danger">2</a-button>
                        <b-dropdown variant="danger">
                          <b-dropdown-item href="#">Link 1</b-dropdown-item>
                          <b-dropdown-item href="#">Link 2</b-dropdown-item>
                        </b-dropdown>
                      </b-button-group>
                    </td>
                  </tr>
                  <!-- /.danger -->
                  <!-- warning -->
                  <tr>
                    <td>
                      <b-button-group>
                        <a-button :variant="variantEnum.warning">Left</a-button>
                        <a-button :variant="variantEnum.warning">Middle</a-button>
                        <a-button :variant="variantEnum.warning">Right</a-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group>
                        <a-button :variant="variantEnum.warning"><i class="fas fa-align-left"></i></a-button>
                        <a-button :variant="variantEnum.warning"><i class="fas fa-align-center"></i></a-button>
                        <a-button :variant="variantEnum.warning"><i class="fas fa-align-right"></i></a-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group>
                        <a-button flat :variant="variantEnum.warning"><i class="fas fa-align-left"></i></a-button>
                        <a-button flat :variant="variantEnum.warning"><i class="fas fa-align-center"></i></a-button>
                        <a-button flat :variant="variantEnum.warning"><i class="fas fa-align-right"></i></a-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group>
                        <a-button :variant="variantEnum.warning">1</a-button>
                        <a-button :variant="variantEnum.warning">2</a-button>
                        <b-dropdown variant="warning">
                          <b-dropdown-item href="#">Link 1</b-dropdown-item>
                          <b-dropdown-item href="#">Link 2</b-dropdown-item>
                        </b-dropdown>
                      </b-button-group>
                    </td>
                  </tr>
                  <!-- /.warning -->
                  <!-- success -->
                  <tr>
                    <td>
                      <b-button-group>
                        <a-button :variant="variantEnum.success">Left</a-button>
                        <a-button :variant="variantEnum.success">Middle</a-button>
                        <a-button :variant="variantEnum.success">Right</a-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group>
                        <a-button :variant="variantEnum.success"><i class="fas fa-align-left"></i></a-button>
                        <a-button :variant="variantEnum.success"><i class="fas fa-align-center"></i></a-button>
                        <a-button :variant="variantEnum.success"><i class="fas fa-align-right"></i></a-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group>
                        <a-button flat :variant="variantEnum.success"><i class="fas fa-align-left"></i></a-button>
                        <a-button flat :variant="variantEnum.success"><i class="fas fa-align-center"></i></a-button>
                        <a-button flat :variant="variantEnum.success"><i class="fas fa-align-right"></i></a-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group>
                        <a-button :variant="variantEnum.success">1</a-button>
                        <a-button :variant="variantEnum.success">2</a-button>
                        <b-dropdown variant="success">
                          <b-dropdown-item href="#">Link 1</b-dropdown-item>
                          <b-dropdown-item href="#">Link 2</b-dropdown-item>
                        </b-dropdown>
                      </b-button-group>
                    </td>
                  </tr>
                  <!-- /.success -->
                </table>
              </div>
            </div>
            <!-- /.card -->

            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Appended Buttons</h3>
              </div>
              <div class="card-body">
                <strong>With dropdown</strong>
                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-dropdown text="Action" variant="default">
                      <b-dropdown-item href="#">Action</b-dropdown-item>
                      <b-dropdown-item href="#">Another action</b-dropdown-item>
                      <b-dropdown-item href="#">Something else here</b-dropdown-item>
                      <b-dropdown-divider/>
                      <b-dropdown-item href="#">Separated link</b-dropdown-item>
                    </b-dropdown>
                  </b-input-group-prepend>
                  <b-input/>
                </b-input-group>

                <!-- /input-group -->
                <strong>Normal</strong>
                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <a-button :variant="variantEnum.danger">Action</a-button>
                  </b-input-group-prepend>
                  <b-input/>
                </b-input-group>
                <!-- /input-group -->
                <strong>Flat</strong>
                <b-input-group class="mb-3">
                  <b-input/>
                  <b-input-group-append>
                    <a-button flat :variant="variantEnum.info">Go!</a-button>
                  </b-input-group-append>
                </b-input-group>
                <!-- /input-group -->
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
            <!-- split buttons box -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Split buttons</h3>
              </div>
              <div class="card-body">
                <!-- Split button -->
                <p class="mb-1">Normal split buttons:</p>

                <div class="margin">
                  <b-button-group>
                    <a-button>Action</a-button>
                    <b-dropdown :variant="variantEnum.default">
                      <b-dropdown-item>Action</b-dropdown-item>
                      <b-dropdown-item>Another action</b-dropdown-item>
                      <b-dropdown-item>Something else here</b-dropdown-item>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item>Separated link</b-dropdown-item>
                    </b-dropdown>
                  </b-button-group>
                  <b-button-group>
                    <a-button :variant="variantEnum.info">Action</a-button>
                    <b-dropdown :variant="variantEnum.info">
                      <b-dropdown-item>Action</b-dropdown-item>
                      <b-dropdown-item>Another action</b-dropdown-item>
                      <b-dropdown-item>Something else here</b-dropdown-item>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item>Separated link</b-dropdown-item>
                    </b-dropdown>
                  </b-button-group>
                  <b-button-group>
                    <a-button :variant="variantEnum.danger">Action</a-button>
                    <b-dropdown :variant="variantEnum.danger">
                      <b-dropdown-item>Action</b-dropdown-item>
                      <b-dropdown-item>Another action</b-dropdown-item>
                      <b-dropdown-item>Something else here</b-dropdown-item>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item>Separated link</b-dropdown-item>
                    </b-dropdown>
                  </b-button-group>
                  <b-button-group>
                    <a-button :variant="variantEnum.success">Action</a-button>
                    <b-dropdown :variant="variantEnum.success">
                      <b-dropdown-item>Action</b-dropdown-item>
                      <b-dropdown-item>Another action</b-dropdown-item>
                      <b-dropdown-item>Something else here</b-dropdown-item>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item>Separated link</b-dropdown-item>
                    </b-dropdown>
                  </b-button-group>
                  <b-button-group>
                    <a-button :variant="variantEnum.warning">Action</a-button>
                    <b-dropdown :variant="variantEnum.warning">
                      <b-dropdown-item>Action</b-dropdown-item>
                      <b-dropdown-item>Another action</b-dropdown-item>
                      <b-dropdown-item>Something else here</b-dropdown-item>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item>Separated link</b-dropdown-item>
                    </b-dropdown>
                  </b-button-group>
                </div>

                <!-- flat split buttons -->
                <p class="mt-3 mb-1">Flat split buttons:</p>

                <div class="margin">
                  <b-button-group>
                    <b-button squared variant="default">Action</b-button>
                    <b-dropdown :variant="variantEnum.default" toggle-class="rounded-0">
                      <b-dropdown-item>Action</b-dropdown-item>
                      <b-dropdown-item>Another action</b-dropdown-item>
                      <b-dropdown-item>Something else here</b-dropdown-item>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item>Separated link</b-dropdown-item>
                    </b-dropdown>
                  </b-button-group>
                  <b-button-group>
                    <b-button squared variant="info">Action</b-button>
                    <b-dropdown :variant="variantEnum.info" toggle-class="rounded-0">
                      <b-dropdown-item>Action</b-dropdown-item>
                      <b-dropdown-item>Another action</b-dropdown-item>
                      <b-dropdown-item>Something else here</b-dropdown-item>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item>Separated link</b-dropdown-item>
                    </b-dropdown>
                  </b-button-group>
                  <b-button-group>
                    <b-button squared variant="danger">Action</b-button>
                    <b-dropdown :variant="variantEnum.danger" toggle-class="rounded-0">
                      <b-dropdown-item>Action</b-dropdown-item>
                      <b-dropdown-item>Another action</b-dropdown-item>
                      <b-dropdown-item>Something else here</b-dropdown-item>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item>Separated link</b-dropdown-item>
                    </b-dropdown>
                  </b-button-group>
                  <b-button-group>
                    <b-button squared variant="success">Action</b-button>
                    <b-dropdown :variant="variantEnum.success" toggle-class="rounded-0">
                      <b-dropdown-item>Action</b-dropdown-item>
                      <b-dropdown-item>Another action</b-dropdown-item>
                      <b-dropdown-item>Something else here</b-dropdown-item>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item>Separated link</b-dropdown-item>
                    </b-dropdown>
                  </b-button-group>
                  <b-button-group>
                    <b-button squared variant="warning">Action</b-button>
                    <b-dropdown :variant="variantEnum.warning" toggle-class="rounded-0">
                      <b-dropdown-item>Action</b-dropdown-item>
                      <b-dropdown-item>Another action</b-dropdown-item>
                      <b-dropdown-item>Something else here</b-dropdown-item>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item>Separated link</b-dropdown-item>
                    </b-dropdown>
                  </b-button-group>
                </div>

                <!-- Split button -->
                <p class="mt-3 mb-1">Hoverable split buttons:</p>
                <div class="margin">
                  <b-button-group>
                    <b-button variant="default">Action</b-button>
                    <b-dropdown :variant="variantEnum.default" class="dropdown-hover">
                      <b-dropdown-item>Action</b-dropdown-item>
                      <b-dropdown-item>Another action</b-dropdown-item>
                      <b-dropdown-item>Something else here</b-dropdown-item>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item>Separated link</b-dropdown-item>
                    </b-dropdown>
                  </b-button-group>
                </div>
                <b-button-group>
                  <b-button variant="info">Action</b-button>
                  <b-dropdown :variant="variantEnum.info" class="dropdown-hover">
                    <b-dropdown-item>Action</b-dropdown-item>
                    <b-dropdown-item>Another action</b-dropdown-item>
                    <b-dropdown-item>Something else here</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>Separated link</b-dropdown-item>
                  </b-dropdown>
                </b-button-group>
                <b-button-group>
                  <b-button variant="danger">Action</b-button>
                  <b-dropdown :variant="variantEnum.danger" class="dropdown-hover">
                    <b-dropdown-item>Action</b-dropdown-item>
                    <b-dropdown-item>Another action</b-dropdown-item>
                    <b-dropdown-item>Something else here</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>Separated link</b-dropdown-item>
                  </b-dropdown>
                </b-button-group>
                <b-button-group>
                  <b-button variant="success">Action</b-button>
                  <b-dropdown :variant="variantEnum.success" class="dropdown-hover">
                    <b-dropdown-item>Action</b-dropdown-item>
                    <b-dropdown-item>Another action</b-dropdown-item>
                    <b-dropdown-item>Something else here</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>Separated link</b-dropdown-item>
                  </b-dropdown>
                </b-button-group>
                <b-button-group>
                  <b-button variant="warning">Action</b-button>
                  <b-dropdown :variant="variantEnum.warning" class="dropdown-hover">
                    <b-dropdown-item>Action</b-dropdown-item>
                    <b-dropdown-item>Another action</b-dropdown-item>
                    <b-dropdown-item>Something else here</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>Separated link</b-dropdown-item>
                  </b-dropdown>
                </b-button-group>
              </div>
            </div>
              <!-- /.card-body -->
            </div>
          <div class="col-md-6">
            <!-- Application buttons -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Application Buttons</h3>
              </div>
              <div class="card-body">
                <p>Add the classes <code>.btn.btn-app</code> to an <code>&lt;a></code> tag to achieve the following:</p>
                <b-link class="btn btn-app">
                  <i class="fas fa-edit"></i> Edit
                </b-link>
                <b-link class="btn btn-app">
                  <i class="fas fa-play"></i> Play
                </b-link>
                <b-link class="btn btn-app">
                  <i class="fas fa-pause"></i> Pause
                </b-link>
                <b-link class="btn btn-app">
                  <i class="fas fa-save"></i> Save
                </b-link>
                <b-link class="btn btn-app">
                  <span class="badge bg-warning">3</span>
                  <i class="fas fa-bullhorn"></i> Notifications
                </b-link>
                <b-link class="btn btn-app">
                  <span class="badge bg-success">300</span>
                  <i class="fas fa-barcode"></i> Products
                </b-link>
                <b-link class="btn btn-app">
                  <span class="badge bg-purple">891</span>
                  <i class="fas fa-users"></i> Users
                </b-link>
                <b-link class="btn btn-app">
                  <span class="badge bg-teal">67</span>
                  <i class="fas fa-inbox"></i> Orders
                </b-link>
                <b-link class="btn btn-app">
                  <span class="badge bg-info">12</span>
                  <i class="fas fa-envelope"></i> Inbox
                </b-link>
                <b-link class="btn btn-app">
                  <span class="badge bg-danger">531</span>
                  <i class="fas fa-heart"></i> Likes
                </b-link>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->

            <!-- Vertical grouping -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Vertical Button Group</h3>
              </div>
              <div class="card-body table-responsive pad">

                <p>
                  Vertical button groups are easy to create with bootstrap. Just add your buttons
                  inside <code>&lt;div class="btn-group-vertical"&gt;&lt;/div&gt;</code>
                </p>

                <table class="table table-bordered">
                  <tr>
                    <th>Button</th>
                    <th>Icons</th>
                    <th>Flat</th>
                    <th>Dropdown</th>
                  </tr>
                  <!-- Default -->
                  <tr>
                    <td>
                      <b-button-group vertical>
                        <b-button :variant="variantEnum.default">Top</b-button>
                        <b-button :variant="variantEnum.default">Middle</b-button>
                        <b-button :variant="variantEnum.default">Bottom</b-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group vertical>
                        <b-button :variant="variantEnum.default"><i class="fas fa-align-left"></i></b-button>
                        <b-button :variant="variantEnum.default"><i class="fas fa-align-center"></i></b-button>
                        <b-button :variant="variantEnum.default"><i class="fas fa-align-right"></i></b-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group vertical>
                        <b-button :variant="variantEnum.default" squared><i class="fas fa-align-left"></i></b-button>
                        <b-button :variant="variantEnum.default" squared><i class="fas fa-align-center"></i></b-button>
                        <b-button :variant="variantEnum.default" squared><i class="fas fa-align-right"></i></b-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group vertical>
                        <b-button :variant="variantEnum.default">1</b-button>
                        <b-button :variant="variantEnum.default">2</b-button>
                        <b-dropdown :variant="variantEnum.default">
                          <b-dropdown-item>Link</b-dropdown-item>
                          <b-dropdown-item>Link</b-dropdown-item>
                        </b-dropdown>
                      </b-button-group>
                    </td>
                  </tr>
                  <!-- ./default -->
                  <!-- Info -->
                  <tr>
                    <td>
                      <b-button-group vertical>
                        <b-button :variant="variantEnum.info">Top</b-button>
                        <b-button :variant="variantEnum.info">Middle</b-button>
                        <b-button :variant="variantEnum.info">Bottom</b-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group vertical>
                        <b-button :variant="variantEnum.info"><i class="fas fa-align-left"></i></b-button>
                        <b-button :variant="variantEnum.info"><i class="fas fa-align-center"></i></b-button>
                        <b-button :variant="variantEnum.info"><i class="fas fa-align-right"></i></b-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group vertical>
                        <b-button :variant="variantEnum.info" squared><i class="fas fa-align-left"></i></b-button>
                        <b-button :variant="variantEnum.info" squared><i class="fas fa-align-center"></i></b-button>
                        <b-button :variant="variantEnum.info" squared><i class="fas fa-align-right"></i></b-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group vertical>
                        <b-button :variant="variantEnum.info">1</b-button>
                        <b-button :variant="variantEnum.info">2</b-button>
                        <b-dropdown :variant="variantEnum.info">
                          <b-dropdown-item>Link</b-dropdown-item>
                          <b-dropdown-item>Link</b-dropdown-item>
                        </b-dropdown>
                      </b-button-group>
                    </td>
                  </tr>
                  <!-- /. info -->
                  <!-- /.danger -->
                  <tr>
                    <td>
                      <b-button-group vertical>
                        <b-button :variant="variantEnum.danger">Top</b-button>
                        <b-button :variant="variantEnum.danger">Middle</b-button>
                        <b-button :variant="variantEnum.danger">Bottom</b-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group vertical>
                        <b-button :variant="variantEnum.danger"><i class="fas fa-align-left"></i></b-button>
                        <b-button :variant="variantEnum.danger"><i class="fas fa-align-center"></i></b-button>
                        <b-button :variant="variantEnum.danger"><i class="fas fa-align-right"></i></b-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group vertical>
                        <b-button :variant="variantEnum.danger" squared><i class="fas fa-align-left"></i></b-button>
                        <b-button :variant="variantEnum.danger" squared><i class="fas fa-align-center"></i></b-button>
                        <b-button :variant="variantEnum.danger" squared><i class="fas fa-align-right"></i></b-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group vertical>
                        <b-button :variant="variantEnum.danger">1</b-button>
                        <b-button :variant="variantEnum.danger">2</b-button>
                        <b-dropdown :variant="variantEnum.danger">
                          <b-dropdown-item>Link</b-dropdown-item>
                          <b-dropdown-item>Link</b-dropdown-item>
                        </b-dropdown>
                      </b-button-group>
                    </td>
                  </tr>
                  <!-- /.danger -->
                  <!-- warning -->
                  <tr>
                    <td>
                      <b-button-group vertical>
                        <b-button :variant="variantEnum.warning">Top</b-button>
                        <b-button :variant="variantEnum.warning">Middle</b-button>
                        <b-button :variant="variantEnum.warning">Bottom</b-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group vertical>
                        <b-button :variant="variantEnum.warning"><i class="fas fa-align-left"></i></b-button>
                        <b-button :variant="variantEnum.warning"><i class="fas fa-align-center"></i></b-button>
                        <b-button :variant="variantEnum.warning"><i class="fas fa-align-right"></i></b-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group vertical>
                        <b-button :variant="variantEnum.warning" squared><i class="fas fa-align-left"></i></b-button>
                        <b-button :variant="variantEnum.warning" squared><i class="fas fa-align-center"></i></b-button>
                        <b-button :variant="variantEnum.warning" squared><i class="fas fa-align-right"></i></b-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group vertical>
                        <b-button :variant="variantEnum.warning">1</b-button>
                        <b-button :variant="variantEnum.warning">2</b-button>
                        <b-dropdown :variant="variantEnum.warning">
                          <b-dropdown-item>Link</b-dropdown-item>
                          <b-dropdown-item>Link</b-dropdown-item>
                        </b-dropdown>
                      </b-button-group>
                    </td>
                  </tr>
                  <!-- /.warning -->
                  <!-- success -->
                  <tr>
                    <td>
                      <b-button-group vertical>
                        <b-button :variant="variantEnum.success">Top</b-button>
                        <b-button :variant="variantEnum.success">Middle</b-button>
                        <b-button :variant="variantEnum.success">Bottom</b-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group vertical>
                        <b-button :variant="variantEnum.success"><i class="fas fa-align-left"></i></b-button>
                        <b-button :variant="variantEnum.success"><i class="fas fa-align-center"></i></b-button>
                        <b-button :variant="variantEnum.success"><i class="fas fa-align-right"></i></b-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group vertical>
                        <b-button :variant="variantEnum.success" squared><i class="fas fa-align-left"></i></b-button>
                        <b-button :variant="variantEnum.success" squared><i class="fas fa-align-center"></i></b-button>
                        <b-button :variant="variantEnum.success" squared><i class="fas fa-align-right"></i></b-button>
                      </b-button-group>
                    </td>
                    <td>
                      <b-button-group vertical>
                        <b-button :variant="variantEnum.success">1</b-button>
                        <b-button :variant="variantEnum.success">2</b-button>
                        <b-dropdown :variant="variantEnum.success">
                          <b-dropdown-item>Link</b-dropdown-item>
                          <b-dropdown-item>Link</b-dropdown-item>
                        </b-dropdown>
                      </b-button-group>
                    </td>
                  </tr>
                  <!-- /.success -->
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->

            <!-- Radio Buttons -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Radio Button Group</h3>
              </div>
              <div class="card-body table-responsive pad">
                <p class="mb-1">Radio Button Group with <code>.btn-secondary</code></p>
                <b-form-radio-group id="radio1" v-model="radios.select" buttons :options="radios.items"/>

                <p class="mt-3 mb-1">Radio Button Group with <code>.bg-olive</code></p>
                <b-form-radio-group id="radio2" v-model="radios.select" buttons :options="radios.items" button-variant=" bg-olive"/>

              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import AButton from '@/components/Widget/Buttons/AButton/AButton'
import ButtonTypeEnum from '@/components/Widget/Buttons/typeEnum'
import variantEnum from '@/components/Widget/Buttons/variantEnum'
import sizeEnum from '@/components/Widget/Buttons/sizeEnum'
export default {
  name: 'APageUiElementButtons',
  components: { AButton },
  data: function () {
    return {
      ButtonTypeEnum,
      variantEnum,
      sizeEnum,
      radios: {
        select: 1,
        items: [
          {
            text: 'Active',
            value: 1,
            class: 'bg-olive'
          },
          {
            text: 'Disable',
            value: 2,
            disabled: true
          },
          {
            text: 'Radio',
            value: 3
          }
        ]
      }
    }
  }
}
</script>
