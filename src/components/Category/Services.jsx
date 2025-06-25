import React from 'react'
import { FaTruckArrowRight } from "react-icons/fa6"
import { HiBadgeCheck } from "react-icons/hi"
import { FaWallet } from "react-icons/fa"
import { ImHeadphones } from "react-icons/im"

const services = [
  {
    icon: <FaTruckArrowRight className="text-primary text-3xl sm:text-4xl" />,
    title: "Free Shipping",
    description: "Free shipping on all orders",
  },
  {
    icon: <HiBadgeCheck className="text-primary text-3xl sm:text-4xl" />,
    title: "Safe Money",
    description: "30 Days return policy",
  },
  {
    icon: <FaWallet className="text-primary text-3xl sm:text-4xl" />,
    title: "Secure Payments",
    description: "All transactions are safe",
  },
  {
    icon: <ImHeadphones className="text-primary text-3xl sm:text-4xl" />,
    title: "Customer Care",
    description: "Online support 24/7",
  },
]

const Services = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md transition hover:shadow-xl"
            >
              <div>{service.icon}</div>
              <div>
                <h1 className="text-lg sm:text-xl font-semibold text-black">{service.title}</h1>
                <p className="text-sm sm:text-base text-black opacity-40">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
