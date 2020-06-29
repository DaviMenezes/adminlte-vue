<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <router-link :to="getRoute('dashboard1')" class="brand-link">
      <img src="/dist/img/dvi_logo.png" alt="Dvi Logo" title="Dvi" class="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span class="brand-text font-weight-light">AdminLTE 3 - <i class=" fab fa-vuejs fa-1.5x" title="Vuejs"/></span>
    </router-link>
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
          <li v-for="(item, index) in items()" v-bind:key="index" :class="itemClass(item)">
            <span v-if="item.type === 'header'">{{item.label}}</span>
              <a href="#" :class="linkClass(item)" v-else-if="item.items">
                <i :class="item.icon"></i>
                <p>
                  {{item.label}}
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <a-router-link :page="item.page || $route.params.page + '#'" :label="item.label" :icon="item.icon" v-if="item.type !== 'header' && !item.items"
                             :info_label="item.info ? item.info.label : undefined"
                             :info_direction="item.info ? item.info.direction : undefined"
                             :info_type="item.info ? item.info.type : undefined"
              />

              <ul class="nav nav-treeview" v-if="item.type !== 'header' && item.items">
                <li class="nav-item" v-for="(item1, indexn1) in item.items" v-bind:key="index + '-' + indexn1">
                  <a-router-link :page="item1.page ? item1.page : $route.params.page + '#'" :label="item1.label"
                                 :icon="item1.icon" :has_items="!!item1.items"/>

                  <ul class="nav nav-treeview" v-if="item1.items">
                    <li class="nav-item" v-for="(item2, indexn2) in item1.items" v-bind:key="indexn1 + '-' + indexn2">
                      <a-router-link :page="item2.page || $route.params.page + '#'" :label="item2.label" :icon="item2.icon" :has_items="item2.items && item2.items.length > 0"/>
                    </li>
                  </ul>
                </li>
              </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
  </aside>
</template>
<script>

import ARouterLink from './Sidebar/ARouterLink/ARouterLink'
import Dashboard1 from './Demo/Pages/Dashboards/1/Dashboard1'
import Dashboard2 from './Demo/Pages/Dashboards/2/Dashboard2'
import Dashboard3 from './Demo/Pages/Dashboards/3/Dashboard3'
import PageWidgets from './Demo/Pages/APageWidgets'
import APageLayoutTopNav from './Demo/Pages/Layout/APageLayoutTopNav'
import APageLayoutTopNavSidebar from './Demo/Pages/Layout/APageLayoutTopNavSidebar'
import APageLayoutBoxed from './Demo/Pages/Layout/APageLayoutBoxed'
import APageLayoutFixedSidebar from './Demo/Pages/Layout/APageLayoutFixedSidebar'
import APageLayoutFixedNavbar from './Demo/Pages/Layout/APageLayoutFixedNavbar'
import APageLayoutFixedFooter from './Demo/Pages/Layout/APageLayoutFixedFooter'
import APageLayoutCollapsedSidebar from './Demo/Pages/Layout/APageLayoutCollapsedSidebar'
import APageChartJs from '../adminlte-vue/Demo/Pages/Charts/APageChartJs'
import APageChartFlot from '../adminlte-vue/Demo/Pages/Charts/APageChartFlot'
import APageChartInline from '../adminlte-vue/Demo/Pages/Charts/APageChartInline'
import APageUiElementGeneral from './Demo/Pages/UiElements/APageUiElementGeneral'
import APageUiElementIcons from './Demo/Pages/UiElements/APageUiElementIcons'
import APageUiElementButtons from './Demo/Pages/UiElements/APageUiElementButtons'
import APageUiElementSliders from './Demo/Pages/UiElements/APageUiElementSliders'
import APageUiElementModalAlerts from './Demo/Pages/UiElements/APageUiElementModalAlerts'
import APageUiElementNavbarTabs from './Demo/Pages/UiElements/APageUiElementNavbarTabs'
import APageUiElementTimeline from './Demo/Pages/UiElements/APageUiElementTimeline'
import APageUiElementRibbons from './Demo/Pages/UiElements/APageUiElementRibbons'
import APageFormGeneralElements from './Demo/Pages/Forms/APageFormGeneralElements'
import APageFormAdvancedElements from './Demo/Pages/Forms/APageFormAdvancedElements'
import APageFormEditors from './Demo/Pages/Forms/APageFormEditors'
import APageFormValidation from './Demo/Pages/Forms/APageFormValidation'
import APageSimpleTables from './Demo/Pages/Tables/APageSimpleTables'
import APageTableJsGrid from './Demo/Pages/Tables/APageTableJsGrid'
import APageCalendar from './Demo/Pages/APageCalendar'
import APageGallery from './Demo/Pages/APageGallery'
import APageMailInbox from './Demo/Pages/Mailbox/APageMailInbox'
import APageMailCompose from './Demo/Pages/Mailbox/APageMailCompose'
import APageMailRead from './Demo/Pages/Mailbox/APageMailRead'
import APageInvoice from './Demo/Pages/APageInvoice'
import APageProfile from './Demo/Pages/APageProfile'
import APageEcommerce from './Demo/Pages/APageEcommerce'
import APageProjects from './Demo/Pages/Project/APageProjects'
import APageProjectAdd from './Demo/Pages/Project/APageProjectAdd'
import APageProjectEdit from './Demo/Pages/Project/APageProjectEdit'
import APageProjectDetail from './Demo/Pages/Project/APageProjectDetail'
import APageContact from './Demo/Pages/APageContact'
import APageLogin from './Demo/Pages/APageLogin'
import APageRegister from './Demo/Pages/APageRegister'
import APageForgotPassword from './Demo/Pages/APageForgotPassword'
import APageRecoverPassword from './Demo/Pages/APageRecoverPassword'
import APageLockscreen from './Demo/Pages/APageLockscreen'
import APageLegacyUserMenu from './Demo/Pages/APageLegacyUserMenu'
import APageLanguageMenu from './Demo/Pages/APageLanguageMenu'
import APageError404 from './Demo/Pages/APageError404'
import APageError500 from './Demo/Pages/APageError500'
import APagePace from './Demo/Pages/APagePace'
import APageBlank from './Demo/Pages/APageBlank'
import APageStarter from './Demo/Pages/APageStarter'
import APageDatatables from './Demo/Pages/Tables/APageDatatables'
export default {
  components: { ARouterLink },
  methods: {
    items () {
      return [
        {
          type: 'menuitem',
          label: 'Dashboard',
          icon: 'nav-icon fas fa-tachometer-alt',
          items: [
            {
              type: 'menuitem',
              page: 'dashboard1',
              label: 'Dashboard v1',
              icon: 'far fa-circle nav-icon',
              component: Dashboard1
            },
            {
              type: 'menuitem',
              label: 'Dashboard v2',
              page: 'dashboard2',
              icon: 'far fa-circle nav-icon',
              component: Dashboard2
            },
            {
              type: 'menuitem',
              label: 'Dashboard v3',
              page: 'dashboard3',
              icon: 'far fa-circle nav-icon',
              component: Dashboard3
            }
          ]
        },
        {
          type: 'menuitem',
          label: 'Widgets',
          page: 'widgets',
          icon: 'fas fa-th',
          component: PageWidgets,
          info: {
            label: 'New',
            direction: 'right',
            type: 'danger'
          }
        },
        {
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
              label: 'Top Navigation',
              icon: 'far fa-circle nav-icon',
              page: 'top-navigation',
              component: APageLayoutTopNav
            },
            {
              type: 'menuitem',
              label: 'Top Navigation + Sidebar',
              icon: 'far fa-circle nav-icon',
              page: 'top-navigation-sidebar',
              component: APageLayoutTopNavSidebar
            },
            {
              type: 'menuitem',
              label: 'Boxed',
              icon: 'far fa-circle nav-icon',
              page: 'boxed',
              component: APageLayoutBoxed
            },
            {
              type: 'menuitem',
              label: 'Fixed Sidebar',
              icon: 'far fa-circle nav-icon',
              page: 'fixed-sidebar',
              component: APageLayoutFixedSidebar
            },
            {
              type: 'menuitem',
              label: 'Fixed Navbar',
              icon: 'far fa-circle nav-icon',
              page: 'fixed-navbar',
              component: APageLayoutFixedNavbar
            },
            {
              type: 'menuitem',
              label: 'Fixed Footer',
              icon: 'far fa-circle nav-icon',
              page: 'fixed-footer',
              component: APageLayoutFixedFooter
            },
            {
              type: 'menuitem',
              label: 'Collapsed Sidebar',
              icon: 'far fa-circle nav-icon',
              page: 'layout-collapsed-sidebar',
              component: APageLayoutCollapsedSidebar
            }
          ]
        },
        {
          type: 'menuitem',
          label: 'Charts',
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
        {
          label: 'UI Elements',
          icon: 'nav-icon fas fa-tree',
          items: [
            {
              type: 'menuitem',
              label: 'General',
              icon: 'far fa-circle nav-icon',
              page: 'ui-element-general',
              component: APageUiElementGeneral
            },
            {
              type: 'menuitem',
              label: 'Icons',
              icon: 'far fa-circle nav-icon',
              page: 'ui-element-icons',
              component: APageUiElementIcons
            },
            {
              type: 'menuitem',
              label: 'Buttons',
              icon: 'far fa-circle nav-icon',
              page: 'ui-element-buttons',
              component: APageUiElementButtons
            },
            {
              type: 'menuitem',
              label: 'Sliders',
              icon: 'far fa-circle nav-icon',
              page: 'ui-element-sliders',
              component: APageUiElementSliders
            },
            {
              type: 'menuitem',
              label: 'Modal & Alerts',
              icon: 'far fa-circle nav-icon',
              page: 'ui-element-modal-alert',
              component: APageUiElementModalAlerts
            },
            {
              type: 'menuitem',
              label: 'Navbar & Tabs',
              icon: 'far fa-circle nav-icon',
              page: 'ui-element-navbar-tabs',
              component: APageUiElementNavbarTabs
            },
            {
              type: 'menuitem',
              label: 'Timeline',
              icon: 'far fa-circle nav-icon',
              page: 'ui-element-timeline',
              component: APageUiElementTimeline
            },
            {
              type: 'menuitem',
              label: 'Ribbons',
              icon: 'far fa-circle nav-icon',
              page: 'ui-element-ribbons',
              component: APageUiElementRibbons
            }
          ]
        },
        {
          type: 'menuitem',
          label: 'Forms',
          icon: 'nav-icon fas fa-edit',
          items: [
            {
              type: 'menuitem',
              label: 'General Elements',
              icon: 'far fa-circle nav-icon',
              page: 'form-general',
              component: APageFormGeneralElements
            },
            {
              type: 'menuitem',
              label: 'Advanced Elements',
              icon: 'far fa-circle nav-icon',
              page: 'form-advanced',
              component: APageFormAdvancedElements
            },
            {
              type: 'menuitem',
              label: 'Editors',
              icon: 'far fa-circle nav-icon',
              page: 'form-editors',
              component: APageFormEditors
            },
            {
              type: 'menuitem',
              label: 'Validation',
              icon: 'far fa-circle nav-icon',
              page: 'form-validation',
              component: APageFormValidation
            }
          ]
        },
        {
          type: 'menuitem',
          label: 'Tables',
          icon: 'nav-icon fas fa-table',
          items: [
            {
              type: 'menuitem',
              label: 'Simple Tables',
              page: 'table-simple',
              component: APageSimpleTables
            },
            {
              type: 'menuitem',
              label: 'DataTables',
              page: 'table-datatable',
              component: APageDatatables
            },
            {
              type: 'menuitem',
              label: 'jsGrid',
              page: 'js-grid',
              component: APageTableJsGrid
            }
          ]
        },
        {
          type: 'header',
          label: 'EXAMPLES'
        },
        {
          type: 'menuitem',
          label: 'Calendar',
          icon: 'nav-icon far fa-calendar-alt',
          info: {
            label: 2,
            type: 'info',
            direction: 'right'
          },
          component: APageCalendar
        },
        {
          type: 'menuitem',
          page: 'gallery',
          label: 'Gallery',
          icon: 'nav-icon far fa-image',
          component: APageGallery
        },
        {
          type: 'menuitem',
          label: 'Mailbox',
          icon: 'nav-icon far fa-envelope',
          items: [
            {
              type: 'menuitem',
              label: 'Inbox',
              page: 'mail-inbox',
              icon: 'far fa-circle nav-icon',
              component: APageMailInbox
            },
            {
              type: 'menuitem',
              label: 'Compose',
              page: 'mail-compose',
              icon: 'far fa-circle nav-icon',
              component: APageMailCompose
            },
            {
              type: 'menuitem',
              label: 'Read',
              page: 'mail-read',
              icon: 'far fa-circle nav-icon',
              component: APageMailRead
            }
          ]
        },
        {
          type: 'menuitem',
          label: 'Pages',
          icon: 'nav-icon fas fa-book',
          items: [
            {
              type: 'menuitem',
              label: 'Invoice',
              page: 'invoice',
              icon: 'far fa-circle nav-icon',
              component: APageInvoice
            },
            {
              type: 'menuitem',
              label: 'Profile',
              page: 'profile',
              icon: 'far fa-circle nav-icon',
              component: APageProfile
            },
            {
              type: 'menuitem',
              label: 'Ecommerce',
              page: 'ecommerce',
              icon: 'far fa-circle nav-icon',
              component: APageEcommerce
            },
            {
              type: 'menuitem',
              label: 'Projects',
              page: 'projects',
              icon: 'far fa-circle nav-icon',
              component: APageProjects
            },
            {
              type: 'menuitem',
              label: 'Project Add',
              page: 'project-add',
              icon: 'far fa-circle nav-icon',
              component: APageProjectAdd
            },
            {
              type: 'menuitem',
              label: 'Project Edit',
              page: 'project-edit',
              icon: 'far fa-circle nav-icon',
              component: APageProjectEdit
            },
            {
              type: 'menuitem',
              label: 'Project Detail',
              page: 'project-detail',
              icon: 'far fa-circle nav-icon',
              component: APageProjectDetail
            },
            {
              type: 'menuitem',
              label: 'Contacts',
              page: 'contact',
              icon: 'far fa-circle nav-icon',
              component: APageContact
            }
          ]
        },
        {
          type: 'menuitem',
          label: 'Extras',
          icon: 'nav-icon far fa-plus-square',
          items: [
            {
              type: 'menuitem',
              page: 'login',
              label: 'Login',
              icon: 'far fa-circle nav-icon',
              component: APageLogin
            },
            {
              type: 'menuitem',
              page: 'register',
              label: 'Register',
              icon: 'far fa-circle nav-icon',
              component: APageRegister
            },
            {
              type: 'menuitem',
              page: 'forgot-password',
              label: 'Forgot Password',
              icon: 'far fa-circle nav-icon',
              component: APageForgotPassword
            },
            {
              type: 'menuitem',
              page: 'recover-password',
              label: 'Recover Password',
              icon: 'far fa-circle nav-icon',
              component: APageRecoverPassword
            },
            {
              type: 'menuitem',
              page: 'lockscreen',
              label: 'Lockscreen',
              icon: 'far fa-circle nav-icon',
              component: APageLockscreen
            },
            {
              type: 'menuitem',
              page: 'legacy-user-menu',
              label: 'Legacy User Menu',
              icon: 'far fa-circle nav-icon',
              component: APageLegacyUserMenu
            },
            {
              type: 'menuitem',
              page: 'language-menu',
              label: 'Language Maneu',
              icon: 'far fa-circle nav-icon',
              component: APageLanguageMenu
            },
            {
              type: 'menuitem',
              page: 'error-404',
              label: 'Error 404',
              icon: 'far fa-circle nav-icon',
              component: APageError404
            },
            {
              type: 'menuitem',
              page: 'error-500',
              label: 'Error 500',
              icon: 'far fa-circle nav-icon',
              component: APageError500
            },
            {
              type: 'menuitem',
              page: 'pace',
              label: 'Pace',
              icon: 'far fa-circle nav-icon',
              component: APagePace
            },
            {
              type: 'menuitem',
              page: 'black',
              label: 'Blank Page',
              icon: 'far fa-circle nav-icon',
              component: APageBlank
            },
            {
              type: 'menuitem',
              page: 'starter',
              label: 'Starter Page',
              icon: 'far fa-circle nav-icon',
              component: APageStarter
            }
          ]
        },
        {
          type: 'header',
          label: 'MISCELLANEOUS'
        },
        {
          type: 'menuitem',
          label: 'Documentation',
          icon: 'nav-icon fas fa-file'
        },
        {
          type: 'header',
          label: 'MULTI LEVEL EXAMPLE'
        },
        {
          type: 'menuitem',
          label: 'Level 1',
          icon: 'far fa-circle nav-icon'
        },
        {
          type: 'menuitem',
          label: 'Level 1',
          icon: 'far fa-circle nav-icon',
          items: [
            {
              type: 'menuitem',
              label: 'Level 2.1',
              icon: 'fas fa-circle nav-icon'
            },
            {
              type: 'menuitem',
              label: 'Level 2.2',
              icon: 'fas fa-circle nav-icon',
              items: [
                {
                  type: 'menuitem',
                  label: 'Level 3.1',
                  icon: 'far fa-dot-circle nav-icon'
                },
                {
                  type: 'menuitem',
                  label: 'Level 3.2',
                  icon: 'far fa-dot-circle nav-icon'
                },
                {
                  type: 'menuitem',
                  label: 'Level 3.3',
                  icon: 'far fa-dot-circle nav-icon'
                }
              ]
            },
            {
              type: 'menuitem',
              label: 'Level 2.3',
              icon: 'fas fa-circle nav-icon'
            }
          ]
        },
        {
          type: 'menuitem',
          label: 'Level 1',
          icon: 'far fa-circle nav-icon'
        },
        {
          type: 'head',
          label: 'Labels'
        },
        {
          type: 'menuitem',
          label: 'Important',
          icon: 'nav-icon far fa-circle text-danger'
        },
        {
          type: 'menuitem',
          label: 'Warning',
          icon: 'nav-icon far fa-circle text-warning'
        },
        {
          type: 'menuitem',
          label: 'Informational',
          icon: 'nav-icon far fa-circle text-info'
        }
      ]
    },
    getRoute (page) {
      return '/layout/' + (this.$route.params.layout || 'one') + '/' + page
    },
    itemClass (item) {
      if (item.type === 'header') {
        return 'nav-header'
      }

      let itemClass = 'nav-item'
      if (item.items?.length > 0) {
        itemClass += ' has-treeview'

        const routePageIsItemDaughter = item.items.find(item => {
          return item.page === this.$route.params.page
        })
        if (routePageIsItemDaughter) {
          itemClass += ' menu-open'
        }
      }
      return itemClass
    },
    linkClass (item) {
      return item.items?.find(i => i.page === this.$route.params.page) ? 'nav-link active' : 'nav-link'
    }
  }
}
</script>
