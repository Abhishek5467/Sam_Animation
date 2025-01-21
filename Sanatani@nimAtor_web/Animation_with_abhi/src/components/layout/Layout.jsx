import PropTypes from 'prop-types';
import { X, Mail, Timer } from 'lucide-react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';
import Navbar from './Navbar';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Layout = ({ children }) => {

  const [text] = useTypewriter({
    words: ['3D Animator', 'ML & DL Enthusiast', '3D Modeler', '3D Artist', '3D Designer'],
    loop: {},
  })

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];
  const socialLinks = [
    { icon: FaInstagram, href: 'https://www.instagram.com/iitianabhishek5701/', label: 'Instagram' },
    { icon: X, href: '#', label: 'Twitter' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/abhishek-singh-3a54a5294/', label: 'LinkedIn' },
    { icon: Mail, href: 'https://mail.google.com/', label: 'Email' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gray-50 py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
                I'm a&nbsp;
                <span className="text-blue-600 ml-2">
                  {text}
                </span>
                <Cursor/>
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Bringing imagination to life through stunning 3D animations and visual effects.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid Section */}
        <section id="portfolio" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Featured Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projects.map((project) => (
                <ProjectCard 
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  modelPath={project.modelPath}
                  tags={project.tags}
                  tools={project.tools}
                />
                
              ))}
            </div>
          </div>
        </section>

        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Sam Animator</h3>
              <p className="text-gray-400 text-lg">
                Creating stunning 3D animations and visual experiences.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-gray-400 hover:text-white text-lg transition-colors duration-300">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Connect</h3>
              <div className="flex space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={28} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Sam Animator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;