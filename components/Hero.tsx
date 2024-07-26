'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-cover bg-center min-h-[90vh] flex items-center justify-center" style={{ backgroundImage: 'url(/bg.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center relative z-10">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-white"
        >
          Welcome to Alexandria
        </motion.h1>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-4 text-xl text-white"
        >
          Explore the Pearl of the Mediterranean
        </motion.p>
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg"
        >
          Discover More
        </motion.button>
      </div>
    </section>
  );
}