import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

// ✅ Local Assets Import
import Img2 from "../assets/Img2.png";
import Img9 from "../assets/Img9.jpg";
import Img4 from "../assets/Img4.jpg";
import Img6 from "../assets/Img6.jpg";
import Video from "../assets/video.mp4"; // 👈 apna video import

// Main App Component
export default function App() {
  return <AboutPage />;
}

// ✅ Reusable ParallaxImage (for images)
const ParallaxImage = ({ src, alt, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

// ✅ Zoom + Parallax (Image or Video handle karega)
const ZoomParallaxMedia = ({ type = "image", src, alt, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      {type === "video" ? (
        <motion.video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          style={{ y, scale }}
          className="w-full h-full object-cover will-change-transform"
        />
      ) : (
        <motion.img
          src={src}
          alt={alt}
          style={{ y, scale }}
          className="w-full h-full object-cover will-change-transform"
        />
      )}
    </div>
  );
};

// ✅ Marquee Text Component
const MarqueeText = () => {
  const text = "ELEGANT, TIMELESS, MEMORABLE";
  const repeatedText = `${text} • ${text} • ${text} • ${text} • `;

  return (
    <div className="w-full overflow-hidden whitespace-nowrap py-8 sm:py-12 md:py-24">
      <motion.div
        className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-serif text-gray-800 uppercase tracking-tighter"
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {repeatedText}
      </motion.div>
    </div>
  );
};

// ✅ Main About Page Component
const AboutPage = () => {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, amount: 0.3 });

  return (
    <div className="bg-[#FDFDFD] text-gray-800 font-sans">
      {/* Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Karla:wght@300;400&display=swap');
          .font-serif { font-family: 'Cormorant Garamond', serif; }
          .font-sans-body { font-family: 'Karla', sans-serif; }
        `}
      </style>
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        
        {/* Featured On */}
        <motion.section 
          className="text-center mb-12 sm:mb-20 md:mb-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 mb-6 sm:mb-8">
            Featured On
          </h2>
          <div className="flex justify-center items-center space-x-4 sm:space-x-6 md:space-x-12 flex-wrap">
            {['The Knot', 'WeddingWire', 'WedMeGood', 'ShaadiSaga', 'Weddingz.in'].map((brand) => (
              <span key={brand} className="font-serif text-xl sm:text-2xl md:text-4xl tracking-wider">
                {brand}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Intro Section */}
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-16 items-start mb-12 sm:mb-20 md:mb-32">
          <div className="lg:col-span-2 w-full pt-8 sm:pt-12 md:pt-16 order-2 lg:order-1">
            <ParallaxImage src={Img4} alt="Wedding dress" className="h-[250px] sm:h-[350px] md:h-[500px] w-full" />
          </div>
          <div className="lg:col-span-3 w-full order-1 lg:order-2">
            <ParallaxImage src={Img6} alt="Couple with vintage car" className="h-[300px] sm:h-[450px] md:h-[600px] w-full" />
          </div>
        </section>

        {/* Text Section */}
        <section ref={textRef} className="max-w-4xl mx-auto text-center mb-12 sm:mb-20 md:mb-32 px-2">
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-sans-body text-gray-700"
            style={{
              transform: isInView ? "none" : "translateY(30px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
            }}
          >
            <span className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl float-left mr-2 sm:mr-4 -mt-1 sm:-mt-2">
              W
            </span>
            With «Wedding Box», we bring your dream celebration to life. From timeless décor to flawless coordination, our passion lies in creating weddings that are as unique as your love story. Every detail is planned with care, ensuring your special day is seamless, elegant, and unforgettable.
          </motion.p>
        </section>

        {/* Photographer Section */}
        <section className="mb-12 sm:mb-20 md:mb-32 flex justify-center">
          <div className="w-full sm:w-5/6 md:w-4/5 lg:w-3/5">
            <ParallaxImage src={Img2} alt="Photographer" className="h-[300px] sm:h-[400px] md:h-[600px] lg:h-[700px] w-full" />
          </div>
        </section>

        {/* Marquee */}
        <section>
          <MarqueeText />
        </section>

        {/* Final Section with VIDEO instead of image */}
        <section className="mt-4">
          <ZoomParallaxMedia 
            type="video"
            src={Video} 
            className="h-[300px] sm:h-[500px] md:h-[700px] lg:h-[100vh] w-full"
          />
        </section>

      </main>
    </div>
  );
};
