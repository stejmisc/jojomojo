"use client"

import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';

const responsiveOptions = [
    {
        breakpoint: '1400px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
];

const testimonials = [
    {
        name: 'Pallavi Jain',
        country: 'India',
        description: `Jyoti has a very deep understanding of the history and culture of the place. She helped me a lot during my visit to Ahmedabad. She suggested me all the not to miss places and best places to eat.`
    },
    {
        name: 'Sarathy',
        country: 'United States',
        description: `She's one of the best. Was very professional and prompt in responding, easy conversatioalist, loads of knowledge on History and very passionate about Heritage. Highly recommend her.`
    },
]

const productTemplate = (testimonial: any) => {
    return (
        <div className='h-[512px] w-full flex flex-col justify-center items-center p-4 md:p-8'>
            <div className='text-lg md:text-2xl font-semibold mb-16 text-center'>{`${testimonial.name}, ${testimonial.country}`}</div>
            <div className='italic font-serif w-full md:w-[768px] text-base md:text-3xl text-center'>{testimonial.description}</div>
        </div>
    );
};

export default function Testimonials() {
    return (
        <div className="flex justify-center items-center py-8 bg-amber-200 m-4">
            <Carousel
                value={testimonials}
                numVisible={1}
                numScroll={1}
                responsiveOptions={responsiveOptions}
                itemTemplate={productTemplate}
                style={{ width: '60%' }}
                showIndicators
                showNavigators
            />
        </div>
    )
}
