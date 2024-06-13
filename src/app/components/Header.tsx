"use client"

import { useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="flex flex-col md:flex-col justify-center items-center m-4 md:h-48">
            <div className="border-2 border-black w-full md:w-3/5 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2 p-4">
                <Link href="/" onClick={() => setIsOpen(false)}><Image src="/header.webp" width={150} height={150} alt="Header Image" className="w-12 h-12 md:w-32 md:h-32 lg:w-36 lg:h-36" unoptimized /></Link>
                <div className="flex flex-col items-center md:items-start">
                    <Link href="/" onClick={() => setIsOpen(false)}> <div className="font-snell text-3xl md:text-[5vw] lg:text-[4vw] p-2 text-orange-900 text-center md:text-left font-bold lg:mb-8">
                        the phoolish girl
                    </div>
                    </Link>
                    <nav className="flex justify-between items-center">
                        <ul className={`md:flex ${isOpen ? "block" : "hidden"} mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-8`}>
                            <li><Link href="/" onClick={() => setIsOpen(false)}>home</Link></li>
                            <li><Link href="/my-story" onClick={() => setIsOpen(false)}>my story</Link></li>
                            <li><Link href="/projects" onClick={() => setIsOpen(false)}>projects</Link></li>
                            <li><Link href="/research-and-writings" onClick={() => setIsOpen(false)}>research & writings</Link></li>
                            <li><Link href="/offerings" onClick={() => setIsOpen(false)}>offerings</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="md:hidden absolute right-7 top-4">
                    <button onClick={toggleMenu} className="block">
                        {isOpen ? (
                            <MenuUnfoldOutlined className="text-4xl" />
                        ) : (
                            <MenuFoldOutlined className="text-4xl" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}
