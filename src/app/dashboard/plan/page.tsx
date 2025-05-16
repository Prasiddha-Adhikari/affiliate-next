'use client';

interface CoursePlan {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: string;
  isPurchased: boolean;
}

const coursePlans: CoursePlan[] = [
  {
    id: 1,
    title: 'Basic Programming',
    description: 'Perfect for beginners to get started with programming fundamentals.',
    price: 1999,
    duration: '1 Month',
    isPurchased: false,
  },
  {
    id: 2,
    title: 'Full Stack Web Development',
    description: 'Master front-end and back-end technologies in one go.',
    price: 7999,
    duration: '3 Months',
    isPurchased: true,
  },
  {
    id: 3,
    title: 'Digital Marketing Mastery',
    description: 'Learn SEO, Social Media, Email Marketing and more.',
    price: 4999,
    duration: '2 Months',
    isPurchased: false,
  },
];

export default function PlanPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-indigo-700 mb-10">Available Plans</h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {coursePlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white shadow-md rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{plan.title}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>

              <div className="mb-4 text-sm text-gray-500">
                <span className="font-medium text-gray-700">Duration:</span> {plan.duration}
              </div>

              <div className="mb-4 text-xl font-bold text-green-600">Rs. {plan.price}</div>

              {plan.isPurchased ? (
                <button
                  disabled
                  className="w-full bg-green-100 text-green-700 py-2 px-4 rounded-lg font-medium cursor-not-allowed"
                >
                  Already Purchased
                </button>
              ) : (
                <button
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium transition"
                >
                  Buy Now
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
