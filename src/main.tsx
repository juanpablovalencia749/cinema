import React from 'react'
import MoviesApp from './MoviesApp';
import ReactDOM from 'react-dom/client'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MoviesApp/>
  </React.StrictMode>
)
