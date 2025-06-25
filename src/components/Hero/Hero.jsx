import React from 'react'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
import Image1 from '../../assets/hero/headphone.png'
import Image2 from '../../assets/hero/watch.png'
import { useNavigate } from 'react-router-dom'
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  }
const navigate = useNavigate();

  const HeroData = [
    {
      id: 1,
      img: Image1,
      subtitle: 'Beats Solo',
      title: 'Wireless',
      title2: 'Headphones',
      description:
        'Experience the freedom of wireless sound with Beats Solo headphones. Perfect for music lovers on the go.',
    },
    {
      id: 2,
      img: Image2,
      subtitle: 'Timepiece Pro',
      title: 'Smart',
      title2: 'Watch',
      description:
        'Stay connected and in control with the Timepiece Pro Smart Watch — designed for modern living with style and precision.',
    },
  ]

  return (
    <div className="container mt-4">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px]">
        <div className="h-full w-full rounded-3xl overflow-hidden bg-gradient-to-r from-persian_orange-200 via-cordovan-100 to-timberwolf-100 dark:from-black-100 dark:to-taupe-400 dark:text-timberwolf-100">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center p-8 sm:px-16">
                  {/* Text content */}
                  <motion.div
                    className="flex flex-col justify-center gap-4 text-center sm:text-left order-1"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                  >
                    <h2 className="text-sm sm:text-base font-semibold text-cordovan-700 tracking-widest uppercase">
                      {data.subtitle}
                    </h2>
                    <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight drop-shadow-md">
                      <span className="text-hunter_green-900 dark:text-timberwolf-100">
                        {data.title}
                      </span>{' '}
                      <span className="text-cordovan-700 dark:text-brandYellow">
                        {data.title2}
                      </span>
                    </h1>

                    <p className="text-base sm:text-lg text-silver-700 dark:text-silver-500 max-w-xl">
                      {data.description}
                    </p>
                    <button  onClick={() => navigate('/shop')} className="mt-4 px-6 py-3 bg-cordovan-600 hover:bg-cordovan-700 text-white font-semibold rounded-full w-max mx-auto sm:mx-0 shadow-md shadow-cordovan-200/30 dark:shadow-none transition duration-300 hover:scale-105 active:scale-95">
                      Shop Now
                    </button>
                  </motion.div>

                  {/* Image content */}
                  <motion.div
                    className="order-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={data.img}
                      alt="hero"
                      className="w-[300px] h-[300px] sm:w-[440px] sm:h-[440px] object-contain mx-auto drop-shadow-[0_15px_40px_rgba(0,0,0,0.45)] animate-floating"
                    />
                  </motion.div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Hero
