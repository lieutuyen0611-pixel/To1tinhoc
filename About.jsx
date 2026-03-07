import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 flex flex-col md:flex-row items-center max-w-6xl mx-auto px-6">
      <img src="/assets/about.png" alt="About" className="w-1/2 rounded-xl shadow-lg" />
      <div className="md:ml-10 mt-6 md:mt-0">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p>We are a tech startup delivering cutting-edge SaaS solutions with a focus on design, performance, and scalability.</p>
      </div>
    </section>
  );
}
