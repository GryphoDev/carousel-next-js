"use client";

import styles from "./page.module.css";
import Card from "./components/card/card";
import data from "@/app/data/cards.json";
import { useRef } from "react";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Taille d'une carte
      if (direction === "left") {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className={styles.galleryContainer}>
      {/* Bouton Gauche */}
      <button className={styles.arrowLeft} onClick={() => scroll("left")}>
        ◀
      </button>

      {/* Conteneur des cartes */}
      <div className={styles.gallery} ref={scrollRef}>
        {data.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>

      {/* Bouton Droite */}
      <button className={styles.arrowRight} onClick={() => scroll("right")}>
        ▶
      </button>
    </div>
  );
}
