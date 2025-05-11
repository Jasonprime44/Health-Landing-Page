"use client"

import { motion } from "framer-motion"
import { Calendar, Bell, BarChart3 } from "lucide-react"

export function HowItWorksSection() {
  return (
    <section className="py-32 relative z-10 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#5D55FF]/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#5D55FF]/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-24 text-center"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">HOW IT WORKS</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[28px] md:left-[50%] md:ml-[-1px] top-0 bottom-0 w-2 bg-black rounded-full z-0"></div>

          <div className="space-y-24 relative z-10">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-start"
            >
              {/* Number circle */}
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center text-black text-2xl font-bold z-10">
                1
              </div>

              {/* Content box */}
              <div className="ml-6 md:ml-10 flex-1">
                <div className="bg-[#131330]/80 backdrop-blur-md border border-[#5D55FF]/20 rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(93,85,255,0.2)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(93,85,255,0.3)]">
                  <div className="flex items-center p-4 border-b border-[#5D55FF]/10">
                    <div className="w-10 h-10 rounded-full bg-[#5D55FF]/20 flex items-center justify-center mr-4">
                      <Calendar className="w-5 h-5 text-[#5D55FF]" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">CONNECT CALENDAR</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-white/80 text-lg">
                      Secure, 2‑click integration with your existing scheduling system. No technical knowledge
                      required—just authorize access and we handle the rest.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start md:flex-row-reverse"
            >
              {/* Number circle */}
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center text-black text-2xl font-bold z-10">
                2
              </div>

              {/* Content box */}
              <div className="ml-6 md:mr-10 md:ml-0 flex-1">
                <div className="bg-[#131330]/80 backdrop-blur-md border border-[#5D55FF]/20 rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(93,85,255,0.2)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(93,85,255,0.3)]">
                  <div className="flex items-center p-4 border-b border-[#5D55FF]/10">
                    <div className="w-10 h-10 rounded-full bg-[#5D55FF]/20 flex items-center justify-center mr-4">
                      <Bell className="w-5 h-5 text-[#5D55FF]" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">AUTOMATE REMINDERS</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-white/80 text-lg">
                      SMS, email & voice reminders go out automatically—no staff overhead. Patients confirm with one
                      click, and our AI handles rescheduling requests.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-start"
            >
              {/* Number circle */}
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center text-black text-2xl font-bold z-10">
                3
              </div>

              {/* Content box */}
              <div className="ml-6 md:ml-10 flex-1">
                <div className="bg-[#131330]/80 backdrop-blur-md border border-[#5D55FF]/20 rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(93,85,255,0.2)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(93,85,255,0.3)]">
                  <div className="flex items-center p-4 border-b border-[#5D55FF]/10">
                    <div className="w-10 h-10 rounded-full bg-[#5D55FF]/20 flex items-center justify-center mr-4">
                      <BarChart3 className="w-5 h-5 text-[#5D55FF]" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">TRACK RESULTS</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-white/80 text-lg">
                      Real‑time dashboard shows 40% fewer no‑shows and more revenue. Monitor patient engagement,
                      appointment confirmations, and financial impact at a glance.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
