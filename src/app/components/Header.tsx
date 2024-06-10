import Navbar from "./Navbar";
import Image from 'next/image';

export default function Header() {
    return (
        <div className="h-56 flex justify-center items-center md:h-48 md:flex-col m-4">
            <div className="h-48 border-2 border-black w-full md:w-3/5 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-x-2 md:space-y-0">
                <Image src="/header.webp" width={150} height={150} alt="Header Image" className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36" />
                <div className="flex flex-col items-center md:items-start">
                    <div className="font-snell text-[2vw] md:text-[5vw] lg:text-[5vw] text-orange-900 text-center md:text-left">the phoolish girl</div>
                    <Navbar />
                </div>
            </div>
        </div>
    )
}
