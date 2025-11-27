import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1552566626-52f8b828add9",
  "https://images.unsplash.com/photo-1518770660439-4636190af475",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
];

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[300px] md:h-[420px] overflow-hidden rounded-3xl shadow-lg">
      <motion.div
        className="flex h-full"
        animate={{ x: `-${index * 100}%` }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i}`}
            className="w-full h-full object-cover shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ImageCarousel;
