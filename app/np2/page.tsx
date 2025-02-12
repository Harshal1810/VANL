"use client"

import "./np2.css";
import Surprise from "../util/confetti";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function page() {

    const router = useRouter();

    const handleSubmit = async () => {
       
        router.push("/np");
      };

    return (
        <div>
            <div>
                <section className="success">
                    
                    <Image src="/NP2.jpg" alt="cutiee" width={500} height={450} className="yay-img" priority />
                    <p id="yay">Arehhh ab to has bhi rahi ho😍..maan gayi lagta hai😎</p>
                </section>
            </div>
        </div>
    )
}