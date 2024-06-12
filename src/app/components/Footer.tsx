import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="flex justify-center items-center text-center p-4 md:p-8">
            <Link className="text-lg md:text-xl lg:text-2xl xl:text-4xl" href="/">
                Heritage ~ Culture ~ Travel ~ Sustainable living
            </Link>
        </div>
    )
}
