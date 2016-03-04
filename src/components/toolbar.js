import element from 'vdux/element'
import css from 'jss-simple'

const styles = css({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.2)',
    boxSizing: 'border-box',
    width: '250px',
    height: '100%',
    color: '#fff',
    fontFamily: 'Roboto, sans-serif',
    '-webkitFontSmoothing': 'antialiased',
    pointerEvents: 'none'
  },
  title: {
    fontSize: 24,
    fontWeight: 400,
    backgroundColor: 'lightblue',
    width: '100%',
    padding: '20px',
    paddingLeft: '10px',
    boxSizing: 'border-box'
  },
  iconLeft: {
    marginRight: 12
  }
})

function render ({props, children}) {
  const {
    title,
    style,
    iconElementLeft,
    iconElementRight,
    onLeftElementClick,
    onRightElementClick
  } = props

  return (
    <div class={styles.container}>
      {iconElementLeft && <div class={styles.iconLeft} style={styles.iconLeft} onClick={onLeftElementClick}>{iconElementLeft}</div>}
      {title && <div class={styles.title} style={styles.title}>{title}</div>}
      {children}
      {iconElementRight && <div onClick={onRightElementClick}>{iconElementRight}</div>}
    </div>
  )
}

export default {
  render
}
