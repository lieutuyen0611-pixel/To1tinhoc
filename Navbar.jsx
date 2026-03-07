import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-600">Startup</h1>
        <div className="hidden md:flex space-x-6">
          {["Home", "Features", "About", "Services", "Testimonials", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:underline">
              {item}
            </a>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-gray-100 p-4 space-y-2">
          {["Home", "Features", "About", "Services", "Testimonials", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block hover:underline">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
