"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { WhyUsSection } from "@/components/why-us-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { StatsSection } from "@/components/stats-section"

export default function Home() {
  const statsRef = useRef<HTMLDivElement>(null)
  const whyUsRef = useRef<HTMLDivElement>(null)
  const howItWorksRef = useRef<HTMLDivElement>(null)
  const caseStudiesRef = useRef<HTMLDivElement>(null)
  const faqsRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    // Add stars/particles to background
    const createStars = () => {
      const starsContainer = document.getElementById("stars-container")
      if (!starsContainer) return

      for (let i = 0; i < 100; i++) {
        const star = document.createElement("div")
        star.classList.add("star")
        star.style.width = `${Math.random() * 2}px`
        star.style.height = star.style.width
        star.style.left = `${Math.random() * 100}%`
        star.style.top = `${Math.random() * 100}%`
        star.style.animationDuration = `${Math.random() * 50 + 10}s`
        star.style.animationDelay = `${Math.random() * 50}s`
        starsContainer.appendChild(star)
      }
    }

    createStars()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] to-[#0f0f2a] text-white overflow-hidden relative">
      <div id="stars-container" className="absolute inset-0 z-0 overflow-hidden"></div>

      {/* Hero Section with full viewport height */}
      <div className="min-h-screen flex flex-col relative">
        {/* Navigation */}
        <motion.nav
          className="container mx-auto py-6 relative z-10 flex justify-between items-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo on the left */}
          <div className="flex items-center">
            <span className="text-white text-xl font-medium flex items-center">
              <span className="text-white mr-1">✧</span>
              <span className="text-white">myoprocess</span>
            </span>
          </div>

          {/* Navigation links in the middle */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection(whyUsRef)}
              className="text-white/80 hover:text-white transition-colors duration-300"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection(howItWorksRef)}
              className="text-white/80 hover:text-white transition-colors duration-300"
            >
              How we work
            </button>
            <button
              onClick={() => scrollToSection(caseStudiesRef)}
              className="text-white/80 hover:text-white transition-colors duration-300"
            >
              Case studies
            </button>
            <button
              onClick={() => scrollToSection(faqsRef)}
              className="text-white/80 hover:text-white transition-colors duration-300"
            >
              FAQs
            </button>
          </div>

          {/* CTA button on the right */}
          <Button className="bg-[#E8D0A9] text-[#333333] rounded-sm px-5 py-3 hover:bg-[#d9c299] transition-all duration-300 ease-in-out">
            Let's Talk
          </Button>
        </motion.nav>

        {/* Main Hero Content */}
        <div className="flex-grow flex flex-col justify-start mt-8">
          <section className="container mx-auto text-center relative z-10">
            {/* Dotted grid background */}
            <div
              className="absolute inset-0 z-0 opacity-20"
              style={{
                backgroundImage: "radial-gradient(#5D55FF 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            ></div>

            {/* Purple glow effects */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-[#5D55FF]/20 rounded-full blur-[100px] -z-0"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5D55FF]/20 rounded-full blur-[100px] -z-0"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#5D55FF]/20 rounded-full blur-[100px] -z-0"></div>

            <div className="flex flex-col items-center max-w-5xl mx-auto px-4">
              <motion.div
                className="inline-block mb-6 relative z-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="px-6 py-2 rounded-full border border-[#5D55FF]/50 bg-[#0D0D20] hover:border-[#5D55FF]/80 transition-all duration-300">
                  <span className="text-sm font-medium bg-gradient-to-r from-[#5D55FF] to-[#8FFF00] bg-clip-text text-transparent">
                    Automate your Healthcare
                  </span>
                </div>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-8 leading-tight relative z-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Cut No-Shows by 40% & Attract
                <br />
                More Patients with Our
                <br />
                Automation System—
                <span className="text-[#8FFF00]">Includes $500 Free Gift</span>
              </motion.h1>

              <motion.p
                className="text-white/70 max-w-3xl mx-auto mb-10 text-lg relative z-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Our turnkey automation puts appointment reminders, follow‑ups and patient engagement on autopilot—so you
                see fewer no‑shows, happier patients, and more revenue.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10"
              >
                <Button className="bg-[#E8D0A9] text-[#333333] rounded-sm px-8 py-6 hover:bg-[#d9c299] transition-all duration-300 ease-in-out text-lg">
                  Let's Talk <span className="inline-block ml-2 transform -rotate-12">→</span>
                </Button>
              </motion.div>
            </div>

            {/* Stats Section */}
            <div className="mt-20 md:mt-32">
              <StatsSection />
            </div>
          </section>
        </div>
      </div>

      {/* Why Clinics Trust Us Section */}
      <div ref={whyUsRef}>
        <WhyUsSection />
      </div>

      {/* How It Works Section */}
      <div ref={howItWorksRef}>
        <HowItWorksSection />
      </div>

      {/* Case Study Teaser Section */}
      <section ref={caseStudiesRef} className="container mx-auto py-20 relative z-10">
        <motion.div
          className="bg-gradient-to-r from-[#131330]/80 to-[#1A1A40]/80 backdrop-blur-md rounded-3xl p-10 md:p-16 border border-[#5D55FF]/20 shadow-xl relative overflow-hidden"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#5D55FF]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8FFF00]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          </div>

          {/* Quote marks */}
          <div className="absolute top-8 left-8 text-[#5D55FF]/20 text-9xl font-serif">"</div>

          <div className="relative">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mb-8 text-center"
            >
              <h2 className="text-2xl md:text-4xl font-light italic text-white leading-relaxed max-w-4xl mx-auto">
                "We cut our no‑shows by <span className="font-bold text-[#8FFF00]">48% in Week 1</span>—and added{" "}
                <span className="font-bold text-[#8FFF00]">$12K/mo</span> in billings."
              </h2>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#5D55FF]/30 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-white font-medium">Dr. Sarah Nguyen</p>
                  <p className="text-white/70 text-sm">SmileBright Dental</p>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-4">
                <Button
                  variant="outline"
                  className="border-[#5D55FF] text-white hover:bg-[#5D55FF]/20 transition-all duration-300"
                >
                  Read the full case study
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <div ref={faqsRef}>
        <FAQSection />
      </div>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  )
}