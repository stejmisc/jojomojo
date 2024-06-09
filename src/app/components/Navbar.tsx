import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="p-4">
            <ul className="flex justify-between text-[1vw] space-x-4">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/my-story">My Story</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/research-and-writings">Research & Writings</Link></li>
                <li><Link href="/offerings">Offerings</Link></li>
            </ul>
        </nav>
    )
}
