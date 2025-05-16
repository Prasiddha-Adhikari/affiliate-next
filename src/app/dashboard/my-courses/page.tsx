'use client';

const purchasedCourses = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    instructor: 'John Doe',
    progress: 10,
    image: '/courses/web-dev.jpg',
  },
  {
    id: 2,
    title: 'Mastering React with Projects',
    instructor: 'Jane Smith',
    progress: 40,
    image: '/courses/react.jpg',
  },
  {
    id: 3,
    title: 'Beginner to Pro: Digital Marketing',
    instructor: 'Alex Johnson',
    progress: 100,
    image: '/courses/marketing.jpg',
  },
];

export default function MyCourses() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-indigo-700">My Courses</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {purchasedCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={course.image}
              alt={course.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-indigo-700 mb-1">{course.title}</h2>
              <p className="text-sm text-gray-500 mb-3">by {course.instructor}</p>

              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
              <p className="text-sm text-gray-700">{course.progress}% complete</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
