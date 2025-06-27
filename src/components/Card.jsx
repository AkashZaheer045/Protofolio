import React from "react";

const Card = ({ imageUrl, altText, title, description, explore }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col h-full transition-transform hover:scale-105">
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={altText}
        loading="lazy"
      />
      <div className="p-6 flex flex-col flex-1">
        <h1 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">
          {title}
        </h1>
        <p className="text-gray-700 dark:text-gray-200 flex-1 mb-4">
          {description}
        </p>
        <button
          className="mt-auto px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition font-semibold flex items-center gap-2"
          onClick={() => window.open(explore, "_blank")}
        >
          Explore <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
