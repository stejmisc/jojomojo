import Image from 'next/image';
import Link from 'next/link';

export default function Body() {
    return (
        <div className="flex flex-col md:flex-row h-auto md:h-[512px] w-full justify-between">
            <div className="relative w-full h-64 md:h-full md:w-2/3">
                <Image
                    src="/home.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="Home Image"
                    unoptimized
                />
            </div>
            <div className="flex justify-center items-center w-full md:w-1/3 bg-amber-200 p-4 md:p-6 lg:p-8">
                <div className="text-center md:text-left">
                    <strong>Namaste</strong>! Welcome to my page :)
                    <br />
                    <br />
                    My name is <em>Jyoti</em>. I talk about Indian cultural heritage and sustainable systems, focusing on traditional food, local crafts, festivals, villages, and unique places in India.
                    <br />
                    <br />
                    <Link href="/my-story"><strong>Join me</strong> in my explorations!
                    </Link>
                </div>
            </div>
        </div>
    )
}
