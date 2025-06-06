import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay"

const slides = [
    {
        heading: "Reliable Solar Solutions",
        subtext: "Engineered to meet your energy needs, efficiently and affordably.",
        image: "/images/hero-1.jpg",
    },
    {
        heading: "What Promised, What Done.",
        subtext: "Our promise is backed by performance, not just words.",
        image: "/images/hero-2.jpg",
    },
    {
        heading: "Cleaner Energy for a Better Tomorrow",
        subtext: "Join the solar movement with AndOne Solar today.",
        image: "/images/hero-3.jpg",
    },
    {
        heading: "Harness the Power of the Sun",
        subtext: "Innovative solar solutions tailored for your home or business.",
        image: "/images/hero-4.jpg",
    },
    {
        heading: "Empowering Your Energy Independence",
        subtext: "Take control of your energy future with our solar systems.",
        image: "/images/hero-5.jpg",
    },
];

export default function Hero() {
    const [api, setApi] = useState<CarouselApi | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (!api) return;

        const updateIndex = () => setActiveIndex(api.selectedScrollSnap());
        api.on("select", updateIndex);

        // Sync once on mount
        updateIndex();

        return () => {
            api.off("select", updateIndex);
        };
    }, [api]);

    return (
        <section className="relative h-[90vh] min-h-[500px] bg-foreground text-primary-foreground overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-700"
                style={{
                    backgroundImage: `url(${slides[activeIndex].image})`,
                }}
            >
                <div className="w-full h-full bg-black/60 backdrop-blur-md" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-12 md:py-24 flex flex-col xl:flex-row items-center justify-between gap-8 h-full">
                {/* Left Side */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-xl px-10 w-full"
                >
                    <Carousel
                        className="w-full"
                        opts={{ loop: true }}
                        setApi={setApi}
                        plugins={[
                            Autoplay({
                                delay: 5000,
                            }),
                        ]}
                    >
                        <CarouselContent>
                            {slides.map((slide, index) => (
                                <CarouselItem key={index}>
                                    <div className="space-y-4">
                                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
                                            {slide.heading}
                                        </h1>
                                        <p className="text-lg text-white/90">{slide.subtext}</p>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="bg-transparent text-white hover:opacity-90 backdrop-blur-md border-gray-50/20 border-1 hover:bg-transparent hover:backdrop-blur-xl" />
                        <CarouselNext className="bg-transparent text-white hover:opacity-90 backdrop-blur-md border-gray-50/20 border-1 hover:bg-transparent hover:backdrop-blur-xl" />
                    </Carousel>

                    <div className="mt-6 flex flex-wrap gap-4">
                        <Link href="/products">
                            <Button className="bg-secondary text-secondary-foreground p-6 rounded-xl shadow-lg hover:bg-secondary/90 hover:shadow-xl transition-all">
                                Explore Products
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button
                                variant="outline"
                                className="bg-transparent p-6 text-white hover:opacity-90 backdrop-blur-md border-gray-50/20 border-1 hover:bg-gray-600/35 hover:backdrop-blur-xl"
                            >
                                Get a Quote
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                {/* Right Side Image */}
                <motion.img
                    key={slides[activeIndex].image}
                    src={slides[activeIndex].image}
                    alt="Solar Panel"
                    className="w-full rounded-xl shadow-lg  max-w-3xl object-cover h-full md:h-[400px] lg:h-[500px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                />
            </div>
        </section>
    );
}
