
import Navbar from "./Navbar";
import Image from 'next/image';

export default function Header() {
    return (
        <div className="h-56 flex justify-center items-center">
            <div className="h-48 border-2 border-black w-1/2 flex justify-center items-center space-x-2">
                <Image src="/header.webp" width={150} height={150} alt="Header Image" />
                <div className="flex-row">
                    <div className="font-snell text-8xl text-orange-900">the phoolish girl</div>
                    <Navbar />
                </div>
            </div>
        </div>
    )
}


