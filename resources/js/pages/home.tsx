import GuestLayout from "@/layouts/guest-layout";
import Hero from "@/components/sections/hero";
import CallToAction from "@/components/sections/call-to-action";

export default function Home() {
    return (
        <GuestLayout>
            <Hero />
            <CallToAction />
            {/* Next sections go here */}
        </GuestLayout>
    );
}
