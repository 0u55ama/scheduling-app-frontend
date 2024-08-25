'use client'; // Add this line to indicate that this is a Client Component

import { useEffect, useState } from 'react';
import fetchData from '@/api/apiService'; // Import the fetchData function

type MyDataType = {
  id: number;
  name: string;
  // Add other fields as needed
};

const Home: React.FC = () => {
  const [data, setData] = useState<MyDataType[] | null>(null);

  useEffect(() => {
    const fetchSlotsData = async () => {
      try {
        const result = await fetchData('/slots');
        setData(result);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchSlotsData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Data from API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Home;
