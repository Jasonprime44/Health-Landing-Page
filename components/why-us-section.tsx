"use client"

import { motion } from "framer-motion"

export function WhyUsSection() {
  return (
    <section className="bg-black py-32 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-24 text-center"
        >
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Why Us</h3>
        </motion.div>

        <div className="space-y-20">
          {/* USP 1 - Rapid ROI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col md:flex-row items-start gap-8 justify-center"
          >
            <div className="text-white text-8xl md:text-9xl font-bold">*</div>
            <div className="max-w-2xl">
              <h4 className="text-3xl md:text-4xl font-bold mb-6 text-white uppercase tracking-tight">
                RAPID ROI IN 30 DAYS
              </h4>
              <p className="text-white/80 text-xl">
                See fewer no‑shows, more booked slots—and pay for itself in one month. Our automation system delivers
                measurable results from day one.
              </p>
            </div>
          </motion.div>

          {/* USP 2 - HIPAA-Compliant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row items-start gap-8 justify-center"
          >
            <div className="text-white text-8xl md:text-9xl font-bold">*</div>
            <div className="max-w-2xl">
              <h4 className="text-3xl md:text-4xl font-bold mb-6 text-white uppercase tracking-tight">
                HIPAA‑COMPLIANT & SECURE
              </h4>
              <p className="text-white/80 text-xl">
                Your patient data stays fully protected under the strictest privacy standards. We maintain end-to-end
                encryption and regular security audits.
              </p>
            </div>
          </motion.div>

          {/* USP 3 - Plug-&-Play Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col md:flex-row items-start gap-8 justify-center"
          >
            <div className="text-white text-8xl md:text-9xl font-bold">*</div>
            <div className="max-w-2xl">
              <h4 className="text-3xl md:text-4xl font-bold mb-6 text-white uppercase tracking-tight">
                PLUG‑&‑PLAY INTEGRATION
              </h4>
              <p className="text-white/80 text-xl">
                Works with any EHR/EMR system—no dev work, no downtime. Our system connects seamlessly with your
                existing tools in minutes, not weeks.
              </p>
            </div>
          </motion.div>

          {/* USP 4 - White-Glove Onboarding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row items-start gap-8 justify-center"
          >
            <div className="text-white text-8xl md:text-9xl font-bold">*</div>
            <div className="max-w-2xl">
              <h4 className="text-3xl md:text-4xl font-bold mb-6 text-white uppercase tracking-tight">
                WHITE‑GLOVE ONBOARDING
              </h4>
              <p className="text-white/80 text-xl">
                Dedicated specialist + training to have you live in 72 hours. We handle the entire setup process so your
                team can focus on patient care.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
