import React from "react";
import PrestationCard from "./PrestationCard";

const Party = () => (
  <PrestationCard
    title="Soirées & Fêtes"
    description="Création et animation de soirées privées, fêtes d'entreprise ou anniversaires dans une ambiance festive et raffinée qui laissera des souvenirs inoubliables à tous vos invités."
    iconName="glassCheers"
    color="purple"
    features={[
      "Thématisation complète et décoration immersive",
      "Sélection des meilleurs DJs et artistes",
      "Animations et performances sur-mesure",
      "Cocktails signature et offres de restauration personnalisées",
      "Mise en lumière et effets spéciaux",
      "Service photo/vidéo pour immortaliser l'événement"
    ]}
    ctaText="Créer votre soirée"
    ctaLink="/contact?service=party"
    imageUrl="/images/party.jpg"
    reversed={true}
  />
);

export default Party;
