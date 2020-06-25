// page charts
import APageChartFlot from './Pages/Charts/APageChartFlot'
import APageChartInline from './Pages/Charts/APageChartInline'
import APageChartJs from './Pages/Charts/APageChartJs'
import ASaleChart from './Pages/Dashboards/1/SaleChart/ASaleChart'
import ASalesGraph from './Pages/Dashboards/1/SalesGraph/ASalesGraph'
import AVisitorsChart from './Pages/Dashboards/1/VisitorsChart/AVisitorsChart'
import ABreadcrumb from './Pages/Dashboards/1/Breadcrumb'
import ACardCalendar from './Pages/Dashboards/1/ACardCalendar'
import ABrowserUsage from './Pages/Dashboards/2/ABrowserUsage'
import ACardDirectChat from './Pages/Dashboards/2/ACardDirectChat'
import ACardLastMembers from './Pages/Dashboards/2/ACardLastMembers'
import ACardLatestOrder from './Pages/Dashboards/2/ACardLatestOrder'
import AMapBoxPane from './Pages/Dashboards/2/AMapBoxPane'
import AMonthlyRecapReport from './Pages/Dashboards/2/AMonthlyRecapReport'
import AProductRecentAdded from './Pages/Dashboards/2/AProductRecentAdded'
import ACardOnlineStoreOverview from './Pages/Dashboards/3/ACardOnlineStoreOverview'
import ACardOnlineStoreVisitors from './Pages/Dashboards/3/ACardOnlineStoreVisitors'
import ACardProducts from './Pages/Dashboards/3/ACardProducts'
import ACardSales from './Pages/Dashboards/3/ACardSales'
// forms
import APageFormAdvancedElements from './Pages/Forms/APageFormAdvancedElements'
import APageFormEditors from './Pages/Forms/APageFormEditors'
import APageFormGeneralElements from './Pages/Forms/APageFormGeneralElements'
import APageFormValidation from './Pages/Forms/APageFormValidation'
// layouts
import APageLayoutBoxed from './Pages/Layout/APageLayoutBoxed'
import APageLayoutCollapsedSidebar from './Pages/Layout/APageLayoutCollapsedSidebar'
import APageLayoutFixedFooter from './Pages/Layout/APageLayoutFixedFooter'
import APageLayoutFixedNavbar from './Pages/Layout/APageLayoutFixedNavbar'
import APageLayoutFixedSidebar from './Pages/Layout/APageLayoutFixedSidebar'
import APageLayoutTopNav from './Pages/Layout/APageLayoutTopNav'
import APageLayoutTopNavSidebar from './Pages/Layout/APageLayoutTopNavSidebar'
// mails
import APageMailCompose from './Pages/Mailbox/APageMailCompose'
import APageMailInbox from './Pages/Mailbox/APageMailInbox'
import APageMailRead from './Pages/Mailbox/APageMailRead'
// projects
import APageProjectAdd from './Pages/Project/APageProjectAdd'
import APageProjectDetail from './Pages/Project/APageProjectDetail'
import APageProjectEdit from './Pages/Project/APageProjectEdit'
import APageProjects from './Pages/Project/APageProjects'
// tables
import APageDatatables from './Pages/Tables/APageDatatables'
import APageSimpleTables from './Pages/Tables/APageSimpleTables'
import APageTableJsGrid from './Pages/Tables/APageTableJsGrid'
// uielements
import APageUiElementButtons from './Pages/UiElements/APageUiElementButtons'
import APageUiElementGeneral from './Pages/UiElements/APageUiElementGeneral'
import APageUiElementIcons from './Pages/UiElements/APageUiElementIcons'
import APageUiElementModalAlerts from './Pages/UiElements/APageUiElementModalAlerts'
import APageUiElementNavbarTabs from './Pages/UiElements/APageUiElementNavbarTabs'
import APageUiElementRibbons from './Pages/UiElements/APageUiElementRibbons'
import APageUiElementSliders from './Pages/UiElements/APageUiElementSliders'
import APageUiElementTimeline from './Pages/UiElements/APageUiElementTimeline'
import AAlert from './Widget/AAlert/AAlert'
import ACallout from './Widget/ACallout/ACallout'
import AProgressbar from './Widget/AProgressbar/AProgressbar'
// pages
import APageBlank from './Pages/APageBlank'
import APageCalendar from './Pages/APageCalendar'
import APageContact from './Pages/APageContact'
import APageEcommerce from './Pages/APageEcommerce'
import APageError404 from './Pages/APageError404'
import APageError500 from './Pages/APageError500'
import APageForgotPassword from './Pages/APageForgotPassword'
import APageGallery from './Pages/APageGallery'
import APageInvoice from './Pages/APageInvoice'
import APageLanguageMenu from './Pages/APageLanguageMenu'
import APageLegacyUserMenu from './Pages/APageLegacyUserMenu'
import APageLockscreen from './Pages/APageLockscreen'
import APageLogin from './Pages/APageLogin'
import APagePace from './Pages/APagePace'
import APageProfile from './Pages/APageProfile'
import APageRecoverPassword from './Pages/APageRecoverPassword'
import APageRegister from './Pages/APageRegister'
import APageStarter from './Pages/APageStarter'
import APageWidgets from './Pages/APageWidgets'
// widget cards
import ACard from './Widget/Card/ACard'
import ACardBody from './Widget/Card/ACardBody'
import ACardFooter from './Widget/Card/ACardFooter'
import ACardHeader from './Widget/Card/ACardHeader'
// widget specifics
import ACardCollapsable from './Widget/Specific/ACardCollapsable'
import ACardExpandable from './Widget/Specific/ACardExpandable'
import CardIndicator from './Widget/Specific/CardIndicator'
import ACardMaximizable from './Widget/Specific/ACardMaximizable'
import ACardRefresh from './Widget/Specific/ACardRefresh'
import ACardRemovable from './Widget/Specific/ACardRemovable'
import AInfoBox from './Widget/AInfoBox'
import ACardEmptyBodyLoadable from './Widget/Specific/ACardEmptyBodyLoadable'
import ACardPrimary from './Widget/Card/Color/ACardPrimary'
import ACardSuccess from './Widget/Card/Color/ACardSuccess'
import ACardWarning from './Widget/Card/Color/ACardWarning'
import ACardDanger from './Widget/Card/Color/ACardDanger'
import ACardDefault from './Widget/Card/Color/ACardDefault'
import ACardProfileActivities from './Widget/Card/Profile/ACardProfileActivities'
import AUserImage from './Widget/UserImage/AUserImage'
import ACardProfile from './Widget/Card/Profile/ACardProfile'
import AImgCircle from './Widget/AImgCircle'
const categories = {
  pages: {
    specifics: [
      APageBlank,
      APageCalendar,
      APageContact,
      APageEcommerce,
      APageError404,
      APageError500,
      APageForgotPassword,
      APageGallery,
      APageInvoice,
      APageLanguageMenu,
      APageLegacyUserMenu,
      APageLockscreen,
      APageLogin,
      APagePace,
      APageProfile,
      APageRecoverPassword,
      APageRegister,
      APageStarter,
      APageWidgets
    ],
    charts: [
      APageChartFlot,
      APageChartInline,
      APageChartJs,
      ASaleChart,
      ASalesGraph,
      AVisitorsChart,
      ABreadcrumb,
      ACardCalendar,
      ABrowserUsage,
      ACardDirectChat,
      ACardLastMembers,
      ACardLatestOrder,
      AMapBoxPane,
      AMonthlyRecapReport,
      AProductRecentAdded,
      ACardOnlineStoreOverview,
      ACardOnlineStoreVisitors,
      ACardProducts,
      ACardSales
    ],
    uiElements: [
      APageUiElementButtons,
      APageUiElementGeneral,
      APageUiElementIcons,
      APageUiElementModalAlerts,
      APageUiElementNavbarTabs,
      APageUiElementRibbons,
      APageUiElementSliders,
      APageUiElementTimeline
    ]
  },
  forms: [
    APageFormAdvancedElements,
    APageFormEditors,
    APageFormGeneralElements,
    APageFormValidation
  ],
  layouts: [
    APageLayoutBoxed,
    APageLayoutCollapsedSidebar,
    APageLayoutFixedFooter,
    APageLayoutFixedNavbar,
    APageLayoutFixedSidebar,
    APageLayoutTopNav,
    APageLayoutTopNavSidebar
  ],
  mails: [
    APageMailCompose,
    APageMailInbox,
    APageMailRead
  ],
  projects: [
    APageProjectAdd,
    APageProjectDetail,
    APageProjectEdit,
    APageProjects
  ],
  tables: [
    APageDatatables,
    APageSimpleTables,
    APageTableJsGrid
  ],
  widgets: {
    cards: {
      generics: [
        ACard,
        ACardBody,
        ACardFooter,
        ACardHeader
      ],
      specifics: [
        ACardCollapsable,
        ACardEmptyBodyLoadable,
        ACardExpandable,
        CardIndicator,
        ACardMaximizable,
        ACardRefresh,
        ACardRemovable,
        AInfoBox,
        ACardProfileActivities,
        AUserImage,
        ACardProfile,
        AImgCircle
      ],
      colors: [
        ACardDefault,
        ACardPrimary,
        ACardSuccess,
        ACardWarning,
        ACardDanger
      ]
    },
    uiElements: [
      AAlert,
      ACallout,
      AProgressbar
    ]
  }
}
const LteComponents = Object.assign({}, [
  ...categories.pages.charts,
  ...categories.pages.specifics,
  ...categories.pages.uiElements,
  ...categories.forms,
  ...categories.layouts,
  ...categories.mails,
  ...categories.projects,
  ...categories.tables,
  ...categories.widgets.uiElements,
  ...categories.widgets.cards.generics,
  ...categories.widgets.cards.specifics,
  ...categories.widgets.cards.colors
])

export default LteComponents
