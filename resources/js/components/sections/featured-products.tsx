import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";

const products = [
    {
        title: "Solar Panel Kit",
        description: "High-efficiency monocrystalline panels for homes and small businesses.",
        image: "/images/products/panel-kit.jpg",
        tag: "Best Seller",
    },
    {
        title: "Off-Grid Inverter",
        description: "Reliable power conversion for remote and off-grid systems.",
        image: "/images/products/inverter.jpg",
        tag: "New",
    },
    {
        title: "Solar Battery Pack",
        description: "Store solar energy for night-time or cloudy day usage.",
        image: "/images/products/battery-pack.jpg",
    },
    {
        title: "Solar Water Heater",
        description: "Eco-friendly water heating solution for residential use.",
        image: "/images/products/water-heater.jpg",
    },
    {
        title: "Solar Charge Controller",
        description: "Optimize solar energy usage with our advanced controllers.",
        image: "/images/products/charge-controller.jpg",
    },
    {
        title: "Solar Mounting System",
        description: "Durable and adjustable mounting solutions for solar panels.",
        image: "/images/products/mounting-system.jpg",
    },
    {
        title: "Solar LED Lights",
        description: "Energy-efficient lighting powered by solar energy.",
        image: "/images/products/solar-lights.jpg",
    },
    {
        title: "Complete Solar System",
        description: "Everything you need for a complete solar setup.",
        image: "/images/products/complete-system.jpg",
        tag: "Best Seller",
    },
];

export default function FeaturedProducts() {
    return (
        <section className="py-20 px-4 bg-gray-100 text-gray-800">
            <div className="container mx-auto space-y-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Featured Products
                    </h2>
                    <p className="mt-2 text-lg text-gray-800">
                        Trusted technology powering a sustainable future.
                    </p>
                </motion.div>

                {/* Carousel */}
                <Carousel opts={{ loop: true }} className="w-full">
                    <CarouselContent className="flex gap-6 px-2">
                        {products.map((product, index) => (
                            <CarouselItem
                                key={index}
                                className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.015 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="relative overflow-hidden rounded-2xl shadow-lg group"
                                >
                                    {/* Tag */}
                                    {product.tag && (
                                        <div className="absolute top-3 left-3 z-20 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                                            {product.tag}
                                        </div>
                                    )}

                                    {/* Image */}
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />

                                    {/* Overlay CTA */}
                                    <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-md text-white p-4 z-10">
                                        <h3 className="text-lg font-semibold">{product.title}</h3>
                                        <p className="text-sm text-white/80">{product.description}</p>
                                        <Button
                                            variant="outline"
                                            className="mt-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                                        >
                                            View Product
                                        </Button>
                                    </div>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-gray-200 hover:bg-gray-300 text-gray-700" />
                    <CarouselNext className="bg-gray-200 hover:bg-gray-300 text-gray-700" />
                </Carousel>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                        Ready to go solar?
                    </h3>
                    <p className="mt-2 text-lg text-gray-600">
                        Contact us today for a free consultation and quote.
                    </p>
                    <a href="/contact">
                        <Button className="mt-4 px-8 py-3 bg-primary text-white hover:opacity-90 transition">
                            Get a Quote
                        </Button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
