import react_default from '../vendor/deps/react.js';
import react_dom_default from '../vendor/deps/react-dom.js';
import './index.css.js';
import App from './App.jsx.js';
import react_jsx_dev_runtime_default from '../vendor/deps/react_jsx-dev-runtime.js';

var _jsxFileName = "/home/arya/github_opensorce/opensaused_r/github_extensiom/src/content.jsx";
 const React = react_default.__esModule ? react_default.default : react_default;
 const ReactDOM = react_dom_default.__esModule ? react_dom_default.default : react_dom_default;
 const _jsxDEV = react_jsx_dev_runtime_default["jsxDEV"];
const {
  host,
  hostname,
  href,
  origin,
  pathname,
  port,
  protocol,
  search
} = window.location;
console.log(pathname);
const hasProfile = async (username) => {
  const response = await fetch("https://api.opensauced.pizza/v1/users" + username);
  console.log("https://api.opensauced.pizza/v1/users" + username);
  console.log(response.status);
  return response.status;
};
const v = await hasProfile(pathname);
const something = document.getElementsByClassName("mb-3")[4];
const span = document.createElement("button");
const x = document.getElementsByClassName("btn btn-block js-profile-editable-edit-button")[0];
span.setAttribute("value", "Save");
span.innerHTML = "show profile on opensauced";
const a = document.createElement("a");
a.setAttribute("href", "/news_events/");
a.appendChild(span);
const p = document.getElementsByClassName("user-following-container js-form-toggle-container")[2];
const q = document.createElement("button");
const r = document.getElementsByClassName("js-form-toggle-target")[4];
q.setAttribute("value", "save");
q.innerHTML = "span";
const y = document.createElement("a");
y.appendChild(q);
if (x === void 0 && v === 200) {
  q.setAttribute("href", "https://insights.opensauced.pizza/user" + pathname);
  p.insertBefore(q, r);
} else if (v === 200) {
  a.setAttribute("href", "https://insights.opensauced.pizza/user" + pathname);
  something.insertBefore(a, x);
}
ReactDOM.render(/* @__PURE__ */ _jsxDEV(React.StrictMode, {
  children: /* @__PURE__ */ _jsxDEV(App, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, void 0)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 57,
  columnNumber: 3
}, void 0), root);
