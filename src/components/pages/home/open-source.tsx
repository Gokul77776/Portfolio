import { HoverEffect } from "@/components/ui/card-hover";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h1
        className="text-center text-3xl md:text-7xl font-bold font-lora"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        Open Source Projects
      </h1>

      <div  data-aos="fade-down"
        data-aos-delay="200">

      <HoverEffect items={projects} 
      
      />
      </div>
    </div>
  );
}

export const projects = [
  {
    title: "TripLink",
    description:
      "A full-stack travel booking application built with cloudinary, nextjs, MongoDB, and React. Users can browse, book, and manage trips with ease.",
    link: "https://github.com/Gokul77776",
  },
  {
    title: "Portfolio",
    description:
      "A personal portfolio website showcasing my web development projects, skills, and contact information. Built using React, Vite, and Tailwind CSS.",
    link: "https://github.com/Gokul77776",
  },
  {
    title: "Movie_api",
    description:
      "A RESTful API for managing and retrieving movie data. Built with Node.js, Express, and MongoDB with support for CRUD operations.",
    link: "https://github.com/Gokul77776",
  },
  {
    title: "Book_Store",
    description:
      "An online book store web app that allows users to browse, add, and manage book collections. Created using the MERN stack.",
    link: "https://github.com/Gokul77776/",
  },
];
