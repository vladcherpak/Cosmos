"use client";

import React from "react";

const IntroSection = ({ handleShowSection }) => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white flex items-center justify-center">
      <div className="flex items-center justify-center flex-col pt-[40px] sm:pt-[60px] md:pt-[70px]">
        <p className="text-sm px-[70px] sm:text-base md:text-lg mt-2 sm:mt-3 md:mt-4">
          Одним із найпопулярніших веб-сайтів NASA є Astronomy Picture of the
          Day. Фактично, цей веб-сайт є одним із найпопулярніших веб-сайтів у
          всіх федеральних агентствах. Це популярне відео Джастіна Бібера. Ця
          кінцева точка структурує зображення APOD і пов’язані метадані, щоб
          їх можна було використовувати для інших програм. Крім того, якщо
          concept_tags для параметра встановлено значення True, повертаються
          ключові слова, отримані з пояснення зображення. Ці ключові слова
          можна використовувати як автоматично згенеровані хештеги для каналів
          Twitter або Instagram; але загалом допомагають знайти релевантні
          зображення.
        </p>
        <button
          onClick={handleShowSection}
          className="mt-[10px] sm:mt-[15px] md:mt-[20px] border-gray-300 hover:border bg-blue-700 p-2 sm:p-3 rounded-lg"
        >
          Далі
        </button>
      </div>
    </section>
  );
};

export default IntroSection;