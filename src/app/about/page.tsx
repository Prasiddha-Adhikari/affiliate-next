// components/AboutUsPage.tsx

export default function AboutUsPage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-900 mb-8">About Us</h2>
        <p className="text-lg text-gray-700 mb-12">
          We are a team of passionate professionals dedicated to helping you unlock your potential with online courses.
          Our goal is to provide high-quality education to learners worldwide.
        </p>

        <div className="text-left">
          <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Our Mission</h3>
          <p className="text-lg text-gray-600 mb-8">
            Our mission is to make online learning accessible to everyone, offering courses in programming, design, and
            digital marketing to help you achieve your goals.
          </p>

          <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Our Values</h3>
          <ul className="list-disc list-inside text-lg text-gray-600">
            <li>High-quality education</li>
            <li>Accessible learning for everyone</li>
            <li>Commitment to student success</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
