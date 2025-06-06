"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { motion } from "framer-motion";
import { Suspense } from "react";
import { Phone } from "lucide-react";

// Animation config
const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

function QuoteForm() {
    return (
        <motion.section
            className="bg-primary py-20 px-4 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side */}
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Ready to Harness the Power of the Sun?
                    </h2>
                    <p className="text-white/90 text-lg">
                        Get a free quote today and start your journey toward energy
                        independence and sustainability.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button className="bg-secondary text-white hover:bg-secondary/85 transition font-semibold">
                            Get a Free Quote
                        </Button>
                        <Button
                            variant="secondary"
                            className="bg-white text-primary hover:bg-gray-100"
                        >
                            <Phone />
                            Call Us Now
                        </Button>
                    </div>
                </div>

                {/* Right Side */}
                <motion.div
                    className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-gray-800"
                    variants={fadeUp}
                >
                    <h3 className="text-xl font-semibold mb-6">
                        Request a Free Consultation
                    </h3>
                    <form className="space-y-4">
                        <div>
                            <div>
                                <Label>Name</Label>
                                <Input placeholder="Name" />
                            </div>
                        </div>
                        <div>
                            <Label>Email Address</Label>
                            <Input placeholder="example@email.com" type="email" />
                        </div>
                        <div>
                            <Label>Phone Number</Label>
                            <Input placeholder="+1234567890" type="tel" />
                        </div>
                        <div>
                            <Label>I’m interested in:</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Option" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="residential">Residential Solar</SelectItem>
                                    <SelectItem value="commercial">Commercial Solar</SelectItem>
                                    <SelectItem value="storage">Battery Storage</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-secondary hover:bg-secondary/85 text-white font-semibold"
                        >
                            Submit Request
                        </Button>
                    </form>
                </motion.div>
            </div>
        </motion.section>
    );
}

// Lazy loading wrapper
export default function LazyFreeQuoteSection() {
    return (
        <Suspense fallback={<div className="py-20 text-center text-white">Loading...</div>}>
            <QuoteForm />
        </Suspense>
    );
}
