import element from 'vdux/element'
import css from 'jss-simple'
import createAction from '@f/create-action'
import addClass from '@f/add-class'

const hide = createAction('HIDE')
const styles = css({
  container: {
    display: 'flex',
    height: '100vh'
  },
  toolbar: {
    height: '100vh',
    position: 'fixed',
    zIndex: 999,
    transform: 'translateX(0px)',
    transition: 'transform .3s ease-in-out',
    '&.hide': {
      transform: 'translateX(-255px)'
    }
  },
  innerContainer: {
    display: 'flex',
    width: '100%',
    marginLeft: '250px',
    transition: 'margin .3s ease-in-out',
    '&.full': {
      marginLeft: '0px'
    }
  },
  left: {
    flex: 1,
    borderRight: '2px solid #666'
  },
  right: {
    flex: 1,
  }
})

function initialState () {
  return {
    hidden: false
  }
}

function render ({props, local, state}) {
  const {toolbar, left, right} = props
  const {hidden} = state
  console.log(state.hidden)

  return (
    <div class={styles.container}>
      <div onClick={local(hide)} class={[styles.toolbar, {hide: hidden}]}>{toolbar}</div>
      <div class={[styles.innerContainer, {full: hidden}]}>
        <div class={styles.left}>{left}</div>
        <div class={styles.right}>hidden: {state.hidden.toString()}</div>
      </div>
    </div>
  )
}

function reducer (state, action) {
  console.log(state, action)
  switch (action.type) {
    case 'HIDE':
      return {
        hidden: true
      }
  }
  return state
}

export default {
  initialState,
  render,
  reducer
}
