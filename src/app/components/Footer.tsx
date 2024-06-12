import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="flex justify-center items-center text-center p-8">
            <Link href="/" className="text-xl md:text-2xl lg:text-4xl">
                Heritage ~ Culture ~ Travel ~ Sustainable living
            </Link>
        </div>
    )
}
