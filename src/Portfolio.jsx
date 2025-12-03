import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, ArrowUpRight, Terminal, Code2, Database, Sparkles, Moon, Sun } from 'lucide-react';

// Add custom CSS for animations
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .animate-fadeInUp {
    animation: fadeInUp 1s ease-out forwards;
  }
  
  .animate-slideInLeft {
    animation: slideInLeft 0.8s ease-out forwards;
  }
  
  .animate-slideInRight {
    animation: slideInRight 0.8s ease-out forwards;
  }
`;
document.head.appendChild(style);

// Navbar Component
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/50 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">PB</span>
            </div>
            <span className="text-white font-semibold text-lg hidden sm:block">Pallavi Bhasme</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#work" className="text-gray-400 hover:text-white transition-colors text-sm font-medium hidden md:block">Work</a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm font-medium hidden md:block">About</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm font-medium hidden md:block">Contact</a>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              {darkMode ? <Sun size={18} className="text-white" /> : <Moon size={18} className="text-white" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Hero Component
function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "Aspiring FullStack Developer",
    "Backend Developer",
    "API Specialist",
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    
    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setTypedText(
          isDeleting
            ? currentRole.substring(0, typedText.length - 1)
            : currentRole.substring(0, typedText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentRoleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black"></div>
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
        }}
      ></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-32 text-center">
        <div className="mb-8 animate-fadeIn">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
            <span className="text-gray-400 text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for opportunities
            </span>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight">
          <span className="inline-block animate-fadeInUp bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Pallavi Bhasme
          </span>
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-2xl md:text-4xl font-light">
          <span className="text-gray-400 min-h-[48px] flex items-center">
            {typedText}
            <span className="inline-block w-0.5 h-8 bg-blue-500 ml-1 animate-pulse"></span>
          </span>
        </div>

        <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed">
          Crafting scalable, high-performance web applications with modern technologies.
          Specializing in <span className="text-blue-400 font-semibold">Node.js</span>, 
          <span className="text-purple-400 font-semibold" > React</span>, and 
          <span className="text-green-400 font-semibold"> Databasess</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#contact" className="group px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center gap-2">
            Let's Talk
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a href="#work" className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-all">
            View Work
          </a>
        </div>

        <div className="flex justify-center items-center gap-6 mt-16">
          <a href="https://github.com/pallavibhasme" target="_blank" rel="noopener noreferrer" 
             className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all hover:scale-110">
            <Github size={22} className="text-white" />
          </a>
          <a href="https://linkedin.com/in/pallavi-bhasme-653bb8201" target="_blank" rel="noopener noreferrer"
             className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all hover:scale-110">
            <Linkedin size={22} className="text-white" />
          </a>
          <a href="mailto:pallavibhasme13@gmail.com"
             className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all hover:scale-110">
            <Mail size={22} className="text-white" />
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center items-center gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-2">
            <MapPin size={16} /> Nagpur, Maharashtra
          </span>
          
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/40 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

// About Component
// Scrolling Text Component
function ScrollingText({ text, direction = 'left' }) {
  return (
    <div className="overflow-hidden whitespace-nowrap py-6 border-y border-white/10">
      <div className={`inline-block ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}>
        {[...Array(20)].map((_, i) => (
          <span key={i} className="text-4xl md:text-6xl font-bold text-white/5 mx-8">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

// About Component
function About() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [copied, setCopied] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.skill-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('pallavibhasme13@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const skills = [
    {
      category: "Languages",
      icon: Sparkles,
      items: ["Python", "C++", "Java", "SQL"],
    },

    {
      category: "Frontend",
      icon: Code2,
      items: [
        "React.js",
        "Javascript",
        "Tailwind CSS",
        "HTML/CSS",
        "Responsive Design",
      ],
    },
    {
      category: "Backend",
      icon: Terminal,
      items: ["Node.js", "Express.js", "REST APIs", "MySQL", "Postman"],
    },
    {
      category: "Database",
      icon: Database,
      items: ["MongoDB", "MySQL", "NoSQL", "Database Design"],
    },
  ];

  return (
    <section
      id="about"
      className="py-32 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* About Me Section */}
        <div className="mb-32">
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            WHO I AM
          </h2>
          <h3 className="text-5xl md:text-7xl font-bold text-white mb-12">
            About Me
          </h3>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                Hi, I'm Pallavi a dedicated{" "}
                <span className="text-blue-400 font-semibold">
                  Developer
                </span>{" "}
                who enjoys building practical and reliable applications. I focus
                on writing clean code, understanding real needs, and creating
                solutions that actually help users.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed">
                I work mainly with the{" "}
                <span className="text-purple-400 font-semibold">
                  MERN stack
                </span>{" "}
                and have experience in deploying projects on{" "}
                <span className="text-green-400 font-semibold">AWS</span>. My
                interest in development started with a simple curiosity to
                understand how things work, and it has grown into a meaningful
                career path where I’m constantly learning and improving.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed">
                Outside of coding, I enjoy exploring new tools and ideas that
                can make development smoother and more efficient. I believe in
                staying consistent, learning continuously, and building software
                that is both easy to use and easy to maintain.
              </p>

              <div className="flex flex-wrap gap-4 pt-6">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    const link = document.createElement("a");
                    link.href = "/resume.pdf";
                    link.download = "Pallavi_Bhasme_Resume.pdf";
                    link.click();
                  }}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center gap-3"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Resume
                  <ArrowUpRight
                    size={20}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </a>

                <button
                  onClick={copyEmail}
                  className="relative px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-all flex items-center gap-3"
                >
                  <Mail size={20} />
                  {copied ? "Email Copied!" : "Copy Email"}
                  {copied && (
                    <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-sm px-4 py-2 rounded-lg">
                      ✓ Copied!
                    </span>
                  )}
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-sm">
                <h4 className="text-2xl font-bold text-white mb-6">
                  Quick Facts
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <MapPin size={24} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Based in</p>
                      <p className="text-white font-semibold">
                        Nagpur, Maharashtra
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Terminal size={24} className="text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Current Role</p>
                      <p className="text-white font-semibold">
                        Backend Developer Intern
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Code2 size={24} className="text-green-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Specialization</p>
                      <p className="text-white font-semibold">
                        MERN Stack Development
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <Sparkles size={24} className="text-orange-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Passion</p>
                      <p className="text-white font-semibold">
                        Building Scalable Solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-32 mb-20">
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            EXPERTISE
          </h2>
          <h3 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Skills & Technologies
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Building exceptional digital experiences with a comprehensive tech
            stack. From concept to deployment, I handle every aspect of modern
            web development with precision and passion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-index={index}
              className={`skill-card group p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-500 hover:scale-[1.02] ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transition: `all 0.6s ease-out ${index * 0.1}s`,
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                  <skill.icon size={24} className="text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white">
                  {skill.category}
                </h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm hover:bg-white/10 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

     
      </div>
    </section>
  );
}

// Experience Component
function Experience() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4">JOURNEY</h2>
          <h3 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Professional Experience
          </h3>
        </div>

        <div className="space-y-12">
          {/* Current Role */}
          <div className="group relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all duration-500">
            <div className="absolute top-8 right-8">
              <span className="px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-xs font-semibold">
                CURRENT
              </span>
            </div>
            
            <div className="mb-6">
              <h4 className="text-3xl font-bold text-white mb-2">Backend Developer Intern</h4>
              <p className="text-xl text-blue-400 mb-2">Teknosolve</p>
              <p className="text-gray-500">July 2025 - Present • Remote</p>
            </div>

            <div className="space-y-3 text-gray-400">
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">▹</span>
                <span>Architecting and developing AI-Powered Interview Preparation Platform using Node.js, Express.js, and MySQL</span>
              </p>
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">▹</span>
                <span>Building scalable RESTful APIs handling user profiles, interview simulations, and real-time analytics</span>
              </p>
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">▹</span>
                <span>Designing optimized database schemas and implementing efficient SQL queries for real-time data processing</span>
              </p>
              <p className="flex gap-3">
                <span className="text-blue-500 mt-1">▹</span>
                <span>Implementing secure authentication, session management, and role-based access control</span>
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl">
            <div className="mb-6">
              <h4 className="text-3xl font-bold text-white mb-2">Bachelor of Engineering</h4>
              <p className="text-xl text-purple-400 mb-2">Information Technology</p>
              <p className="text-gray-400">Nagpur Institute of Technology</p>
              <p className="text-gray-500">2019 - 2023</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl">
            <h4 className="text-2xl font-bold text-white mb-6">Certifications</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-300">MERN Stack Development</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-300">Object Oriented Thinking in Python</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Projects Component
function Projects() {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [animatedStats, setAnimatedStats] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleProjects((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'IT PRECISION',
      category: 'Full Stack • AWS Deployment',
      description: 'Enterprise-grade company portfolio with advanced AWS infrastructure, custom CMS, and real-time form processing.',
      tech: ['Node.js', 'Express.js', 'MySQL', 'AWS EC2', 'CloudFront', 'Route 53', 'SSL/TLS', 'Nginx'],
      highlights: [
        'Deployed on AWS EC2 with CloudFront CDN for global performance',
        'Custom backend API with MySQL for dynamic content management',
        'Implemented SSL/TLS encryption and custom domain routing',
        'Optimized for 99.9% uptime with auto-scaling capabilities'
      ],
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      title: 'STUDYNOTION',
      category: 'EdTech Platform • MERN Stack',
      description: 'Complete learning management system with course marketplace, payment integration, and interactive learning features.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'Razorpay'],
      highlights: [
        'Built comprehensive course creation and management system',
        'Integrated secure payment gateway for course enrollment',
        'Implemented role-based authentication (Student/Instructor/Admin)',
        'Real-time progress tracking and rating system'
      ],
      link: 'https://github.com/pallavibhasme/StudyNotion_.git',
      gradient: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <section id="work" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4">PORTFOLIO</h2>
          <h3 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Featured Projects
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl">
            A showcase of my recent work, demonstrating expertise in full-stack development, 
            cloud architecture, and modern web technologies.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              data-index={index}
              className={`project-card group relative overflow-hidden p-8 md:p-12 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 ${
                visibleProjects.includes(index)
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
              }`}
              style={{
                transition: `all 0.8s ease-out ${index * 0.2}s`
              }}
            >
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.gradient} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <div className="relative">
                <div className="flex flex-wrap justify-between items-start mb-6">
                  <div>
                    <h4 className="text-4xl font-bold text-white mb-2">{project.title}</h4>
                    <p className="text-gray-500 uppercase tracking-wider text-sm">{project.category}</p>
                  </div>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-all"
                    >
                      <span className="font-semibold">View Code</span>
                      <ExternalLink size={18} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  )}
                </div>

                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-3">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex gap-3 text-gray-400">
                      <span className="text-blue-500 mt-1">▹</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Component
function Contact() {
  const [email, setEmail] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const fullEmail = 'pallavibhasme13@gmail.com';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isTyping) {
            setIsTyping(true);
            let index = 0;
            const timer = setInterval(() => {
              if (index <= fullEmail.length) {
                setEmail(fullEmail.substring(0, index));
                index++;
              } else {
                clearInterval(timer);
              }
            }, 50);
            return () => clearInterval(timer);
          }
        });
      },
      { threshold: 0.5 }
    );

    const contactSection = document.getElementById('contact');
    if (contactSection) observer.observe(contactSection);

    return () => observer.disconnect();
  }, [isTyping]);

  return (
    <section id="contact" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            GET IN TOUCH
          </h2>
          <h3 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h3>

          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            I'm always excited to collaborate on innovative projects and bring
            creative ideas to life. Whether you have a project in mind or just
            want to connect, reach out at{" "}
            <span className="text-blue-400 font-mono">
              {email}
              <span className="inline-block w-0.5 h-5 bg-blue-400 ml-1 animate-pulse"></span>
            </span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href="mailto:pallavibhasme13@gmail.com"
              className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center gap-3"
            >
              Start a Conversation
              <ArrowUpRight
                size={22}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:pallavibhasme13@gmail.com"
              className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
            >
              <Mail size={28} className="text-blue-400 mb-3 mx-auto" />
              <h4 className="text-white font-semibold mb-2">Email</h4>
              <p className="text-gray-500 text-sm">pallavibhasme13@gmail.com</p>
            </a>

            <a
              href="https://github.com/pallavibhasme"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
            >
              <Github size={28} className="text-purple-400 mb-3 mx-auto" />
              <h4 className="text-white font-semibold mb-2">GitHub</h4>
              <p className="text-gray-500 text-sm">@pallavibhasme</p>
            </a>

            <a
              href="https://linkedin.com/in/pallavi-bhasme-653bb8201"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
            >
              <Linkedin size={28} className="text-blue-400 mb-3 mx-auto" />
              <h4 className="text-white font-semibold mb-2">LinkedIn</h4>
              <p className="text-gray-500 text-sm">Pallavi Bhasme</p>
            </a>
          </div>

          <div className="text-gray-600 text-sm">
            <p> • Nagpur, Maharashtra, India • </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">PB</span>
            </div>
            <div>
              <p className="text-white font-semibold">Pallavi Bhasme</p>
              <p className="text-gray-500 text-sm">Full Stack Developer</p>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/pallavibhasme" target="_blank" rel="noopener noreferrer" 
               className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <Github size={20} className="text-gray-400" />
            </a>
            <a href="https://linkedin.com/in/pallavi-bhasme-653bb8201" target="_blank" rel="noopener noreferrer"
               className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <Linkedin size={20} className="text-gray-400" />
            </a>
            <a href="mailto:pallavibhasme13@gmail.com"
               className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <Mail size={20} className="text-gray-400" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>© 2025 Pallavi Bhasme. Crafted with passion and precision.</p>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}