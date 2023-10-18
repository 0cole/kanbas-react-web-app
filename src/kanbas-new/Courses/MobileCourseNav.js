import CourseNavigation from "../Tools/SecondaryNavigation/CourseNavigation";

function MobileCourseNav(courseId) {
	const id = parseInt(courseId.courseId);
	return (
		<div>
			<CourseNavigation courseId={id}/>
		</div>
	);
}

export default MobileCourseNav;
