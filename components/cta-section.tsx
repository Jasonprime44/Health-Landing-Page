"use client"

import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-32 relative z-10 bg-gradient-to-b from-[#0a0a1a] to-[#0f1a3a]">
      <div className="container mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white/70 mb-4"
        >
          No credit card required.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 max-w-4xl mx-auto leading-tight text-white"
        >
          Get started today with a 30min call with Us
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block"
        >
          <button className="bg-[#E8D0A9] text-[#333333] rounded-sm px-5 py-3 hover:bg-[#d9c299] transition-all duration-300 ease-in-out w-40">
            Book Now <span className="inline-block ml-1">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
