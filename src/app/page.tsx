// 'use client'; // Add this line to indicate that this is a Client Component

// import { useEffect, useState } from 'react';
// import fetchData from '@/api/apiService'; // Import the fetchData function

// type MyDataType = {
//   id: number;
//   name: string;
//   // Add other fields as needed
// };

// const Home: React.FC = () => {
//   const [data, setData] = useState<MyDataType[] | null>(null);

//   useEffect(() => {
//     const fetchSlotsData = async () => {
//       try {
//         const result = await fetchData('/slots');
//         setData(result);
//       } catch (error) {
//         console.error('Failed to fetch data:', error);
//       }
//     };

//     fetchSlotsData();
//   }, []);

//   if (!data) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>Data from API</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

// export default Home;
'use client';

import { useState } from 'react';
import postData from '@/api/apiService'; // Import the postData function

type BookingRequestDto = {
  tableName: string;
  date: string;
  time: string;
  firstname: string;
  lastname: string;
  phonenumber: string;
  email: string;
};

const Home: React.FC = () => {
  const [formData, setFormData] = useState<BookingRequestDto>({
    tableName: '',
    date: '',
    time: '',
    firstname: '',
    lastname: '',
    phonenumber: '',
    email: '',
  });

  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await postData('/schedule', formData);
      setResponseMessage(response);
    } catch (error) {
      setResponseMessage('Failed to book the time slot. Please try again.');
    }
  };

  return (
    <div>
      <h1>Book a Time Slot</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="tableName"
          placeholder="Table Name"
          value={formData.tableName}
          onChange={handleChange}
          required
          color='black'
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          color='black'
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          color='black'

        />
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          value={formData.firstname}
          onChange={handleChange}
          required
          color='black'

        />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={formData.lastname}
          onChange={handleChange}
          required
          color='black'

        />
        <input
          type="tel"
          name="phonenumber"
          placeholder="Phone Number"
          value={formData.phonenumber}
          onChange={handleChange}
          required
          color='black'

        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          color='black'

        />
        <button type="submit">Book Slot</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default Home;
