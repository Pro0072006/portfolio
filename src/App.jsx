import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Sparkles, Terminal, Cpu } from 'lucide-react';

const profileData = {
  name: "Santiago Mendoza",
  title: "Software Developer | Backend Specialist",
  description: "I'm a software engineer. Passionate developer with a deep love for creating innovative and effective solutions. I love creating software that will one day help people with their needs.",
  avatar: "https://1.gravatar.com/avatar/2d7c880232468fed904c9fd09043638c4760bdc65210fff64a44ac5f258c9530?size=256&d=initials",
  about: "I'm a software engineer. Passionate developer with a deep love for creating innovative and effective solutions. I love creating software that will one day help people with their needs. When I'm not hunting for bugs, you can see me playing video games, doing push or playing ping pong.",
  skills: ['Java', 'Rust', 'C#', 'Android', 'Backend', 'API Development'],
  cvUrl: "/cv.pdf"
};

const socialLinks = {
  github: "https://github.com/pro0072006",
  linkedin: "https://linkedin.com/in/david-santiago-mendoza-yasno",
  email: "santiagoyasno@gmail.com"
};

const projectsData = [
  {
    id: 1,
    name: "MateMa",
    description: "An Android application to carry out operations for high school students.",
    technologies: ["Android", "Java"],
    github: "https://github.com/pro0072006/matema",
    playStore: "https://play.google.com/store/apps/details?id=com.matema",
    icon: "🧮",
    category: "mobile"
  },
  {
    id: 2,
    name: "MatrixMa",
    description: "A desktop app that solves all types of operations with matrices and systems of equations.",
    technologies: ["Desktop", "Java"],
    github: "https://github.com/pro0072006/matrixma",
    icon: "📊",
    category: "desktop"
  },
  {
    id: 3,
    name: "ApodoGuest",
    description: "A console game that consists of guessing a number with some fun functions.",
    technologies: ["C#", "Console"],
    github: "https://github.com/pro0072006/apodoguest",
    icon: "🎮",
    category: "game"
  },
  {
    id: 4,
    name: "MusicMatchApi",
    description: "A library that uses the musixmatch API to find song information and lyrics.",
    technologies: ["API", "Node.js"],
    github: "https://github.com/pro0072006/musicmatch",
    npm: "https://www.npmjs.com/package/musicmatch",
    icon: "🎵",
    category: "library"
  },
  {
    id: 5,
    name: "MusicLyrics",
    description: "A library for C# that allows you to bring the lyrics of a song.",
    technologies: ["C#", "Library"],
    github: "https://github.com/pro0072006/musiclyrics",
    nuget: "https://www.nuget.org/packages/musiclyrics",
    icon: "🎤",
    category: "library"
  },
  {
    id: 6,
    name: "JunkCode",
    description: "This is my junk code path of code of projects, snippets, things that I wanna test, incomplete ideas... Just parts of code.",
    technologies: ["Various"],
    github: "https://github.com/pro0072006/junkcode",
    icon: "🗑️",
    category: "misc"
  }
];

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-xl bg-slate-950/50 border-b border-slate-800/50 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Terminal className="w-6 h-6 text-orange-500 group-hover:rotate-12 transition-transform" />
          <span className="font-bold text-xl bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Santi
          </span>
        </div>
        <div className="flex gap-6">
          {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-400 hover:text-orange-500 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const HeroSection = ({ profile, social }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Avatar with animated border */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
            <img
              src={profile.avatar}
              alt={profile.name}
              className="relative w-48 h-48 rounded-full object-cover border-4 border-slate-900"
            />
            <div className="absolute -bottom-2 -right-2 bg-orange-500 rounded-full p-3 shadow-lg">
              <Sparkles className="w-6 h-6 text-slate-900" />
            </div>
          </div>

          {/* Hero Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hey! I'm{' '}
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h1>

            <p className="text-xl text-slate-400 mb-2">{profile.title}</p>
            <p className="text-lg text-slate-500 max-w-2xl mb-8">
              {profile.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#portfolio"
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all hover:-translate-y-1"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-orange-500/30 rounded-lg font-semibold hover:bg-orange-500/10 transition-all hover:-translate-y-1"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <a href={social.github} target="_blank" rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 hover:bg-orange-500/20 border border-slate-700 hover:border-orange-500/50 rounded-lg transition-all hover:-translate-y-1">
                <Github className="w-5 h-5" />
              </a>
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 hover:bg-orange-500/20 border border-slate-700 hover:border-orange-500/50 rounded-lg transition-all hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${social.email}`}
                className="p-3 bg-slate-800/50 hover:bg-orange-500/20 border border-slate-700 hover:border-orange-500/50 rounded-lg transition-all hover:-translate-y-1">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = ({ profile }) => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Code2 className="w-8 h-8 text-orange-500" />
          <h2 className="text-4xl font-bold">About Me</h2>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-orange-500/30 transition-all">
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            {profile.about}
          </p>

          <div className="flex flex-wrap gap-3">
            {profile.skills.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-lg text-orange-400 hover:bg-orange-500/20 transition-colors">
                {skill}
              </span>
            ))}
          </div>

          <a
            href={profile.cvUrl}
            download
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 rounded-lg transition-all hover:-translate-y-1"
          >
            Download CV
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const categories = ['all', 'mobile', 'desktop', 'library', 'game', 'misc'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Sparkles className="w-8 h-8 text-orange-500" />
          <h2 className="text-4xl font-bold">My Projects</h2>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${activeFilter === cat
                ? 'bg-orange-500 text-slate-900'
                : 'bg-slate-800/50 border border-slate-700 hover:border-orange-500/50 text-slate-300'
                }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10"
            >
              <div className="text-5xl mb-4">{project.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-orange-400">{project.name}</h3>
              <p className="text-slate-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-orange-500 border border-slate-600 hover:border-orange-500 rounded-lg transition-all text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}
                {(project.demo || project.playStore || project.npm || project.nuget) && (
                  <a
                    href={project.demo || project.playStore || project.npm || project.nuget}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 hover:bg-orange-500 border border-orange-500/30 hover:border-orange-500 rounded-lg transition-all text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = ({ social }) => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-xl text-slate-400 mb-12">
          Have a project in mind? Let's create something amazing together.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href={`mailto:${social.email}`}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Send Email
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-orange-500/30 rounded-lg font-semibold hover:bg-orange-500/10 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <Linkedin className="w-5 h-5" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-slate-800/50 py-8 px-6">
      <div className="max-w-7xl mx-auto text-center text-slate-500">
        <p>© 2025 Santiago Mendoza. All rights reserved.</p>
      </div>
    </footer>
  );
};

const ModernPortfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 relative overflow-hidden">
      {/* Gradient orbs background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl transition-all duration-300"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(51 65 85 / 0.3) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10">
        <Navigation />
        <HeroSection profile={profileData} social={socialLinks} />
        <AboutSection profile={profileData} />
        <PortfolioSection projects={projectsData} />
        <ContactSection social={socialLinks} />
        <Footer />
      </div>
    </div>
  );
};

export default ModernPortfolio;
