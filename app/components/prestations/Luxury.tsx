import React from "react";
import PrestationCard from "./PrestationCard";

const Luxury = () => (
  <PrestationCard
    title="Prestations de Luxe"
    description="Services haut de gamme, partenaires d'exception et expériences uniques pour une clientèle privilégiée qui recherche l'excellence dans chaque détail et un service irréprochable."
    iconName="gem"
    color="cyan"
    features={[
      "Accès à des lieux exclusifs et privés",
      "Service de conciergerie de luxe 24/7",
      "Expériences gastronomiques avec chefs étoilés",
      "Transport privé (hélicoptère, jet, limousine)",
      "Service de sécurité discret et professionnel",
      "Coordination complète et assistance personnelle dédiée"
    ]}
    ctaText="Découvrir nos services exclusifs"
    ctaLink="/contact?service=luxury"
    imageUrl="/images/luxury.jpg"
    reversed={true}
  />
);

export default Luxury;
