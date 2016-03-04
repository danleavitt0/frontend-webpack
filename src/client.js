/**
 * Imports
 */

import * as jss from 'jss-simple'
import camelCase from 'jss-camel-case'
import middleware from './middleware/client'
import domready from '@f/domready'
import element from 'vdux/element'
import reducer from './reducer'
import App from './components/app'
import vdux from 'vdux/dom'

/**
 * Initialize app
 */

let hmr
domready(() => hmr = vdux({
  middleware,
  reducer,
  initialState: window.__initialState__,
  app: state => <App state={state} />
}))

/**
 * Hot module replacement
 */

if (module.hot) {
  module.hot.decline()
  module.hot.accept(['./components/app', './reducer'], () => {
    jss.detach()
    jss.use(camelCase())
    hmr.replace(require('./components/app').default, require('./reducer').default)
    jss.attach()
  })
}
