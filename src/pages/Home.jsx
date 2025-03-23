import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Texto principal centralizado na tela */}
      <motion.div
        className="relative z-10 bg-black/80 p-6 rounded-lg shadow-lg text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-white text-5xl md:text-7xl font-bold">
          Olá, eu sou João!
        </h1>
      </motion.div>
    </div>
  );
};

export default Home;