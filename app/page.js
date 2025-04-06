"use client";

import React from "react";
import {useState} from "react"


const Hero = () => {

  const [image,setImage] = useState(null)
  const [date,setDate] = useState("")

  const fetchApod = async (selectedData)=>{
    const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY || 'w4G9H0TlKEhChLbQmq9n2jCgxkWq5CS5VBb3yLKm'
    console.log(apiKey);
    
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${selectedData}`

    const feedback= await fetch(url)
    const data = await feedback.json()
    setImage(data)
  }


  const handleDataChange= (e) =>{
      const newDate = e.target.value
      setDate(newDate)
      fetchApod(newDate)
  }

  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white">
        <div className=" flex items-center justify-center flex-col pt-[70px]">
          <h1 className="text-4xl font-bold text-purple-500 flex ">
            Щоденний космос
          </h1>
          <p>
            Відкрийте для себе красу Всесвіту з щоденними зображеннями від NASA
          </p>
        </div>
        <div className="max-w-[800px] mx-auto pt-[70px] flex flex-col items-center">
          <img src={image?.url} alt="Зображення космосу"/>
          <p className="pt-[20px]">{image?.explanation}</p>
          <button className=" mt-[20px] border-gray-300 hover:border  bg-blue-700 p-3 rounded-lg">
            <input type="date"  onChange={handleDataChange}></input>
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
