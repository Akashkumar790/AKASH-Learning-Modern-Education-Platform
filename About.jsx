
import React from 'react';

function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-gray-700">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="https://www.shutterstock.com/image-photo/asian-teenager-students-doing-robot-600nw-2221748207.jpg"
              alt="Students collaborating on robotics"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Shaping the Future of Learning
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              At <span className="text-orange-700 font-semibold">AKASH Learning</span>, we believe education should be engaging, accessible, and future-focused. 
              Our mission is to empower students with real-world skills through interactive and practical learning experiences — not just theory.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Whether it's mastering coding, data analysis, or creative problem-solving, our platform is designed to nurture curiosity, build confidence, and prepare learners for careers that matter.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              With dedicated mentors, cutting-edge content, and a vibrant learning community, we’re not just teaching — we’re building the next generation of thinkers, builders, and leaders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
