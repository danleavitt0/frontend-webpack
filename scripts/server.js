import main from '../src/server'
import 'babel-polyfill'

export default function *(req, urls) {
  const {state, html} = yield main(req)

  return `
    <html>
      <head>
        <script type='text/javascript'>
          window.__initialState__ = ${JSON.stringify(state)}
        </script>
        <script type='text/javascript' src='${urls.js}'></script>
      </head>
      <body>
        ${html}
      </body>
     </html>
     `
}
