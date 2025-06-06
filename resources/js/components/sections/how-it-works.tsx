import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
    PhoneCall,
    MapPin,
    Wrench,
    Activity,
} from "lucide-react";

const steps = [
    {
        title: "Free Consultation",
        desc: "Our experts will discuss your energy needs, budget, and goals to recommend the best solar solution.",
        icon: PhoneCall,
    },
    {
        title: "Site Evaluation",
        desc: "We’ll assess your property to determine optimal panel placement, system size, and installation requirements.",
        icon: MapPin,
    },
    {
        title: "Professional Installation",
        desc: "Our certified technicians will install your solar system with minimal disruption to your property.",
        icon: Wrench,
    },
    {
        title: "Activation & Monitoring",
        desc: "We'll activate your system and provide access to our monitoring platform to track your energy production.",
        icon: Activity,
    },
];

export default function HowItWorks() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section className="py-20 bg-gray-50 text-gray-800 px-4" ref={containerRef}>
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
                    <p className="mt-2 text-gray-600 text-lg">
                        Our simple process from consultation to installation and beyond
                    </p>
                </div>

                <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">
                    {/* Left side (even steps) */}
                    <div className="hidden md:flex flex-col gap-16 w-1/2 text-right pr-6">
                        {steps.map(
                            (step, idx) =>
                                idx % 2 === 0 && (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <h3 className="font-semibold text-lg">{step.title}</h3>
                                        <p className="text-gray-600">{step.desc}</p>
                                    </motion.div>
                                )
                        )}
                    </div>

                    {/* Animated Line + Icons */}
                    <div className="relative flex flex-col items-center min-h-[500px]">
                        {/* Vertical track */}
                        <div className="absolute h-full w-1 bg-secondary/10 rounded-full" />

                        {/* Animated line */}
                        <motion.div
                            style={{ scaleY }}
                            className="origin-top absolute w-1 bg-secondary h-full rounded-full"
                        />

                        {/* Bubbles with icons */}
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                className="relative z-10 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center shadow-md mb-8"
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <step.icon className="w-5 h-5" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Right side (odd steps) */}
                    <div className="hidden md:flex flex-col gap-16 w-1/2 text-left pl-6">
                        {steps.map(
                            (step, idx) =>
                                idx % 2 === 1 && (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <h3 className="font-semibold text-lg">{step.title}</h3>
                                        <p className="text-gray-600">{step.desc}</p>
                                    </motion.div>
                                )
                        )}
                    </div>

                    {/* Mobile view (stacked) */}
                    <div className="md:hidden w-full space-y-10 mt-10">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center shadow">
                                    <step.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">{step.title}</h4>
                                    <p className="text-gray-600">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
