import GuestLayout from "@/layouts/guest-layout";
import Hero from "@/components/sections/hero";
import CallToAction from "@/components/sections/call-to-action";
import FeaturedProducts from "@/components/sections/featured-products";

export default function Home() {
    return (
        <GuestLayout>
            <Hero />
            <CallToAction />
            <FeaturedProducts />
        </GuestLayout>
    );
}
