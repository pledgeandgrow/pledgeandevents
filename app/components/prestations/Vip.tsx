import React from "react";
import PrestationCard from "./PrestationCard";

const Vip = () => (
  <PrestationCard
    title="Événements VIP"
    description="Privatisations exclusives, soirées de prestige et événements sur invitation pour une clientèle exigeante qui recherche l'excellence et la discrétion absolue."
    iconName="crown"
    color="amber"
    features={[
      "Privatisation de lieux d'exception (châteaux, yachts, villas)",
      "Service de sécurité et confidentialité garantie",
      "Expériences sur-mesure et personnalisation totale",
      "Conciergerie VIP 24/7 pendant tout l'événement",
      "Coordination avec les services de transport privés",
      "Accès à notre réseau exclusif de prestataires premium"
    ]}
    ctaText="Demander un devis confidentiel"
    ctaLink="/contact?service=vip"
    imageUrl="/images/vip-event.jpg"
  />
);

export default Vip;
