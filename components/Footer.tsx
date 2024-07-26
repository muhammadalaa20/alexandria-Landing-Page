'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';
export default function Footer() {
  const ref = useRef(null);
  return (
    <footer ref={ref} className="bg-gray-800 text-gray-100 py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-6 md:mb-0">
            <motion.h3
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-2xl font-bold text-center xl:text-start lg:text-start md:text-start sm:text-center"
            >
              Alexandria
            </motion.h3>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-2 text-gray-400 text-sm"
            >
              The Pearl of the Mediterranean
            </motion.p>
          </div>
          <div className="flex space-x-4">
            <motion.a
              href="#"
              target="_blank"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook size={24} />
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 hover:text-white"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7 }}
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7 }}
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter size={24} />
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7 }}
              className="text-gray-400 hover:text-white"
            >
              <FaYoutube size={24} />
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center border-t border-gray-700 pt-6"
        >
          <p className="text-blue-600 order-2 text-[8px] md:text-sm md:mt-0 mt-5">&copy; {new Date().getFullYear()} Alexandria. All rights reserved.</p>
          <div className="order-1 flex flex-col md:flex-row gap-3">
            <Link href="#home" className="text-gray-400 hover:text-white">Home</Link>
            <Link href="#about" className="text-gray-400 hover:text-white">About</Link>
            <Link href="#services" className="text-gray-400 hover:text-white">Services</Link>
            <Link href="#contact" className="text-gray-400 hover:text-white">Contact</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
