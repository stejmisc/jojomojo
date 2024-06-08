"use client"

import { Galleria } from 'primereact/galleria';
import Image from 'next/image';

const images = [
    { url: '/carousel1.jpg', alt: 'Carousel 1' },
    { url: '/carousel2.jpeg', alt: 'Carousel 2' },
    { url: '/carousel3.jpeg', alt: 'Carousel 3' },
    { url: '/carousel4.jpeg', alt: 'Carousel 4' },
    { url: '/carousel5.png', alt: 'Carousel 5' },
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

export default function ImageGallery() {
    return (
        <div className=" flex justify-center items-center text-4xl p-16">
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
