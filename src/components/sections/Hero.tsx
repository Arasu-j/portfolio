"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 min-h-[90vh] flex items-center bg-white relative overflow-hidden">
      {/* Background decorations if needed, but keeping it clean based on the image */}
      <div className="absolute top-0 -z-10 h-full w-full bg-white"></div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left z-10"
        >
          <div className="mb-2">
            <p className="text-royal/80 font-medium text-lg">Hello! I'm</p>
            <p className="text-royal-dark font-bold text-xl">Arasu J</p>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            Java Developer <br/> & CS Student
          </h1>
          
          <p className="text-lg text-slate-600 max-w-lg mb-8 leading-relaxed">
            A dedicated and adaptive Computer Science student with hands-on experience in backend development and full-stack projects. Seeking to leverage my skills in Spring Boot and ReactJS to contribute to innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="#contact" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full gap-2 rounded-lg px-8 py-3.5 shadow-md border-0 bg-royal hover:bg-royal-dark text-white">
                Hire Me <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
            <a href="/resume.pdf" download="Arasu_J_Resume.pdf" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full gap-2 rounded-lg px-8 py-3.5 bg-white text-royal border-2 border-royal hover:bg-royal hover:text-white shadow-sm focus:ring-royal">
                Download CV <Download className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Right Column - Image & Graphic */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center items-center mt-12 md:mt-0"
        >
          {/* Geometric Background Shape (Replicating the split circle) */}
          <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] mb-8">
            {/* Top half circle */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-royal rounded-t-full"></div>
            {/* Bottom half circle */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-royal/10 rounded-b-full"></div>
            
            {/* Inner cutout shape to match the design style */}
            <div className="absolute top-[48%] -left-2 w-12 h-20 bg-white transform -translate-y-1/2 rounded-r-full z-10"></div>
            <div className="absolute top-[48%] -right-2 w-12 h-20 bg-white transform -translate-y-1/2 rounded-l-full z-10"></div>

            {/* Profile Image - Using a fully rounded image as a placeholder since we don't have a transparent cut-out */}
            {/* Note: I am providing a placeholder that looks nice. Replace with a transparent PNG for the pop-out effect! */}
            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white shadow-inner z-20">
               <img 
                 src="/profile.jpg" 
                 alt="Arasu J" 
                 className="w-full h-full object-cover"
               />
            </div>
            {/* Or if you have a transparent cutout, it would look like this overlaying the circle: */}
            {/* <img src="/your-cutout.png" alt="Arasu" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[120%] object-contain z-20" /> */}
          </div>

          {/* Social Box */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-4 md:-bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3.5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-4 z-30 whitespace-nowrap border border-slate-100"
          >
            <span className="text-[11px] font-bold text-slate-900 tracking-wide uppercase">Follow me on:</span>
            <div className="flex gap-3">
              <a href="https://github.com/Arasu-j" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-black transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/arasu-j-337933251/" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-black transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://www.hackerrank.com/profile/arasuj03" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-black transition-colors">
                <FaHackerrank className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
