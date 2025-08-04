import React, { useState, useEffect } from 'react';
import RegisterForm from '../Forms/RegisterForm';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addRegistration } from '../../features/registrationSlice';

function HomePage() {
  const [formVisible, setFormVisible] = useState(false);
  const [refresh,setRefresh] = useState(true);
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    setFormVisible(true);
  };

  useEffect(()=>{
    const subscription = async ()  =>{
      try {
        const allData = await axios.get("https://ngo-demo-project-2.onrender.com/getAllRegistrations");
        if(allData){
          dispatch(addRegistration({ data: allData.data }));
          localStorage.setItem("allData",JSON.stringify(allData));
        }
      } catch (error) {
        console.log("Error getting all registrations: ",error);
      }
    };
    subscription();
  },[refresh]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {formVisible && (
      <div className='p-4' >
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setFormVisible(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
              title="Close"
            >
              &times;
            </button>
            <RegisterForm setFormVisible={setFormVisible} setRefresh={setRefresh} />
          </div>
        </div>
      </div>
  )}


      {/* Hero Section */}
      <section className="relative bg-cyan-700 text-white py-20 px-6 text-center overflow-hidden">
        <img
          src="https://voiceformenindia.com/wp-content/uploads/2019/09/1-30.jpg"
          alt="Children receiving education"
          className="absolute inset-0 w-full h-full object-cover opacity-70 z-0"
        />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">Empowering Through Education</h1>
          <p className="text-lg max-w-2xl mx-auto">
            We believe that every child deserves access to quality education. Join us in our mission to bring learning
            to underserved communities.
          </p>
          <button
            className="mt-6 bg-white text-cyan-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-200"
            onClick={(e) => {
              e.preventDefault();
              alert('Learn More About us');
            }}
          >
            Learn More About Us
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <img
            src="https://pehchaanstreetschool.org/wp-content/uploads/2021/03/IMG_9463-768x576.jpg"
            alt="Street education"
            className="w-full md:w-1/2 max-w-md rounded-lg shadow-md"
          />
          <p className="max-w-md text-lg text-gray-700">
            We offer free education, life skills, and emotional support to children in marginalized communities. Our
            volunteers are the backbone of this transformation.
          </p>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="bg-cyan-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Join Us in Making a Difference</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <p className="max-w-md text-lg text-gray-700">
            Whether you're a student, professional, or simply someone who cares — there's a place for you with us.
          </p>
          <img
            src="https://ivhq.imgix.net/images/gallery/volunteer-in-india-delhi/teaching-volunteer-india-ivhq.jpg?w=360&h=290&fit=crop&crop=faces,center&auto=format,compress"
            alt="Volunteer teaching children"
            className="w-full md:w-1/2 max-w-md rounded-lg shadow-md"
          />
        </div>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button
            className="bg-cyan-700 text-white px-6 py-2 rounded-full hover:bg-cyan-800"
            onClick={handleForm}
          >
            Apply for Internship / Volunteer
          </button>
          <button
            className="bg-white text-cyan-700 px-6 py-2 border border-cyan-700 rounded-full hover:bg-cyan-200"
            onClick={() => alert('Donate functionality will be added later')}
          >
            Donate Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
