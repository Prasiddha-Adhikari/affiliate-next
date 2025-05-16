"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const adminCourses = [
  {
    id: "C001",
    title: "React for Beginners",
    studentsEnrolled: 250,
    status: "Active",
    createdAt: "2024-01-15",
  },
  {
    id: "C002",
    title: "Advanced Node.js",
    studentsEnrolled: 150,
    status: "Inactive",
    createdAt: "2023-11-20",
  },
];

export default function AdminMyCoursesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Courses</h1>
      <div className="space-y-4">
        {adminCourses.map((course) => (
          <Card key={course.id} className="p-4 flex flex-col md:flex-row justify-between items-center">
            <CardContent className="flex-1">
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>Created On: {course.createdAt}</CardDescription>
              </CardHeader>
              <p className="mt-2 text-gray-700">
                Students Enrolled: <span className="font-semibold">{course.studentsEnrolled}</span>
              </p>
              <p className="mt-1 text-gray-700">
                Status:{" "}
                <span className={course.status === "Active" ? "text-green-600" : "text-red-600"}>
                  {course.status}
                </span>
              </p>
            </CardContent>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Edit
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
                Delete
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
