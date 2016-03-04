import element from 'vdux/element'
import Ace from 'vdux-ace'
require('brace/mode/javascript')
require('brace/theme/tomorrow')

function render ({props}) {
  return (
    <Ace
      theme='tomorrow'
      mode='javascript'
      height='100%'
      width='100%'/>
  )
}

export default {
  render
}
