import React from 'react';

export default function Contact() {
  return (
    <div className="relative bg-white py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Panel: Contact Info */}
        <div className="space-y-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Let's Connect with Us
            </h1>
            <p className="text-lg text-gray-600">
              We’re here to help you learn, grow, and connect. Fill out the form to get in touch — whether you're a student, a parent, or a teacher.
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex items-start text-gray-700">
              <svg className="w-6 h-6 text-orange-600 mt-1 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Badi Yusufpur, Hajipur, Bihar – 844101</span>
            </div>

            <div className="flex items-start text-gray-700">
              <svg className="w-6 h-6 text-orange-600 mt-1 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28l1.5 4.5-2.26 1.13a11 11 0 005.52 5.52l1.13-2.26 4.5 1.5V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
              </svg>
              <span>+91 7903527760</span>
            </div>

            <div className="flex items-start text-gray-700">
              <svg className="w-6 h-6 text-orange-600 mt-1 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>akashkumar55@gmail.com</span>
            </div>
          </div>

          {/* Decorative Education Photos */}
          <div className="grid grid-cols-2 gap-4 pt-6">
            <img
              src="data:image/jpeg;base64,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"
              alt="Student using laptop"
              className="rounded-lg shadow-lg object-cover h-36 w-full"
            />
            <img
              src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901789.jpg?semt=ais_hybrid&w=740"
              alt="Online class"
              className="rounded-lg shadow-lg object-cover h-36 w-full"
            />
            <img
              src="https://www.shutterstock.com/image-photo/smiling-indian-teacher-raising-her-600nw-1941888943.jpg"
              alt="Teacher raising hand"
              className="rounded-lg shadow-lg object-cover h-36 w-full"
            />
            <img
              src="https://www.shutterstock.com/image-photo/indian-school-girl-writing-book-600nw-2281001493.jpg"
              alt="Indian student writing in notebook"
              className="rounded-lg shadow-lg object-cover h-36 w-full"
            />
          </div>
        </div>

        {/* Right Panel: Contact Form */}
        <form className="bg-gray-50 p-8 rounded-2xl shadow-xl space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Send us a message</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="tel"
            name="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="text"
            name="qualification"
            placeholder="Student Qualification (e.g. 12th,B.Tech, M.Tech, etc.)"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button
            type="submit"
            className="w-full bg-orange-600 text-white font-bold py-3 px-6 rounded-md hover:bg-orange-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

