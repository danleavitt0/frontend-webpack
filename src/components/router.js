import Window from 'vdux/window'
import Document from 'vdux/document'
import HomePage from '../pages/home'
import NotFound from '../pages/notFound'
import enroute from 'enroute'
import {setUrl} from 'redux-effects-location'
import combineReducers from '@f/combine-reducers'
import handleActions from '@f/handle-actions'
import createAction from '@f/create-action'
import element from 'vdux/element'

const loadUrl = createAction('LOAD_URL')

const router = enroute({
  '/': (params, props) => <HomePage {...props} />,
  '*': () => <NotFound />
})

function initialState () {
  return {
    url: '/'
  }
}

function render ({local, state, props}) {
  return (
    <Window onPopstate={() => handlePopState(document.location.pathname, local(loadUrl))}>
       <Document onClick={handleLinkClicks(local(loadUrl))}>
         {
           router(state.url)
         }
       </Document>
     </Window>
  )
}

function handlePopState (location, loadedUrl) {
  return [setUrl(location), loadedUrl(location)]
}

function handleLinkClicks (loadedUrl) {
  return e => {
    if (e.target.nodeName === 'A') {
      const href = e.target.getAttribute('href')
      if (isLocal(href)) {
        e.preventDefault()
        return [
          loadedUrl(href),
          setUrl(href)
        ]
      }
    }
  }
}

function isLocal (url) {
  return !/^(?:[a-z]+\:)?\/\//i.test(url)
}

function reducer (state, action) {
  switch (action.type) {
    case 'LOAD_URL':
      return {
        ...state,
        url: action.payload
      }
  }
  return state
}

export default {
  initialState,
  render,
  reducer
}
