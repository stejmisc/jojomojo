"use client"

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
    return <div className={'h-[600px] w-[600px] p-4 m-4'} style={{ position: "relative" }}>
        <Image
            src={item.url}
            layout='fill'
            objectFit='cover'
            alt={item.alt}
        />
    </div>
}

const thumbnailTemplate = (item: any) => {
    return <div className={'h-24 w-24'} style={{ position: "relative" }}>
        <Image
            src={item.url}
            layout='fill'
            objectFit='cover'
            alt={item.alt}
        />
    </div>
}

export default function Glimpse() {
    return (
        <div className="flex justify-center items-center text-4xl">
            <Galleria
                value={images}
                numVisible={5}
                style={{ maxWidth: '640px' }}
                item={itemTemplate}
                thumbnail={thumbnailTemplate}
            />
        </div>
    )
}
