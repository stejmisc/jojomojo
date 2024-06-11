import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <ul className="flex justify-between italic text-[2vw] space-x-2 md:text-[1vw] md:space-x-8">
                <li><Link href="/">home</Link></li>
                <li><Link href="/my-story">my story</Link></li>
                <li><Link href="/projects">projects</Link></li>
                <li><Link href="/research-and-writings">research & writings</Link></li>
                <li><Link href="/offerings">offerings</Link></li>
            </ul>
        </nav>
    )
}
