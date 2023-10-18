import { Link, useLocation } from "react-router-dom";
import "../../styles.css";
import "./index.css";
import Logo from "../../northeastern-logo.png";
import { FaTachometerAlt } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import { BsCalendarFill } from "react-icons/bs";
import { CgInbox } from "react-icons/cg";
import { BiSolidBook } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { LuNetwork } from "react-icons/lu";

function fetchIcon(name) {
	switch (name) {
		case "Account":
			return <BiSolidUserCircle className="wd-navbar-icon" style={{color: "#cccccc"}}/>;
		case "Dashboard":
			return <FaTachometerAlt className="wd-navbar-icon" />;
		case "Courses":
			return <BiSolidBook className="wd-navbar-icon" />;
		case "Calendar":
			return <BsCalendarFill className="wd-navbar-icon" />;
		case "Inbox":
			return <CgInbox className="wd-navbar-icon" />;
		case "History":
			return <AiOutlineClockCircle className="wd-navbar-icon" />;
		case "Studio":
			return <LuNetwork className="wd-navbar-icon" />;
		case "Commons":
			return <HiOutlineUserGroup className="wd-navbar-icon" />;
		case "Help":
			return <AiOutlineQuestionCircle className="wd-navbar-icon" />;
		default:
			return null;
	}
}

function Navbar() {
	const link = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
	const { pathname } = useLocation();
	return (
		<div id="navbar" className="wd-navbar list-group">
			<li className="wd-navbar-item">
				<Link to={`/Kanbas/Dashboard`}>
					<img className="wd-navbar-logo" src={Logo} alt="Northeastern Logo" />
				</Link>
			</li>
			{link.map((link, index) => (
				<li className="wd-navbar-item" key={index}>
					<Link key={index} to={`/Kanbas/${link}`} className={`wd-navbar-link ${pathname.includes(link) && "active"}`}>
						<div className="wd-navbar-icon-container" aria-hidden="true">
							{fetchIcon(link)}
						</div>
						<div className="wd-navbar-text">{link}</div>
					</Link>
				</li>
			))}
		</div>
	);
}

export default Navbar;
