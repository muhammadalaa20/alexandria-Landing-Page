'use client'
import { easeInOut, motion } from 'framer-motion'
import { redirect, usePathname } from "next/navigation";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from 'next/link'
import Image from 'next/image'
export default function Des({ user, isAuthenticated}:{ user: any, isAuthenticated: boolean }) {
  const pathname = usePathname();
  return (
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'spring', ease: easeInOut, bounce: 0.4 }}
        className="text-2xl font-bold text-blue-600 flex items-center justify-center gap-4"
      >
        <Image src="/light.png" alt="Alexandria" width={500} height={500} className='rounded-full w-10'/> <h1>Alexandria</h1>
      </motion.div>
      <nav className="space-x-4 p-3">
        <Link href="#home" className="text-gray-600 hover:text-blue-600 p-3 font-bold">Home</Link>
        <Link href="#about" className="text-gray-600 hover:text-blue-600 p-3 font-bold">About</Link>
        <Link href="#services" className="text-gray-600 hover:text-blue-600 p-3 font-bold">Services</Link>
        <Link href="#contact" className="text-gray-600 hover:text-blue-600 p-3 font-bold">Contact</Link>
        { isAuthenticated ? <LogoutLink className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none">Log out</LogoutLink>
            : '' }
      </nav>
      {!isAuthenticated && pathname === '/home' && redirect('/')}
    </div>
  )
}
