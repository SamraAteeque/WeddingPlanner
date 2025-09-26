import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Img1 from '../assets/Img1.png'
// --- Icon Components (inlined SVGs for portability) ---
const User = ({ size = 20, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

const Sparkles = ({ size = 20, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m12 3-1.9 5.8-5.8 1.9 5.8 1.9 1.9 5.8 1.9-5.8 5.8-1.9-5.8-1.9Z" />
    </svg>
);

const Camera = ({ size = 20, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
    </svg>
);

const Briefcase = ({ size = 20, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
);

// ✅ --- Hamburger Menu Icon ---
const MenuIcon = ({ isOpen }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
            d="M3 12H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            variants={{ open: { rotate: 45, y: 0 }, closed: { rotate: 0, y: 0 } }}
        />
        <motion.path
            d="M3 6H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}
        />
        <motion.path
            d="M3 18H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            variants={{ open: { rotate: -45, y: 0 }, closed: { rotate: 0, y: 0 } }}
        />
    </svg>
);


// --- Helper Components ---

// A reusable animated card for the services
const ServiceCard = ({ icon, title, subtitle, price, position, delay }) => {
  return (
    <motion.div
      className={`absolute ${position} bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg w-52 md:w-64 border border-white/20`}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{
        default: { duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] },
        y: {
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + Math.random() * 1.5,
        }
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-white p-2 rounded-full shadow-inner-sm">
            {icon}
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 text-sm">{title}</h4>
            <p className="text-gray-500 text-xs">{subtitle}</p>
          </div>
        </div>
        {price && (
          <div className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded-md">
            {price}
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Component for the animated falling blossom petals
const FallingBlossom = ({ style, delay }) => {
    return (
        <motion.div
            className="absolute top-[-5%]"
            style={style}
            initial={{ y: "-10vh", opacity: 0 }}
            animate={{ 
                y: "120vh", 
                opacity: [0, 1, 1, 0], 
                x: [0, 20, -20, 0, 30, -10],
                rotate: [0, 180, 360, 270, 0],
            }}
            transition={{
                duration: 12 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
                delay: delay,
            }}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C11.3 2 10.6 2.3 10.1 2.8C8.9 4.1 9.1 6.2 10.3 7.3L12 9L13.7 7.3C14.9 6.2 15.1 4.1 13.9 2.8C13.4 2.3 12.7 2 12 2Z" fill="#FBCFE8"/>
                <path d="M21.2 10.1C21.7 10.6 22 11.3 22 12C22 12.7 21.7 13.4 21.2 13.9C19.9 15.1 17.8 14.9 16.7 13.7L15 12L16.7 10.3C17.8 9.1 19.9 8.9 21.2 10.1Z" fill="#FBCFE8"/>
                <path d="M2.8 10.1C1.6 11.3 1.4 13.5 2.5 14.6L7.3 13.7L9 12L7.3 10.3C6.2 9.1 4.1 8.9 2.8 10.1Z" fill="#FBCFE8" fillOpacity="0.7"/>
                <path d="M13.7 16.7C14.9 17.8 15.1 19.9 13.9 21.2C13.4 21.7 12.7 22 12 22C11.3 22 10.6 21.7 10.1 21.2C8.9 19.9 9.1 17.8 10.3 16.7L12 15L13.7 16.7Z" fill="#FBCFE8" fillOpacity="0.7"/>
                <path d="M10.3 10.3C9.1 11.4 8.9 13.5 10.1 14.8C10.6 15.3 11.3 15.6 12 15.6C12.7 15.6 13.4 15.3 13.9 14.8C15.1 13.5 14.9 11.4 13.7 10.3L12 12L10.3 10.3Z" fill="#F9A8D4"/>
            </svg>
        </motion.div>
    );
};


// --- Main Hero Component ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['Home','About', 'Clients', 'For Vendors'];

  const serviceCardsData = [
    { icon: <Sparkles size={20} className="text-pink-500" />, title: "Wedding Venue Booking", subtitle: "245 offers", price: "from $50", position: "top-1/4 -left-16 md:-left-24 lg:-left-4", delay: 0.8 },
    { icon: <Camera size={20} className="text-blue-500" />, title: "Venue & Decoration", subtitle: "12,245 offers", position: "top-1/2 -translate-y-1/2 -left-24 md:-left-32 lg:-left-20", delay: 1.0 },
    { icon: <Briefcase size={20} className="text-green-500" />, title: "Food & Hospitality", subtitle: "321 offers", price: "from $25", position: "bottom-1/4 -left-12 md:-left-20 lg:left-0", delay: 1.2 },
    { icon: <User size={20} className="text-purple-500" />, title: "Photography & Entertainment", subtitle: "245 offers", price: "from $200", position: "top-1/3 -right-20 md:-right-28 lg:right-0", delay: 0.9 },
    { icon: <Sparkles size={20} className="text-red-500" />, title: "Other Important Services", subtitle: "245 offers", price: "from $50", position: "bottom-1/4 -right-16 md:-right-24 lg:right-4", delay: 1.1 },
  ];
  
  const blossoms = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      style: {
          left: `${Math.random() * 100}%`,
          transform: `scale(${Math.random() * 0.5 + 0.7})`,
      },
      delay: Math.random() * 12,
  }));
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-400, 400], [5, -5]);
  const rotateY = useTransform(x, [-400, 400], [-5, 5]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };
  
  const headline = "Start your journey to the perfect wedding with «Wedding Box»";
  const headlineWords = headline.split(" ");
  
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { type: 'spring', stiffness: 100, damping: 10 }
    },
  };

  const mobileMenuVariants = {
    open: {
        x: 0,
        transition: { staggerChildren: 0.1, delayChildren: 0.2, type: 'spring', stiffness: 120 }
    },
    closed: {
        x: "100%",
        transition: { staggerChildren: 0.05, staggerDirection: -1, when: "afterChildren", type: 'spring', stiffness: 120 }
    }
  }

  const mobileMenuItemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 100 }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: { type: 'spring', stiffness: 100 }
    }
  }

  return (
    <motion.div 
      className="relative w-full min-h-screen bg-gradient-to-br from-rose-50 to-amber-50 font-sans overflow-x-hidden" // Changed overflow to overflow-x-hidden
      onMouseMove={handleMouseMove}
    >
      
      {blossoms.map(blossom => (
          <FallingBlossom key={blossom.id} style={blossom.style} delay={blossom.delay} />
      ))}

      <header className="absolute top-0 left-0 right-0 z-40 p-6 md:p-8">
        <div className="container mx-auto flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Wedding Box
          </motion.div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-gray-600">
            {navItems.map((item, index) => (
              <motion.a key={item} href="#" className="hover:text-gray-900 transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          
          <motion.div className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex -space-x-2">
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User"/>
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User"/>
            </div>
            <div className="hidden sm:block text-sm">
              <div className="font-semibold text-gray-800">Natalia & Eugene</div>
              <div className="text-gray-500">65 days to wedding</div>
            </div>
          </motion.div>

           {/* ✅ Mobile Menu Button */}
          <motion.div className="md:hidden z-50 text-gray-800" animate={isMenuOpen ? "open" : "closed"}>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <MenuIcon isOpen={isMenuOpen} />
            </button>
          </motion.div>

        </div>
      </header>
       
      {/* ✅ Mobile Menu */}
      <motion.div 
        className="md:hidden fixed top-0 right-0 w-full h-full bg-rose-50/80 backdrop-blur-lg z-30"
        variants={mobileMenuVariants}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        >
        <motion.ul className="flex flex-col items-center justify-center h-full space-y-8 text-2xl text-gray-800 font-semibold">
            {navItems.map(item => (
                <motion.li key={item} variants={mobileMenuItemVariants}>
                    <a href="#" onClick={() => setIsMenuOpen(false)}>{item}</a>
                </motion.li>
            ))}
        </motion.ul>
      </motion.div>
      
      <main className="container mx-auto px-6 min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center lg:justify-items-start gap-12 relative z-10 pt-32 pb-16 lg:pt-0 lg:pb-0">
        
        {/* Text content */}
        <div className="text-center lg:text-left relative z-20">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
             {headlineWords.map((word, i) => (
                <motion.span key={i} variants={wordVariants} className="inline-block mr-3">
                    {word}
                </motion.span>
              ))}
          </motion.h1>
          <motion.p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.0 }}
          >
            Easily find local specialists with reviews, prices, availability, and more.
          </motion.p>
          <motion.div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }}
          >
              <motion.button className="relative w-full sm:w-auto bg-amber-400 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-amber-500 transition-transform transform hover:scale-105 overflow-hidden">
                <span className="relative z-10">Plan My Wedding</span>
                <motion.div
                    className="absolute inset-0 bg-white/30"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 2 }}
                />
            </motion.button>
          </motion.div>
        </div>
        
        {/* Image content */}
        <div className="relative w-full h-full flex justify-center items-center min-h-[400px] lg:min-h-0">
            <motion.div 
              className="w-full h-full flex justify-center items-center"
              style={{ perspective: 800 }}
            >
             <motion.div 
                className="relative"
                style={{ rotateX, rotateY }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <img src={Img1} alt="Bride" className="w-[280px] sm:w-[350px] lg:w-[400px] object-contain rounded-full shadow-2xl"/>
            </motion.div>
            
            <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-white/50 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-[60%] -translate-y-[40%] w-80 h-80 md:w-[450px] md:h-[450px] border-4 border-white/50 rounded-full"></div>
             </motion.div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl z-20 transform scale-[0.65] sm:scale-75 md:scale-90 lg:scale-100">
              {serviceCardsData.map(card => <ServiceCard key={card.title} {...card} />)}
            </div>
            </motion.div>
        </div>

      </main>
    </motion.div>
  );
}

