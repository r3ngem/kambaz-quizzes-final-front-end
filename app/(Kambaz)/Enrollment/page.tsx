import { Button, FormLabel } from "react-bootstrap";

export default function EnrollmentPage() {
    return (
    <div>
        <h1 id="wd-enrollment-title">Available Courses</h1> <hr />
            <input type="checkbox" name="check-sub-type" id="wd-available-course" className="me-2"/>
            <FormLabel htmlFor="wd-available-course">Rocket Propulsion</FormLabel><br/>
            <input type="checkbox" name="check-sub-type" id="wd-available-course" className="me-2"/>
            <FormLabel htmlFor="wd-available-course">Aerodynamics</FormLabel><br/>
            <input type="checkbox" name="check-sub-type" id="wd-available-course" className="me-2"/>
            <FormLabel htmlFor="wd-available-course">Spacecraft Design</FormLabel><br/>
            <input type="checkbox" name="check-sub-type" id="wd-available-course" className="me-2"/>
            <FormLabel htmlFor="wd-available-course">Organic Chemistry</FormLabel><br/>
            <input type="checkbox" name="check-sub-type" id="wd-available-course" className="me-2"/>
            <FormLabel htmlFor="wd-available-course">Inorganic Chemistry</FormLabel><br />
            <input type="checkbox" name="check-sub-type" id="wd-available-course" className="me-2"/>
            <FormLabel htmlFor="wd-available-course">Physical Chemistry</FormLabel><br />
            <input type="checkbox" name="check-sub-type" id="wd-available-course" className="me-2"/>
            <FormLabel htmlFor="wd-available-course">Ancient Languages and Scripts of Middle-earth</FormLabel><br/>
            <input type="checkbox" name="check-sub-type" id="wd-available-course" className="me-2"/>
            <FormLabel htmlFor="wd-available-course">Wizards, Elves, and Men: Inter-species Diplomacy in Middle-earth</FormLabel><br/>
            <input type="checkbox" name="check-sub-type" id="wd-available-course" className="me-2"/>
            <FormLabel htmlFor="wd-available-course">Inorganic Chemistry</FormLabel><br /><br />
            <Button variant="danger" size="lg" className="me-1 float-end" id="wd-view-progress">Save Enrollment</Button>
    </div>
    )
}