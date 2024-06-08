import Image from 'next/image';
import Link from 'next/link';

export default function ResearchAndWritings() {
    return <div className="flex flex-col w-screen font-serif justify-center items-center">
        <div className="text-4xl m-2">Research & Writings</div>
        <div className="text-xl text-gray-600 w-1/2 text-center">I write about Indian cultural heritage and knowledge across areas like food systems, crafts, textiles, and heritage practices. Some of the writings can be seen below</div>
        <div className='grid grid-cols-3 gap-24 mt-16 items-start'>
            <div className='flex flex-col w-56 justify-center items-center'>
                <Image src="/rad1.webp" width={150} height={150} className='rounded-full' alt="rad 1" />
                <Link className="font-semibold text-xl underline text-center" href={'https://www.unesco-ichcap.org/board.es?mid=a10301000000&bid=A105&act=view&list_no=13606&tag=&nPage='} target='_blank'>Craft initiatives by the Government of India</Link>
                <div className="text-xl text-gray-600 text-center my-4">The book contains ten good practices from five Asia-Pacific countries (Nepal, Vietnam, Uzbekistan, India, and Kyrgyzstan) selected through the 2022 international contest, Good Practices in Policies and Activities on Safeguarding and Promoting Traditional Crafts for Sustainable Development in Communities.</div>
            </div>
            <div className='flex flex-col w-56 justify-center items-center'>
                <Image src="/rad2.webp" width={150} height={150} className='rounded-full' alt="rad 2" />
                <Link className="font-semibold text-xl underline text-center" href={'https://www.unesco-ichcap.org/board.es?mid=a10501020000&bid=A112&act=view&list_no=14103&tag=&nPage=1'} target='_blank'>Basket weaving in Sonipat, Haryana</Link>
                <div className="text-xl text-gray-600 text-center my-4">Basket weaving is one of the longest surviving crafts in india particulalry rural spaces. The article focuses on the craft of basket-making undertaken by the members of Self Help Groups, functioning in Tanda village of Rai block, Sonipat district, Haryana.</div>
            </div>
            <div className='flex flex-col w-56 justify-center items-center'>
                <Image src="/rad3.webp" width={150} height={150} className='rounded-full' alt="rad 3" />
                <Link className="font-semibold text-xl underline text-center" href={'https://www.unesco-ichcap.org/board.es?mid=a10501020000&bid=A112&act=view&list_no=20157&tag=&nPage=1'} target='_blank'>Embroidery by Mutva Community, Kutch, Gujarat</Link>
                <div className="text-xl text-gray-600 text-center my-4">Kutch, located in the western state of Gujarat, India, is known for its rich craftsmanship. One such distinct group is the Mutva community, which has traveled from Sindh, Pakistan, and settled in the Banni region of Kutch almost 400 years ago. It is a pastoral community that currently lives in 8 villages, all close to the India- Pakistan border.</div>
            </div>
            <div className='flex flex-col w-56 justify-center items-center'>
                <Image src="/rad4.webp" width={150} height={150} className='rounded-full' alt="rad 4" />
                <Link className="font-semibold text-xl underline text-center" href={'https://ichcourier.unesco-ichcap.org/understanding-mata-ni-pachhedi-paintings-from-the-chitara-community/'} target='_blank'>Textile craft from Amhedabad, Gujarat</Link>
                <div className="text-xl text-gray-600 text-center my-4">The article documents the work of the Chitara community, settled in Ahmedabad, Gujarat, known for their textile art form called Mata ni Pachedi.</div>
            </div>
            <div className='flex flex-col w-56 justify-center items-center'>
                <Image src="/rad5.webp" width={150} height={150} className='rounded-full' alt="rad 5" />
                <div className="font-semibold text-xl underline text-center">Pastoral community in Kutch. Gujarat</div>
                <div className="text-xl text-gray-600 text-center my-4">Kutch is the largest district located in the western state of Gujarat, India. It is home to several distinct traditional crafts, communities, and indigenous knowledge systems. One of the most unique pastoral communities found in Kutch is the Fakirani Jats. It is one of the four subgroups of the Jat community found across the region’s grasslands.</div>
            </div>
            <div className='flex flex-col w-56 justify-center items-center'>
                <Image src="/rad6.webp" width={150} height={150} className='rounded-full' alt="rad 6" />
                <Link className="font-semibold text-xl underline text-center" href={'https://www.unesco-ichcap.org/board.es?mid=a10501020000&bid=A112&act=view&list_no=14090&tag=&nPage=1'} target='_blank'>Festival of Onam, Kerala</Link>
                <div className="text-xl text-gray-600 text-center my-4">Onam is a major harvest festival celebrated in the Indian state of Kerala. The 10-day Onam festival marks the onset of the first month according to the Malayalam calendar called Chingam and generally occurs in the months of August or September every year in India.</div>
            </div>
        </div>

    </div>
}
