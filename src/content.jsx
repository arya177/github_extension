import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'



//getURL
const {
  host, hostname, href, origin, pathname, port, protocol, search
} = window.location
console.log(pathname)
//edit profile
const hasProfile = async(username) => {
  const response = await fetch(
      "https://api.opensauced.pizza/v1/users" + username
    )
  console.log("https://api.opensauced.pizza/v1/users" + username)
  console.log(response.status)
  return response.status
}
const v = await hasProfile(pathname);

const something = document.getElementsByClassName('mb-3')[4];
const span = document.createElement('button');
const x = document.getElementsByClassName("btn btn-block js-profile-editable-edit-button")[0];
span.setAttribute('value', 'Save');
span.innerHTML = 'show profile on opensauced';
const a = document.createElement('a');
a.setAttribute('href', '/news_events/');
a.appendChild(span);


//follow-unfollow
const p = document.getElementsByClassName('user-following-container js-form-toggle-container')[2];
const q = document.createElement('button');
const r = document.getElementsByClassName('js-form-toggle-target')[4];
q.setAttribute('value', 'save');
q.innerHTML = 'span';
const  y= document.createElement('a');
y.appendChild(q);

// console.log(x.innerHTML, "iloveghochu")
if(x === undefined && v === 200){
  q.setAttribute('href', "https://insights.opensauced.pizza/user" + pathname);
  p.insertBefore(q,r);
}
else if(v === 200){
  a.setAttribute('href', "https://insights.opensauced.pizza/user" + pathname);
  something.insertBefore(a,x);
} 




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root,
)