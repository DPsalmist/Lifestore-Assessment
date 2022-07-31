import React, {Component} from "react";
import Menu from './svg/bars-solid.svg';
import Xmark from './svg/xmark-solid.svg';
import Cart from './svg/cart-shopping-solid.svg';
import {Link}  from "react-router-dom";
import './css/Header.css';

export class Header extends Component {

	state = {toggle:false}

	menuToggle = () => {
	 		this.setState({toggle: !this.state.toggle})
	 	}


	render () {

		const {toggle} = this.state 

		return (

			<header>
				
				<div className="menu" onClick={this.menuToggle}>
					<img src={Menu} alt="hamburger" width="20" />
				</div>

				<div className="logo">
					<h2><Link to = "/"> Lifestore Healthcare </Link></h2>
				</div>

				<nav>
					<ul className={toggle ? "toggle" : ""}>
						<li><Link to = '/'>Home</Link></li>
						<li><Link to = '/about'>About</Link></li>
						<li><Link to = '/contact'>Contact</Link></li>
						<li className="close" onClick={this.menuToggle}>
							<img src={Xmark} alt="close" width="20"/>
						</li>
						<li ><Link to = '/login'>Login/Register</Link></li>
						
					</ul>
					<div className="nav-cart">
						<span>0</span>
						<img src={Cart} alt="cart" width="20" />
					</div>
				</nav>
			</header>
		)	
	}
	
	
}

export default Header