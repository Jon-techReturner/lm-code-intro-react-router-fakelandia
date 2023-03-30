import "./navbar.css";

function Navbar(): JSX.Element {
	return (
		<nav className="nav__container">
			<ul className="ul__navbar">
                <li><a className="links" href="home">Logo</a></li>
				<li><a className="links" href="home">Home</a></li>
				<li><a className="links" href="misdemeanours">Misdemeanours</a></li>
				<li><a className="links" href="confess">Confess to Us</a></li>
			</ul>
		</nav>
	)
}

export default Navbar;