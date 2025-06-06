"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, StarHalf } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Emily R.",
        rating: 4.5,
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        message:
            "Smooth installation, great support, and my bills dropped by 70%! Highly recommend Solaro.",
    },
    {
        name: "David K.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/31.jpg",
        message:
            "Professional team, clear communication, and quality products. My business now runs on solar!",
    },
    {
        name: "Mark S.",
        rating: 4,
        image: "https://randomuser.me/api/portraits/men/62.jpg",
        message:
            "Impressed with their technology and post-install monitoring app. Would recommend to friends.",
    },
    {
        name: "Sarah L.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        message:
            "From consultation to installation, everything was seamless. My home is now eco-friendly and cost-efficient!",
    },
    {
        name: "John D.",
        rating: 4.5,
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        message:
            "Great experience! The team was knowledgeable and helped me choose the right system for my needs.",
    },
    {
        name: "Lisa M.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/50.jpg",
        message:
            "Fantastic service! They handled everything from permits to installation. My energy bills are way down!",
    },
    {
        name: "Tom H.",
        rating: 4.5,
        image: "https://randomuser.me/api/portraits/women/55.jpg",
        message:
            "I was hesitant at first, but Solaro made the process easy and transparent. Loving my new solar system!",
    },
    {
        name: "Anna P.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/60.jpg",
        message:
            "Exceptional service! The team was professional, and my solar panels look great on my roof.",
    },
    {
        name: "Mike T.",
        rating: 4,
        image: "https://randomuser.me/api/portraits/men/70.jpg",
        message:
            "Very satisfied with my solar installation. The savings on my energy bills are significant!",
    },
];

const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return (
        <div className="flex">
            {[...Array(fullStars)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
            ))}
            {halfStar && <StarHalf className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />}
        </div>
    );
};

export default function Testimonials() {
    return (
        <motion.section
            className="bg-gray-100 py-20 text-gray-800 px-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-5xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">What Customers Say</h2>
                <p className="mt-2 text-gray-600">
                    Trusted by thousands of homeowners & businesses.
                </p>
            </div>

            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1.1 },
                    768: { slidesPerView: 2 },
                    800: { slidesPerView: 2.5 },
                    1024: { slidesPerView: 3 },
                }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
            >
                {testimonials.map((t, i) => (
                    <SwiperSlide key={i}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="shadow-md border rounded-2xl mx-2 bg-white text-gray-800">
                                <CardContent className="p-6 space-y-4 text-left">
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={t.image}
                                            alt={t.name}
                                            loading="lazy"
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="font-semibold">{t.name}</h4>
                                            {renderStars(t.rating)}
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-700">"{t.message}"</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </motion.section>
    );
}
