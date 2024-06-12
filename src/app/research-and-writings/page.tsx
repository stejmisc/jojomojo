import Image from 'next/image';
import Link from 'next/link';

export default function ResearchAndWritings() {
    return (
        <div className="flex flex-col w-full font-serif items-center">
            <div className='w-full lg:w-3/5 flex flex-col justify-center items-center'>
                <div className="text-4xl m-2">Research & Writings</div>
                <div className="text-xl text-gray-600 w-full sm:w-3/4 lg:w-1/2 text-center px-4">
                    I write about Indian cultural heritage and knowledge across areas like food systems, crafts, textiles, and heritage practices. Some of the writings can be seen below
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 items-start w-full px-4'>
                    <Card
                        src="/rad1.webp"
                        link="https://www.unesco-ichcap.org/board.es?mid=a10301000000&bid=A105&act=view&list_no=13606&tag=&nPage="
                        title="Craft initiatives by the Government of India"
                        description="The book contains ten good practices from five Asia-Pacific countries (Nepal, Vietnam, Uzbekistan, India, and Kyrgyzstan) selected through the 2022 international contest, Good Practices in Policies and Activities on Safeguarding and Promoting Traditional Crafts for Sustainable Development in Communities."
                    />
                    <Card
                        src="/rad2.webp"
                        link="https://www.unesco-ichcap.org/board.es?mid=a10501020000&bid=A112&act=view&list_no=14103&tag=&nPage=1"
                        title="Basket weaving in Sonipat, Haryana"
                        description="Basket weaving is one of the longest surviving crafts in India particularly rural spaces. The article focuses on the craft of basket-making undertaken by the members of Self Help Groups, functioning in Tanda village of Rai block, Sonipat district, Haryana."
                    />
                    <Card
                        src="/rad3.webp"
                        link="https://www.unesco-ichcap.org/board.es?mid=a10501020000&bid=A112&act=view&list_no=20157&tag=&nPage=1"
                        title="Embroidery by Mutva Community, Kutch, Gujarat"
                        description="Kutch, located in the western state of Gujarat, India, is known for its rich craftsmanship. One such distinct group is the Mutva community, which has traveled from Sindh, Pakistan, and settled in the Banni region of Kutch almost 400 years ago."
                    />
                    <Card
                        src="/rad4.webp"
                        link="https://ichcourier.unesco-ichcap.org/understanding-mata-ni-pachhedi-paintings-from-the-chitara-community/"
                        title="Textile craft from Amhedabad, Gujarat"
                        description="The article documents the work of the Chitara community, settled in Ahmedabad, Gujarat, known for their textile art form called Mata ni Pachedi."
                    />
                    <Card
                        src="/rad5.webp"
                        title="Pastoral community in Kutch, Gujarat"
                        description="Kutch is the largest district located in the western state of Gujarat, India. It is home to several distinct traditional crafts, communities, and indigenous knowledge systems."
                    />
                    <Card
                        src="/rad6.webp"
                        link="https://www.unesco-ichcap.org/board.es?mid=a10501020000&bid=A112&act=view&list_no=14090&tag=&nPage=1"
                        title="Festival of Onam, Kerala"
                        description="Onam is a major harvest festival celebrated in the Indian state of Kerala. The 10-day Onam festival marks the onset of the first month according to the Malayalam calendar called Chingam and generally occurs in the months of August or September every year in India."
                    />
                </div>
            </div>
        </div>
    );
}

const Card = ({ src, link, title, description }: { src: string, link?: string, title: string, description: string }) => (
    <div className='flex flex-col justify-center items-center'>
        <div className='relative w-36 h-36 sm:w-44 sm:h-44 lg:w-56 lg:h-56'>
            <Image src={src} layout='fill' objectFit='cover' className='rounded-full' alt={title} />
        </div>
        <Link href={link || '/'} target='_blank' className="font-semibold text-xl underline text-center mt-2">{title}</Link>
        <div className="text-xl text-gray-600 text-center mt-2 px-2">{description}</div>
    </div>
);
