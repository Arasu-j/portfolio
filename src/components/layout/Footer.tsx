import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-white border-t border-royal/10 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link href="/" className="text-2xl font-bold tracking-tighter">
          <span className="text-royal">ARASU</span><span className="text-gold"> J</span>
        </Link>
          <p className="text-royal/70">
            A dedicated Computer Science student and backend developer.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-royal-dark">Quick Links</h4>
          <ul className="space-y-2 text-royal/80">
            <li><Link href="#about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link href="#projects" className="hover:text-gold transition-colors">Projects</Link></li>
            <li><Link href="#contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-royal-dark">Connect</h4>
          <div className="flex gap-4">
            <a href="https://github.com/Arasu-j" target="_blank" rel="noreferrer" className="text-royal/80 hover:text-gold transition-colors">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/arasu-j-337933251/" target="_blank" rel="noreferrer" className="text-royal/80 hover:text-gold transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-royal/80 hover:text-gold transition-colors">
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-royal/10 text-center text-royal/60 text-sm">
        <p>&copy; {new Date().getFullYear()} Arasu J. All rights reserved.</p>
      </div>
    </footer>
  );
}
