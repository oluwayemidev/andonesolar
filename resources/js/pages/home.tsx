import GuestLayout from "@/layouts/guest-layout";
import Hero from "@/components/sections/hero";
import CallToAction from "@/components/sections/call-to-action";
import FeaturedProducts from "@/components/sections/featured-products";
import WhyChooseUs from "@/components/sections/why-choose-us";
import SolarSolutions from "@/components/sections/solar-solutions";
import HowItWorks from "@/components/sections/how-it-works";
import Testimonials from "@/components/sections/testimonials";
import FreeQuoteSection from "@/components/sections/free-quote";

export default function Home() {
    return (
        <GuestLayout>
            <Hero />
            <CallToAction />
            <FeaturedProducts />
            <WhyChooseUs />
            <SolarSolutions />
            <HowItWorks />
            <Testimonials />
            <FreeQuoteSection />
        </GuestLayout>
    );
}
