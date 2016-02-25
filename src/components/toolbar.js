import element from 'vdux/element'
import nested from 'jss-nested'
import camelCase from 'jss-camel-case'
import vendorPrefix from 'jss-vendor-prefixer'
import {create} from 'jss'
let jss = create()

const styles = jss
  .use(nested())
  .use(camelCase())
  .use(vendorPrefix())
  .createStyleSheet({
    container: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 24,
      paddingRight: 24,
      boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.2)',
      backgroundColor: 'lightblue',
      color: 'white',
      height: 64,
      lineHeight: 64,
      fontSmoothing: 'antialiased'
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
  }).attach()

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
    <div class={styles.classes.container}>
      {iconElementLeft && <div class={styles.classes.iconLeft} style={style.iconLeft} onClick={onLeftElementClick}>{iconElementLeft}</div>}
      {title && <h1 class={styles.classes.title} style={styles.title}>{title}</h1>}
      {children}
      {iconElementRight && <div onClick={onRightElementClick}>{iconElementRight}</div>}
    </div>
  )
}

export default {
  render
}
