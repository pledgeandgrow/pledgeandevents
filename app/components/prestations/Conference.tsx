import React from "react";
import PrestationCard from "./PrestationCard";

const Conference = () => (
  <PrestationCard
    title="Conférences & Séminaires"
    description="Organisation professionnelle de conférences, séminaires et événements corporate sur mesure, avec une attention particulière portée à l'expérience des participants et à l'impact de votre message."
    iconName="microphone"
    color="blue"
    features={[
      "Sélection de lieux adaptés à vos besoins spécifiques",
      "Gestion complète de la logistique et des équipements techniques",
      "Coordination des intervenants et des programmes",
      "Solutions d'enregistrement et de diffusion en direct",
      "Espaces networking et ateliers interactifs",
      "Reporting post-événement et analyse des retombées"
    ]}
    ctaText="Organiser votre événement"
    ctaLink="/contact?service=conference"
    imageUrl="/images/conference.jpg"
    reversed={true}
  />
);

export default Conference;
