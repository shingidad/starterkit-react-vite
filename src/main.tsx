import React from 'react'
import ReactDOM from 'react-dom'
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
} from 'react-router-dom'
import Main from '~/pages/Main'
import About from '~/pages/About'
import { history } from '~/store'

ReactDOM.render(
  <React.StrictMode>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HistoryRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
