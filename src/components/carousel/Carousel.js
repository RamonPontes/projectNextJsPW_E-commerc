'use client'

import { useState } from "react"
import "./style.css"
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function Carousel({ params }) {
    const imgs = [
        "https://cea.vtexassets.com/assets/vtex.file-manager-graphql/images/281fb368-6161-4179-a964-5d03c787b67f___7b575e32b29797d7503c835c050ccb00.jpg",
        "https://cea.vtexassets.com/assets/vtex.file-manager-graphql/images/1b9e5cf8-a949-40d9-8f23-81e0d4ffbc4b___5d7b66ddbd3ea39a0a8357e6a7a241a9.png",
        "https://cea.vtexassets.com/assets/vtex.file-manager-graphql/images/4467aebd-68ce-405d-af3e-64bf8cc4900b___da3f8b7ddc8099ad2bcad0f714e964ab.jpg"
    ]

    const [imgInDisplay, setImgInDisplay] = useState(0)

    return (
        <div className="carousel-container">
            <ChevronLeft className="carousel-chevrons" size={50} style={{ left: '30px' }} onClick={() => {
                setImgInDisplay(prev => prev > 0 ? prev - 1 : imgs.length - 1)
            }} />
            <img src={imgs[imgInDisplay]} alt={`Carousel image ${imgInDisplay + 1}`} />
            <ChevronRight className="carousel-chevrons" size={50} style={{ right: '30px' }} onClick={() => {
                setImgInDisplay(prev => prev < imgs.length - 1 ? prev + 1 : 0)
            }} />

            <div className="carousel-pointers">
                {imgs.map((_, index) => (
                    <div
                        key={index}
                        className={`pointer ${imgInDisplay === index ? 'active' : ''}`}
                        onClick={() => setImgInDisplay(index)}
                    />
                ))}
            </div>
        </div>
    )
}
