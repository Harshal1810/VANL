"use client";

import { useSelection } from "../context/SelectionContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DatePage() {
  const { setSelectedDate } = useSelection();
  const [date, setDate] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) {
      alert("Please select a date, cutie! 💖");
      return;
    }else{
        setSelectedDate(date);
    }
    router.push("/food"); // Navigate to food selection page
  };

  return (
    <div className="container">
      
      <section>
        <h1 className="text-4xl font-bold text-white drop-shadow-lg" title="Choose a date">
          On which day are you free?
        </h1>
          <h2 id="yay3">(Select a date, cutieee... 💖)  </h2>
          
          <input
            type="date"
            className="p-3 w-60 text-center bg-white rounded-lg border-2 border-[#29171de3] text-[#171e29e3] shadow-md focus:outline-none focus:ring-4 focus:ring-[#29171de3]"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button
            onClick={handleSubmit} className="yes-button button-base button-green"
          >
            💌 Submit
          </button>
        
        </section>
     
    </div>
  );
}
