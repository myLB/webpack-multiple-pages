import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'

import SuspenseApp from './Suspense'
import RouterApp from './Router'
import App from './Main'

render(<App />, document.getElementById('root'))
