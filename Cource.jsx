
// import React, { useState } from 'react';

// const courses = [
//   {
//     id: 1,
//     title: 'Full-Stack Web Development',
//     instructor: 'Akash Kumar',
//     description:
//       'Learn to build web apps using HTML, CSS, JavaScript, React, and Node.js.',
//     price: '₹4,999',
//     image:'https://www.codingbytes.com/wp-content/uploads/2022/03/full-stack-web-development.jpg',
//   },
//   {
//     id: 2,
//     title: 'Data Structures & Algorithms',
//     instructor: 'Akash Kumar',
//     description:
//       'Master core DSA concepts for coding interviews and competitive programming.',
//     price: '₹3,499',
//     image: 'https://www.andromedaloans.com/wp-content/uploads/2024/07/Vital-Functions-of-DSA-Loan-Agents-3.jpg',
//   },
//   {
//     id: 3,
//     title: 'Machine Learning with Python',
//     instructor: 'Akash Kumar',
//     description:
//       'Hands-on ML course covering regression, classification, and model deployment.',
//     price: '₹5,999',
//     image: 'https://f.hubspotusercontent40.net/hubfs/2488049/Machine%20Learning%20Cover%20Image.jpg',
//   },
//   {
//     id: 4,
//     title: 'Power BI for Data Analysis',
//     instructor: 'Akash Kumar',
//     description:
//       'Learn how to visualize and analyze data using Microsoft Power BI with real-time dashboards and reports.',
//     price: '₹3,999',
//     image: 'https://www.atptech.com/wp-content/uploads/photo_powerbi.jpg',
    
//   },
//   {
//     id: 5,
//     title: 'Java Programming Masterclass',
//     instructor: 'Akash Kumar',
//     description:
//       'Comprehensive Java course covering OOP, collections, multithreading, and project building.',
//     price: '₹4,499',
//     image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/0*gtY-llyEbkeoS1Sp.png',
//   },
//   {
//     id: 6,
//     title: 'C++ for Beginners to Advanced',
//     instructor: 'Akash Kumar',
//     description:
//       'Learn C++ from scratch: syntax, OOP, STL, and advanced problem-solving techniques.',
//     price: '₹3,999',
//     image: 'https://media.licdn.com/dms/image/v2/D4D10AQGuRQ3o4f-ahg/image-shrink_800/image-shrink_800/0/1733913616898?e=2147483647&v=beta&t=ntiaZxC7fBIjO0RZCNLYtvzH5e-90I3c37y1btlFMtI',
//   },
// ]

// export default function Course() {
//   const [selectedCourse, setSelectedCourse] = useState(null);

//   return (
//     <div className="bg-white py-12 min-h-screen">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
//           Our Courses
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {courses.map((course) => (
//             <div
//               key={course.id}
//               className="bg-gray-100 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
//             >
//               <img
//                 src={course.image}
//                 alt={course.title}
//                 className="w-full h-52 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-2xl font-semibold text-gray-800">
//                   {course.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 mb-1">
//                   Instructor: {course.instructor}
//                 </p>
//                 <p className="text-gray-700 mt-2 text-base">
//                   {course.description}
//                 </p>
//                 <div className="mt-6 flex justify-between items-center">
//                   <span className="text-orange-600 font-bold text-lg">
//                     {course.price}
//                   </span>
//                   <button
//                     className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition"
//                     onClick={() => setSelectedCourse(course)}
//                   >
//                     Enroll
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedCourse && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg relative">
//             <button
//               className="absolute top-2 right-4 text-xl text-gray-500 hover:text-red-500"
//               onClick={() => setSelectedCourse(null)}
//             >
//               ×
//             </button>
//             <h3 className="text-2xl font-semibold text-gray-800 mb-2">
//               Enroll in: {selectedCourse.title}
//             </h3>
//             <p className="text-gray-700 mb-4">{selectedCourse.description}</p>
//             <p className="text-lg font-bold text-orange-600 mb-6">
//               Price: {selectedCourse.price}
//             </p>
//             <button
//               onClick={() => {
//                 alert('Redirecting to payment gateway...');
//                 setSelectedCourse(null);
//               }}
//               className="bg-green-600 text-white w-full py-2 rounded-md hover:bg-green-700 transition"
//             >
//               Proceed to Payment
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState } from 'react';

const courses = [
  {
    id: 1,
    title: 'Full-Stack Web Development',
    instructor: 'Akash Kumar',
    description:
      'Learn to build web apps using HTML, CSS, JavaScript, React, and Node.js.',
    price: '₹4,999',
    image:'https://www.codingbytes.com/wp-content/uploads/2022/03/full-stack-web-development.jpg',
  },
  {
    id: 2,
    title: 'Data Structures & Algorithms',
    instructor: 'Akash Kumar',
    description:
      'Master core DSA concepts for coding interviews and competitive programming.',
    price: '₹3,499',
    image: 'https://www.andromedaloans.com/wp-content/uploads/2024/07/Vital-Functions-of-DSA-Loan-Agents-3.jpg',
  },
  {
    id: 3,
    title: 'Machine Learning with Python',
    instructor: 'Akash Kumar',
    description:
      'Hands-on ML course covering regression, classification, and model deployment.',
    price: '₹5,999',
    image: 'https://f.hubspotusercontent40.net/hubfs/2488049/Machine%20Learning%20Cover%20Image.jpg',
  },
  {
    id: 4,
    title: 'Power BI for Data Analysis',
    instructor: 'Akash Kumar',
    description:
      'Learn how to visualize and analyze data using Microsoft Power BI with real-time dashboards and reports.',
    price: '₹3,999',
    image: 'https://www.atptech.com/wp-content/uploads/photo_powerbi.jpg',
  },
  {
    id: 5,
    title: 'Java Programming Masterclass',
    instructor: 'Akash Kumar',
    description:
      'Comprehensive Java course covering OOP, collections, multithreading, and project building.',
    price: '₹4,499',
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/0*gtY-llyEbkeoS1Sp.png',
  },
  {
    id: 6,
    title: 'C++ for Beginners to Advanced',
    instructor: 'Akash Kumar',
    description:
      'Learn C++ from scratch: syntax, OOP, STL, and advanced problem-solving techniques.',
    price: '₹3,999',
    image: 'https://media.licdn.com/dms/image/v2/D4D10AQGuRQ3o4f-ahg/image-shrink_800/image-shrink_800/0/1733913616898?e=2147483647&v=beta&t=ntiaZxC7fBIjO0RZCNLYtvzH5e-90I3c37y1btlFMtI',
  },
];

export default function Course() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="bg-white py-12 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-gray-100 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  Instructor: {course.instructor}
                </p>
                <p className="text-gray-700 mt-2 text-base">
                  {course.description}
                </p>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-orange-600 font-bold text-lg">
                    {course.price}
                  </span>
                  <button
                    className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition"
                    onClick={() => setSelectedCourse(course)}
                  >
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg relative">
            <button
              className="absolute top-2 right-4 text-xl text-gray-500 hover:text-red-500"
              onClick={() => setSelectedCourse(null)}
            >
              ×
            </button>

            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Enroll in: {selectedCourse.title}
            </h3>
            <p className="text-gray-700 mb-2">{selectedCourse.description}</p>
            <p className="text-lg font-bold text-orange-600 mb-4">
              Price: {selectedCourse.price}
            </p>

            {/* Fake Payment Form */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/MasterCard_early_1990s_logo.png/1200px-MasterCard_early_1990s_logo.png"
                  alt="MasterCard"
                  className="w-12"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay.svg/2560px-RuPay.svg.png"
                  alt="Rupee"
                  className="w-12"
                />
              </div>
              <input
                type="text"
                placeholder="Cardholder Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="Card Number"
                maxLength={16}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="MM/YY"
                  maxLength={5}
                  className="w-1/2 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="password"
                  placeholder="CVV"
                  maxLength={3}
                  className="w-1/2 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <button
                onClick={() => {
                  alert('✅ Payment simulated successfully! Thank you for enrolling.');
                  setSelectedCourse(null);
                }}
                className="bg-green-600 text-white w-full py-2 rounded-md hover:bg-green-700 transition"
              >
                Pay {selectedCourse.price}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
