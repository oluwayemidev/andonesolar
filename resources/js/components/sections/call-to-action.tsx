import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function LeadFormSection() {
    return (
        <section className="bg-gray-950 text-gray-200 py-20 px-4">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
                {/* Left: Illustration */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2"
                >
                    <img
                        src="/images/form-illustration.png"
                        alt="Solar Illustration"
                        className="w-full rounded-lg max-w-lg mx-auto hidden lg:inline-block"
                    />
                </motion.div>

                {/* Right: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2 space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Get a Free Solar Quote
                    </h2>
                    <p className="text-muted-foreground">
                        Fill out the form and our team will get back to you with a custom plan that fits your needs.
                    </p>
                    <form className="space-y-4">
                        <Input type="text" placeholder="Full Name" required className="bg-transparent p-6 text-white hover:opacity-90 backdrop-blur-md border-gray-50/20 border-1 hover:bg-gray-600/35 hover:backdrop-blur-xl" />
                        <Input type="email" placeholder="Email Address" required className="bg-transparent p-6 text-white hover:opacity-90 backdrop-blur-md border-gray-50/20 border-1 hover:bg-gray-600/35 hover:backdrop-blur-xl" />
                        <Input placeholder="+1234567890" type="tel" className="bg-transparent p-6 text-white hover:opacity-90 backdrop-blur-md border-gray-50/20 border-1 hover:bg-gray-600/35 hover:backdrop-blur-xl" />
                        <Select>
                            <SelectTrigger className="bg-transparent p-6 text-white hover:opacity-90 backdrop-blur-md border-gray-50/20 border-1 hover:bg-gray-600/35 hover:backdrop-blur-xl">
                                <SelectValue placeholder="I’m interested in:" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="residential">Residential Solar</SelectItem>
                                <SelectItem value="commercial">Commercial Solar</SelectItem>
                                <SelectItem value="storage">Battery Storage</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button type="submit" className="w-full md:w-auto bg-primary">
                            Request Quote
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
