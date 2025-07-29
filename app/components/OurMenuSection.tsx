"use client";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import { Utensils, Star } from "lucide-react";

// Example food menu items
const foodMenu = [
  {
    name: "Truffle Mushroom Risotto",
    description:
      "Creamy Arborio rice, wild mushrooms, parmesan, white truffle oil.",
    price: "₹650",
    img: "/images/food1.jpg",
    featured: true,
  },
  {
    name: "Herb-Crusted Salmon",
    description:
      "Pan-seared salmon, herbed crust, citrus beurre blanc, seasonal veggies.",
    price: "₹850",
    img: "/images/food2.jpg",
    featured: false,
  },
  {
    name: "Classic Caesar Salad",
    description:
      "Crisp romaine, parmesan, garlic croutons, house caesar dressing.",
    price: "₹350",
    img: "/images/food3.jpg",
    featured: false,
  },
  {
    name: "Tandoori Platter",
    description:
      "Assorted tandoori meats and veggies, mint chutney, lemon wedges.",
    price: "₹700",
    img: "/images/food4.jpg",
    featured: true,
  },
  {
    name: "Belgian Chocolate Mousse",
    description: "Silky chocolate mousse, hazelnut praline, fresh berries.",
    price: "₹320",
    img: "/images/food5.jpg",
    featured: false,
  },
  {
    name: "Exotic Fruit Mocktail",
    description: "Seasonal fruits, fresh juice, mint, zero alcohol.",
    price: "₹220",
    img: "/images/food6.jpg",
    featured: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

export default function OurMenuSection() {
  return (
    <section className="bg-white text-gray-800 py-16 lg:py-24 px-4 font-body">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <Utensils className="w-7 h-7 text-yellow-500" />
            <span className="font-semibold text-yellow-600 uppercase tracking-[0.16em] font-body text-lg">
              Our Menu
            </span>
            <Utensils className="w-6 h-6 text-yellow-400 rotate-45" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl mb-3 text-gray-900 tracking-tight">
            Signature Dishes &
            <span className="text-yellow-600"> Refreshments</span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-600 text-lg md:text-xl">
            Experience gourmet creations, from timeless classics to contemporary
            delights, crafted to elevate your celebrations.
          </p>
        </motion.div>
        {/* Menu Items Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.1 },
            },
          }}
        >
          {foodMenu.map((item, i) => (
            <motion.div
              key={item.name}
              className={`relative bg-gray-50 rounded shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col group overflow-hidden ${
                item.featured ? "" : ""
              }`}
              variants={fadeUp}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={i < 2}
                />
              </div>
              <div className="flex-1 flex flex-col px-5 py-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl font-semibold text-gray-900">
                    {item.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 flex-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
