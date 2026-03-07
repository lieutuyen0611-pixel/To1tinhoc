import React, { useState } from "react";

const testimonials = [
  { name: "Alice", role: "CEO", text: "Amazing product, boosted our growth!", avatar: "/assets/avatar1.png" },
  { name: "Bob", role: "CTO", text: "Secure and reliable SaaS solution.", avatar: "/assets/avatar2.png" },
  { name: "Charlie", role: "Manager", text: "Great UX and performance.", avatar: "/assets/avatar3.png" },
];

export default function Testimonials() {
  const [index, set
