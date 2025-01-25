"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  images: string[];
}

export default function Carousel({ images }: Props) {
  const [deck, setDeck] = useState(images);
  const [spin, setSpin] = useState(false);
  const [moveToBack, setMoveToBack] = useState(false);

  // automatically shuffle the deck every 6 seconds
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     shuffle();
  //   }, 6000);
  //   return () => clearInterval(timer);
  // });

  const shuffle = () => {
    // so the animation cannot be interrupted
    if (spin) return;
    // start the card shuffling
    setSpin(true);
    // wait the duration of the animation to stop the shuffling
    setTimeout(() => {
      setSpin(false);
      // move the card to the back of the z index when it re-joins the pile
      setMoveToBack(true);
    }, 1000);
    // wait twice the duration of the animation for the card to be back at origin before officially reordering the deck
    setTimeout(() => {
      setDeck((prevDeck) => {
        const last = prevDeck.slice(-1);
        return [...last, ...prevDeck.slice(0, -1)];
      });
      setMoveToBack(false);
    }, 2000);
  };

  const isTopCard = (index: number) => {
    return index === deck.length - 1;
  };

  return (
    <div>
      {deck.map((image, index) => (
        <Image
          key={index}
          src={image}
          fill={true}
          className={`object-cover transition-transform duration-1000 ${isTopCard(index) && spin ? "translate-x-3/4 rotate-360" : ""} ${isTopCard(index) && moveToBack ? "-z-10" : ""}`}
          alt={`polaroid sketch #${index}`}
          onClick={isTopCard(index) ? shuffle : undefined}
        />
      ))}
    </div>
  );
}
