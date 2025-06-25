import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image2 from '../../assets/category/gaming.png'
import Image5 from '../../assets/category/speaker.png'
import Image6 from '../../assets/category/vr.png'
import { useNavigate } from 'react-router-dom'
const glassCard = `
  backdrop-blur-xl 
  bg-opacity-40 
  border 
  border-white/20 
  shadow-[0_8px_32px_rgba(0,0,0,0.37)]
  hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]
  transition-all duration-500
`


const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

const Category2 = () => {
  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const card3Ref = useRef(null)

  const inView1 = useInView(card1Ref, { once: false, margin: '-100px' })
  const inView2 = useInView(card2Ref, { once: false, margin: '-100px' })
  const inView3 = useInView(card3Ref, { once: false, margin: '-100px' })
const navigate = useNavigate();
  return (
    <div className='py-8'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:overflow-hidden sm:grid-cols-2 lg:grid-cols-4 gap-8'>

          {/* First Card - Gaming */}
          <motion.div
            ref={card1Ref}
            variants={fadeInUp}
            initial={false}
            animate={inView1 ? 'show' : 'hidden'}
            className={`relative col-span-2 h-[320px] overflow-hidden sm:overflow-visible rounded-3xl bg-gradient-to-br from-black/10 to-black/90 text-white py-10 pl-5 ${glassCard}`}
          >
            <img
              src={Image2}
              alt="gaming"
              className="absolute -bottom-1  -right-8 w-[320px] z-20 pointer-events-none object-contain"
            />
            <div className="relative z-10 h-full flex items-end">
              <div>
                <p className="mb-[2px] text-gray-400">Explore</p>
                <p className="text-2xl font-semibold mb-[2px]">Professional</p>
                <p className="text-4xl xl:text-5xl font-bold text-white/20 mb-2">Gaming</p>
                <button onClick={() => navigate('/shop')} className="cursor-pointer mt-2 px-5 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition">
                  Browse
                </button>
              </div>
            </div>
          </motion.div>

          {/* Second Card - Speakers */}
          <motion.div
            ref={card2Ref}
            variants={fadeInUp}
            initial={false}
            animate={inView2 ? 'show' : 'hidden'}
            className={`relative h-[320px] rounded-3xl bg-gradient-to-br from-brandGreen/10 to-brandGreen/90 text-white py-10 pl-5 ${glassCard}`}
          >
            <img
              src={Image5}
              alt="speaker"
              className="absolute bottom-0 -right-10 w-[320px] z-20 pointer-events-none object-contain"
            />
            <div className="relative z-10 h-full flex items-end">
              <div className='mb-20'>
                <p className="mb-[2px] text-white">Explore</p>
                <p className="text-2xl font-semibold mb-[2px]">Best</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">Speakers</p>
                <button onClick={() => navigate('/shop')} className="cursor-pointer mt-2 px-5 py-2 bg-white text-brandGreen rounded-full hover:bg-white/70 transition">
                  Browse
                </button>
              </div>
            </div>
          </motion.div>

          {/* Third Card - Virtual Reality */}
          <motion.div
            ref={card3Ref}
            variants={fadeInUp}
            initial={false}
            animate={inView3 ? 'show' : 'hidden'}
            className={`relative h-[320px] rounded-3xl overflow-hidden bg-gradient-to-br from-brandBlue/10 to-brandBlue/90 text-white py-10 pl-5 ${glassCard}`}
          >
            <img
              src={Image6}
              alt="vr"
              className="absolute -bottom-2 -right-10 w-[320px] z-20 pointer-events-none object-contain"
            />
            <div className="relative z-10 h-full flex items-end">
              <div className='mb-20'>
                <p className="mb-[2px] text-white">Explore</p>
                <p className="text-2xl font-semibold mb-[2px]">Virtual</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">Reality</p>
                <button onClick={() => navigate('/shop')} className="cursor-pointer mt-2 px-5 py-2 bg-white text-brandBlue rounded-full hover:bg-white/90 transition">
                  Browse
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Category2
