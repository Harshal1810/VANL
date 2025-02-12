"use client"

import Surprise from "../util/confetti";
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./bye.css";

export default function page() {

    const router = useRouter();

    const handleSubmit = async () => {
       
        router.push("/np");
      };

    return (
        <div>
            <div>
                <section className="success">
                    <Surprise />
                    <Image src="/celebrate.gif" alt="two animals holding hearts and smiling gif" width={570} height={300} className="yay-img" priority />
                    <p id="yay">💖 Themksss! 💖</p>
                    <button onClick={handleSubmit} className="button">Exit</button>
                </section>
            </div>
        </div>
    )
}