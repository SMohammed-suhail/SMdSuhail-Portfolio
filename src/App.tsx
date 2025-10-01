import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Database, 
  Smartphone, 
  Brain, 
  Palette, 
  Award, 
  BookOpen, 
  Briefcase, 
  Mail, 
  Phone, 
  User, 
  ExternalLink,
  Github,
  Linkedin,
  Download,
  ChevronDown,
  Star,
  Zap,
  Target,
  Rocket,
  GitBranch,
  FileCode,
  Figma,
  Globe,
  Calculator,
  MessageSquare,
  Activity,
  ChevronRight,
  X,
  Menu
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'experience', 'projects', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: 1,
      title: "Skill Gap Analyzer",
      shortDesc: "AI-powered skill analysis platform",
      fullDesc: "An AI-powered web app for skill gap analysis and personalized training recommendations using Machine Learning and NLP technique. Users upload resumes, and the system extracts skills, compares them with desired job roles, identifies missing skills, and suggests tutorials and job listings. Built with Flask and Firebase.",
      icon: Brain,
      gradient: "from-cyan-400 to-purple-500",
      tags: ["Python", "Flask", "AI/ML", "NLP", "Firebase"],
      github: "https://github.com/SMohammed-suhail/skill-gap-analyzer-ml-nlp",
      live: "https://skill-gap-analyzer-ml-nlp.onrender.com"
    },
    {
      id: 2,
      title: "SubspaceAI-ChatBot",
      shortDesc: "Real-time AI chat application",
      fullDesc: "A modern, real-time AI chat application built with React, TypeScript, and Firebase. Features secure authentication, persistent conversations, and seamless integration with Google's Gemini AI for intelligent responses.",
      icon: MessageSquare,
      gradient: "from-purple-400 to-pink-500",
      tags: ["React", "TypeScript", "Firebase", "Gemini AI"],
      github: "https://github.com/SMohammed-suhail/SubspaceAI-ChatBot",
      live: "https://sparkling-puffpuff-ded592.netlify.app/"
    },
    {
      id: 3,
      title: "Sports Buddy",
      shortDesc: "Sports event discovery and management platform",
      fullDesc: "Sports Buddy is a web app that helps users discover, join, and admin user to manage sports events nearby. Platform built with React, TypeScript, and Firebase, it enables user registration, event creation, and admin management of sports, cities, and areas.",
      icon: Target,
      gradient: "from-pink-400 to-yellow-500",
      tags: ["React", "TypeScript", "Firebase", "Sports"],
      github: "https://github.com/SMohammed-suhail/sports-buddy",
      live: "https://sports-buddys.netlify.app/"
    }
  ];

  const certificates = [
    {
      id: 1,
      title: "Python for beginners",
      provider: "Microsoft",
      date: "March 16, 2024",
      description: "Successfully completed Python for beginners certification from Microsoft, covering fundamental Python programming concepts, syntax, data structures, and basic programming principles.",
      image: "/certificate.jpeg",
      link: "https://drive.google.com/file/d/15Nd-uelzwDKrUlcMhOyM-XQw_InMylra/view?usp=sharing"
    },
    {
      id: 2,
      title: "Databases for Developers: Foundations",
      provider: "Oracle Dev Gym",
      date: "2024",
      description: "Successfully completed Databases for Developers: Foundations certification from Oracle Dev Gym, covering SQL fundamentals, database design principles, and essential database development concepts taught by Chris Saxon.",
      image: "/certuf.jpeg",
      link: "https://drive.google.com/file/d/1ienQk6Wsoch_gD1xpGujp1JL4-Fr6w8F/view?usp=sharing"
    },
    {
      id: 3,
      title: "Full Stack Development",
      provider: "NoviTech R&D Private Limited",
      date: "August 01 - September 05, 2025",
      description: "Successfully completed 30 Days MasterClass in Full Stack Development conducted by NoviTech R&D Private Limited. This comprehensive program covered modern web development technologies, frameworks, and best practices for building full-stack applications.",
      image: "/certificatee.jpg",
      link: "https://drive.google.com/file/d/1hwAR1OfDHCXPu8jQJQS4au_GEgE8Y0E5/view?usp=sharing"
    },
    {
      id: 4,
      title: "Full Stack Web Development",
      provider: "Pantech.ai & Warriors Way",
      date: "May 9, 2025",
      description: "Successfully completed 30 Days MasterClass in Full Stack Web Development conducted by Pantech.ai in collaboration with Warriors Way. This comprehensive program covered modern web development technologies, frameworks, and industry best practices for building full-stack web applications.",
      image: "/certificate.jpg",
      link: "https://drive.google.com/file/d/1eyNw4iuQTY9DI4iYi3Y6C0w5P4_eFXDt/view?usp=sharing"
    },
    {
      id: 5,
      title: "Fullstack Web Development Intern",
      provider: "Unified Mentor Pvt. Ltd.",
      date: "6 months - Coming Soon",
      description: "Comprehensive internship program in full-stack web development covering modern technologies, frameworks, and industry best practices.",
      image: "/certificate.jpg",
      link: "",
      comingSoon: true
    }
  ];

  const skills = [
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "SQL", icon: "🗄️" },
    { name: "Vite", icon: "⚡" },
    { name: "Firebase", icon: "🔥" }
  ];

  const tools = [
    { name: "Git & GitHub", icon: GitBranch },
    { name: "VS Code", icon: FileCode },
    { name: "Figma", icon: Figma },
    { name: "React", icon: Code, badge: "Upcoming" }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 w-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              SMS
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'education', 'experience', 'projects', 'certificates', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === item ? 'text-cyan-400' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-cyan-400 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10 py-4">
              <div className="flex flex-col space-y-4">
                {['home', 'about', 'skills', 'education', 'experience', 'projects', 'certificates', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize text-left px-4 py-2 transition-all duration-300 hover:text-cyan-400 hover:bg-white/5 rounded ${
                      activeSection === item ? 'text-cyan-400 bg-white/5' : 'text-white'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            S Mohammed Suhail
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 animate-bounce">
            Software Developer & Full Stack Developer
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <div className="animate-float">
              <Code className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="animate-float" style={{ animationDelay: '0.5s' }}>
              <Database className="w-8 h-8 text-purple-400" />
            </div>
            <div className="animate-float" style={{ animationDelay: '1s' }}>
              <Brain className="w-8 h-8 text-pink-400" />
            </div>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="group flex items-center mx-auto space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <span>Explore My Work</span>
            <ChevronDown className="w-5 h-5 group-hover:animate-bounce" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto animate-slideInLeft"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center animate-slideInUp">
            <div className="space-y-6 animate-slideInLeft">
              <p className="text-lg text-gray-300 leading-relaxed">
                Passionate Software Developer and Full Stack Developer with expertise in modern web technologies and emerging fields like AI and ML. I believe in creating innovative solutions that bridge the gap between technology and user experience.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in software development is driven by curiosity and a constant desire to learn. I specialize in building scalable applications and have hands-on experience with various programming languages and frameworks.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://drive.google.com/file/d/1si0rwNqxk8NCUxQJO0qh8CX_dcMN6490/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 animate-slideInRight">
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
                <Target className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
                <p className="text-gray-400">Analytical thinking and creative solutions</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
                <Zap className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fast Learner</h3>
                <p className="text-gray-400">Quickly adapting to new technologies</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-105">
                <Rocket className="w-8 h-8 text-pink-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-400">Building cutting-edge solutions</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105">
                <Star className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-gray-400">Delivering excellence in every project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Domain
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto animate-slideInLeft"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-slideInUp">
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 group">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-cyan-400 mr-3 group-hover:animate-spin" />
                <h3 className="text-xl font-semibold">Web Development</h3>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-400">HTML5, CSS3, JavaScript</div>
                <div className="text-sm text-gray-400">React.js, Node.js</div>
                <div className="text-sm text-gray-400">Express.js, MongoDB</div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 group">
              <div className="flex items-center mb-4">
                <Brain className="w-8 h-8 text-purple-400 mr-3 group-hover:animate-pulse" />
                <h3 className="text-xl font-semibold">AI & ML</h3>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-400">Python, TensorFlow</div>
                <div className="text-sm text-gray-400">Machine Learning</div>
                <div className="text-sm text-gray-400">Data Analysis</div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-105 group">
              <div className="flex items-center mb-4">
                <Palette className="w-8 h-8 text-pink-400 mr-3 group-hover:animate-bounce" />
                <h3 className="text-xl font-semibold">UI/UX Design</h3>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-400">Figma, Adobe XD</div>
                <div className="text-sm text-gray-400">Responsive Design</div>
                <div className="text-sm text-gray-400">User Experience</div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 group">
              <div className="flex items-center mb-4">
                <Database className="w-8 h-8 text-yellow-400 mr-3 group-hover:animate-spin" />
                <h3 className="text-xl font-semibold">Database</h3>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-400">MySQL, MongoDB</div>
                <div className="text-sm text-gray-400">PostgreSQL</div>
                <div className="text-sm text-gray-400">Database Design</div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Skills
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8 animate-slideInLeft"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 animate-slideInUp">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 backdrop-blur-md p-4 rounded-lg border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 text-center group animate-slideInLeft"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-2xl mb-2 group-hover:animate-bounce">{skill.icon}</div>
                  <div className="text-sm text-gray-300">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Tools & Technologies
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8 animate-slideInLeft"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slideInUp">
              {tools.map((tool, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 group animate-slideInRight"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <tool.icon className="w-8 h-8 text-purple-400 group-hover:animate-spin" />
                    {tool.badge && (
                      <span className="bg-cyan-400/20 text-cyan-400 px-2 py-1 rounded text-xs">{tool.badge}</span>
                    )}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-300">{tool.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto animate-slideInLeft"></div>
          </div>

          <div className="relative">
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 animate-slideInUp">
              <div className="flex items-center mb-6">
                <BookOpen className="w-12 h-12 text-cyan-400 mr-4" />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-gray-400">University of Mysore</p>
                </div>
              </div>
              <div className="flex items-center text-purple-400 mb-4">
                <span className="bg-purple-400/20 px-4 py-2 rounded-full">2022 - 2025</span>
              </div>
              <p className="text-gray-300">
                Comprehensive study in computer science fundamentals, programming languages, 
                software development, and emerging technologies in the field of computer applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto animate-slideInLeft"></div>
          </div>

          <div className="relative">
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 animate-slideInUp">
              <div className="flex items-center mb-6">
                <Briefcase className="w-12 h-12 text-purple-400 mr-4" />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Fullstack Web Development Intern</h3>
                  <p className="text-gray-400">Unified Mentor Pvt. Ltd.</p>
                </div>
              </div>
              <div className="flex items-center text-cyan-400 mb-4">
                <span className="bg-cyan-400/20 px-4 py-2 rounded-full">6 Months</span>
              </div>
              <p className="text-gray-300">
                Gained hands-on experience in full-stack web development, working with modern frameworks and technologies. 
                Developed and deployed web applications, collaborated with team members, and learned industry best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto animate-slideInLeft"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slideInUp">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 group animate-slideInLeft"
                style={{ animationDelay: `${project.id * 0.1}s` }}
              >
                <div className={`h-48 bg-gradient-to-r ${project.gradient} rounded-lg mb-6 flex items-center justify-center`}>
                  <project.icon className="w-16 h-16 text-white group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.shortDesc}</p>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setSelectedProject(project.id)}
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Certification Section */}
      <section id="certificates" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-slideInUp">
              Training & Certification
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto animate-slideInLeft"></div>
          </div>

          <div className="text-center py-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slideInUp">
              {certificates.map((certificate) => (
                <div 
                  key={certificate.id} 
                  className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 group animate-slideInLeft"
                  style={{ animationDelay: `${certificate.id * 0.1}s` }}
                >
                  <div className="h-48 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg mb-6 flex items-center justify-center">
                    <Award className="w-16 h-16 text-white group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
                  <p className="text-gray-400 mb-2">{certificate.provider}</p>
                  <p className="text-sm text-gray-500 mb-4">{certificate.date}</p>
                  <div className="flex justify-between items-center">
                    {certificate.comingSoon ? (
                      <span className="text-yellow-400 font-semibold">Coming Soon</span>
                    ) : (
                      <>
                        <button
                          onClick={() => setSelectedCertificate(certificate.id)}
                          className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                        >
                          <span>View Details</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                        <a
                          href={certificate.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Certificate</span>
                        </a>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto animate-slideInLeft"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-slideInUp">
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 text-center animate-slideInLeft">
              <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-400">smohadsuhail@gmail.com</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 text-center animate-slideInUp" style={{ animationDelay: '0.1s' }}>
              <Phone className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">843889895</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-105 text-center animate-slideInRight" style={{ animationDelay: '0.2s' }}>
              <User className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Name</h3>
              <p className="text-gray-400">S Mohammed Suhail</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://github.com/SMohammed-suhail" target="_blank" rel="noopener noreferrer">
                <Github className="w-8 h-8 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors duration-300 animate-slideInLeft" />
              </a>
              <a href="https://www.linkedin.com/in/s-mohammed-suhail-268459340" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-8 h-8 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors duration-300 animate-slideInRight" />
              </a>
            </div>
            <p className="text-gray-400 animate-slideInUp">Let's collaborate and build something amazing together!</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black/40 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 S Mohammed Suhail. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900/95 backdrop-blur-md rounded-2xl border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {(() => {
              const project = projects.find(p => p.id === selectedProject);
              if (!project) return null;
              
              return (
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center`}>
                        <project.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-400">{project.shortDesc}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-white mb-3">Description</h4>
                    <p className="text-gray-300 leading-relaxed">{project.fullDesc}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="bg-gradient-to-r from-cyan-400/20 to-purple-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm border border-cyan-400/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900/95 backdrop-blur-md rounded-2xl border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideInUp">
            {(() => {
              const certificate = certificates.find(c => c.id === selectedCertificate);
              if (!certificate) return null;
              
              return (
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{certificate.title}</h3>
                        <p className="text-gray-400">{certificate.provider}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedCertificate(null)}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-white mb-3">Description</h4>
                    <p className="text-gray-300 leading-relaxed">{certificate.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-white mb-3">Certificate</h4>
                    <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-4">
                      <img 
                        src={certificate.image} 
                        alt={certificate.title}
                        className="w-full h-auto rounded-lg shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </>
  );
}

export default App;