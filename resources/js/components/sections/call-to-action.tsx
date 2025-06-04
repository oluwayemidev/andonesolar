import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
    return (
        <section className="bg-secondary text-secondary-foreground py-20 relative overflow-hidden">
            {/* Decorative Background Blur */}
            <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] rounded-full bg-red-600 opacity-20 blur-3xl z-0"></div>
            <div className="absolute bottom-[-60px] right-[-60px] w-[250px] h-[250px] rounded-full bg-blue-700 opacity-20 blur-3xl z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold">Ready to Go Solar?</h2>
                    <p className="mt-4 text-lg text-secondary-foreground/80">
                        Fill out the form below and our team will contact you with the best energy solution for your needs.
                    </p>
                </motion.div>

                {/* Form */}
                <motion.form
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto grid gap-6"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="grid md:grid-cols-2 gap-4">
                        <Input type="text" placeholder="Full Name" required className="bg-white text-black" />
                        <Input type="email" placeholder="Email Address" required className="bg-white text-black" />
                    </div>
                    <Input type="tel" placeholder="Phone Number" required className="bg-white text-black" />
                    <Textarea placeholder="How can we help you?" rows={4} className="bg-white text-black" />

                    <div className="text-center">
                        <Button type="submit" className="bg-primary text-primary-foreground px-8 py-3 text-lg shadow hover:opacity-90">
                            Request a Free Quote
                        </Button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
