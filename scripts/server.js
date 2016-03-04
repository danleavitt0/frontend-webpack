import 'babel-polyfill'
import * as jss from 'jss-simple'
import extend from 'jss-extend'
import nested from 'jss-nested'
import prefixer from 'jss-vendor-prefixer'
import camelCase from 'jss-camel-case'
jss.use(extend())
  .use(nested())
  .use(camelCase())

export default function *(req, urls) {
  const main = require('../src/server').default
  const {state, html} = yield main(req)
  const style = jss.toString()

  return `
    <html>
      <head>
        <script type='text/javascript'>
          window.__initialState__ = ${JSON.stringify(state)}
        </script>
        <script type='text/javascript' src='${urls.js}'></script>
        <style>
          ${style}
        </style>
      </head>
      <body style="margin:0px;">
        ${html}
      </body>
     </html>
     `
}
