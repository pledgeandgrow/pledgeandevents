import React from "react";
import PrestationCard from "./PrestationCard";

const Corporate = () => (
  <PrestationCard
    title="Événements Corporate"
    description="Organisation de lancements de produits, team buildings et événements d'entreprise pour renforcer la cohésion d'équipe, valoriser votre marque et créer un impact durable auprès de vos collaborateurs et clients."
    iconName="building"
    color="emerald"
    features={[
      "Lancements de produits et showrooms sur-mesure",
      "Team buildings innovants et activités de renforcement d'équipe",
      "Cérémonies de remise de prix et galas d'entreprise",
      "Workshops et séminaires de stratégie",
      "Activation de marque et événements promotionnels",
      "Reporting et mesure d'impact ROI"
    ]}
    ctaText="Planifier votre événement corporate"
    ctaLink="/contact?service=corporate"
    imageUrl="/images/corporate.jpg"
  />
);

export default Corporate;
