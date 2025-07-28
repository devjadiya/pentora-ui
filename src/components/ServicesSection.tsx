"use client";

import { motion } from 'framer-motion';
import { ShieldCheck, Siren, BarChart, Bug, Bot, Server } from 'lucide-react';

// Define the structure for a service item
interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Data for the services
const services: Service[] = [
  {
    icon: <Bug size={28} />,
    title: 'Penetration Testing',
    description: 'We identify vulnerabilities and assess your overall security posture before attackers can exploit them.',
  },
  {
    icon: <Siren size={28} />,
    title: 'Threat Monitoring',
    description: 'Our team monitors, analyzes, and responds to security threats in real-time, 24/7.',
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Response Assessment',
    description: 'We evaluate security incidents and develop effective, rapid response plans to minimize impact.',
  },
  {
    icon: <BarChart size={28} />,
    title: 'Cyber-Sec Consulting',
    description: 'Providing expert advice and strategic guidance to enhance your long-term security posture.',
  },
    {
    icon: <Bot size={28} />,
    title: 'Security Automation',
    description: 'Streamlining security operations to help you respond to threats more quickly and effectively.',
  },
  {
    icon: <Server size={28} />,
    title: 'Infrastructure Security',
    description: 'Comprehensive solutions to protect your critical infrastructure against both external and internal threats.',
  },
];

// Animation variants for the main container to stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Animation variants for each service card
const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function ServicesSection() {
  return (
    <section className="relative bg-[#110720] py-24 sm:py-32">
        {/* Decorative background glow */}
        <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-radial-gradient(ellipse_at_center,rgba(136,52,228,0.15)_0%,rgba(17,7,32,0)_70%)"
            style={{
                background: 'radial-gradient(ellipse at center, hsla(271, 78%, 55%, 0.15) 0%, transparent 70%)'
            }}
        ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-extrabold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Our Unique Approach To Systems Security
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            We offer a comprehensive suite of cybersecurity services designed to protect your organization's critical assets and reputation.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="group relative p-8 bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-[#8834e4]"
              variants={itemVariants}
            >
              {/* Hover glow effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#8834e4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="inline-block p-4 bg-gradient-to-br from-[#8834e4] to-[#a056f5] rounded-xl mb-6 text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
