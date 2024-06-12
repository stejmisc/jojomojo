import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
    return (
        <div className="flex flex-col w-full font-serif items-center">
            <div className='w-full lg:w-3/5 flex flex-col justify-center items-center'>
                <div className="text-4xl m-2">Past Projects</div>
                <div className="text-xl text-gray-600">My professional journey has been diverse. Some of the projects can be found below:</div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-16 items-start'>
                    <div className='flex flex-col justify-center items-center'>
                        <Image src="/project1.webp" width={150} height={150} className='rounded-full' alt="Project 1" />
                        <Link className="font-semibold text-xl underline text-center" href={'https://cultureqisse.substack.com/p/2024-wellbeing-journey-food-is-medicine'} target='_blank'>Indic researcher (Ancient Indian Knowledge Systems)</Link>
                        <div className="text-xl text-gray-600 text-center my-4">As an Indic researcher, I have been studying ancient Indian texts including Ayurveda, Yogic traditions, Cultural traditions around art.</div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <Image src="/project2.webp" width={150} height={150} className='rounded-full' alt="Project 2" />
                        <Link className="font-semibold text-xl underline text-center" href={'https://www.unesco-ichcap.org/board.es?mid=a10501020000&bid=A112&act=view&list_no=14103&tag=&nPage=1'} target='_blank'>{`Chief Minister's Good Governance Associate (CMGGA), Haryana`}</Link>
                        <div className="text-xl text-gray-600 text-center my-4">{`As a CMGGA, I worked on 15+ large-scale programs in Haryana's Sonipat district working closely with the district administration.`}</div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <Image src="/project3.webp" width={150} height={150} className='rounded-full' alt="Project 3" />
                        <Link className="font-semibold text-xl underline text-center" href={'https://cultureqisse.substack.com/p/2019-a-walk-through-the-city-ahmedabad'} target='_blank'>Heritage Walk Leader, Ahmedabad & Delhi</Link>
                        <div className="text-xl text-gray-600 text-center my-4">I have enjoyed curating heritage walks in the world heritage city- Ahmedabad to various historical sites.</div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <Image src="/project4.webp" width={150} height={150} className='rounded-full' alt="Project 4" />
                        <Link className="font-semibold text-xl underline text-center" href={'https://cultureqisse.substack.com/p/2019-a-heritage-walk-in-the-city'} target='_blank'>Heritage Crafts Curator, Ahmedabad</Link>
                        <div className="text-xl text-gray-600 text-center my-4">As a heritage manager, I have worked with numerous crafts communities and designed programs for the sustenance of traditional crafts.</div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <Image src="/project5.webp" width={150} height={150} className='rounded-full' alt="Project 5" />
                        <Link className="font-semibold text-xl underline text-center" href={'https://cultureqisse.substack.com/p/2017-learning-from-change-a-year'} target='_blank'>Social Worker, Germany</Link>
                        <div className="text-xl text-gray-600 text-center my-4">I have been a recipient of an International Exchange Program in Germany. I had the opportunity to support educational interventions for refugee groups.</div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <Image src="/project6.webp" width={150} height={150} className='rounded-full' alt="Project 6" />
                        <Link className="font-semibold text-xl underline text-center" href={'https://cultureqisse.substack.com/p/2014-a-circle-of-learning-smile-in'} target='_blank'>Rural Volunteer, Rajasthan</Link>
                        <div className="text-xl text-gray-600 text-center my-4">A rural internship in Jhiri village, Rajasthan has been a turning point in my life. Many surprises and learning, it has been an enriching experience.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
