/**
 * Imports
 */

import multi from 'redux-multi'
import effects from 'redux-effects'
import location from 'redux-effects-location'

/**
 * Middleware
 */

const middleware = [
  multi,
  effects,
  location(window)
]

/**
 * Exports
 */

export default middleware
