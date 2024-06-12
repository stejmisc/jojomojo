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
        <Carousel arrows>
            {images.map((image, index) => {
                return (
                    <div key={index} className='relative h-96 md:h-[512px] w-96 lg:w-screen lg:h-screen'>
                        <Image
                            src={image.url}
                            alt={image.alt}
                            objectFit='cover'
                            layout='fill'
                            className='p-8'
                        />
                    </div>
                );
            })
            }
        </Carousel>
    </div>
);

export default Glimpse;