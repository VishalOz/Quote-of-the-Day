import React from 'react'
import { useState } from 'react'

const App = () => {
  const [quote, setQuote] = useState();
  const [loading, setLoading] = useState(flase);

  const fetchQuote = async = () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/quote");
      const data = await res.json();
      setQuote(data.quote);
    }catch(err) {
      setQuote("⚠️ Failed to fetch quote.");
      console.error(err);
    }finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center h-[100vh] bg-blue-900">
      <div className="w-[600px] h-[500px] bg-gray-300 rounded-md shadow-lg p-5">
        <div className="bg-white w-[560px] h-[350px] p-3 rounded-lg mb-10">
        </div>
        <div className="flex justify-center">
          <button className="bg-green-500 hover:bg-green-700 cursor-pointer active:bg-purple-900 font-bold text-white shadow-lg p-3 rounded">Generate</button>
        </div>
      </div>
    </div>
  )
}

export default App