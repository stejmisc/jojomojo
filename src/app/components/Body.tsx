import Image from 'next/image';

export default function Body() {
    return (
        <div className="h-[512px] w-full flex justify-between">
            <div className="w-2/3" style={{ position: "relative" }}>
                <Image
                    src="/home.webp"
                    layout='fill'
                    objectFit='cover'
                    alt="Home Image" />
            </div>
            <div className="flex justify-between items-center w-1/3 bg-amber-200">
                <span className="p-24">
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
