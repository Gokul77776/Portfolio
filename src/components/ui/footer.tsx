

import { Github, Linkedin, Mail, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left: Logo */}
        <div className="text-2xl font-bold">Gokul.dev</div>

        {/* Center: Page Links */}
        <div className="flex space-x-6 text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/About" className="hover:underline">Projects</Link>
          <Link to="/Skills" className="hover:underline">About</Link>
          <Link to="/Contact" className="hover:underline">Contact</Link>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/Gokul77776"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/gokul-c7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://wa.me/9743328473"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <PhoneCall size={20} />
          </a>
          <a
            href="mailto:gokuldj07@gmail.com"
            className="hover:text-gray-400"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
