import "./navbar.css";
import { NavLink } from "react-router-dom";
import logo from '../../../assets/images/fakelandia-bldg-white.png';
function Navbar(): JSX.Element {
	return (
		<nav className="nav__container">
			<ul className="ul__navbar">
				<div className="navbar__left">
					<li className="links" >
					<NavLink  to="/"
								style={({ isActive }) => ({
									color: isActive ? '#f95738' : '#fff',
									textDecoration: isActive ? 'none': 'none',
									fontWeight: isActive ? 500 : 100,
								})}><img src={logo} alt="" width={62} height={62}/> 
					</NavLink></li>
				</div>
				<div className="navbar__right">
				<li className="links" >
					<NavLink  to="/"
								style={({ isActive }) => ({
									color: isActive ? '#f95738' : '#fff',
									textDecoration: isActive ? 'none': 'none',
									fontWeight: isActive ? 500 : 100,
								})}>Home
					</NavLink></li>
				<li className="links" >
					<NavLink  to="/misdemeanours"
								style={({ isActive }) => ({
									color: isActive ? '#f95738' : '#fff',
									textDecoration: isActive ? 'none': 'none',
									fontWeight: isActive ? 500 : 100,
								})}>Misdemeanours
					</NavLink></li>
				<li className="links" >
					<NavLink to="confess"
								style={({ isActive }) => ({
									color: isActive ? '#f95738' : '#fff',
									textDecoration: isActive ? 'none': 'none',
									fontWeight: isActive ? 500 : 100,
								})}>Confess to Us
					</NavLink></li>
				</div>
			</ul>
		</nav>
	)
}

export default Navbar;