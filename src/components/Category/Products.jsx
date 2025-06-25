import React from 'react'
import Image1 from '../../assets/product/p-1.jpg'
import Image2 from '../../assets/product/p-2.jpg'
import Image3 from '../../assets/product/p-3.jpg'
import Image4 from '../../assets/product/p-4.jpg'
import Image5 from '../../assets/product/p-5.jpg'
import Image6 from '../../assets/product/p-7.jpg'
import Image7 from '../../assets/product/p-9.jpg'
import Image8 from '../../assets/hero/headphone.png'

const productImages = [
  Image1, Image2, Image3, Image4,
  Image5, Image6, Image7, Image8,
]

const Products = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="container mx-auto">
        <h1 className="text-3xl sm:text-4xl text-white font-semibold text-center mb-12">
          Top Selling Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productImages.map((img, index) => (
            <div
              key={index}
              className="rounded-3xl p-6 bg-gradient-to-br from-white to-white/80
                hover:scale-105 backdrop-blur-xl hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]
                transition-all duration-500 w-full"
            >
              <img
                src={img}
                alt={`Product ${index + 1}`}
                className={`rounded-2xl mx-auto mb-4 ${img === Image8 ? 'scale-75' : ''}`}
              />
              <h2 className="text-center text-black font-semibold text-lg">
                Branded Headphone
              </h2>
              <p className="text-center text-black opacity-50 text-sm">
                Best quality headphones from top brands
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
