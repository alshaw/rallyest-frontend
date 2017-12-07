import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { injectGlobal } from 'styled-components'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import 'semantic-ui-css/semantic.min.css'

// eslint-disable-next-line
injectGlobal`
body{
  margin:0px;
  padding: 0px,
  margin: 0px;
  background-color: #e1e6e7;
  font-family: helvetica neue, helvetica, arial, sansSerif;
  font-weight: 200;
}
#wrap {
  width: 100%;
  height: auto;
  display: flex;
}
.dropzone {
  minWidth: 50px;
  height : 20px;
  background-color: #E1E6E7;
  padding: 10px;
  border : 2px dashed black;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: #00AADF;
}
#left-menu-container {
  width: 15%;
  min-width: 200px;
  max-width: 200px;
  -ms-flex: 0 150px;
  -webkit-box-flex:  0;
  -moz-box-flex:  0;
  -ms-box-flex:  0;
  box-flex:  0;
}
#left-menu-wrap {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 15%;
  min-width: 200px;
  max-width: 200px;
  overflow: hidden;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
}
#overlay {
  width: 15%;
  min-width: 200px;
  height: 0px;
}
#hero {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#hero-overlay {
  min-height: 70px;
  max-height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#project-one-container {
  width: 100%;
}
.test{
  width: 100%;
}
`

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
