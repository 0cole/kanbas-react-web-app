import logo from "../../northeastern-logo.png";
import { Link, useLocation } from "react-router-dom";
import MobileNavbar from "../Navbar/mobile";
import "./index.css";

function MobileHeader() {
	const { pathname } = useLocation();
	const pathParts = pathname.split("/");

	return (
		<div className="wd-mobile-header">
			<header>
				<nav className="navbar navbar-expand-lg navbar-light wd-mobile-header">
					<Link to={`/Kanbas/MobileNavbar`}>
						<img className="wd-logo" src={logo} alt="Northeastern Logo" />
					</Link>
					<p className="wd-mobile-crumb">{pathParts[2]}</p>
				</nav>
			</header>
		</div>
	);
}

export default MobileHeader;
