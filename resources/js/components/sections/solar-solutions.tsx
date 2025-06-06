import { motion } from "framer-motion";

const solutions = [
    {
        title: "Residential Solutions",
        description:
            "Custom solar systems designed for homes of all sizes to reduce electricity bills and increase property value.",
        image: "/images/solutions/residential.jpg",
        href: "/solutions/residential",
        badge: "Popular",
    },
    {
        title: "Commercial Systems",
        description:
            "Large-scale solar installations for businesses, warehouses, and commercial properties to reduce operating costs.",
        image: "/images/solutions/commercial.jpg",
        href: "/solutions/commercial",
        badge: "New",
    },
    {
        title: "Solar Water Pumps",
        description:
            "Efficient solar-powered pumping solutions for agriculture, irrigation, and water supply systems.",
        image: "/images/solutions/pump.jpg",
        href: "/solutions/water-pumps",
        badge: null,
    },
];

export default function SolarSolutions() {
    return (
        <section className="py-20 bg-gray-100 text-gray-800 px-4">
            <div className="max-w-7xl mx-auto space-y-10">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Solar Solutions For Every Need
                    </h2>
                    <p className="mt-2 text-lg text-gray-600">
                        Customized solar energy systems for residential, commercial, and specialized applications
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {solutions.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative rounded-xl overflow-hidden group h-[350px] shadow-md cursor-pointer"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                            {item.badge && (
                                <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                                    {item.badge}
                                </div>
                            )}

                            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2 z-10">
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="text-sm">{item.description}</p>
                                <span className="text-secondary font-medium hover:underline flex items-center gap-1">
                                    Learn More
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
