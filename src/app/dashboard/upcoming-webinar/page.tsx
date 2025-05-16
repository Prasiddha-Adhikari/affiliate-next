'use client';

export default function WebinarPage() {
  const upcomingWebinars = [
    {
      id: 1,
      title: 'Maximizing Affiliate Earnings in 2025',
      date: '2025-05-20',
      time: '4:00 PM - 5:00 PM',
      description:
        'Join this live session to learn strategies and tools that help increase your affiliate earnings.',
    },
    {
      id: 2,
      title: 'Building Your Brand as an Affiliate',
      date: '2025-06-01',
      time: '6:00 PM - 7:00 PM',
      description:
        'Discover how to build trust and grow your audience to boost conversions.',
    },
  ];

  const pastWebinars = [
    {
      id: 1,
      title: 'Introduction to the Affiliate Program',
      date: '2025-04-10',
      time: '3:00 PM - 4:00 PM',
      recording: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      id: 2,
      title: 'Social Media Tactics for Affiliates',
      date: '2025-03-25',
      time: '2:00 PM - 3:00 PM',
      recording: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
  ];

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Upcoming Webinars */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-10">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">Upcoming Webinars</h2>
          <div className="space-y-6">
            {upcomingWebinars.map((webinar) => (
              <div
                key={webinar.id}
                className="bg-indigo-50 rounded-xl p-5 hover:bg-indigo-100 transition"
              >
                <h3 className="text-xl font-semibold text-indigo-800">{webinar.title}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  📅 <strong>Date:</strong> {webinar.date} | 🕒 <strong>Time:</strong> {webinar.time}
                </p>
                <p className="mt-2 text-gray-700">{webinar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Past Webinars */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-6">Conducted Webinars</h2>
          <div className="space-y-4">
            {pastWebinars.map((webinar) => (
              <div
                key={webinar.id}
                className="flex flex-col md:flex-row md:items-center md:justify-between bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition"
              >
                <div>
                  <h4 className="font-semibold text-gray-800">{webinar.title}</h4>
                  <p className="text-sm text-gray-600">
                    📅 {webinar.date} | 🕒 {webinar.time}
                  </p>
                </div>
                <a
                  href={webinar.recording}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 md:mt-0 inline-block bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition"
                >
                  Watch Recording
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
