import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
// import './styles/all.min.css'
import './styles/css2.css'
import './styles/custom.css'
import './styles/glightbox.css'
import './styles/style.css'
import './styles/tiny-slider.css'
import './bootstrap.min.css';


// import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
