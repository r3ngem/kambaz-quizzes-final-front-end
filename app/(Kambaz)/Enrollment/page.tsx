/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useEffect, useState } from "react";
import { Button, FormCheck } from "react-bootstrap";
import * as client from "../Enrollment/client";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";

export default function EnrollmentPage() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [availableCourses, setAvailableCourses] = useState<any[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    async function fetchCourses() {
      const courses = await client.getAvailableCourses();
      setAvailableCourses(courses);
    }
    fetchCourses();
  }, []);

  const toggleSelection = (courseId: string) => {
    setSelected(prev =>
      prev.includes(courseId)
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  const saveEnrollment = async () => {
    if (!currentUser) return;

    for (const courseId of selected) {
      await client.enrollInCourse(currentUser._id, courseId);
    }

    redirect("/Dashboard");
    setSelected([]);
    
    const courses = await client.getAvailableCourses();
    setAvailableCourses(courses);
  };

  return (
    <div>
      <h1 id="wd-enrollment-title">Available Courses</h1>
      <hr />
      {availableCourses.map(course => (
        <FormCheck
          key={course._id}
          type="checkbox"
          id={`course-${course._id}`}
          label={course.name}
          checked={selected.includes(course._id)}
          onChange={() => toggleSelection(course._id)}
          className="mb-2"
        />
      ))}
      <Button
        variant="danger"
        size="lg"
        className="float-end mt-3"
        onClick={saveEnrollment}
      >
        Save Enrollment
      </Button>
    </div>
  );
}