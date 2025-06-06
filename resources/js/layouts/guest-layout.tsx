import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Head, usePage } from "@inertiajs/react";
import { FiMenu, FiX, FiHome, FiInfo, FiPhone } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import { LuGrid2X2Check } from "react-icons/lu";
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Clock,
} from "lucide-react";

type GuestLayoutProps = {
    children: ReactNode;
    className?: string;
};

export default function GuestLayout({ children, className }: GuestLayoutProps) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        { label: "Home", href: "/", icon: <FiHome /> },
        { label: "Products", href: "/products", icon: <AiOutlineProduct /> },
        { label: "Solutions", href: "/solutions", icon: <MdOutlineHomeRepairService /> },
        { label: "Solar Calculator", href: "/solar-calculator", icon: <LuGrid2X2Check /> },
        { label: "About", href: "/about", icon: <FiInfo /> },
        { label: "Contact", href: "/contact", icon: <FiPhone /> },
    ];

    const { props } = usePage();
    const title = typeof props.title === "string" ? props.title : "AndOne Solar";

    return (
        <>
            <Head title={title}>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>

            <main className={cn("min-h-screen bg-background text-foreground font-sans", className)}>
                {/* Sticky Header */}
                <header className="sticky top-0 z-50 bg-white shadow border-b">
                    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <img
                                src="/images/logo.png"
                                alt="AndOne Solar Logo"
                                className="h-10 w-auto"
                            />
                        </div>

                        {/* Center Nav (desktop only) */}
                        <nav className="hidden lg:flex gap-8 font-medium tracking-wide items-center">
                            {navItems.map(({ label, href, icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="flex items-center gap-2 text-gray-800 hover:text-primary transition"
                                >
                                    {icon}
                                    {label}
                                </a>
                            ))}
                        </nav>

                        {/* Right side action */}
                        <div className="hidden md:block">
                            <a href="/contact">
                                <Button className="bg-red-600 text-white hover:bg-red-700 transition">
                                    Get a Quote
                                </Button>
                            </a>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden text-2xl text-gray-700"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {mobileOpen && (
                        <nav className="md:hidden px-4 pb-4">
                            <div className="flex flex-col gap-4 text-gray-700 font-medium tracking-wide">
                                {navItems.map(({ label, href, icon }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        className="flex items-center gap-2 hover:text-blue-600 transition"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {icon}
                                        {label}
                                    </a>
                                ))}
                                <a href="/contact">
                                    <Button className="w-full mt-2 bg-red-600 text-white hover:bg-red-700">
                                        Get a Quote
                                    </Button>
                                </a>
                            </div>
                        </nav>
                    )}
                </header>

                {/* Page Content */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    {children}
                </motion.div>

                {/* Footer */}
                <footer className="bg-gray-950 text-white py-10 px-6 md:px-12">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
                        {/* Column 1 */}
                        <div>
                            <div className="flex items-center gap-2 text-primary font-bold text-xl">
                                <img
                                    src="/images/logo.png"
                                    alt="AndOne Solar Logo"
                                    className="h-8 w-auto"
                                />
                            </div>
                            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                                Leading provider of high efficiency solar solutions for residential and
                                commercial applications.
                            </p>
                            <div className="flex gap-4 mt-6 text-gray-300">
                                <a href="#"><Facebook size={18} /></a>
                                <a href="#"><Twitter size={18} /></a>
                                <a href="#"><Instagram size={18} /></a>
                                <a href="#"><Linkedin size={18} /></a>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                {navItems.map(({ label, href }) => (
                                    <li key={label}>
                                        <a
                                            href={href}
                                            className="hover:text-primary transition"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div>
                            <h4 className="font-semibold text-white mb-4">Products</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#">Solar Panels</a></li>
                                <li><a href="#">Inverters</a></li>
                                <li><a href="#">Battery Storage</a></li>
                                <li><a href="#">Solar Kits</a></li>
                                <li><a href="#">Accessories</a></li>
                            </ul>
                        </div>

                        {/* Column 4 */}
                        <div>
                            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li className="flex items-start gap-2"><MapPin size={16} /> 123 Solar Street, Sunny City, SC 12345</li>
                                <li className="flex items-center gap-2"><Phone size={16} /> (555) 123-4567</li>
                                <li className="flex items-center gap-2"><Mail size={16} /> info@solarpower.com</li>
                                <li className="flex items-center gap-2"><Clock size={16} /> Mon-Fri: 9AM–6PM</li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 pt-6">
                        <p>© {
                            new Date().getFullYear()
                        } AndOne Solar. All rights reserved.</p>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white">Privacy Policy</a>
                            <a href="#" className="hover:text-white">Terms of Service</a>
                            <a href="#" className="hover:text-white">Sitemap</a>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    );
}
