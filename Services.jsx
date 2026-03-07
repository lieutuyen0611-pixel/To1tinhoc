import React from "react";

const services = [
  { img: "/assets/service1.png", title: "Web Development", desc: "Modern responsive websites." },
  { img: "/assets/service2.png", title: "Mobile Apps", desc: "Cross-platform mobile solutions." },
  { img: "/assets/service3.png", title: "Cloud Solutions", desc: "Scalable cloud infrastructure." },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div key={s.title} className="bg-white rounded-xl shadow hover:scale-105 hover:shadow-lg transition p-6">
            <img src={s.img} alt={s.title} className="rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">{s.title}</h3>
            <p>{s.desc}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">View More</button>
          </div>
        ))}
      </div>
    </section>
  );
}
