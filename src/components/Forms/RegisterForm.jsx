import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../Input';
import Button from '../Button';
import Select from '../Select';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function RegisterForm({setFormVisible , setRefresh}) {
  const navigate = useNavigate();
  const { register, handleSubmit, reset,setValue } = useForm();

  const submit = async (data) => {
    try {
        console.log(data);
      const res = await axios.post("http://localhost:5000/addRegistration", data,{ headers: {
        "Content-Type": "multipart/form-data"
      }});
      setRefresh(prev=> !prev);
      reset();
      alert("Your application is submitted");
      setFormVisible(false);
    } catch (error) {
      console.error("Error while submitting form:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 sm:p-10 bg-white rounded-3xl shadow-xl mt-10 border-none">
      <h2 className="text-3xl font-bold mb-8 text-center text-cyan-700 tracking-tight">Join Us – Register</h2>

      <form onSubmit={handleSubmit(submit)} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input label="Full Name" {...register("fullname", { required: true })} />
        <Input label="Email" type="email" {...register("email", { required: true })} />
        <Input label="Phone" type="tel" {...register("phone", { required: true })} />
        <Input label="Age" type="number" {...register("age", { required: true })} />

        <Select label="Role" options={["intern", "volunteer"]} {...register("role", { required: true })} />
        <Select label="Availability" options={["Part-time", "Full-time"]} {...register("availability", { required: true })} />

        <div className="sm:col-span-2">
          <label className="block text-gray-700 font-medium mb-1">Upload Resume (PDF)</label>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setValue("resumeURL", e.target.files[0])}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
          />
        </div>

        <div className="sm:col-span-2">
          <Input label="Why do you want to join us" type="text" {...register("motivation", { required: true })} />
        </div>

        <div className="sm:col-span-2">
          <Button
            type="submit"
            bgColor="bg-cyan-700"
            className="w-full py-3 text-lg hover:bg-cyan-800 transition rounded-xl"
          >
            Submit Application
          </Button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
