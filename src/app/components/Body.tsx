import Image from 'next/image';

export default function Body() {
    return (
        <div className="h-[512px] w-full flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-2/3 h-64 md:h-full relative">
                <Image
                    src="/home.webp"
                    layout='fill'
                    objectFit='cover'
                    alt="Home Image" />
            </div>
            <div className="flex justify-center items-center w-full md:w-1/3 bg-amber-200 p-6 md:p-8 lg:p-12">
                <span className="text-center md:text-left">
                    <strong>Namaste</strong>! Welcome to my page :)
                    <br />
                    <br />
                    My name is <strong>Jyoti</strong>.
                    <br />
                    I talk about Indian cultural heritage and sustainable systems, focusing on traditional food, local crafts, festivals, villages, and unique places in India.
                    <br />
                    <br />
                    <strong>Join me</strong> in my explorations!
                </span>
            </div>
        </div>
    )
}
