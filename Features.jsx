import React from "react";

const features = [
  { icon: "⚡", title: "Fast", desc: "Optimized performance and speed." },
  { icon: "🔒", title: "Secure", desc: "Top-notch security standards." },
  { icon: "📱", title: "Responsive", desc: "Works on all devices." },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {features.map((f) => (
          <div key={f.title} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
