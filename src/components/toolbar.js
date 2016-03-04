import element from 'vdux/element'
import css from 'jss-simple'

const styles = css({
  container: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24,
    boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'lightblue',
    color: '#eee',
    height: 64,
    lineHeight: 64,
    webkitFontSmoothing: 'antialiased'
  },
  title: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 24,
    fontWeight: 400,
    flex: 1
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
      {title && <h1 class={styles.title} style={styles.title}>{title}</h1>}
      {children}
      {iconElementRight && <div onClick={onRightElementClick}>{iconElementRight}</div>}
    </div>
  )
}

export default {
  render
}
