import React from "react";
import PrestationCard from "./PrestationCard";

const Wedding = () => (
  <PrestationCard
    title="Mariages de rêve"
    description="Organisation complète de mariages sur-mesure, du choix du lieu à la coordination du jour J, pour une célébration inoubliable qui reflète votre personnalité et vos rêves."
    iconName="heart"
    color="pink"
    features={[
      "Recherche et sélection de lieux d'exception",
      "Coordination complète du jour J avec équipe dédiée",
      "Décoration et scénographie personnalisées",
      "Sélection des meilleurs prestataires (traiteur, photographe, DJ)",
      "Gestion des invités et hébergement",
      "Création d'expériences uniques pour les mariés et leurs invités"
    ]}
    ctaText="Planifier votre mariage"
    ctaLink="/contact?service=wedding"
    imageUrl="/images/wedding.jpg"
  />
);

export default Wedding;
