import axios from 'axios';

// Define the component
export default async function Home() {
  // Fetch data from the backend during server-side rendering (SSR)
  const res = await axios.get('http://localhost:3000/api'); // Replace with your backend URL
  const { message } = await res.data;

  return (
      <div>
        <h1>{message}</h1>
      </div>
  );
}