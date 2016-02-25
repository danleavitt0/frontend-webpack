import {bindUrl} from 'redux-effects-location'
import createAction from '@f/create-action'

const newRoute = createAction('NEW_ROUTE')
const NEW_ROUTE = 'NEW_ROUTE'

function initializeApp () {
  return bindUrl(newRoute)
}

export {
  NEW_ROUTE,
  initializeApp
}
