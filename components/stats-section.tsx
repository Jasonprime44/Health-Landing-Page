"use client"

import { motion } from "framer-motion"

export function StatsSection() {
  return (
    <section className="w-full py-6 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stat Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#0F0F2A]/80 border border-[#5D55FF]/30 rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(93,85,255,0.15)] hover:shadow-[0_8px_30px_rgba(93,85,255,0.25)] transition-all duration-300 h-[120px]"
          >
            <div className="flex items-center h-full px-6">
              <div className="flex-shrink-0 mr-6">
                <div className="text-6xl font-bold bg-gradient-to-r from-[#5D55FF] to-[#8FFF00] bg-clip-text text-transparent leading-none whitespace-nowrap">
                  +20%
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-white whitespace-nowrap border-b border-[#5D55FF] inline-block pb-1 mb-1">
                    More Patient
                  </h3>
                  <p className="text-white/80 text-base whitespace-nowrap">Increased Patient Flow</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stat Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#0F0F2A]/80 border border-[#5D55FF]/30 rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(93,85,255,0.15)] hover:shadow-[0_8px_30px_rgba(93,85,255,0.25)] transition-all duration-300 h-[120px]"
          >
            <div className="flex items-center h-full px-6">
              <div className="flex-shrink-0 mr-6">
                <div className="text-6xl font-bold bg-gradient-to-r from-[#5D55FF] to-[#8FFF00] bg-clip-text text-transparent leading-none whitespace-nowrap">
                  -40%
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-white whitespace-nowrap border-b border-[#5D55FF] inline-block pb-1 mb-1">
                    Reduce No-Shows
                  </h3>
                  <p className="text-white/80 text-base whitespace-nowrap">Saves $2K+ Per Month</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stat Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#0F0F2A]/80 border border-[#5D55FF]/30 rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(93,85,255,0.15)] hover:shadow-[0_8px_30px_rgba(93,85,255,0.25)] transition-all duration-300 h-[120px]"
          >
            <div className="flex items-center h-full px-6">
              <div className="flex-shrink-0 mr-6">
                <div className="text-6xl font-bold bg-gradient-to-r from-[#5D55FF] to-[#8FFF00] bg-clip-text text-transparent leading-none whitespace-nowrap">
                  +15%
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-white whitespace-nowrap border-b border-[#5D55FF] inline-block pb-1 mb-1">
                    Patient Satisfaction
                  </h3>
                  <p className="text-white/80 text-base whitespace-nowrap">More Repeat Visits</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
