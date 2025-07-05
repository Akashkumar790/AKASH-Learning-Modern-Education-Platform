import React from 'react';

const features = [
  {
    title: "Industry-Relevant Curriculum",
    description: "Our content is built in collaboration with industry experts to ensure students learn what's in demand.",
    image: "https://img.freepik.com/free-vector/online-certification-illustration_23-2148573639.jpg",
  },
  {
    title: "Project-Based Learning",
    description: "Students apply concepts through real-world projects that simulate actual job experiences.",
    image: "https://img.freepik.com/free-vector/project-management-concept-illustration_114360-1880.jpg",
  },
  {
    title: "Expert Mentorship",
    description: "We connect learners with mentors who have real-world experience across various industries.",
    image: "https://img.freepik.com/free-vector/online-tutor-concept-illustration_114360-1435.jpg",
  },
  {
    title: "Interactive Learning",
    description: "Our platform includes quizzes, coding challenges, and gamified experiences to boost engagement.",
    image: "https://img.freepik.com/free-vector/online-test-concept-illustration_114360-4816.jpg",
  },
  {
    title: "Flexible Schedules",
    description: "We offer self-paced learning so students can balance their education with other responsibilities.",
    image: "https://img.freepik.com/free-vector/time-management-concept-landing-page_52683-24967.jpg",
  },
  {
    title: "Community Support",
    description: "Learners get access to discussion forums, peer support groups, and live sessions.",
    image: "https://img.freepik.com/free-vector/team-discussion-concept-illustration_114360-6866.jpg",
  },
  {
    title: "Career Guidance",
    description: "We help learners with resume building, mock interviews, and career counseling.",
    image: "https://img.freepik.com/free-vector/job-hunt-concept-illustration_114360-4762.jpg",
  },
  {
    title: "Inclusive & Affordable",
    description: "Our mission is to make quality education accessible to everyone, everywhere.",
    image: "https://img.freepik.com/free-vector/equality-concept-illustration_114360-5034.jpg",
  },
];

export default function Home() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Vision for <span className="text-orange-600">Modern Learning</span>
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-16">
          At <span className="font-semibold text-gray-800">AKASH Learning</span>, our mission is to empower the next generation of learners with modern tools,
          expert mentorship, and real-world knowledge to help them thrive in a rapidly changing world.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
