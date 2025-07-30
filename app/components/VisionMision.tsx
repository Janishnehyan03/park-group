'use client';
import { motion, easeOut } from "framer-motion";
import { section } from "framer-motion/client";
import { Globe, Heart, Star } from "lucide-react";

const cardData = [
    {
        icon: <Globe className="w-9 h-9 text-gold-dark" />,
        title: "OUR VISION",
        text: (
            <>
                At <span className="font-bold text-gold-dark">Park Event-Management</span>, we strive to enhance Event Experiences and break through geographical boundaries to connect people and ideas globally.
            </>
        ),
        gradient: "from-gold-light/20 via-gold/10 to-white",
        border: "border-gold-light/30",
        accent: "from-gold-light to-gold",
    },
    {
        icon: <Heart className="w-9 h-9 text-gold" />,
        title: "OUR MISSION",
        text: (
            <>
                To deliver <span className="font-bold text-gold-dark">exceptional Event planning</span>, Destination weddings & Dream weddings and Exhibitions with integrity, passion, and deep domain expertise to elevate your event experiences.
            </>
        ),
        gradient: "from-gold/15 via-gold-light/10 to-white",
        border: "border-gold/30",
        accent: "from-gold to-gold-dark",
    },
    {
        icon: <Star className="w-9 h-9 text-gold-light" />,
        title: "OUR EXPERIENCE",
        text: (
            <>
                Trusted by clients who value excellence, reliability, and our experience in delivering flawless Events. Our reputation is built from a foundation of integrity, expertise and passion. <br />
                
            </>
        ),
        gradient: "from-gold-dark/10 via-gold-light/15 to-white",
        border: "border-gold-dark/25",
        accent: "from-gold-dark to-gold-light",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

export default function VisionMissionExperience() {
    return (
        <section className="bg-gradient-to-br from-neutral-50 to-white py-16 px-4 lg:py-24 font-body">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeUp}
                >
                    <motion.h2 
                        className="font-display text-4xl md:text-6xl mb-4 tracking-tight"
                        variants={fadeUp}
                    >
                        <span className="text-gold-dark">Park Event-Management</span> <br />
                        <span className="text-gray-600 text-3xl md:text-4xl font-normal">Vision, Mission & Experience</span>
                    </motion.h2>
                    <motion.p 
                        className="max-w-2xl mx-auto text-gray-700 text-lg md:text-xl leading-relaxed"
                        variants={fadeUp}
                    >
                        Elevating celebrations, connecting people, delivering the extraordinary.
                    </motion.p>
                </motion.div>

                {/* Card Grid */}
                <motion.div 
                    className="grid md:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                >
                    {cardData.map((card, index) => (
                        <motion.div
                            key={card.title}
                            className={`relative bg-gradient-to-br ${card.gradient} backdrop-blur-sm rounded-2xl border-2 ${card.border} px-8 py-12 flex flex-col items-center shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden`}
                            variants={fadeUp}
                            whileHover={{ 
                                y: -8,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                        >
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent" />
                            </div>

                            {/* Icon Container */}
                            <motion.div 
                                className="mb-6 p-4 rounded-full bg-white/80 shadow-md group-hover:shadow-lg transition-all duration-500"
                                whileHover={{ 
                                    scale: 1.1,
                                    rotate: 5,
                                    transition: { type: "spring", stiffness: 400 }
                                }}
                            >
                                {card.icon}
                            </motion.div>

                            {/* Title */}
                            <h3 className="font-display text-xl font-bold mb-4 text-gray-800 tracking-wide text-center group-hover:text-gold-dark transition-colors duration-300">
                                {card.title}
                            </h3>

                            {/* Text Content */}
                            <p className="text-gray-700 text-base text-center leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                                {card.text}
                            </p>

                            {/* Top Accent Bar */}
                            <div className={`absolute -top-1 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-gradient-to-r ${card.accent} group-hover:w-24 transition-all duration-500`} />
                            
                            {/* Bottom Accent */}
                            <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-gradient-to-r ${card.accent} opacity-60 group-hover:w-16 group-hover:opacity-100 transition-all duration-500`} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}