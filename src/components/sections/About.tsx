"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";

export function About() {
  const programmingLanguages = [
    { name: "Java", level: 90 },
    { name: "C", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 }
  ];

  const frameworks = ["Spring Boot", "React.js", "Tailwind CSS"];
  const databases = ["PostgreSQL", "MySQL"];
  const tools = ["Git", "GitHub", "Postman", "Vercel", "Docker", "Figma", "ChatGPT", "Claude", "Cursor"];

  const timelineDepts = [
    {
      title: "Java Developer Intern",
      org: "Sunware Technologies",
      time: "Feb 2025 - Mar 2025",
      desc: "Optimized database queries and implemented Core Java solutions for backend processing.",
      icon: <Briefcase className="w-5 h-5 text-white" />,
      type: "work"
    },
    {
      title: "Java Developer Intern",
      org: "Icanio Technologies",
      time: "Jul 2024 - Aug 2024",
      desc: "Developed backend services using Java/SpringBoot and collaborated on API integrations.",
      icon: <Briefcase className="w-5 h-5 text-white" />,
      type: "work"
    },
    {
      title: "B.E. Computer Science",
      org: "SCAD College Of Engineering",
      time: "2021 - 2025 | CGPA: 7.5",
      desc: "Comprehensive study in software engineering, algorithms, and full-stack development.",
      icon: <GraduationCap className="w-5 h-5 text-white" />,
      type: "education"
    },
    {
      title: "Higher Secondary",
      org: "Servite Matric Hr. Sec. School",
      time: "2020 - 2021 | 79%",
      desc: "Strong foundation in mathematics and computer sciences.",
      icon: <GraduationCap className="w-5 h-5 text-white" />,
      type: "education"
    },
    {
      title: "Secondary School",
      org: "Servite Matric Hr. Sec. School",
      time: "2018 - 2019 | 73%",
      desc: "Foundational SSLC education with top quartile scores.",
      icon: <GraduationCap className="w-5 h-5 text-white" />,
      type: "education"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white border-t border-royal/10 overflow-hidden relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-royal-dark">
            About <span className="text-gold">Me</span>
          </h2>
          <p className="text-royal/70 max-w-2xl mx-auto text-lg">
            A deep dive into my professional journey and technical proficiencies.
          </p>
        </motion.div>

        {/* Top block: Technical Proficiency */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-slate-50 border border-royal/10 rounded-xl shadow-sm text-gold">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-royal-dark">Technical Proficiency</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Left side: Programming Languages (Bar Charts) */}
            <div className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-royal/10 h-full">
              <h4 className="font-bold text-royal mb-6 border-b border-royal/10 pb-2">Programming Languages</h4>
              <div className="space-y-6">
                {programmingLanguages.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-bold text-royal-dark">{skill.name}</span>
                      <span className="text-sm font-bold text-royal">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white rounded-full h-3 overflow-hidden border border-royal/5 shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1.2, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-royal to-royal-dark rounded-full relative"
                      >
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/30"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Premium Animated Badges */}
            <div className="flex flex-col gap-6">
               <div className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-royal/10 flex-1">
                 <h4 className="font-bold text-royal mb-6 border-b border-royal/10 pb-2">Libraries & Frameworks</h4>
                 <div className="flex flex-wrap gap-3">
                   {frameworks.map((fw, idx) => (
                     <motion.div 
                       key={idx} 
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.3 + (idx * 0.1), type: "spring", damping: 12 }}
                       whileHover={{ scale: 1.05, y: -4 }}
                       className="px-5 py-2.5 bg-white text-royal-dark font-semibold text-sm rounded-2xl border-2 border-transparent shadow-sm hover:border-royal/30 hover:shadow-royal/10 cursor-pointer relative overflow-hidden group"
                     >
                       <span className="relative z-10">{fw}</span>
                       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-royal/5 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                     </motion.div>
                   ))}
                 </div>
               </div>

               <div className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-royal/10">
                 <h4 className="font-bold text-royal mb-6 border-b border-royal/10 pb-2">Databases</h4>
                 <div className="grid grid-cols-2 gap-4">
                   {databases.map((db, idx) => (
                     <motion.div 
                       key={idx}
                       initial={{ opacity: 0, scale: 0.8 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.4 + (idx * 0.15), type: "spring", stiffness: 200 }}
                       whileHover={{ scale: 1.05, rotate: 2 }}
                       className="flex items-center justify-center p-4 bg-white rounded-2xl border border-royal/10 hover:bg-royal hover:text-white transition-all shadow-sm group cursor-pointer"
                     >
                       <span className="font-bold text-royal-dark group-hover:text-white transition-colors">{db}</span>
                     </motion.div>
                   ))}
                 </div>
               </div>

               <div className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-royal/10">
                 <h4 className="font-bold text-royal mb-6 border-b border-royal/10 pb-2">Development & AI Tools</h4>
                 <div className="flex flex-wrap gap-2.5">
                   {tools.map((tool, idx) => (
                     <motion.span 
                       key={idx}
                       initial={{ opacity: 0, rotateX: -90 }}
                       whileInView={{ opacity: 1, rotateX: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.5 + (idx * 0.08), type: "spring", damping: 15 }}
                       whileHover={{ scale: 1.1, backgroundColor: "#d4af37", color: "#fff", borderColor: "#d4af37" }}
                       className="px-4 py-2 bg-white text-royal-dark font-medium text-sm rounded-full border border-royal/20 transition-all cursor-default shadow-sm"
                     >
                       {tool}
                     </motion.span>
                   ))}
                 </div>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom block: Timeline */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-slate-50 border border-royal/10 rounded-xl shadow-sm text-royal">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-royal-dark">Experience & Education</h3>
            </div>

            <div className="relative border-l-2 border-royal/20 ml-6 space-y-10">
              {timelineDepts.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20, y: 10 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="relative pl-10 group"
                >
                  <div className={`absolute -left-[21px] top-1 w-10 h-10 rounded-full flex items-center justify-center shadow-md border-[3px] border-white transition-transform group-hover:scale-110 ${item.type === 'work' ? 'bg-royal' : 'bg-gold'}`}>
                    {item.icon}
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-royal/10 hover:shadow-md hover:border-gold/50 transition-all">
                    <span className="text-xs font-bold uppercase tracking-wider text-royal mb-2 block">{item.time}</span>
                    <h4 className="text-xl font-bold text-royal-dark mb-1">{item.title}</h4>
                    <span className="text-sm font-semibold text-royal/60 mb-3 block">{item.org}</span>
                    <p className="text-royal/80 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
        </motion.div>
      </div>
    </section>
  );
}
