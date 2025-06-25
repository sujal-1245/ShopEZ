import React, { useRef } from 'react'
import Image4 from '../../assets/category/smartwatch2.png'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const glassClasses = `
  backdrop-blur-xl 
  bg-opacity-40 
  border 
  border-white/20 
  shadow-[0_4px_30px_rgba(0,0,0,0.1)]
  hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]
  transition-all duration-500
`


const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
}

const Banner = () => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: false, margin: '-100px' })
const navigate = useNavigate();
  return (
    <div className="py-8">
      <div className="container mt-20 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Banner Card */}
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`relative h-auto sm:h-[320px] col-span-4 rounded-3xl ${glassClasses} bg-gradient-to-br from-primary/10 to-primary/90 text-white py-10 pl-5`}

          >

            {/* Floating Smartwatch */}
<motion.img
  src={Image4}
  alt="smartwatch"
  className="
    absolute 
    z-20 
    pointer-events-none 
    object-contain 
    w-[220px] sm:w-[300px] md:w-[420px]

    top-5 right-5
    sm:top-auto sm:right-auto sm:-bottom-16  sm:translate-x-1/2
    md:right-96 md:translate-x-0
  "
              animate={{
                y: [0, -15, 0],
                rotate: [0, 0.4, -0.4, 0],
              }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
              }}
            />

            <div className="relative z-10 h-full w-full flex flex-col md:flex-row items-start md:items-end justify-between pr-5 gap-5 md:gap-0">

              {/* Left Text */}
              <div className="px-5 md:px-10 py-5">
                <motion.p
                  custom={0}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={textVariant}
                  className="text-white text-sm sm:text-base mb-[2px]"
                >
                  Smart Tech
                </motion.p>
                <motion.p
                  custom={1}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={textVariant}
                  className="font-semibold text-4xl sm:text-5xl md:text-6xl mb-[2px]"
                >
                  HAPPY
                </motion.p>
                <motion.p
                  custom={2}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={textVariant}
                  className="font-semibold text-5xl sm:text-6xl md:text-7xl mb-[2px]"
                >
                  HOURS
                </motion.p>
                <motion.p
                  custom={3}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={textVariant}
                  className="text-white text-sm sm:text-base mb-[2px]"
                >
                  flat <span className="font-semibold">25%</span> off
                </motion.p>
              </div>

              {/* Right Text */}
              <div className="text-left pr-5">
                <motion.p
                  custom={4}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={textVariant}
                  className="text-white/80 text-xs sm:text-sm mb-3 sm:mb-5"
                >
                  🔥 Limited Time Offer
                </motion.p>
                <motion.h1
                  custom={5}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={textVariant}
                  className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-5xl drop-shadow-sm"
                >
                  Monsoon Sale
                </motion.h1>
                <motion.p
                  custom={6}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={textVariant}
                  className="text-white drop-shadow-sm leading-tight font-bold text-lg sm:text-xl md:text-2xl mb-6 md:mb-10"
                >
                  Grab your Tech <span className="text-yellow-300">NOW!!!</span>
                </motion.p>
                <motion.button
                onClick={() => navigate('/shop')}
                  custom={7}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={textVariant}
                  className="bg-white text-primary rounded-full hover:bg-white/90 transition px-5 py-2 text-sm sm:text-base"
                >
                  Shop Now
                </motion.button>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Banner
