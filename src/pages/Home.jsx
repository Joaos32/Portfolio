import React from "react";
import { motion } from "framer-motion";
import MatrixRain from "../components/MatrixRain";

const Home = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      <MatrixRain />

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


//quero uma apresentação de programação onde apresente um codigo sendo digitado da esquerda para a direita com tipagem e continua, e no meio da tela fique minha apresentação com meu nome e com o butão dos meus projetos