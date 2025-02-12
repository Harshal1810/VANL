"use client"

import "./np.css";
import Surprise from "../util/confetti";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function page() {

    const router = useRouter();

    const handleSubmit = async () => {
       
        router.push("/np2");
      };

    return (
        <div>
            <div>
                <section className="success">
                    
                    <Image src="/NP1.jpg" alt="cutiee" width={570} height={400} className="yay-img" priority />
                    <p id="yay">Stop blushingg...🙃</p>
                    <button onClick={handleSubmit} className="button">Close</button>
                </section>
            </div>
        </div>
    )
}