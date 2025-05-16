// components/CoursesPage.tsx

import Image from 'next/image'; // Import the Image component from Next.js

// Import images
import course1Image from '../../public/images/course1.png'; // Replace with the correct path to your image
import course2Image from '../..//public/images/course2.png';
import course3Image from '../../public/images/design3.png';

export default function CoursesPage() {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-indigo-900 mb-8">Our Courses</h2>
          <p className="text-lg text-gray-700 mb-12">
            Discover a variety of courses to help you build your skills and advance your career.
          </p>
  
          {/* Course Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={course1Image} // Use the imported image
                alt="Course 1"
                className="w-full h-48 object-cover"
                width={400}
                height={200}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-indigo-900">Computer Science Essentials</h3>
                <p className="text-gray-600 mt-2">A complete beginner's guide to computer science and programming.</p>
                <a
                  href="/courses/computer-science"
                  className="inline-block mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300"
                >
                  Learn More 
                </a>
              </div>
            </div>
            
            {/* Course 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={course2Image} // Use the imported image
                alt="Course 2"
                className="w-full h-48 object-cover"
                width={400}
                height={200}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-indigo-900">Web Development Bootcamp</h3>
                <p className="text-gray-600 mt-2">Master web development with a focus on front-end and back-end technologies.</p>
                <a
                  href="/courses/web-development"
                  className="inline-block mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
  
            {/* Course 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={course3Image} // Use the imported image
                alt="Course 3"
                className="w-full h-48 object-cover"
                width={400}
                height={200}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-indigo-900">Digital Marketing Mastery</h3>
                <p className="text-gray-600 mt-2">Learn everything you need to know about digital marketing strategies and tools.</p>
                <a
                  href="/courses/digital-marketing"
                  className="inline-block mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
