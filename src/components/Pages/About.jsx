import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 border-b pb-2 text-cyan-700">
          About Us
        </h1>

        <p className="text-lg mb-6 leading-relaxed text-gray-700">
          We are a dedicated group of individuals working to bridge the gap between opportunity and need through the power of education. Our NGO strives to provide access to learning and personal development to children in underserved communities.
        </p>

        <p className="text-lg mb-6 leading-relaxed text-gray-700">
          From organizing street schools and mentorship programs to offering internships and volunteering roles, we believe every small contribution creates lasting change. With transparency, passion, and dedication, we aim to empower the next generation.
        </p>

        <p className="text-lg mb-6 leading-relaxed text-gray-700">
          Whether you're a student, professional, or just someone who cares deeply — we welcome you to be a part of our journey. Together, we can build a future where education is a right, not a privilege.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-700">Why Choose Us?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Grassroots approach to reach the most in-need communities</li>
            <li>100% volunteer-led initiatives with transparent impact</li>
            <li>Flexible opportunities for interns and supporters</li>
            <li>Ongoing mentorship and support for volunteers</li>
          </ul>
        </div>

        <div className="mt-10 text-center">
          <img
            src="https://rajfoundation.co.in/wp-content/uploads/2021/03/40d011b4-d0f1-427d-be78-5d88c863e1a3.jpg"
            alt="About our NGO"
            className="rounded-lg shadow-md w-full max-w-lg mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
