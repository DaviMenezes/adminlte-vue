<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <router-link :to="getRoute('dashboard1')" class="brand-link">
      <img src="/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </router-link>
    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <router-link :to="getRoute('profile')" class="d-flex align-items-center">
          <div class="image">
            <img src="/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
          </div>
          <div class="info">
            <span class="d-block">Alexander Pierce</span>
          </div>
        </router-link>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item has-treeview menu-open">
            <a href="#" :class="['dashboard1', 'dashboard2', 'dashboard3'].indexOf($route.params.page) !== -1 ? 'nav-link active' : 'nav-link' ">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a-router-link page="dashboard1" label="Dashboard v1" icon="far fa-circle nav-icon"/>
              </li>
              <li class="nav-item">
                <a-router-link page="dashboard2" label="Dashboard v2" icon="far fa-circle nav-icon"/>
              </li>
              <li class="nav-item">
                <a-router-link page="dashboard3" label="Dashboard v3" icon="far fa-circle nav-icon"/>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a-router-link page="widgets" label="Widgets" icon="fas fa-th"
                           info_label="New"
                           info_direction="right"
                           info_type="danger"/>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-copy"></i>
              <p>
                Layout Options
                <i class="fas fa-angle-left right"></i>
                <span class="badge badge-info right">6</span>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/layout/top-nav.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Top Navigation</p>
                </a>
                <a-router-link page="top-navigation" label="Top Navigation" icon="far fa-circle nav-icon"/>
              </li>
              <li class="nav-item">
                <a href="pages/layout/top-nav-sidebar.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Top Navigation + Sidebar</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/layout/boxed.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Boxed</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/layout/fixed-sidebar.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Fixed Sidebar</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/layout/fixed-topnav.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Fixed Navbar</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/layout/fixed-footer.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Fixed Footer</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/layout/collapsed-sidebar.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Collapsed Sidebar</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                Charts
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/charts/chartjs.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>ChartJS</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/charts/flot.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Flot</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/charts/inline.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Inline</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-tree"></i>
              <p>
                UI Elements
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/UI/general.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>General</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/UI/icons.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Icons</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/UI/buttons.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Buttons</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/UI/sliders.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Sliders</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/UI/modals.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Modals & Alerts</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/UI/navbar.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Navbar & Tabs</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/UI/timeline.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Timeline</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/UI/ribbons.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Ribbons</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-edit"></i>
              <p>
                Forms
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/forms/general.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>General Elements</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/forms/advanced.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Advanced Elements</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/forms/editors.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Editors</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/forms/validation.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Validation</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-table"></i>
              <p>
                Tables
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/tables/simple.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Simple Tables</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/tables/data.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>DataTables</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/tables/jsgrid.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>jsGrid</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-header">EXAMPLES</li>
          <li class="nav-item">
            <a href="pages/calendar.html" class="nav-link">
              <i class="nav-icon far fa-calendar-alt"></i>
              <p>
                Calendar
                <span class="badge badge-info right">2</span>
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="pages/gallery.html" class="nav-link">
              <i class="nav-icon far fa-image"></i>
              <p>
                Gallery
              </p>
            </a>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon far fa-envelope"></i>
              <p>
                Mailbox
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/mailbox/mailbox.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Inbox</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/mailbox/compose.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Compose</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/mailbox/read-mail.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Read</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-book"></i>
              <p>
                Pages
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/examples/invoice.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Invoice</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/examples/profile.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Profile</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/examples/e-commerce.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>E-commerce</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/examples/projects.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Projects</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/examples/project-add.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Project Add</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/examples/project-edit.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Project Edit</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/examples/project-detail.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Project Detail</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/examples/contacts.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Contacts</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon far fa-plus-square"></i>
              <p>
                Extras
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/examples/login.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Login</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/examples/register.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Register</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/examples/forgot-password.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Forgot Password</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/examples/recover-password.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Recover Password</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/examples/lockscreen.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Lockscreen</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/examples/legacy-user-menu.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Legacy User Menu</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/examples/language-menu.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Language Menu</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/examples/404.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Error 404</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/examples/500.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Error 500</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/examples/pace.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Pace</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/examples/blank.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Blank Page</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="starter.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Starter Page</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-header">MISCELLANEOUS</li>
          <li class="nav-item">
            <a href="https://adminlte.io/docs/3.0" class="nav-link">
              <i class="nav-icon fas fa-file"></i>
              <p>Documentation</p>
            </a>
          </li>
          <li class="nav-header">MULTI LEVEL EXAMPLE</li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="fas fa-circle nav-icon"></i>
              <p>Level 1</p>
            </a>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-circle"></i>
              <p>
                Level 1
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Level 2</p>
                </a>
              </li>
              <li class="nav-item has-treeview">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>
                    Level 2
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>Level 3</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>Level 3</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>Level 3</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Level 2</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="fas fa-circle nav-icon"></i>
              <p>Level 1</p>
            </a>
          </li>
          <li class="nav-header">LABELS</li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon far fa-circle text-danger"></i>
              <p class="text">Important</p>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon far fa-circle text-warning"></i>
              <p>Warning</p>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon far fa-circle text-info"></i>
              <p>Informational</p>
            </a>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>

import ARouterLink from './Sidebar/ARouterLink/ARouterLink'
import Dashboard1 from '../../../components/Pages/Dashboards/1/Dashboard1'
import Dashboard2 from '../../../components/Pages/Dashboards/2/Dashboard2'
import Dashboard3 from '../../../components/Pages/Dashboards/3/Dashboard3'
import PageWidgets from '../../../components/Pages/APageWidgets'
import APageLayoutTopNav from '../../../components/Pages/Layout/APageLayoutTopNav'
import APageLayoutTopNavSidebar from '../../../components/Pages/Layout/APageLayoutTopNavSidebar'
import APageLayoutBoxed from '../../../components/Pages/Layout/APageLayoutBoxed'
import APageLayoutFixedSidebar from '../../../components/Pages/Layout/APageLayoutFixedSidebar'
import APageLayoutFixedNavbar from '../../../components/Pages/Layout/APageLayoutFixedNavbar'
import APageLayoutFixedFooter from '../../../components/Pages/Layout/APageLayoutFixedFooter'
import APageLayoutCollapsedSidebar from '../../../components/Pages/Layout/APageLayoutCollapsedSidebar'
import APageChartJs from '../../../components/Pages/Charts/APageChartJs'
import APageChartFlot from '../../../components/Pages/Charts/APageChartFlot'
import APageChartInline from '../../../components/Pages/Charts/APageChartInline'
import APageUiElementGeneral from '../../../components/Pages/UiElements/APageUiElementGeneral'
import APageUiElementIcons from '../../../components/Pages/UiElements/APageUiElementIcons'
import APageUiElementButtons from '../../../components/Pages/UiElements/APageUiElementButtons'
import APageUiElementSliders from '../../../components/Pages/UiElements/APageUiElementSliders'
import APageUiElementModalAlerts from '../../../components/Pages/UiElements/APageUiElementModalAlerts'
import APageUiElementNavbarTabs from '../../../components/Pages/UiElements/APageUiElementNavbarTabs'
import APageUiElementTimeline from '../../../components/Pages/UiElements/APageUiElementTimeline'
import APageUiElementRibbons from '../../../components/Pages/UiElements/APageUiElementRibbons'
import APageFormGeneralElements from '../../../components/Pages/Forms/APageFormGeneralElements'
import APageFormAdvancedElements from '../../../components/Pages/Forms/APageFormAdvancedElements'
import APageFormEditors from '../../../components/Pages/Forms/APageFormEditors'
import APageFormValidation from '../../../components/Pages/Forms/APageFormValidation'
import APageSimpleTables from '../../../components/Pages/Tables/APageSimpleTables'
import APageTableJsGrid from '../../../components/Pages/Tables/APageTableJsGrid'
import APageCalendar from '../../../components/Pages/APageCalendar'
import APageGallery from '../../../components/Pages/APageGallery'
import APageMailInbox from '../../../components/Pages/Mailbox/APageMailInbox'
import APageMailCompose from '../../../components/Pages/Mailbox/APageMailCompose'
import APageMailRead from '../../../components/Pages/Mailbox/APageMailRead'
import APageInvoice from '../../../components/Pages/APageInvoice'
import APageProfile from '../../../components/Pages/APageProfile'
import APageEcommerce from '../../../components/Pages/APageEcommerce'
import APageProjects from '../../../components/Pages/Project/APageProjects'
import APageProjectAdd from '../../../components/Pages/Project/APageProjectAdd'
import APageProjectEdit from '../../../components/Pages/Project/APageProjectEdit'
import APageProjectDetail from '../../../components/Pages/Project/APageProjectDetail'
import APageContact from '../../../components/Pages/APageContact'
import APageLogin from '../../../components/Pages/APageLogin'
import APageRegister from '../../../components/Pages/APageRegister'
import APageForgotPassword from '../../../components/Pages/APageForgotPassword'
import APageRecoverPassword from '../../../components/Pages/APageRecoverPassword'
import APageLockscreen from '../../../components/Pages/APageLockscreen'
import APageLegacyUserMenu from '../../../components/Pages/APageLegacyUserMenu'
import APageLanguageMenu from '../../../components/Pages/APageLanguageMenu'
import APageError404 from '../../../components/Pages/APageError404'
import APageError500 from '../../../components/Pages/APageError500'
import APagePace from '../../../components/Pages/APagePace'
import APageBlank from '../../../components/Pages/APageBlank'
import APageStarter from '../../../components/Pages/APageStarter'
export default {
  components: { ARouterLink },
  data () {
    return {

    }
  },
  methods: {
    items () {
      return {
        dashboards: {
          type: 'menuitem',
          label: 'Dashboard',
          icon: 'right fas fa-angle-left',
          items: [
            {
              type: 'menuitem',
              page: 'dashboard1',
              label: 'Dashboard v1',
              component: Dashboard1,
              icon: 'right fas fa-angle-left'
            },
            {
              type: 'menuitem',
              label: 'Dashboard v2',
              page: 'dashboard2',
              component: Dashboard2,
              icon: 'far fa-circle nav-icon'
            },
            {
              type: 'menuitem',
              label: 'Dashboard v3',
              page: 'dashboard3',
              component: Dashboard3,
              icon: 'far fa-circle nav-icon'
            }
          ]
        },
        widgets: {
          type: 'menuitem',
          label: 'Widgets',
          page: 'widgets',
          icon: 'fas fa-th',
          component: PageWidgets,
          info: {
            label: "New",
            direction: "right",
            type: "danger"
          }
        },
        layouts: {
          type: 'menuitem',
          icon: 'nav-icon fas fa-copy',
          label: 'Layout Options',
          info: {
            label: 6,
            direction: 'right',
            type: 'info'
          },
          items: [
            {
              type: 'menuitem',
              icon: 'far fa-circle nav-icon',
              page: 'top-navigation',
              component: APageLayoutTopNav
            },
            {
              type: 'menuitem',
              icon: 'far fa-circle nav-icon',
              page: 'top-navigation-sidebar',
              component: APageLayoutTopNavSidebar
            },
            {
              type: 'menuitem',
              icon: 'far fa-circle nav-icon',
              page: 'boxed',
              component: APageLayoutBoxed
            },
            {
              type: 'menuitem',
              icon: 'far fa-circle nav-icon',
              page: 'fixed-sidebar',
              component: APageLayoutFixedSidebar
            },
            {
              type: 'menuitem',
              icon: 'far fa-circle nav-icon',
              page: 'fixed-navbar',
              component: APageLayoutFixedNavbar
            },
            {
              type: 'menuitem',
              icon: 'far fa-circle nav-icon',
              page: 'fixed-footer',
              component: APageLayoutFixedFooter
            },
            {
              type: 'menuitem',
              icon: 'far fa-circle nav-icon',
              page: 'layout-collapsed-sidebar',
              component: APageLayoutCollapsedSidebar
            }
          ]
        },
        charts: {
          type: 'menuitem',
          label: 'Carhs',
          icon: 'nav-icon fas fa-chart-pie',
          items: [
            {
              type: 'menuitem',
              label: 'ChartJS',
              icon: 'far fa-circle nav-icon',
              page: 'chart-js',
              component: APageChartJs
            },
            {
              type: 'menuitem',
              label: 'Flot',
              icon: 'far fa-circle nav-icon',
              page: 'chart-flot',
              component: APageChartFlot
            },
            {
              type: 'menuitem',
              label: 'Inline',
              icon: 'far fa-circle nav-icon',
              page: 'chart-inline',
              component: APageChartInline
            }
          ]
        },
        'ui-elements': {
          label: '',
          icon: '',
          items: [
            {
              type: 'menuitem',
              label: 'General',
              icon: 'nav-icon fas fa-chart-pie',
              page: 'ui-element-general',
              component: APageUiElementGeneral
            },
            {
              type: 'menuitem',
              label: 'Icons',
              icon: 'nav-icon fas fa-chart-pie',
              page: 'ui-element-icons',
              component: APageUiElementIcons
            },
            {
              type: 'menuitem',
              label: 'Buttons',
              icon: 'nav-icon fas fa-chart-pie',
              page: 'ui-element-buttons',
              component: APageUiElementButtons
            },
            {
              type: 'menuitem',
              label: 'Sliders',
              icon: 'nav-icon fas fa-chart-pie',
              page: 'ui-element-sliders',
              component: APageUiElementSliders
            },
            {
              type: 'menuitem',
              label: 'Modal & Alerts',
              icon: 'nav-icon fas fa-chart-pie',
              page: 'ui-element-modal-alert',
              component: APageUiElementModalAlerts
            },
            {
              type: 'menuitem',
              label: 'Navbar & Tabs',
              icon: 'nav-icon fas fa-chart-pie',
              page: 'ui-element-navbar-tabs',
              component: APageUiElementNavbarTabs
            },
            {
              type: 'menuitem',
              label: 'Timeline',
              icon: 'nav-icon fas fa-chart-pie',
              page: 'ui-element-timeline',
              component: APageUiElementTimeline
            },
            {
              type: 'menuitem',
              label: 'Ribbons',
              icon: 'nav-icon fas fa-chart-pie',
              page: 'ui-element-ribbons',
              component: APageUiElementRibbons
            }
          ]
        },
        form: [
          {
            type: 'menuitem',
            page: 'form-general',
            component: APageFormGeneralElements
          },
          {
            type: 'menuitem',
            page: 'form-advanced',
            component: APageFormAdvancedElements
          },
          {
            type: 'menuitem',
            page: 'form-editors',
            component: APageFormEditors
          },
          {
            type: 'menuitem',
            page: 'form-validation',
            component: APageFormValidation
          }
        ],
        tables: [
          {
            type: 'menuitem',
            page: 'table-simple',
            component: APageSimpleTables
          },
          {
            type: 'menuitem',
            page: 'table-datatable',
            component: APageTableJsGrid
          }
        ],
        examples: [
          {
            type: 'category',
            items: [
              {
                type: 'menuitem',
                page: 'calendar',
                component: APageCalendar
              },
              {
                type: 'menuitem',
                page: 'gallery',
                component: APageGallery
              },
              {
                type: 'menuitem',
                page: 'mail-inbox',
                component: APageMailInbox
              },
              {
                type: 'menuitem',
                page: 'mail-compose',
                component: APageMailCompose
              },
              {
                type: 'menuitem',
                page: 'mail-read',
                component: APageMailRead
              },
              {
                type: 'menuitem',
                page: 'invoice',
                component: APageInvoice
              },
              {
                type: 'menuitem',
                page: 'profile',
                component: APageProfile
              },
              {
                type: 'menuitem',
                page: 'ecommerce',
                component: APageEcommerce
              },
              {
                type: 'menuitem',
                page: 'projects',
                component: APageProjects
              },
              {
                type: 'menuitem',
                page: 'project-add',
                component: APageProjectAdd
              },
              {
                type: 'menuitem',
                page: 'project-edit',
                component: APageProjectEdit
              },
              {
                type: 'menuitem',
                page: 'project-detail',
                component: APageProjectDetail
              },
              {
                type: 'menuitem',
                page: 'contact',
                component: APageContact
              },
              {
                type: 'menuitem',
                page: 'login',
                component: APageLogin
              },
              {
                type: 'menuitem',
                page: 'register',
                component: APageRegister
              },
              {
                type: 'menuitem',
                page: 'forgot-password',
                component: APageForgotPassword
              },
              {
                type: 'menuitem',
                page: 'recover-password',
                component: APageRecoverPassword
              },
              {
                type: 'menuitem',
                page: 'lockscreen',
                component: APageLockscreen
              },
              {
                type: 'menuitem',
                page: 'legacy-user-menu',
                component: APageLegacyUserMenu
              },
              {
                type: 'menuitem',
                page: 'language-menu',
                component: APageLanguageMenu
              },
              {
                type: 'menuitem',
                page: 'error-404',
                component: APageError404
              },
              {
                type: 'menuitem',
                page: 'error-500',
                component: APageError500
              },
              {
                type: 'menuitem',
                page: 'pace',
                component: APagePace
              },
              {
                type: 'menuitem',
                page: 'black',
                component: APageBlank
              },
              {
                type: 'menuitem',
                page: 'starter',
                component: APageStarter
              }
            ]
          }
        ]

      }
    },
    getRoute (page) {
      return '/layout/' + (this.$route.params.layout || 'one') + '/' + page
    }
  }
}
</script>

<style scoped>

</style>
