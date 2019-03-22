import './style/index.scss'

import * as modal from './modal'
import * as button from './button/index'
import Button from './button'
import * as buttongroup from './buttongroup'
import globalModal from './globalmodal'
import Toast from './toast'

const components = {
  ...modal,
  ...button,
  ...buttongroup,
  ...globalModal,
  ...Toast,
  Button,
  ButtonGroup: Button.group,

}

const install = function (Vue) {
  if (install.installed) return
  // components.map(component => Vue.component(component.name, component))
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })

  Vue.prototype.$modal = globalModal
  Vue.prototype.$toast = Toast
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  install,
  ...components
}

export default API
