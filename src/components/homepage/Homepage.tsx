import React from "react";
import Carousel from "../carousel/Carousel";
import Blog from "../blog/Blog";
import Introduction from "../introduction/Introduction";
import Films from "../films/Films";
import Gallery from "../gallery/Gallery";
import { PT_Sans } from "next/font/google";
import { ImageKitProvider } from "@imagekit/next";

const pt_sans = PT_Sans({
    weight: "400",
    subsets: ["latin"],
});

export default function Homepage() {
    return (
        <div className={`${pt_sans.className}`}>
            <Carousel />

            <ImageKitProvider urlEndpoint={process.env.IMAGEKIT}>
                <Blog />
            </ImageKitProvider>

            <Introduction />

            <Gallery />

            <Films />
        </div>
    );
}
