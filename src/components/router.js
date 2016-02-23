import Window from 'vdux/window'
import Document from 'vdux/document'
import HomePage from '../pages/home'
import NotFound from '../pages/notFound'
import enroute from 'enroute'
import combineReducers from '@f/combine-reducers'
import handleActions from '@f/handle-actions'
import {setUrl} from 'redux-effects-location'
import element from 'vdux/element'

const router = enroute({
  '/': (params, props) => <HomePage {...props} />,
  '*': () => <NotFound />
})

function initialState () {
  return {
    url: '/'
  }
}

function render ({local, state}) {
  console.log(state)
  return (
    <Window onPopstate={local(setUrl)}>
      <Document onClick={handleLinkClicks(local(setUrl))}>
        {
          router(state.url)
        }
      </Document>
    </Window>
  )
}

function handleLinkClicks (setUrl) {
  return e => {
    if (e.target.nodeName === 'A') {
      const href = e.target.getAttribute('href')
      if (isLocal(href)) {
        e.preventDefault()
        return setUrl(href)
      }
    }
  }
}

function isLocal (url) {
  return !/^(?:[a-z]+\:)?\/\//i.test(url)
}

function reducer (state, action) {
  switch (action.type) {
    case 'SET_URL':
      return {
        ...state,
        url: action.payload.value
      }
  }
}

export default {
  initialState,
  render,
  reducer
}
