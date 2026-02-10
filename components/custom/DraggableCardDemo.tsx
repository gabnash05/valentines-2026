import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

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

            <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
                <div className="fixed inset-0 z-1 overflow-hidden bg-red-100">
                    <BackgroundRippleEffect 
                        rows={15}
                        cols={27}
                        cellSize={56}
                    />
                </div>
                
                <div className="relative w-full h-screen">
                    <p
                        className={`${dancingScript.className} z-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        max-w-2xl text-center text-8xl font-extrabold text-red-600 tracking-wide drop-shadow-lg`}
                    >
                        Will You Be My Valentine?
                    </p>
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