// src/Gallery.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

import Img5 from "../assets/Img5.jpg";
import Img7 from "../assets/Img7.jpg";
import Img8 from "../assets/Img8.jpg";
import Img9 from "../assets/Img9.jpg";
import Img10 from "../assets/Img10.jpg";
import Img11 from "../assets/Img11.jpg";
import Img12 from "../assets/Img12.jpg";
import Img13 from "../assets/Img13.jpg";
import Img14 from "../assets/Img14.jpg";

// Main App Component
export default function App() {
  return <GalleryPage />;
}

// Reusable ParallaxImage component
const ParallaxImage = ({ src, alt, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
};

// Marquee Text Component
const MarqueeText = ({ text, className }) => {
  const repeatedText = `${text} • `.repeat(5);

  return (
    <div className="w-full overflow-hidden whitespace-nowrap mb-12 sm:mb-16 md:mb-20">
      <motion.div
        className={className}
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeatedText}
      </motion.div>
    </div>
  );
};

// Main Gallery Page Component
const GalleryPage = () => {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, amount: 0.3 });

  return (
    <div className="bg-[#FDFDFD] text-gray-800 font-sans">
      {/* Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Karla:wght@300;400&display=swap');
          .font-serif { font-family: 'Cormorant Garamond', serif; }
          .font-sans-body { font-family: 'Karla', sans-serif; }
        `}
      </style>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        {/* Marquee Intro */}
        <section>
          <MarqueeText
            text="EVERLASTING LOVE • TIMELESS MEMORIES • ELEGANT CELEBRATIONS"
            className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-serif text-purple-200 uppercase tracking-tighter"
          />
        </section>

        {/* Hero Section */}
        <section className="mb-12 sm:mb-20 md:mb-32 flex justify-center relative">
          <div className="w-full sm:w-5/6 md:w-4/5 lg:w-3/5">
            <ParallaxImage
              src={Img7}
              alt="Bride and groom cinematic moment"
              className="h-[300px] sm:h-[400px] md:h-[600px] lg:h-[700px] w-full"
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none px-2"
            >
              <h1 className="text-white text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-serif uppercase tracking-widest text-center">
                Celebrate Love
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Gallery Intro */}
        <section className="text-center max-w-2xl mx-auto mb-12 sm:mb-20 md:mb-32 px-2">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6"
          >
            Gallery
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-sans-body text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed"
          >
            Step into our world of unforgettable celebrations, where every photograph tells the story of love,
            laughter, and timeless memories. From intimate moments to grand celebrations, our gallery reflects
            the artistry and elegance of weddings we’ve had the honor to plan.
          </motion.p>
        </section>

        {/* Editorial Grid Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center mb-12 sm:mb-20 md:mb-32">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <ParallaxImage src={Img7} alt="Couple kissing in black and white" className="h-[250px] sm:h-[350px] md:h-[500px]" />
            <ParallaxImage src={Img8} alt="Lush estate with a fountain" className="h-[200px] sm:h-[300px] md:h-[400px]" />
          </div>
          <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:pt-16 md:pt-24">
            <ParallaxImage src={Img9} alt="Couple with vintage car" className="h-[200px] sm:h-[300px] md:h-[400px]" />
            <ParallaxImage src={Img10} alt="Bride in a white dress in a doorway" className="h-[250px] sm:h-[350px] md:h-[500px]" />
          </div>
        </section>

        {/* Refined Storytelling */}
        <section className="text-center my-12 sm:my-20 md:my-40 px-2">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-9xl uppercase tracking-tighter relative"
          >
            <span
              className="absolute -top-8 sm:-top-12 left-1/2 -translate-x-1/2 text-xl sm:text-3xl md:text-5xl lg:text-7xl text-purple-200"
              style={{ WebkitTextStroke: "1px #D9B1FF", color: "transparent" }}
            >
              REFINED
            </span>
            STORYTELLING
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-9xl uppercase tracking-tighter"
          >
            WITH AN
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-9xl uppercase tracking-tighter"
          >
            EDITORIAL EDGE
          </motion.h2>
        </section>

        {/* Stories Showcase */}
        <section className="bg-black text-white py-12 sm:py-20 md:py-32 px-4">
          <div className="container mx-auto">
            {/* Story 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-20">
              <ParallaxImage src={Img11} alt="Wedding ceremony" className="h-[300px] sm:h-[400px] md:h-[500px]" />
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-center md:text-left px-2"
              >
                <h4 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl uppercase">Two Days of Elegance</h4>
                <h5 className="font-serif text-xl sm:text-2xl md:text-4xl lg:text-5xl uppercase mb-2 sm:mb-4">Featured in Vogue</h5>
                <p className="font-sans-body mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
                  Roman, Brazilian and Spirit: Tosea and Paulo's Unforgettable Wedding Celebration in Italy
                </p>
                <a
                  href="#"
                  className="font-sans-body inline-block border rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-xs sm:text-sm md:text-base"
                >
                  DISCOVER ↗
                </a>
              </motion.div>
            </div>

            {/* Story 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-8 md:gap-12">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-center md:text-left order-2 md:order-1 px-2"
              >
                <h4 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl uppercase">Timeless Romance</h4>
                <h5 className="font-serif text-xl sm:text-2xl md:text-4xl lg:text-5xl uppercase mb-2 sm:mb-4">at Villa Erba</h5>
                <p className="font-sans-body mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
                  An elegant love story that unfolded at Lake Como's most sought-after setting, Villa Erba.
                </p>
                <a
                  href="#"
                  className="font-sans-body inline-block border rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-xs sm:text-sm md:text-base"
                >
                  DISCOVER ↗
                </a>
              </motion.div>
              <ParallaxImage
                src={Img12}
                alt="Couple by a vintage car at a villa"
                className="h-[300px] sm:h-[400px] md:h-[500px] order-1 md:order-2"
              />
            </div>
          </div>
        </section>

        {/* Let's Connect */}
        <section className="text-center py-12 sm:py-20 md:py-40 px-2">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-9xl uppercase tracking-tighter mb-6 sm:mb-8"
          >
            Let's Connect
          </motion.h2>
          <a
            href="#"
            className="font-sans-body inline-block border border-black rounded-full w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 flex items-center justify-center hover:bg-black hover:text-white transition-colors text-xs sm:text-sm md:text-lg uppercase"
          >
            BOOK NOW ↗
          </a>
        </section>

        {/* Final Photo Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
          <ParallaxImage src={Img13} alt="Bride close up" className="h-[200px] sm:h-[300px] md:h-[400px]" />
          <ParallaxImage src={Img14} alt="Couple cutting cake" className="h-[200px] sm:h-[300px] md:h-[400px]" />
          <ParallaxImage src={Img5} alt="View of a lake with a boat" className="h-[200px] sm:h-[300px] md:h-[400px]" />
        </section>
      </main>
    </div>
  );
};
