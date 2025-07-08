import React from 'react'
import { useState } from 'react'

const App = () => {
  const [quote, setQuote] = useState();
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("☀️");

  const fetchQuote = async() => {
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
  const changeTheme = () => {
    setTheme(prevTheme => prevTheme === "☀️" ? "🌙" : "☀️");
  };

 
  return (
    <div className={`flex justify-center items-center h-[100vh] ${theme === "☀️" ? "bg-yellow-200" : "bg-black"}`}>
      <div>
        <button  onClick={changeTheme} className={`p-3 font-bold rounded-full cursor-pointer absolute top-[10%] left-[90%] ${theme==="☀️" ? "bg-yellow-200" : "bg-black text-white" }`}>{theme}</button>
      </div>
      <div className={`w-[600px] h-[500px] rounded-md shadow-lg p-5 ${theme === "☀️" ? "bg-yellow-400" : "bg-blue-900"}`}>
        <div className={`w-[560px] h-[350px] p-3 rounded-lg mb-10 flex justify-center items:center ${theme === "☀️" ? "bg-white text-black" : "bg-black text-white"}`}>
          {loading ? (
            <p className={`text-xl ${theme === "☀️" ? "text-gray-900" : "text-white"}`}>Loading...</p>
          ) : (
            <p className={`text-xl text-center font-bold ${theme === "☀️" ? "text-gray-900" : "text-white"}`}>{quote || "Click Generate to get a quote!"}</p>
          )}
        </div>
        <div className="flex justify-center">
          <button onClick={fetchQuote} className={`bg-green-500 hover:bg-green-700 cursor-pointer active:bg-purple-900 font-bold text-white shadow-lg p-3 rounded`}>Generate</button>
        </div>
      </div>
    </div>
  )
}

export default App