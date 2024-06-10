"use client"

import Image from 'next/image';
import { SetStateAction, useEffect, useState } from 'react';

const images = [
    '/carousel1.jpg',
    '/carousel2.jpeg',
    '/carousel3.jpeg',
    '/carousel4.jpeg',
    '/carousel5.png',
];

// Shuffle the array
function shuffleArray(array: Array<string>): Array<string> {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export default function Collage() {
    const [shuffledImages, setShuffledImages] = useState<Array<string>>([]);

    useEffect(() => {
        setShuffledImages(shuffleArray(images));
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 p-2 gap-2">
            <div className='grid grid-rows-2 gap-2'>
                <div className="relative w-full h-48 col-span-1">
                    <Image
                        src={shuffledImages[0]}
                        alt={`Gallery Image ${shuffledImages[0]}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
                <div className="relative w-full h-48 col-span-1">
                    <Image
                        src={shuffledImages[1]}
                        alt={`Gallery Image ${shuffledImages[1]}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
            </div>

            <div className="relative w-full h-48 md:h-96 col-span-2">
                <Image
                    src={shuffledImages[2]}
                    alt={`Gallery Image ${shuffledImages[2]}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <div className='grid grid-rows-2 gap-2'>
                <div className="relative w-full h-48 col-span-1">
                    <Image
                        src={shuffledImages[3]}
                        alt={`Gallery Image ${shuffledImages[3]}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
                <div className="relative w-full h-48 col-span-1">
                    <Image
                        src={shuffledImages[4]}
                        alt={`Gallery Image ${shuffledImages[4]}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
            </div>

        </div>
    );
}
