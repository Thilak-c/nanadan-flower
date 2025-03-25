// app/page.js
"use client";

import { useRef } from "react";

export default function Home() {
  // Create a reference to the target section
  const targetRef = useRef(null);

  const handleScroll = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">Welcome to the Scroll Demo</h1>
        <p className="mt-4 text-lg">Click the button below to scroll down</p>
        <button
          onClick={handleScroll}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
        >
          Scroll Down
        </button>
      </div>

      {/* Target Section */}
      <div
        ref={targetRef}
        className="h-screen flex flex-col justify-center items-center bg-gray-100"
      >
        <h2 className="text-3xl font-bold text-gray-800">
          You've reached the target section!
        </h2>
        <p className="mt-4 text-lg text-gray-600">Thanks for scrolling!</p>
      </div>
    </div>
  );
}
