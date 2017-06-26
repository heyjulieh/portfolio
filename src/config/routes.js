import React from 'react'
import { Route } from 'react-router'
import App from '../App'
import Aboutme from '../Aboutme'

var routes = (
	<div>
		<Route exact path='/' component={App} />
		<Route path='/aboutme' component={Aboutme} />
		<Route path='/myresume' component={App}/>
		<Route path='/contactme' component={App}/>
	</div>
)

export default routes;
