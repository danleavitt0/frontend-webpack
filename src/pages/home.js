import element from 'vdux/element'
import Toolbar from '../components/toolbar'
import Layout from '../layouts/leftToolBar'

function getToolbar () {
  return (
    <Toolbar
      title='Cycle Shell'/>
  )
}

function getEditor () {
  if (typeof (window) != 'undefined') {
    var Editor = require('../components/editor').default
    return <Editor/>
  } else {
    return <div/>
  }
}

function render ({props}) {
  return (
    <Layout
      toolbar={getToolbar()}
      left={getEditor()}/>
  )
}

function reducer (state) {
  return state
}

export default {
  render,
  reducer
}
