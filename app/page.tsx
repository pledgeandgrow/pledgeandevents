import HomeHero from "./components/home/HomeHero";
import EventTypes from "./components/home/EventTypes";
import AboutUs from "./components/home/AboutUs";
import ContactCTA from "./components/home/ContactCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeHero />
      <EventTypes />
      <AboutUs />
      <ContactCTA />
    </div>
  );
}
