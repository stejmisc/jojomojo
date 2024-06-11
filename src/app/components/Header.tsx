import Navbar from "./Navbar";
import Image from 'next/image';

export default function Header() {
    return (
        <div className="flex justify-center items-center md:h-48 md:flex-col m-4">
            <div className="border-2 border-black w-full md:w-3/5 flex justify-center items-center space-y-2 md:space-x-2 md:space-y-0 p-4">
                <Image src="/header.webp" width={150} height={150} alt="Header Image" className="w-12 h-12 md:w-32 md:h-32 lg:w-36 lg:h-36" />
                <div className="flex flex-col items-center">
                    <div className="font-snell text-3xl md:text-[5vw] lg:text-[5vw] p-2 text-orange-900 text-center md:text-left font-bold lg:mb-8">the phoolish girl</div>
                    <Navbar />
                </div>
            </div>
        </div>
    )
}
