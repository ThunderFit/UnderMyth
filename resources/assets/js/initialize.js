import App from './App';

window._ = require('lodash');
window.$ = window.jQuery = require('jquery');

window.App = new App();
window.App.init();