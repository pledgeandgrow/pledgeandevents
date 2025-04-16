import AboutHero from "../components/about/AboutHero";
import AboutTeam from "../components/about/AboutTeam";
import AboutValues from "../components/about/AboutValues";
import AboutCta from "../components/about/AboutCta";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <AboutHero />
      <AboutTeam />
      <AboutValues />
      <AboutCta />
    </div>
  );
}
