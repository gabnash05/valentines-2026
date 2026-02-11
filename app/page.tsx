import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  weight: "700",
  subsets: ["latin"],
});

export default function Home() {
    const items = [
        {
            title: "My Nurse",
            date: "September 8, 2024",
            image:
                "/images/7.jpg",
            className: "absolute top-10 left-[20%] rotate-[-5deg] z-1",
        },
        {
            title: "First Anniversary",
            date: "June 2, 2024",
            image:
                "/images/6.jpeg",
            className: "absolute top-40 left-[25%] rotate-[-7deg] z-1",
        },
        {
            title: "City Night and Drinks",
            date: "March 28, 2024",
            image:
                "/images/5.jpeg",
            className: "absolute top-5 left-[40%] rotate-[8deg] z-1",
        },
        {
            title: "Si Albert and si Einstein",
            date: "June 8, 2023",
            image:
                "/images/4.jpeg",
            className: "absolute top-32 left-[55%] rotate-[10deg] z-1",
        },
        {
            title: "Two Trees!!",
            date: "January 2, 2025",
            image:
                "/images/3.jpg",
            className: "absolute top-20 right-[35%] rotate-[2deg] z-1",
        },
        {
            title: "2nd Anniversary Part 2",
            date: "June 2, 2025",
            image:
                "/images/2.jpeg",
            className: "absolute top-24 left-[45%] rotate-[-7deg] z-1",
        },
        {
            title: "2nd Anniversary Part 1",
            date: "June 2, 2025",
            image:
                "/images/1.jpg",
            className: "absolute top-20 left-[35%] rotate-[4deg] z-1",
        },
    ];
    
    return (
        <>
            <div className="fixed inset-0 -z-50 overflow-hidden">
                <BackgroundGradientAnimation
                    gradientBackgroundStart="rgb(255, 240, 245)"  // Light pink
                    gradientBackgroundEnd="rgb(255, 228, 230)"    // Light rose
                    firstColor="255, 182, 193"    // Light pink
                    secondColor="255, 105, 180"   // Hot pink
                    thirdColor="219, 112, 147"    // Pale violet red
                    fourthColor="255, 192, 203"   // Pink
                    fifthColor="255, 160, 122"    // Light salmon
                    pointerColor="255, 20, 147"   // Deep pink
                    size="80%"
                    blendingValue="overlay"
                    interactive={true}
                    containerClassName="fixed inset-0 z-2"
                >
                    <div className="absolute inset-0" />
                </BackgroundGradientAnimation>

                <div className="absolute inset-0 bg-linear-to-b from-white/10 via-transparent to-white/5" />
            </div>

            <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">                
                <div className="relative w-full h-screen">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                        <TextHoverEffect 
                            text="Will You Be My Valentine?" 
                        />
                        <span className={`${dancingScript.className} absolute top-40 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center font-black tracking-tighter text-6xl lg:text-6xl text-rose-300`}>
                            Again... hehe
                        </span>
                    </div>
                </div>
                {items.map((item) => (
                    <DraggableCardBody className={item.className} key={item.image}>
                        <img
                            src={item.image}
                            alt={item.title}
                            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
                        />
                        <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                            {item.title}
                        </h3>
                        <h5 className="text-center text-sm text-neutral-500 dark:text-neutral-400">
                            {item.date}
                        </h5>
                    </DraggableCardBody>
                ))}
            </DraggableCardContainer>
        </>
    );
}