import React from 'react';
import { motion } from 'framer-motion';

// Main App Component to render the Footer
export default function App() {
  return <Footer />;
}

// Reusable component for animating text word by word with a twist
const AnimatedTextWord = ({ text, className }) => {
    const container = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
    };
    const child = {
      hidden: { y: "110%", skewY: 5, opacity: 0 },
      visible: { y: 0, skewY: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    };
    return (
      <div className={className} style={{ overflow: 'hidden' }}>
        <motion.h1
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
        >
            {text.split(" ").map((word, index) => (
            <motion.span variants={child} style={{ display: "inline-block", marginRight: "0.25em" }} key={index}>
                {word}
            </motion.span>
            ))}
        </motion.h1>
      </div>
    );
};


// Main Footer Component
const Footer = () => {
    const footerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const menuLinks = ["Home", "Portfolio", "Stories", "Photobook", "About Us"];
    const infoLinks = ["Contact Us", "FAQs"];

  return (
    <footer className="bg-[#fdfaf6] text-[#1a1a1a] font-sans">
       <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Karla:wght@300;400&display=swap');
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-sans-body { font-family: 'Karla', sans-serif; }
      `}</style>

      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 overflow-hidden"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <span className="font-serif text-8xl tracking-tighter">Samrateq</span>
            <span className="font-sans-body text-gray-500 mt-4">© 2024</span>
          </motion.div>

          {/* Links Section */}
          <motion.div variants={itemVariants} className="flex justify-center md:gap-24 gap-12">
            <div>
              <h4 className="font-serif text-2xl mb-4">Menu</h4>
              <ul className="space-y-2">
                {menuLinks.map(link => (
                  <motion.li key={link} whileHover={{x:5}} transition={{type:'spring', stiffness:300}}>
                    <a href="#" className="font-sans-body text-gray-600 hover:text-black transition-colors">{link}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-2xl mb-4">Info</h4>
              <ul className="space-y-2">
                {infoLinks.map(link => (
                   <motion.li key={link} whileHover={{x:5}} transition={{type:'spring', stiffness:300}}>
                    <a href="#" className="font-sans-body text-gray-600 hover:text-black transition-colors">{link}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* Watermark Section */}
           <motion.div variants={itemVariants} className="flex items-end justify-center md:justify-end">
             <span className="font-sans-body text-gray-400 text-sm">Design by Samra Ateeque</span>
           </motion.div>
        </div>
        
        <div className="text-center mt-24">
             <AnimatedTextWord 
                text="INVEST IN THE WEDBOX" 
                className="font-serif text-5xl md:text-8xl lg:text-9xl uppercase tracking-tighter"
            />
        </div>

      </motion.div>
    </footer>
  );
};
