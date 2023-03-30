import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const x = document.createElement('button')
x.setAttribute('value', 'save');
x.innerHTML = 'span';
x.id = 'crx-root'
document.body.append(x)
console.log(x);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root,
)