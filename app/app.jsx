var React = require('react');
var ReactDOM = require('react-dom');
// Access components from the react-router library (which we installed via npm install react-router)
// ES5 syntax
// var Route = require('react-router').Route;
// var Router = require('react-router').Router;

// ES6 "Destructuring" syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');

// App css
require('style!css!sass!applicationStyles');

$(document).foundation();

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="countdown" component={Countdown}></Route>
			<IndexRoute component={Timer}></IndexRoute>
		</Route>
	</Router>,
	document.getElementById('app')
);
