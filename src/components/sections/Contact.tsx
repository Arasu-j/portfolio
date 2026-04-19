"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white border-t border-royal/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-royal-dark">
            Get In <span className="text-gold">Touch</span>
          </h2>
          <p className="text-royal/70 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to chat? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-royal-dark mb-6">Contact Information</h3>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-royal/10 text-royal rounded-full flex items-center justify-center shrink-0 border border-royal/20">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-royal-dark">Email</h4>
                <a href="mailto:arasuj03@gmail.com" className="text-royal/80 hover:text-gold transition-colors">arasuj03@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-royal/10 text-royal rounded-full flex items-center justify-center shrink-0 border border-royal/20">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-royal-dark">Phone</h4>
                <a href="tel:+919787261291" className="text-royal/80 hover:text-gold transition-colors">+91 97872 61291</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-royal/10 text-royal rounded-full flex items-center justify-center shrink-0 border border-royal/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-royal-dark">Location</h4>
                <p className="text-royal/80">Tamil Nadu, India<br/>Available Worldwide</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form action="https://formsubmit.co/arasuj03@gmail.com" method="POST" className="space-y-4">
              {/* Optional FormSubmit configuration */}
              <input type="hidden" name="_subject" value="New Contact Form Submission from Portfolio!" />
              <input type="hidden" name="_captcha" value="true" />
              
              <div>
                <label className="block text-sm font-medium text-royal mb-1" htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-royal/20 bg-white text-royal-dark focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal transition-shadow"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-royal mb-1" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-royal/20 bg-white text-royal-dark focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal transition-shadow"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-royal mb-1" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-royal/20 bg-white text-royal-dark focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal transition-shadow resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <Button type="submit" className="w-full gap-2">
                Send Message <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
