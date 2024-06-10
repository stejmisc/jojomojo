"use client";

import { Galleria } from 'primereact/galleria';
import Image from 'next/image';

const images = [
    { url: '/glimpse1.jpeg', alt: 'Glimpse 1' },
    { url: '/glimpse2.png', alt: 'Glimpse 2' },
    { url: '/glimpse3.png', alt: 'Glimpse 3' },
    { url: '/glimpse4.png', alt: 'Glimpse 4' },
    { url: '/glimpse5.png', alt: 'Glimpse 5' },
    { url: '/glimpse6.png', alt: 'Glimpse 6' },
];

const itemTemplate = (item: any) => {
    return (
        <div className="h-[300px] md:h-[400px] lg:h-[600px] w-full md:w-[400px] lg:w-[600px] p-4 m-2 md:m-4" style={{ position: 'relative' }}>
            <Image
                src={item.url}
                layout="fill"
                objectFit="cover"
                alt={item.alt}
            />
        </div>
    );
};

const thumbnailTemplate = (item: any) => {
    return (
        <div className="h-16 w-16 md:h-24 md:w-24" style={{ position: 'relative' }}>
            <Image
                src={item.url}
                layout="fill"
                objectFit="cover"
                alt={item.alt}
            />
        </div>
    );
};

export default function Glimpse() {
    return (
        <div className="flex justify-center items-center text-2xl md:text-4xl">
            <Galleria
                value={images}
                numVisible={3}
                responsiveOptions={[
                    {
                        breakpoint: '1024px',
                        numVisible: 3
                    },
                    {
                        breakpoint: '768px',
                        numVisible: 2
                    },
                    {
                        breakpoint: '560px',
                        numVisible: 1
                    }
                ]}
                style={{ maxWidth: '100%' }}
                item={itemTemplate}
                thumbnail={thumbnailTemplate}
            />
        </div>
    );
}
