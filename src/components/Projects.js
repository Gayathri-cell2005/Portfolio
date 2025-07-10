import React from 'react';

// Import images from src/assets
import ecommerceImg from '../assets/e-commerce website.jpg';
import canvaImg from '../assets/canva product design.jpg';
import portfolioImg from '../assets/portfolio website.jpg';
import excelImg from '../assets/excel sales dashboard.jpg';
import powerbiImg from '../assets/power bi dashboard.jpg';

const projects = [
  {
    title: 'Furniture E-commerce Website',
    description: 'Furniture website built using Flutter.',
    image: ecommerceImg,
    demo: 'https://your-live-demo-link.com/ecommerce',
    github: 'https://github.com/yourname/ecommerce-project',
  },
  {
    title: 'Face Cream Design',
    description: 'Canva-based design for a cosmetic product.',
    image: canvaImg,
    demo: 'https://your-live-demo-link.com/cream',
    github: 'https://github.com/yourname/cream-design',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built using React JS and Tailwind CSS.',
    image: portfolioImg,
    demo: 'https://your-live-demo-link.com/portfolio',
    github: 'https://github.com/yourname/portfolio',
  },
  {
    title: 'Excel Sales Dashboard',
    description: 'Dashboard created using Excel to analyze sales data.',
    image: excelImg,
    demo: 'https://your-live-demo-link.com/portfolio',
    github: 'https://github.com/yourname/portfolio',
  },
  {
    title: 'Power BI Dashboard',
    description: 'Interactive business analytics dashboard using Power BI.',
    image: powerbiImg,
    demo: 'https://your-live-demo-link.com/portfolio',
    github: 'https://github.com/yourname/portfolio',
  },
];

export default function Projects() {
  return (
    <section className="bg-primary px-5 py-20 min-h-screen text-white" id="projects">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold underline">Projects</h1>
        <p className="text-lg mt-2">
          Explore the projects that helped me grow as a developer. Each project is a blend of creativity, code, and continuous learning.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg text-black transform hover:scale-105 transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-900"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}