import Image from 'next/image';

const images = [
    '/carousel1.jpg',
    '/carousel2.jpeg',
    '/carousel3.jpeg',
    '/carousel4.jpeg',
    '/carousel5.png',
];

export default function Collage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 p-2">
            <div className="grid grid-rows-2 gap-2">
                <div className="relative w-full h-64 md:h-96">
                    <Image
                        src={images[0]}
                        alt={`Gallery Image 1`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                        unoptimized
                    />
                </div>
                <div className="relative w-full h-64 md:h-96">
                    <Image
                        src={images[1]}
                        alt={`Gallery Image 2`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                        unoptimized
                    />
                </div>
            </div>
            <div className="relative w-full h-64 md:h-[768px] col-span-1 md:col-span-2">
                <Image
                    src={images[2]}
                    alt={`Gallery Image 3`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    unoptimized
                />
            </div>
            <div className="grid grid-rows-2 gap-2">
                <div className="relative w-full h-64 md:h-96">
                    <Image
                        src={images[3]}
                        alt={`Gallery Image 4`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                        unoptimized
                    />
                </div>
                <div className="relative w-full h-64 md:h-96">
                    <Image
                        src={images[4]}
                        alt={`Gallery Image 5`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                        unoptimized
                    />
                </div>
            </div>
        </div>
    );
}
