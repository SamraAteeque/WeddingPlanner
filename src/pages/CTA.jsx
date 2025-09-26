import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

import Img1 from "../assets/Img1.png";
import Img2 from "../assets/Img2.png";
import Img3 from "../assets/Img3.png";
import Img4 from "../assets/Img4.jpg";
import Img5 from "../assets/Img5.jpg";
import Img6 from "../assets/Img6.jpg";
import Img7 from "../assets/Img7.jpg";

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

export default function App() {
  return <CTAPage />;
}

// Custom Cursor (hidden on small screens)
const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 5);
      cursorY.set(e.clientY - 5);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-3 h-3 bg-black rounded-full pointer-events-none z-50 hidden md:block"
      style={{ translateX: cursorXSpring, translateY: cursorYSpring }}
    />
  );
};

// Animated Text Word by Word
const AnimatedTextWord = ({ text, className }) => {
  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
  const child = { hidden: { y: '110%', skewY: 5, opacity: 0 }, visible: { y: 0, skewY: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22,1,0.36,1] } } };

  return (
    <div className={className} style={{ overflow: 'hidden' }}>
      <motion.h1 variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }}>
        {text.split(' ').map((word, index) => (
          <motion.span variants={child} style={{ display: 'inline-block', marginRight: '0.25em' }} key={index}>
            {word}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

// Animated Input
const AnimatedInput = ({ label, placeholder, className='' }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <motion.div 
      className={`relative flex-grow ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.8 }}
    >
      <span className="font-sans-body text-gray-500">{label}</span>
      <input
        type="text"
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full pt-2 pb-2 bg-transparent outline-none font-serif text-lg md:text-xl placeholder-gray-300"
      />
      <motion.div className="absolute bottom-0 left-0 h-[1px] w-full bg-gray-200"/>
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] w-full bg-black"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.22,1,0.36,1] }}
        style={{ transformOrigin: 'left' }}
      />
    </motion.div>
  );
};

// CTA Page
const CTAPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formContainerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } } };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="bg-[#fdfaf6] text-[#1a1a1a] font-sans">
      <CustomCursor />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Karla:wght@300;400&display=swap');
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-sans-body { font-family: 'Karla', sans-serif; }
      `}</style>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 overflow-x-hidden">

        {/* Heading */}
        <section className="text-center mb-16 md:mb-24">
          <AnimatedTextWord text="INVEST IN THE WEDBOX" className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter"/>
        </section>

        {/* Form */}
        <motion.form 
          onSubmit={handleSubmit} 
          className="max-w-5xl mx-auto"
          variants={formContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="font-sans-body text-gray-500 mb-12">DEAR DANIELE & MARILIA,</p>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12 flex-wrap">
              <AnimatedInput label="I AM" placeholder="Your Name"/>
              <AnimatedInput label="MY INSTAGRAM ACCOUNT IS" placeholder="@username"/>
            </div>
            <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12 flex-wrap">
              <AnimatedInput label="I'M PLANNING MY WEDDING ON" placeholder="Date"/>
              <AnimatedInput label="AT" placeholder="Your Venue"/>
              <AnimatedInput label="FOR" placeholder="Number of Guests"/>
            </div>
            <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12 flex-wrap">
              <AnimatedInput label="MY WEDDING PLANNER IS" placeholder="Planner Name"/>
              <AnimatedInput label="I FOUND YOU ON" placeholder="e.g., Instagram, Vogue"/>
            </div>
            <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12">
              <AnimatedInput label="YOU CAN REACH ME AT" placeholder="Your E-mail"/>
            </div>
          </div>
          <p className="font-sans-body text-right text-gray-500 mt-12">THANK YOU.</p>

          {/* Submit Button */}
          <motion.div className="text-center mt-16">
            <motion.button 
              type="submit"
              className="font-sans-body relative inline-block border-2 border-black rounded-full w-40 sm:w-44 md:w-52 h-40 sm:h-44 md:h-52 flex items-center justify-center text-lg sm:text-xl md:text-2xl uppercase group overflow-hidden"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <AnimatePresence>
                {isSubmitted ? (
                  <motion.span
                    key="success"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute"
                  >
                    SENT!
                  </motion.span>
                ) : (
                  <motion.span
                    key="send"
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { delay: 0.8 } }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute inline-block transition-transform group-hover:rotate-6"
                  >
                    SEND ↗
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </motion.form>

        {/* Instagram Section */}
        <section className="py-24 md:py-40">
          <AnimatedTextWord text="Follow us on Instagram" className="font-serif text-4xl sm:text-5xl md:text-7xl uppercase tracking-tighter text-center mb-16"/>
          <div className="relative w-full overflow-hidden">
            <motion.div className="flex gap-4 md:gap-6" animate={{ x: ['0%', '-50%'] }} transition={{ ease:'linear', duration: 40, repeat: Infinity }}>
              {[...images, ...images].map((img, index) => (
                <div key={index} className="flex-shrink-0 w-40 sm:w-64 md:w-80 h-56 sm:h-80 md:h-96 rounded-2xl overflow-hidden group">
                  <img src={img} alt={`Instagram photo ${index+1}`} className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"/>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
};
