/**
 * Imports
 */

import element from 'vdux/element'
import Router from './router'
import css from 'jss-simple'

/**
 * App
 */

var styles = css({
  div: {
    boxSizing: 'border-box'
  }
})

function render ({state, props}) {
  return <div class={styles.div}>
    <Router />
  </div>
}

/**
 * Exports
 */

export default render
