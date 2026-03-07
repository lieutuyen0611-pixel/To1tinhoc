import React from "react";

export default function Hero() {
  return (
    <section id="home" className="h-screen flex items-center justify-between px-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold mb-4">Build Your Future</h1>
        <p className="mb-6">Modern SaaS solutions for startups and enterprises.</p>
        <div className="space-x-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow hover:bg-gray-200">Get Started</button>
          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600">Learn More</button>
        </div>
      </div>
      <img src="/assets/hero.png" alt="Hero Illustration" className="hidden md:block w-1/2 animate-fadeIn" />
    </section>
  );
}
