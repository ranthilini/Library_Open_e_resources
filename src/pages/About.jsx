import React from 'react';
import { motion } from 'framer-motion';
import { IoPlanetOutline, IoRocketOutline, IoPeopleOutline } from 'react-icons/io5';

const About = () => {
  const features = [
    {
      icon: <IoPlanetOutline className="text-5xl text-neon-cyan" />,
      title: "Universal Access",
      description: "Breaking down barriers to education by providing a centralized hub for free, high-quality academic resources from around the globe."
    },
    {
      icon: <IoRocketOutline className="text-5xl text-purple-glow" />,
      title: "Advanced Discovery",
      description: "Utilizing modern web technologies to make searching and discovering scientific papers, journals, and books faster and more intuitive."
    },
    {
      icon: <IoPeopleOutline className="text-5xl text-electric-blue" />,
      title: "Open Community",
      description: "Fostering an open-access culture where knowledge is shared freely without paywalls, empowering researchers and students alike."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neon-cyan text-sm font-semibold tracking-widest uppercase">
              Our Mission
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Democratizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-purple-glow">Knowledge</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            The Open eResources Library is born from a simple belief: information should be free. In a world constrained by paywalls and restricted access, we built a digital sanctuary where the greatest minds, research, and literature are available to everyone.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glassmorphism p-8 rounded-2xl text-center group hover:border-neon-cyan/50 transition-all duration-300"
            >
              <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-glow-cyan">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <div className="glassmorphism rounded-3xl p-8 md:p-16 relative overflow-hidden border-0 bg-gradient-to-br from-white/5 to-white/[0.02]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-glow/10 rounded-full blur-[80px]" />
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl font-bold text-white mb-6">The Future of Learning</h2>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              We envision a future where geographical location, economic status, or institutional affiliation no longer dictate one's ability to learn and contribute to human progress.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              By aggregating open-access directories, free libraries, and public domain archives into one seamless, visually immersive experience, we aim to inspire the next generation of scientists, artists, and thinkers.
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default About;
