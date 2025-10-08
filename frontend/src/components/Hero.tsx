import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motionVariants";

interface HeroProps {
  data: {
    name: string;
    title: string;
    description: string;
    github: string;
    linkedin: string;
    twitter?: string;
    blog?: string;
    portfolio?: string;
  };
}

const Hero: React.FC<HeroProps> = ({ data }) => (
  <section
    id="home"
    className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white px-6 overflow-hidden"
  >
    {/* Enhanced Background Patterns */}
    <div className="absolute inset-0 bg-[url('/images/bg-pattern.svg')] opacity-10" />
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-800/20" />
    
    {/* Animated Background Elements */}
    <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-20 w-16 h-16 bg-yellow-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-cyan-400/20 rounded-full blur-lg animate-pulse delay-500"></div>

    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 z-10 max-w-7xl">
      {/* Text Content */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex-1 text-center lg:text-left"
      >
        {/* Welcome Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium">Available for new opportunities</span>
        </motion.div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
          {data.name}
        </h1>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-cyan-100">
          {data.title}
        </h2>
        
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200 leading-relaxed">
          {data.description}
        </p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4 mb-8 justify-center lg:justify-start"
        >
          {data.github && (
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}
          
          {data.linkedin && (
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          )}
          
          {data.twitter && (
            <a
              href={data.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          )}
          
          {data.blog && (
            <a
              href={data.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
              aria-label="Personal Blog"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9m0 0v12m0-12a2 2 0 012-2h2a2 2 0 012 2M9 6a2 2 0 012-2h2a2 2 0 012 2m-3 9h6" />
              </svg>
            </a>
          )}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-yellow-400/25 flex items-center justify-center gap-2"
          >
            <span>View Projects</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-white font-semibold rounded-2xl hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Hire Me</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
          </a>
          
          <a
            href="/resume.pdf"
            download
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 font-semibold rounded-2xl hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Download Resume</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Larger Full Body Image */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex-1 flex justify-center lg:justify-end relative"
      >
        <div className="relative group">
          {/* Background Glow Effect - Increased size */}
          <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          
          {/* Larger Image Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 group-hover:border-white/40 transition-all duration-500">
            <img
              src="/alextaweke/images/alex.jpg"
              alt="Alemayehu Taweke - Full Stack Developer"
              className="w-96 h-[32rem] lg:w-[28rem] lg:h-[36rem] xl:w-[32rem] xl:h-[40rem] object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          {/* Floating Badge - Adjusted position */}
          <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-2xl shadow-2xl font-semibold text-lg">
            👨‍💻 Full Stack
          </div>
        </div>
      </motion.div>
    </div>

    {/* Scroll Indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-white/70">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </div>
      </div>
    </motion.div>
  </section>
);

export default Hero;