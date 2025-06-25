import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image1 from '../../assets/category/earphone.png'
import Image3 from '../../assets/category/macbook.png'
import Image7 from '../../assets/category/watch.png'
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


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const Category = () => {
  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const card3Ref = useRef(null)

  const inView1 = useInView(card1Ref, { once: false, margin: '-100px' })
  const inView2 = useInView(card2Ref, { once: false, margin: '-100px' })
  const inView3 = useInView(card3Ref, { once: false, margin: '-100px' })
const navigate = useNavigate();
  return (
    <div className="py-8">
      <div className="container ">
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* First card */}
          <motion.div
            ref={card1Ref}
            variants={fadeInUp}
            initial="hidden"
            animate={inView1 ? 'show' : 'hidden'}
            className={`relative h-[320px] overflow-hidden sm:overflow-visible rounded-3xl ${glassClasses} bg-gradient-to-br from-black/90 to-black/70 text-white py-10 pl-5`}
          >
            <img
              src={Image1}
              alt="earphone"
              className="absolute bottom-0 w-[320px] z-20 pointer-events-none object-contain"
            />
            <div className="relative z-10 h-full flex items-end">
              <motion.div variants={fadeInUp}>
                <p className="mb-[2px] text-gray-400">Explore</p>
                <p className="text-2xl font-semibold mb-[2px]">Branded</p>
                <p className="text-4xl xl:text-5xl font-bold text-white/20 mb-2">Earphones</p>
                <button onClick={() => navigate('/shop')} className="cursor-pointer mt-2 px-5 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition">
                  Browse
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Second card */}
          <motion.div
            ref={card2Ref}
            variants={fadeInUp}
            initial="hidden"
            animate={inView2 ? 'show' : 'hidden'}
            className={`relative h-[320px] rounded-3xl ${glassClasses} bg-gradient-to-br from-brandYellow/10 to-brandYellow/60 text-white py-10 pl-5`}
          >
            <img
              src={Image7}
              alt="watch"
              className="absolute bottom-25 -right-10 w-[320px] z-20 pointer-events-none object-contain"
            />
            <div className="relative z-10 h-full flex items-end">
              <motion.div variants={fadeInUp}>
                <p className="mb-[2px] text-white">Explore</p>
                <p className="text-2xl font-semibold mb-[2px]">Techy</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">Gadgets</p>
                <button onClick={() => navigate('/shop')} className="cursor-pointer mt-2 px-5 py-2 bg-white text-brandYellow rounded-full hover:bg-white/70 transition">
                  Browse
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Third card (double width) */}
          <motion.div
            ref={card3Ref}
            variants={fadeInUp}
            initial="hidden"
            animate={inView3 ? 'show' : 'hidden'}
            className={`relative h-[320px] overflow-hidden sm:overflow-visible col-span-2 rounded-3xl ${glassClasses} bg-gradient-to-br from-primary/10 to-primary/90 text-white py-10 pl-5`}
          >
            <img
              src={Image3}
              alt="laptop"
              className="absolute bottom-25 -right-10 w-[320px] z-20 pointer-events-none object-contain"
            />
            <div className="relative z-10 h-full flex items-end">
              <motion.div variants={fadeInUp}>
                <p className="mb-[2px] text-white">Explore</p>
                <p className="text-2xl font-semibold mb-[2px]">Latest</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">Laptops</p>
                <button onClick={() => navigate('/shop')} className="cursor-pointer mt-2 px-5 py-2 bg-white text-primary rounded-full hover:bg-white/90 transition">
                  Browse
                </button>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Category
