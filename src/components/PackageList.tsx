import Image from 'next/image';

// Import images
import package1Image from '../public/images/course1.png';
import package2Image from '../public/images/course2.png';
import package3Image from '../public/images/design3.png';

export default function PackageList() {
  const packages = [
    {
      title: 'Computer Science Essentials',
      description: 'Beginner-friendly guide to computer science and programming.',
      price: 'NPR 5,000',
      image: package1Image,
      link: '/courses/computer-science',
    },
    {
      title: 'Web Development Bootcamp',
      description: 'Learn full-stack development with real-world projects.',
      price: 'NPR 8,500',
      image: package2Image,
      link: '/courses/web-development',
    },
    {
      title: 'Digital Marketing Mastery',
      description: 'Master online marketing tools and strategies.',
      price: 'NPR 6,000',
      image: package3Image,
      link: '/courses/digital-marketing',
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-indigo-900 text-center mb-8">Our Best Packages</h2>
        <p className="text-md text-gray-700 text-center mb-10">
          Build your future with our expertly designed learning paths.
        </p>

        {/* Grid: 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col sm:flex-row"
            >
              {/* Image on Left */}
              <div className="sm:w-1/3">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  className="object-cover w-full h-full"
                  width={300}
                  height={200}
                />
              </div>

              {/* Details on Right */}
              <div className="p-4 sm:w-2/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-indigo-900">{pkg.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{pkg.description}</p>
                  <p className="text-indigo-700 font-medium mt-2">{pkg.price}</p>
                </div>
                <a
                  href={pkg.link}
                  className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700 w-fit"
                >
                  BUY
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
