import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Presentation = () => {
  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center text-white overflow-hidden">
      {/* Código sendo digitado */}
      <motion.div 
        className="absolute top-10 left-10 text-green-400 text-lg font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typewriter
          options={{
            strings: [
              "function greet() {",
              "  console.log('Hello, World!');",
              "}",
              "greet();",
            ],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 20,
          }}
        />
      </motion.div>

      {/* Apresentação no centro */}
      <motion.div 
        className="absolute flex flex-col items-center justify-center text-center p-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4">Olá, Eu Sou João Vitor</h1>
        <p className="text-lg text-gray-300 mb-6">Desenvolvedor Front-End apaixonado por tecnologia.</p>
        <motion.a 
          href="#projetos"
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white text-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Meus Projetos
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Presentation;
