import { ShieldCheck, UserCog, Truck, Smartphone, Leaf } from "lucide-react";
import { FaSolarPanel } from "react-icons/fa6";
import { motion } from "framer-motion";

const features = [
    {
        title: "High Efficiency Products",
        description: "Our solar panels achieve up to 22% efficiency, maximizing power output even in limited space.",
        icon: FaSolarPanel,
    },
    {
        title: "25-Year Warranty",
        description: "We stand behind our products with industry-leading warranties and performance guarantees.",
        icon: ShieldCheck,
    },
    {
        title: "Certified Installers",
        description: "Our network of certified installation partners ensures professional setup and optimal performance.",
        icon: UserCog,
    },
    {
        title: "Nationwide Delivery",
        description: "Free shipping on all orders over $1000 with fast and reliable delivery services.",
        icon: Truck,
    },
    {
        title: "Smart Energy Management",
        description: "Monitor and control your energy production and consumption with our intuitive mobile app.",
        icon: Smartphone,
    },
    {
        title: "Eco-Friendly Solutions",
        description: "Reduce your carbon footprint and contribute to a sustainable future with clean solar energy.",
        icon: Leaf,
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

export default function WhyChooseUs() {
    return (
        <section className="bg-gray-50 py-20 px-4 text-gray-800">
            <div className="container mx-auto space-y-12">
                <div className="text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold"
                    >
                        Why Choose AndOne Solar
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-2 text-lg text-gray-600"
                    >
                        We provide industry leading solar solutions with exceptional service and support
                    </motion.p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition flex flex-col items-center text-center hover:bg-primary/5 hover:text-primary group"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={cardVariants}
                                custom={index}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4"
                                >
                                    <Icon className="w-8 h-8 text-primary group-hover:animate-pulse transition-all duration-300" />
                                </motion.div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
