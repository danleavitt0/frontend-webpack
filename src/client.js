/**
 * Imports
 */

import * as jss from 'jss-simple'
import camelCase from 'jss-camel-case'
import extend from 'jss-extend'
import nested from 'jss-nested'
import middleware from './middleware/client'
import domready from '@f/domready'
import element from 'vdux/element'
import reducer from './reducer'
import vdux from 'vdux/dom'

/**
 * Initialize app
 */

jss.use(extend()).use(nested()).use(camelCase())

let hmr
domready(() => {
  var App = require('./components/app').default
  jss.attach()
  hmr = vdux({
    middleware,
    reducer,
    initialState: window.__initialState__,
    app: state => <App state={state} />
  })
})

/**
 * Hot module replacement
 */

if (module.hot) {
  module.hot.decline()
  module.hot.accept(['./components/app', './reducer'], () => {
    jss.detach()
    jss.use(extend()).use(nested()).use(camelCase())
    hmr.replace(require('./components/app').default, require('./reducer').default)
    jss.attach()
  })
}
