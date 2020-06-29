<template>
  <div class="wrapper">
    <Navbar/>
    <MenuLeft/>
    <component :is="page()"></component>
    <Footer/>
    <MenuRight/>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
import Dashboard1 from '../Demo/Pages/Dashboards/1/Dashboard1'
import Dashboard2 from '../Demo/Pages/Dashboards/2/Dashboard2'
import Dashboard3 from '../Demo/Pages/Dashboards/3/Dashboard3'
import APageProfile from '../Demo/Pages/APageProfile'
import PageWidgets from '../Demo/Pages/APageWidgets'
import APageLayoutTopNav from '../Demo/Pages/Layout/APageLayoutTopNav'
import APageLayoutTopNavSidebar from '../Demo/Pages/Layout/APageLayoutTopNavSidebar'
import APageLayoutBoxed from '../Demo/Pages/Layout/APageLayoutBoxed'
import APageLayoutFixedSidebar from '../Demo/Pages/Layout/APageLayoutFixedSidebar'
import APageLayoutFixedNavbar from '../Demo/Pages/Layout/APageLayoutFixedNavbar'
import APageLayoutFixedFooter from '../Demo/Pages/Layout/APageLayoutFixedFooter'
import APageLayoutCollapsedSidebar from '../Demo/Pages/Layout/APageLayoutCollapsedSidebar'
import APageChartJs from '../Demo/Pages/Charts/APageChartJs'
import APageChartFlot from '../Demo/Pages/Charts/APageChartFlot'
import APageChartInline from '../Demo/Pages/Charts/APageChartInline'
import APageUiElementGeneral from '../Demo/Pages/UiElements/APageUiElementGeneral'
import APageUiElementIcons from '../Demo/Pages/UiElements/APageUiElementIcons'
import APageUiElementButtons from '../Demo/Pages/UiElements/APageUiElementButtons'
import APageUiElementSliders from '../Demo/Pages/UiElements/APageUiElementSliders'
import APageUiElementModalAlerts from '../Demo/Pages/UiElements/APageUiElementModalAlerts'
import APageUiElementNavbarTabs from '../Demo/Pages/UiElements/APageUiElementNavbarTabs'
import APageUiElementTimeline from '../Demo/Pages/UiElements/APageUiElementTimeline'
import APageUiElementRibbons from '../Demo/Pages/UiElements/APageUiElementRibbons'
import APageFormGeneralElements from '../Demo/Pages/Forms/APageFormGeneralElements'
import APageFormAdvancedElements from '../Demo/Pages/Forms/APageFormAdvancedElements'
import APageFormEditors from '../Demo/Pages/Forms/APageFormEditors'
import APageFormValidation from '../Demo/Pages/Forms/APageFormValidation'
import APageSimpleTables from '../Demo/Pages/Tables/APageSimpleTables'
import APageTableJsGrid from '../Demo/Pages/Tables/APageTableJsGrid'
import APageCalendar from '../Demo/Pages/APageCalendar'
import APageGallery from '../Demo/Pages/APageGallery'
import APageMailInbox from '../Demo/Pages/Mailbox/APageMailInbox'
import APageMailCompose from '../Demo/Pages/Mailbox/APageMailCompose'
import APageMailRead from '../Demo/Pages/Mailbox/APageMailRead'
import APageInvoice from '../Demo/Pages/APageInvoice'
import APageEcommerce from '../Demo/Pages/APageEcommerce'
import APageProjects from '../Demo/Pages/Project/APageProjects'
import APageProjectAdd from '../Demo/Pages/Project/APageProjectAdd'
import APageProjectEdit from '../Demo/Pages/Project/APageProjectEdit'
import APageProjectDetail from '../Demo/Pages/Project/APageProjectDetail'
import APageContact from '../Demo/Pages/APageContact'
import APageLogin from '../Demo/Pages/APageLogin'
import APageRegister from '../Demo/Pages/APageRegister'
import APageForgotPassword from '../Demo/Pages/APageForgotPassword'
import APageRecoverPassword from '../Demo/Pages/APageRecoverPassword'
import APageLockscreen from '../Demo/Pages/APageLockscreen'
import APageLegacyUserMenu from '../Demo/Pages/APageLegacyUserMenu'
import APageLanguageMenu from '../Demo/Pages/APageLanguageMenu'
import APageError404 from '../Demo/Pages/APageError404'
import APageError500 from '../Demo/Pages/APageError500'
import APagePace from '../Demo/Pages/APagePace'
import APageBlank from '../Demo/Pages/APageBlank'
import APageStarter from '../Demo/Pages/APageStarter'

export default {
  components: {
    Navbar,
    MenuLeft: () => import('../MenuLeft'),
    Footer: () => import('../Footer'),
    MenuRight: () => import('../MenuRight')
  },
  methods: {
    page () {
      const page = this.$route.params.page
      switch (page) {
        case 'dashboard1':
          return Dashboard1
        case 'dashboard2':
          return Dashboard2
        case 'dashboard3':
          return Dashboard3
        case 'widgets':
          return PageWidgets
        case 'top-navigation' :
          return APageLayoutTopNav
        case 'top-navigation-sidebar' :
          return APageLayoutTopNavSidebar
        case 'boxed' :
          return APageLayoutBoxed
        case 'fixed-sidebar' :
          return APageLayoutFixedSidebar
        case 'fixed-navbar' :
          return APageLayoutFixedNavbar
        case 'fixed-footer' :
          return APageLayoutFixedFooter
        case 'layout-collapsed-sidebar' :
          return APageLayoutCollapsedSidebar
        case 'chart-js' :
          return APageChartJs
        case 'chart-flot' :
          return APageChartFlot
        case 'chart-inline' :
          return APageChartInline
        case 'layout-chart-js' :
          return APageChartJs
        case 'ui-element-general' :
          return APageUiElementGeneral
        case 'ui-element-icons' :
          return APageUiElementIcons
        case 'ui-element-buttons' :
          return APageUiElementButtons
        case 'ui-element-sliders' :
          return APageUiElementSliders
        case 'ui-element-modal-alert' :
          return APageUiElementModalAlerts
        case 'ui-element-navbar-tabs' :
          return APageUiElementNavbarTabs
        case 'ui-element-timeline' :
          return APageUiElementTimeline
        case 'ui-element-ribbons' :
          return APageUiElementRibbons
        case 'form-general' :
          return APageFormGeneralElements
        case 'form-advanced' :
          return APageFormAdvancedElements
        case 'form-editors' :
          return APageFormEditors
        case 'form-validation' :
          return APageFormValidation
        case 'table-simple' :
          return APageSimpleTables
        case 'table-datatable' :
          return APageTableJsGrid
        case 'calendar' :
          return APageCalendar
        case 'gallery' :
          return APageGallery
        case 'mail-inbox' :
          return APageMailInbox
        case 'mail-compose' :
          return APageMailCompose
        case 'mail-read' :
          return APageMailRead
        case 'invoice' :
          return APageInvoice
        case 'profile' :
          return APageProfile
        case 'ecommerce' :
          return APageEcommerce
        case 'projects' :
          return APageProjects
        case 'project-add' :
          return APageProjectAdd
        case 'project-edit' :
          return APageProjectEdit
        case 'project-detail' :
          return APageProjectDetail
        case 'contact' :
          return APageContact
        case 'login' :
          return APageLogin
        case 'register' :
          return APageRegister
        case 'forgot-password' :
          return APageForgotPassword
        case 'recover-password' :
          return APageRecoverPassword
        case 'lockscreen' :
          return APageLockscreen
        case 'legacy-user-menu' :
          return APageLegacyUserMenu
        case 'language-menu' :
          return APageLanguageMenu
        case 'error-404' :
          return APageError404
        case 'error-500' :
          return APageError500
        case 'pace' :
          return APagePace
        case 'black' :
          return APageBlank
        case 'starter' :
          return APageStarter
        default :
          return Dashboard1
      }
    }
  }
}
</script>
