'use client';
import { motion } from 'framer-motion'
import { redirect, usePathname } from "next/navigation";

export default function Home({ user, isAuthenticated }: { user: any, isAuthenticated: boolean }) {
    const pathname = usePathname();
    return (
        <main className="py-16">
            <section id="about" className="container mx-auto px-6 py-12">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-3xl font-bold text-gray-800"
                >
                    About Alexandria
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mt-4 text-gray-600"
                >
                    Alexandria is a Mediterranean port city in Egypt founded by Alexander the Great. It was once the site of the legendary Lighthouse of Alexandria, one of the Seven Wonders of the Ancient World. The city is also home to the Bibliotheca Alexandrina, a major cultural center.
                </motion.p>
            </section>
            <section id="services" className="container mx-auto px-6 py-12 bg-gray-100">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-3xl font-bold text-gray-800"
                >
                    Our Services
                </motion.h2>
                <div className="mt-8 flex flex-wrap -mx-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-full md:w-1/3 px-4 mb-8"
                    >
                        <div className="bg-white p-6 rounded-lg shadow-lg min-h-[180px]">
                            <h3 className="text-xl font-bold text-gray-800">Tour Guides</h3>
                            <p className="mt-2 text-gray-600">
                                Experience Alexandria with our knowledgeable tour guides.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="w-full md:w-1/3 px-4 mb-8"
                    >
                        <div className="bg-white p-6 rounded-lg shadow-lg min-h-[180px]">
                            <h3 className="text-xl font-bold text-gray-800">Cultural Events</h3>
                            <p className="mt-2 text-gray-600">
                                Attend cultural events and exhibitions in Alexandria.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="w-full md:w-1/3 px-4 mb-8"
                    >
                        <div className="bg-white p-6 rounded-lg shadow-lg min-h-[180px]">
                            <h3 className="text-xl font-bold text-gray-800">Accommodation</h3>
                            <p className="mt-2 text-gray-600">
                                Find the best places to stay in Alexandria.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
