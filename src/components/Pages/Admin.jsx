import React, { useState, useEffect } from 'react';
import Button from '../Button';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { addRegistration } from '../../features/registrationSlice';
import RegistrationCard from '../Cards/Registrationcard';

function Admin() {
  const [filter, setFilter] = useState('All');
  const dispatch = useDispatch();

  const reduxData = useSelector((state) => state.registration?.registrations);
  const allData = reduxData || JSON.parse(localStorage.getItem('allData')) || [];

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const fetchRegistrations = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getAllRegistrations");
      if (response.data) {
        dispatch(addRegistration({ data: response.data }));
        localStorage.setItem("allData", JSON.stringify(response.data));
      }
    } catch (error) {
      console.log("Error getting all registrations:", error);
    }
  };

  useEffect(() => {
    fetchRegistrations();
  }, [dispatch]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await axios.put(`http://localhost:5000/updateStatus/${id}`, { status: newStatus });
      if (res.status === 200) {
        await fetchRegistrations(); 
      }
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  const filteredData = filter === 'All'
    ? allData
    : allData.filter((item) => item.status === filter);

  return (
    <div className='min-h-screen w-full px-10 py-6 flex flex-col'>
      <div className='w-full h-auto min-h-[50px] bg-gray-600 rounded-xl flex flex-wrap items-center gap-4 p-4'>
        <h2 className='font-semibold text-white'>Registration Applications:</h2>
        {['All', 'Pending', 'Accepted', 'Rejected'].map((status) => (
          <Button
            key={status}
            children={status}
            bgColor={filter === status ? 'bg-blue-400' : 'bg-gray-400'}
            onClick={() => handleFilterChange(status)}
          />
        ))}
        <h2 className='text-white' >(Note: The Admin Route is not protected because it's a Demo Website)</h2>
      </div>

      <div className='mt-6 space-y-4 flex flex-wrap'>
        {filteredData.length === 0 ? (
          <p className='text-gray-500'>No applications found.</p>
        ) : (
          filteredData.map((registration) => (
            <RegistrationCard
              key={registration._id}
              registration={registration}
              onStatusChange={handleStatusChange} 
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Admin;
