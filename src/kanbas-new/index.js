import "./styles.css";
import "./Tools/Navbar/index.css";
import Navbar from "./Tools/Navbar";
import MobileNavbar from "./Tools/Navbar/mobile";
import Header from "./Tools/Mobile/MobileHeader";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
	const links = ["Calendar", "Account", "Inbox", "History", "Studio", "Commons", "Help"];

	return (
		<div>
			<div className="row-12 d-md-none">
				<Header />
			</div>
			<div className="d-flex">
				<div className="col-1 d-none d-md-block">
					<Navbar />
				</div>
				<div className="col-sm-12 col-md-11">
					<Routes>
						{links.map((link, index) => (
							<Route
								path={`/${link}`}
								element={
									<h1 className="d-flex justify-content-center" style={{ marginTop: "9em" }}>
										This page has not yet been configured.
									</h1>
								}
								key={link}
							/>
						))}
						<Route path="/" element={<Navigate to="Dashboard" />} />
						<Route path="Dashboard" element={<Dashboard />} />
						<Route path="Courses" element={<Dashboard />} />
						<Route path="Courses/:courseId/*" element={<Courses />} />
						<Route path="MobileNavbar" element={<MobileNavbar />} />
					</Routes>
				</div>
			</div>
		</div>
	);
}
export default Kanbas;
