import React from "react";
import { Alice } from "next/font/google";
import ServiceContainer from "@/src/components/service/ServiceContainer";

const alice = Alice({
    weight: "400",
    subsets: ["latin"],
});

export default function Services() {
    const arr = [
        {
            id: 1,
            link: "/photography/pre-wedding",
            name: "Pre-wedding",
            image: "/IMG-20250530-WA0148.jpg",
        },
        {
            id: 2,
            link: "/photography/engagement",
            name: "Engagement",
            image: "/IMG-20250530-WA0054.jpg",
        },
        {
            id: 3,
            link: "/photography/wedding",
            name: "Wedding",
            image: "/IMG-20250530-WA0060.jpg",
        },
        {
            id: 4,
            link: "/photography/baby-shower",
            name: "Baby Shower",
            image: "/IMG-20250530-WA0028.jpg",
        },
        {
            id: 5,
            link: "/photography/maternity",
            name: "Maternity",
            image: "/IMG-20250530-WA0172.jpg",
        },
        {
            id: 6,
            link: "/photography/baby-birthday",
            name: "Baby & Birthday",
            image: "/IMG-20250530-WA0192.jpg",
        },
    ];

    return (
        <div
            className={`${alice.className} p-6 mx-auto text-md leading-loose max-w-[1200px] h-full flex flex-col justify-center gap-6 py-6`}
        >
            <h1
                className={`text-[#800000] text-3xl md:text-4xl text-center p-6 mt-16`}
            >
                Services
            </h1>

            <div>
                <div className="flex flex-row flex-wrap items-center justify-center gap-2">
                    {arr.map((v, i) => {
                        return (
                            <ServiceContainer v={v} i={i} key={i}/>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
