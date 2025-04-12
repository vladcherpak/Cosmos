"use client";

import React, { useState, useEffect } from "react";

const Hero = () => {
  const today = new Date().toISOString().split("T")[0];

  const [showSection, setShowSection] = useState(false);

  const [image, setImage] = useState(null);
  const [date, setDate] = useState("");

  const fetchApod = async (selectedData) => {
    const apiKey =
      process.env.NEXT_PUBLIC_NASA_API_KEY ||
      "w4G9H0TlKEhChLbQmq9n2jCgxkWq5CS5VBb3yLKm";
    console.log(apiKey);

    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${selectedData}`;

    const feedback = await fetch(url);
    const data = await feedback.json();
    setImage(data);
  };

  const handleShowSection = () => {
    setShowSection(true);
  };

  const handleDataChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    fetchApod(newDate);
  };

  useEffect(() => {
    fetchApod(today);
  }, []);

  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white">
        <div className="flex items-center justify-center flex-col  pt-[40px] sm:pt-[60px] md:pt-[70px]">
          <p className="text-sm px-[70px] sm:text-base md:text-lg mt-2 sm:mt-3 md:mt-4">
            Одним із найпопулярніших веб-сайтів NASA є Astronomy Picture of the
            Day . Фактично, цей веб-сайт є одним із найпопулярніших веб-сайтів у
            всіх федеральних агентствах. Це популярне відео Джастіна Бібера. Ця
            кінцева точка структурує зображення APOD і пов’язані метадані, щоб
            їх можна було використовувати для інших програм. Крім того, якщо
            concept_tagsдля параметра встановлено значення True, повертаються
            ключові слова, отримані з пояснення зображення. Ці ключові слова
            можна використовувати як автоматично згенеровані хештеги для каналів
            Twitter або Instagram; але загалом допомагають знайти релевантні
            зображення.{" "}
          </p>
          <button onClick={handleShowSection} className="mt-[10px] sm:mt-[15px] md:mt-[20px] border-gray-300 hover:border bg-blue-700 p-2 sm:p-3 rounded-lg">
            <a href="#main-section">Далі</a>
          </button>
        </div>
      </section>

      {showSection && (
        <section
          id="main-section"
          className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white"
        >
          <div className="flex items-center justify-center flex-col pt-[40px] sm:pt-[60px] md:pt-[70px]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-500 flex">
              Щоденний космос
            </h1>
            <p className="text-sm sm:text-base md:text-lg mt-2 sm:mt-3 md:mt-4">
              Відкрийте для себе красу Всесвіту з щоденними зображеннями від
              NASA
            </p>
          </div>
          <div className="max-w-[90%] sm:max-w-[600px] md:max-w-[800px] mx-auto pt-[40px] sm:pt-[60px] md:pt-[70px] flex flex-col items-center">
            <img
              src={image?.url}
              alt="Зображення космосу"
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px] h-auto"
            />
            <p className="pt-[10px] sm:pt-[15px] md:pt-[20px] text-sm sm:text-base md:text-lg">
              {image?.explanation}
            </p>
            <button className="mt-[10px] sm:mt-[15px] md:mt-[20px] border-gray-300 hover:border bg-blue-700 p-2 sm:p-3 rounded-lg">
              <input
                min="1995-06-20"
                max={today}
                value={today}
                type="date"
                onChange={handleDataChange}
                className="p-1 sm:p-2 text-xs sm:text-sm md:text-base"
              />
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default Hero;
