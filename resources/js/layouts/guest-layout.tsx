import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Head } from "@inertiajs/react";
import { FiMenu, FiX, FiHome, FiInfo, FiPackage, FiPhone } from "react-icons/fi";
import { Button } from "@/components/ui/button";

type GuestLayoutProps = {
    children: ReactNode;
    className?: string;
};

export default function GuestLayout({ children, className }: GuestLayoutProps) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        { label: "Home", href: "/", icon: <FiHome /> },
        { label: "About", href: "/about", icon: <FiInfo /> },
        { label: "Products", href: "/products", icon: <FiPackage /> },
        { label: "Contact", href: "/contact", icon: <FiPhone /> },
    ];

    return (
        <>
            <Head title="AndOne Solar">
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
                        <nav className="hidden md:flex gap-8 font-medium tracking-wide items-center">
                            {navItems.map(({ label, href, icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="flex items-center gap-2 text-foreground hover:text-primary transition"
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
                <footer className="bg-secondary text-secondary-foreground mt-16 py-8 text-center">
                    <div className="container mx-auto text-sm tracking-wide">
                        <p>&copy; {new Date().getFullYear()} AndOne Solar. All rights reserved.</p>
                    </div>
                </footer>
            </main>
        </>
    );
}
