import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <ul className="flex justify-between italic text-[1vw] space-x-8">
                <li><Link href="/">home</Link></li>
                <li><Link href="/my-story">my story</Link></li>
                <li><Link href="/projects">projects</Link></li>
                <li><Link href="/research-and-writings">research & writings</Link></li>
                <li><Link href="/offerings">offerings</Link></li>
            </ul>
        </nav>
    )
}
