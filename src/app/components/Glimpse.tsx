import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

const images = [
    { url: '/glimpse1.jpeg', alt: 'Glimpse 1' },
    { url: '/glimpse2.png', alt: 'Glimpse 2' },
    { url: '/glimpse3.png', alt: 'Glimpse 3' },
    { url: '/glimpse4.png', alt: 'Glimpse 4' },
    { url: '/glimpse5.png', alt: 'Glimpse 5' },
    { url: '/glimpse6.png', alt: 'Glimpse 6' },
];

const Glimpse: React.FC = () => (
    <div className='w-full lg:w-3/5 bg-amber-200'>
        <Carousel arrows infinite autoplay autoplaySpeed={2000}>
            {images.map((image, index) => (
                <div key={index} className='relative h-64 md:h-96 lg:h-[512px] w-full'>
                    <Image
                        src={image.url}
                        alt={image.alt}
                        layout='fill'
                        objectFit='cover'
                        unoptimized
                    />
                </div>
            ))}
        </Carousel>
    </div>
);

export default Glimpse;
