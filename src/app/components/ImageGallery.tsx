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
        <div className="grid grid-cols-1 md:grid-cols-4 p-2 gap-2">
            <div className='grid grid-rows-2 gap-2'>
                <div className="relative w-full h-96 col-span-1">
                    <Image
                        src={images[0]}
                        alt={`Gallery Image ${images[0]}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                        unoptimized
                    />
                </div>
                <div className="relative w-full h-96 col-span-1">
                    <Image
                        src={images[1]}
                        alt={`Gallery Image ${images[1]}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                        unoptimized
                    />
                </div>
            </div>

            <div className="relative w-full h-96 md:h-[768px] col-span-2">
                <Image
                    src={images[2]}
                    alt={`Gallery Image ${images[2]}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    unoptimized
                />
            </div>
            <div className='grid grid-rows-2 gap-2'>
                <div className="relative w-full h-96 col-span-1">
                    <Image
                        src={images[3]}
                        alt={`Gallery Image ${images[3]}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                        unoptimized
                    />
                </div>
                <div className="relative w-full h-96 col-span-1">
                    <Image
                        src={images[4]}
                        alt={`Gallery Image ${images[4]}`}
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
