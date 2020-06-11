import components from './components'
import Vue from 'vue'

const comps = {
  ...components.pages.charts
  // ...components.forms,
  // ...components.layouts,
  // ...components.mails,
  // ...components.projects,
  // ...components.tables,
  // ...components.uiElements,
  // ...components.pages.specifics,
  // ...components.widgets.cards.generics,
  // ...components.widgets.cards.specifics
}

Object.keys(comps).forEach(c => Vue.component(c, comps[c]))
