import React from "react";

const RegistrationCard = ({ registration, onStatusChange }) => {
  const {
    _id, 
    fullname,
    email,
    phone,
    role,
    motivation,
    createdAt,
    age,
    availability,
    resumeURL,
    status,
  } = registration;

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">{fullname}</h2>
          <span
            className={`px-3 py-1 text-sm font-medium rounded-full ${
              status === "Accepted"
                ? "bg-green-100 text-green-700"
                : status === "Rejected"
                ? "bg-red-100 text-red-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {status}
          </span>
        </div>

        <p className="text-sm text-gray-500 mt-1">{email}</p>
        <p className="text-sm text-gray-500">{phone}</p>

        <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
          <p><span className="font-medium">Role:</span> {role}</p>
          <p><span className="font-medium">Age:</span> {age}</p>
          <p><span className="font-medium">Availability:</span> {availability}</p>
          <p><span className="font-medium">Applied On:</span> {new Date(createdAt).toLocaleDateString()}</p>
        </div>

        <div className="mt-4">
          <p className="font-medium text-gray-800">Motivation to join:</p>
          <p className="text-gray-600 text-sm mt-1">{motivation}</p>
        </div>

        {resumeURL && (
          <div className="mt-4">
            <a
              href={`http://localhost:5000/uploads/${resumeURL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              View Resume
            </a>
          </div>
        )}

        {/* Status Change Buttons */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={() => {
                alert("This is a future functionality")
                onStatusChange(_id, "Accepted")
            }}
            className="px-4 py-2 text-sm font-medium text-white bg-green-500 hover:bg-green-600 rounded-lg"
          >
            Accept
          </button>
          <button
            onClick={() => {
                alert("This is a future functionality")
                onStatusChange(_id, "Rejected")
            }}
            className="px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationCard;
