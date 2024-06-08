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
        <div className='h-[412px] flex flex-col justify-center items-center w-full bg-amber-200'>
            <div className='text-2xl font-semibold mb-8'>{`${testimonial.name}, ${testimonial.country}`}</div>
            <div className='italic font-serif font-IBMPlex w-[512px] text-3xl'>{testimonial.description}</div>
        </div>
    );
};

export default function Testimonials() {
    return (<div className="h-[512px] w-full flex justify-center items-center">
        <Carousel
            value={testimonials}
            numVisible={1}
            numScroll={1}
            responsiveOptions={responsiveOptions}
            itemTemplate={productTemplate}
            style={{ width: '100%' }}
            showIndicators
            showNavigators
        />
    </div>
    )
}
