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
import Navbar from '../../../../components/Navbar'
import Dashboard1 from '../../../../components/Pages/Dashboards/1/Dashboard1'
import Dashboard2 from '../../../../components/Pages/Dashboards/2/Dashboard2'
import Dashboard3 from '../../../../components/Pages/Dashboards/3/Dashboard3'
import APageProfile from '../../../../components/Pages/APageProfile'
import PageWidgets from '../../../../components/Pages/APageWidgets'
import APageLayoutTopNav from '../../../../components/Pages/Layout/APageLayoutTopNav'
import APageLayoutTopNavSidebar from '../../../../components/Pages/Layout/APageLayoutTopNavSidebar'
import APageLayoutBoxed from '../../../../components/Pages/Layout/APageLayoutBoxed'
import APageLayoutFixedSidebar from '../../../../components/Pages/Layout/APageLayoutFixedSidebar'
import APageLayoutFixedNavbar from '../../../../components/Pages/Layout/APageLayoutFixedNavbar'
import APageLayoutFixedFooter from '../../../../components/Pages/Layout/APageLayoutFixedFooter'
import APageLayoutCollapsedSidebar from '../../../../components/Pages/Layout/APageLayoutCollapsedSidebar'
import APageChartJs from '../../../../components/Pages/Charts/APageChartJs'
import APageChartFlot from '../../../../components/Pages/Charts/APageChartFlot'
import APageChartInline from '../../../../components/Pages/Charts/APageChartInline'
import APageUiElementGeneral from '../../../../components/Pages/UiElements/APageUiElementGeneral'
import APageUiElementIcons from '../../../../components/Pages/UiElements/APageUiElementIcons'
import APageUiElementButtons from '../../../../components/Pages/UiElements/APageUiElementButtons'
import APageUiElementSliders from '../../../../components/Pages/UiElements/APageUiElementSliders'
import APageUiElementModalAlerts from '../../../../components/Pages/UiElements/APageUiElementModalAlerts'
import APageUiElementNavbarTabs from '../../../../components/Pages/UiElements/APageUiElementNavbarTabs'
import APageUiElementTimeline from '../../../../components/Pages/UiElements/APageUiElementTimeline'
import APageUiElementRibbons from '../../../../components/Pages/UiElements/APageUiElementRibbons'
import APageFormGeneralElements from '../../../../components/Pages/Forms/APageFormGeneralElements'
import APageFormAdvancedElements from '../../../../components/Pages/Forms/APageFormAdvancedElements'
import APageFormEditors from '../../../../components/Pages/Forms/APageFormEditors'
import APageFormValidation from '../../../../components/Pages/Forms/APageFormValidation'
import APageSimpleTables from '../../../../components/Pages/Tables/APageSimpleTables'
import APageTableJsGrid from '../../../../components/Pages/Tables/APageTableJsGrid'
import APageCalendar from '../../../../components/Pages/APageCalendar'
import APageGallery from '../../../../components/Pages/APageGallery'
import APageMailInbox from '../../../../components/Pages/Mailbox/APageMailInbox'
import APageMailCompose from '../../../../components/Pages/Mailbox/APageMailCompose'
import APageMailRead from '../../../../components/Pages/Mailbox/APageMailRead'
import APageInvoice from '../../../../components/Pages/APageInvoice'
import APageEcommerce from '../../../../components/Pages/APageEcommerce'
import APageProjects from '../../../../components/Pages/Project/APageProjects'
import APageProjectAdd from '../../../../components/Pages/Project/APageProjectAdd'
import APageProjectEdit from '../../../../components/Pages/Project/APageProjectEdit'
import APageProjectDetail from '../../../../components/Pages/Project/APageProjectDetail'
import APageContact from '../../../../components/Pages/APageContact'
import APageLogin from '../../../../components/Pages/APageLogin'
import APageRegister from '../../../../components/Pages/APageRegister'
import APageForgotPassword from '../../../../components/Pages/APageForgotPassword'
import APageRecoverPassword from '../../../../components/Pages/APageRecoverPassword'
import APageLockscreen from '../../../../components/Pages/APageLockscreen'
import APageLegacyUserMenu from '../../../../components/Pages/APageLegacyUserMenu'
import APageLanguageMenu from '../../../../components/Pages/APageLanguageMenu'
import APageError404 from '../../../../components/Pages/APageError404'
import APageError500 from '../../../../components/Pages/APageError500'
import APagePace from '../../../../components/Pages/APagePace'
import APageBlank from '../../../../components/Pages/APageBlank'
import APageStarter from '../../../../components/Pages/APageStarter'

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
