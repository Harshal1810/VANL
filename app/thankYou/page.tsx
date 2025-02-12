"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    const audio = new Audio("/make_you_mine.mp3");
    audio.loop = true;
    audio.play().catch((err) => console.log("Autoplay blocked:", err));

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div>
       <section className="success">
      <p id="yay">💖 Yipee! 💖</p>

      <Image 
        src="/thanks.png" 
        alt="Thank You" 
        width={300} 
        height={300} 
        className="rounded-lg shadow-lg mb-4"
      />

      <p id="yay2">"Don't go yet!</p>

      <Link href='/selectDate'>
            <button
              className="yes-button button-base button-green"
              
            >
              Click Me Hehee
            </button>
          </Link>
      </section>
    </div>
  );
}
