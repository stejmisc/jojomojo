import Image from 'next/image';

export default function Offerings() {
    return (
        <div className="flex flex-col w-full font-serif items-center">
            <div className='w-full lg:w-3/5 flex flex-col justify-center items-center'>
                <div className="text-4xl m-2">Heritage Offerings</div>
                <div className="text-xl text-gray-600 w-full sm:w-3/4 lg:w-1/2 text-center px-4">
                    Indian heritage offers immersive experiences in areas such as traditional food, crafts, textiles, unique places, spirituality, and many more. Dive deeper to plan a meaningful travel to India!
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 items-start w-full px-4'>
                    <Card
                        src="/offerings1.webp"
                        alt="Research & Writing"
                        title="Research & Writing"
                        description="I write on Indian cultural heritage on themes ranging from traditional food, crafts, textiles, museums, travel & tourism."
                    />
                    <Card
                        src="/offerings2.webp"
                        alt="Heritage Curation"
                        title="Heritage Curation"
                        description="I curate and lead heritage walks, museum tours, crafts walks and excel at curating cultural experiences for all age groups."
                    />
                    <Card
                        src="/offerings3.webp"
                        alt="Program implementation"
                        title="Program Implementation"
                        description="I have led large scale social impact programs including projects on education, agriculture, and many welfare sector initiatives."
                    />
                </div>
            </div>
        </div>
    );
}

const Card = ({ src, alt, title, description }: { src: string, alt: string, title: string, description: string }) => (
    <div className='flex flex-col justify-center items-center'>
        <div className='relative w-36 h-36 sm:w-44 sm:h-44 lg:w-56 lg:h-56'>
            <Image src={src} width={150} height={150} alt={alt} className='rounded-full' />
        </div>
        <div className="font-semibold text-xl underline text-center mt-8">{title}</div>
        <div className="text-xl text-gray-600 text-center my-4 px-2">{description}</div>
    </div>
);
