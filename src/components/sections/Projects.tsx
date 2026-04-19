"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function Projects() {
  const projects = [
    {
      title: "Spring Boot Backend Services",
      description: "Developed robust backend services with Spring Boot. Built RESTful APIs for CRUD operations and integrated JWT-based authentication. Utilized Spring Data JPA for PostgreSQL and MySQL interactions.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      tags: ["Java", "Spring Boot", "JWT", "MySQL", "PostgreSQL"],
      github: "https://github.com/Arasu-j",
      demo: "https://github.com/Arasu-j"
    },
    {
      title: "VISAI 2024 Project",
      description: "Participated in the 14th International Project Competition organized by Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science & Technology, showcasing innovative technical solutions.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
      tags: ["Presentation", "Innovation", "Development"],
      github: "https://github.com/Arasu-j",
      demo: "https://veltech.edu.in/visai/"
    },
    {
      title: "Technical Certifications",
      description: "Demonstrated strong foundational knowledge by achieving Java and C certifications on HackerRank, along with a RedHat Linux certification.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
      tags: ["Java", "C", "Linux", "HackerRank"],
      github: "https://hackerrank.com",
      demo: "https://hackerrank.com"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-white border-t border-royal/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-royal-dark">
            Featured <span className="text-gold">Projects & Milestones</span>
          </h2>
          <p className="text-royal/70 max-w-2xl mx-auto text-lg">
            Some of my recent work, participations, and certifications that showcase my technical skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border-2 border-royal/10 shadow-sm hover:border-gold hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-royal-dark/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-royal-dark mb-2">{project.title}</h3>
                <p className="text-royal/80 mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-royal/10 text-royal text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
