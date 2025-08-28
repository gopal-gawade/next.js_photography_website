"use client";

import { Alice } from "next/font/google";
import { useRouter } from "next/navigation";
import React from "react";

const alice = Alice({
    weight: "400",
    subsets: ["latin"],
});

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="p-6 mx-auto text-md leading-loose w-full flex flex-col items-center justify-center min-h-[100vh]">
            <h1 className={`${alice.className} text-[#800000] text-3xl md:text-4xl text-center p-6 mt-16`}>
                Page Not Found
            </h1>

            <button
                className={`${alice.className} cursor-pointer p-2 m-2 bg-[#800000] text-white transition-all duration-150 hover:scale-105`}
                onClick={() => router.push("/")}
            >
                BACK TO HOME
            </button>
        </div>
    );
}
