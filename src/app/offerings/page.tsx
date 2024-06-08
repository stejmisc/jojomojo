import Image from 'next/image';

export default function Offerings() {
    return <div className="flex flex-col w-screen font-serif justify-center items-center">
        <div className="text-4xl m-2">Heritage Offerings</div>
        <div className="text-xl text-gray-600 w-1/2 text-center">Indian heritage offers immersive experinces in areas such as traditonal food, crafts, textiles, uniques places, spirituality and many more. Dive deeper to plan a meaningfultravel to India!</div>
        <div className='grid grid-cols-3 gap-24 mt-16 items-start'>
            <div className='flex flex-col w-56 justify-center items-center'>
                <Image src="/offerings1.webp" width={150} height={150} alt="rad 1" />
                <div className="font-semibold text-xl underline text-center mt-8" >Research & Writing</div>
                <div className="text-xl text-gray-600 text-center my-4">I write on Indian cultural heritage on themes ranging from traditional food, crafts, textiles, museums, travel & tourism.</div>
            </div>
            <div className='flex flex-col w-56 justify-center items-center'>
                <Image src="/offerings2.webp" width={150} height={150} alt="rad 2" />
                <div className="font-semibold text-xl underline text-center mt-8" >Heritage Curation</div>
                <div className="text-xl text-gray-600 text-center my-4">I curate and lead heritage walks, museum tours, crafts walks and excel at curating cultural experiences for all age groups</div>
            </div>
            <div className='flex flex-col w-56 justify-center items-center'>
                <Image src="/offerings3.webp" width={150} height={150} alt="rad 3" />
                <div className="font-semibold text-xl underline text-center mt-8" >Program implementation</div>
                <div className="text-xl text-gray-600 text-center my-4">I have led large scale social impact programs including projects on education, agriculture, and many welfare sector initiatives.</div>
            </div>
        </div>

    </div>
}
